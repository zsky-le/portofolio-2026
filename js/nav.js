/* ============================================
   NAV.JS
   Handles:
   - Scroll wheel navigation
   - Mobile swipe navigation
   - Progress bar updates
   - Carousel drag support
============================================ */

const slideOrder = [
  's1','s2','s3','s4',
  's_da','s_uiux','s_bp',
  's_kpi','s_cluster','s_elt','s_feat','s_network',
  's_scope','s_relive','s_sp4n',
  's_bpmn','s_sap',
  's_intern','s_volunteer'
];

/* Main linear navigation order */
const linearOrder = [
  's1',
  's2',
  's3',
  's4',
  's_da',
  's_uiux',
  's_bp',
  's_intern',
  's_volunteer'
];

let currentSlide = 's1';
let isAnimating  = false;

/* ============================================
   MAIN SLIDE NAVIGATION
============================================ */

function goTo(targetId) {

  if (
    isAnimating ||
    targetId === currentSlide
  ) return;

  if (!document.getElementById(targetId)) return;

  isAnimating = true;

  const from =
    document.getElementById(currentSlide);

  const to =
    document.getElementById(targetId);

  /* EXIT CURRENT SLIDE */
  from.classList.add('exit-up');

  /* PREPARE NEXT SLIDE */
  to.style.transform     = 'translateY(100%)';
  to.style.opacity       = '0';
  to.style.pointerEvents = 'none';

  requestAnimationFrame(() => {

    to.classList.add('active');

    to.style.transform = '';
    to.style.opacity   = '';

    setTimeout(() => {

      from.classList.remove(
        'active',
        'exit-up'
      );

      to.style.pointerEvents = '';

      currentSlide = targetId;

      isAnimating = false;

      updateProgress();

    }, 650);

  });

}

/* ============================================
   PROGRESS BAR
============================================ */

function updateProgress() {

  const idx =
    slideOrder.indexOf(currentSlide);

  const pct =
    idx < 0
      ? 0
      : Math.round(
          (idx / (slideOrder.length - 1)) * 100
        );

  document.getElementById('progress')
    .style.width = pct + '%';

}

/* ============================================
   SCROLL / WHEEL NAVIGATION
============================================ */

let wheelLocked = false;

document.addEventListener('wheel', e => {

  if (wheelLocked || isAnimating) return;

  const idx =
    linearOrder.indexOf(currentSlide);

  /* SCROLL DOWN → NEXT */
  if (
    e.deltaY > 40 &&
    idx < linearOrder.length - 1
  ) {

    wheelLocked = true;

    goTo(linearOrder[idx + 1]);

  }

  /* SCROLL UP → PREVIOUS */
  if (
    e.deltaY < -40 &&
    idx > 0
  ) {

    wheelLocked = true;

    goTo(linearOrder[idx - 1]);

  }

  setTimeout(() => {

    wheelLocked = false;

  }, 900);

}, { passive: true });

/* ============================================
   MOBILE SWIPE NAVIGATION
============================================ */

let touchStartY = 0;
let touchStartX = 0;

document.addEventListener('touchstart', e => {
  touchStartY = e.touches[0].clientY;
  touchStartX = e.touches[0].clientX;
}, { passive: true });

document.addEventListener('touchend', e => {

  const touchEndY = e.changedTouches[0].clientY;
  const touchEndX = e.changedTouches[0].clientX;

  const diffY = touchStartY - touchEndY;
  const diffX = Math.abs(touchStartX - touchEndX);

  /* ignore if too short, or if it's mostly horizontal (carousel drag) */
  if (Math.abs(diffY) < 270) return;
  if (diffX > Math.abs(diffY) * 0.5) return;

  const idx = linearOrder.indexOf(currentSlide);

  /* SWIPE UP → NEXT */
  if (diffY > 0 && idx < linearOrder.length - 1) {
    goTo(linearOrder[idx + 1]);
  }

  /* SWIPE DOWN → PREVIOUS */
  if (diffY < 0 && idx > 0) {
    goTo(linearOrder[idx - 1]);
  }

}, { passive: true });

/* ============================================
   GRAY RECT CLICK HANDLER
============================================ */

function handleGrayClick(e, linkUrl) {

  if (!linkUrl || linkUrl === '#') {

    e.preventDefault();

    alert(
      '🔗 Link coming soon! Add your URL in data/data.js'
    );

  }

}

/* ═══════════════════════════════════════════
   CAROUSEL — drag to scroll + dot indicator
═══════════════════════════════════════════ */

/* Click a dot → scroll card into view */

function scrollToCard(carouselId, index) {

  const wrapper =
    document.getElementById(carouselId);

  if (!wrapper) return;

  const card =
    wrapper
      .querySelector('.cards-track')
      .children[index];

  if (!card) return;

  wrapper.scrollTo({
    left: card.offsetLeft - 16,
    behavior: 'smooth'
  });

}

/* ============================================
   UPDATE DOTS
============================================ */

function updateDots(carouselId, dotsId) {

  const wrapper =
    document.getElementById(carouselId);

  const dots =
    document.querySelectorAll(
      `#${dotsId} .carousel-dot`
    );

  if (!wrapper || !dots.length) return;

  const cards =
    wrapper.querySelector('.cards-track')
      .children;

  const scrollX =
    wrapper.scrollLeft;

  let closest = 0;
  let minDist = Infinity;

  Array.from(cards).forEach((card, i) => {

    const dist =
      Math.abs(card.offsetLeft - scrollX);

    if (dist < minDist) {

      minDist = dist;
      closest = i;

    }

  });

  dots.forEach((d, i) => {

    d.classList.toggle(
      'active',
      i === closest
    );

  });

}

/* ============================================
   DRAG TO SCROLL
============================================ */

function initDragScroll(carouselId) {

  const wrapper =
    document.getElementById(carouselId);

  if (!wrapper) return;

  let isDown  = false;
  let startX  = 0;
  let scrollL = 0;

  wrapper.addEventListener('mousedown', e => {

    isDown = true;

    startX =
      e.pageX - wrapper.offsetLeft;

    scrollL =
      wrapper.scrollLeft;

    wrapper.classList.add('dragging');

  });

  wrapper.addEventListener('mouseleave', () => {

    isDown = false;

    wrapper.classList.remove('dragging');

  });

  wrapper.addEventListener('mouseup', () => {

    isDown = false;

    wrapper.classList.remove('dragging');

  });

  wrapper.addEventListener('mousemove', e => {

    if (!isDown) return;

    e.preventDefault();

    const x =
      e.pageX - wrapper.offsetLeft;

    const walk =
      (x - startX) * 1.5;

    wrapper.scrollLeft =
      scrollL - walk;

  });

}

/* ============================================
   INIT ALL CAROUSELS
============================================ */

function initAllCarousels() {

  const carousels = [

    {
      car: 'car-da',
      dots: 'dots-da'
    },

    {
      car: 'car-uiux',
      dots: 'dots-uiux'
    },

    {
      car: 'car-bp',
      dots: 'dots-bp'
    }

  ];

  carousels.forEach(({ car, dots }) => {

    initDragScroll(car);

    const wrapper =
      document.getElementById(car);

    if (wrapper) {

      wrapper.addEventListener(
        'scroll',
        () => updateDots(car, dots),
        { passive: true }
      );

    }

  });

}

/* ============================================
   DOM READY
============================================ */

document.addEventListener('DOMContentLoaded', () => {

  updateProgress();

  setTimeout(
    initAllCarousels,
    100
  );

});