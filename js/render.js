/* ============================================
   RENDER.JS
   Reads DATA from data.js and builds all
   slide HTML dynamically. You rarely need to
   touch this file — edit data.js instead.
   ============================================ */

/* ── Shared HTML snippets ── */
const backBtn = (target) => `
  <div class="back-btn" onclick="goTo('${target}')">
    <div class="back-circle">
      <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
    </div>
    <span class="back-label">back to home</span>
  </div>`;

const sectionNav = (tabs) => `
  <nav class="section-nav">
    ${tabs.map(t => `<a class="${t.active ? 'active' : ''}" onclick="goTo('${t.id}')">${t.label}</a>`).join('')}
  </nav>`;

const mainNav = (active) => sectionNav([
  { id:'s3',          label:'Skills',               active: active==='skills'    },
  { id:'s4',          label:'Project & Achievement', active: active==='projects'  },
  { id:'s_intern',    label:'Intern Experience',     active: active==='intern'    },
  { id:'s_volunteer', label:'Volunteer Experience',  active: active==='volunteer' },
]);

const projNav = (active) => sectionNav([
  { id:'s_da',   label:'Data Analyst',    active: active==='da'   },
  { id:'s_uiux', label:'UI/UX Design',    active: active==='uiux' },
  { id:'s_bp',   label:'Business Process',active: active==='bp'   },
]);

/* ── Tool icon helper ── */
const toolIcon = (t) => `
  <div class="tool-item">
    <div class="tool-icon" style="background:${t.photo ? 'transparent' : t.bg};${t.style||''}">
      ${t.photo
        ? `<img src="${t.photo}" alt="${t.name}" style="width:100%;height:100%;object-fit:cover;border-radius:14px;" onerror="this.parentElement.style.background='${t.bg}';this.outerHTML='${t.icon}'">`
        : t.icon
      }
    </div>
    <span class="tool-name">${t.name}</span>
  </div>`;

/* ── Project card (carousel) ── */
const projCard = (p) => `
  <div class="proj-card ${p.featured ? 'featured' : ''}"
       ${p.id ? `onclick="goTo('${p.id}')"` : ''}
       ${p.photo ? `style="background-image:url('${p.photo}');background-size:cover;background-position:center;"` : ''}>
    <div class="proj-card-img-bg"></div>
    <div class="proj-card-title">${p.title}</div>
    ${p.id ? '<div class="play-arrow-md" style="position:absolute;bottom:1em;right:1em"></div>' : ''}
  </div>`;

/* ── Detail slide builder ── */
const detailSlide = ({ slideId, navHtml, backTarget, project }) => `
  <div class="slide detail-slide" id="${slideId}">
    ${navHtml}
    <div class="detail-card">

      <!-- LEFT: image card -->
      <div class="detail-left">
        <p class="detail-category">${project.category}</p>
        <div class="detail-proj-card"
             ${project.photo ? `style="background-image:url('${project.photo}');background-size:cover;background-position:center;"` : ''}>
          <div class="detail-proj-card-overlay"></div>
          <div class="detail-proj-title" style="position:relative;z-index:1">${project.title}</div>
          <div class="play-arrow-md" style="position:absolute;bottom:1em;right:1em;z-index:1"></div>
        </div>
      </div>

      <!-- RIGHT: info column -->
      <div class="detail-right">

        <!-- badges -->
        <div class="detail-badges-wrap">
          ${project.badges.map(b => `<div class="badge detail-badge">${b}</div>`).join('')}
        </div>

        <!-- description -->
        <p class="detail-desc">${project.desc}</p>

        <!-- preview image -->
        <div class="detail-preview-wrap">
          <a class="detail-preview-img"
             href="${project.link || '#'}"
             target="_blank"
             onclick="handleGrayClick(event,'${project.link || '#'}')"
             ${project.detailPhoto
               ? `style="background-image:url('${project.detailPhoto}');background-size:cover;background-position:center top;background-repeat:no-repeat;"`
               : ''}
          ></a>
          <a class="detail-cta-btn"
             href="${project.link || '#'}"
             target="_blank"
             onclick="handleGrayClick(event,'${project.link || '#'}')">
            <span class="detail-cta-icon">▶</span>
            <em>${project.linkLabel || 'Click to learn further about this project.'}</em>
          </a>
        </div>

      </div>
    </div>
    ${backBtn(backTarget)}
  </div>`;

/* ══════════════════════════════
   BUILD ALL SLIDES
══════════════════════════════ */
function buildSlides() {
  const d = DATA;
  const app = document.getElementById('app');

  /* ── Slide 1: Intro ── */
  app.innerHTML += `
    <div class="slide active" id="s1">
      <div class="s1-text">
        Hi, are <em>you looking</em> for new <em>Candidate</em> ?<br>
        if <em>yes</em>, please let me <em>Introduce</em> myself
      </div>
      <div class="s1-cta" onclick="goTo('s2')">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        Play Playlist
      </div>
    </div>`;

  /* ── Slide 2: Home ── */
  app.innerHTML += `
    <div class="slide" id="s2">
      <div class="s2-inner">
      <div class="s2-left">
        <div class="s2-left-text">
          <span class="s2-small">Welcome! this playlist was made by,</span>
          <h1 class="s2-name">${d.personal.name}</h1>
          <p class="s2-role">${d.personal.roles}</p>
        <div class="s2-action-btns">
          <a class="s2-btn s2-btn-cv"
             href="${d.personal.cvLink}"
             target="_blank"
             rel="noopener noreferrer">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>
            View CV
          </a>
          <a class="s2-btn s2-btn-contact"
             href="${d.personal.contactLink && d.personal.contactLink !== '#' ? d.personal.contactLink : 'mailto:' + d.personal.email}"
             target="_blank"
             rel="noopener noreferrer">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Contact
          </a>
        </div>
        </div>
        <img class="s2-photo" src="${d.personal.photo}" alt="${d.personal.name}" />
      </div>
      <div class="s2-right">
        <div class="s2-bio-card">${d.personal.bio}</div>
        <div class="s2-playlist-card">
          <div class="s2-playlist-label"><em>List</em> of Sections:</div>
          <div class="s2-track" onclick="goTo('s3')">
            <span class="s2-track-name">1. Skills</span>
            <div class="play-arrow-sm"></div>
          </div>
          <div class="s2-track" onclick="goTo('s4')">
            <span class="s2-track-name">2. Project &amp; <em>Achievement</em></span>
            <div class="play-arrow-sm"></div>
          </div>
          <div class="s2-track" onclick="goTo('s_intern')">
            <span class="s2-track-name">3. Intern <em>Experience</em></span>
            <div class="play-arrow-sm"></div>
          </div>
          <div class="s2-track" onclick="goTo('s_volunteer')">
            <span class="s2-track-name">4. Volunteer <em>Experience</em></span>
            <div class="play-arrow-sm"></div>
          </div>
        </div>
      </div>
      </div><!-- /.s2-inner -->
    </div>`;

  /* ── Slide 3: Skills ── */
  app.innerHTML += `
    <div class="slide" id="s3">
      ${mainNav('skills')}
      <div class="skills-card">
        <h2 class="skills-title"><em>Technical</em> Skills</h2>
        <p class="skills-section-label">Code, Data and Automation tools</p>
        <div class="tools-grid">${d.skills.codeTools.map(toolIcon).join('')}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5em">
          <div>
            <p class="skills-section-label">Basic tools</p>
            <div class="tools-grid">${d.skills.basicTools.map(toolIcon).join('')}</div>
          </div>
          <div>
            <p class="skills-section-label">Design and Editing tools</p>
            <div class="tools-grid">${d.skills.designTools.map(toolIcon).join('')}</div>
          </div>
        </div>
        <div class="prog-lang">
          <div class="prog-lang-label">Programming<br>Language</div>
          <div class="prog-lang-text">${d.skills.programmingLanguages}</div>
        </div>
      </div>
      ${backBtn('s2')}
    </div>`;

  /* ── Slide 4: Project Hub ── */
  app.innerHTML += `
    <div class="slide" id="s4">
      ${mainNav('projects')}
      <div class="proj-hub-card">
        <h2 class="proj-hub-title"><em>Project</em> and <em>Achievement</em></h2>
        <p class="proj-hub-sub">I'm a Data Analyst, UI/UX Design and Business Process enthusiast. What do you want to see first?</p>
        <div class="proj-hub-grid">
          ${d.projectCategories.map(c => `
            <div class="proj-hub-item" onclick="goTo('${c.id}')">
              <img src="${c.img}" alt="${c.label}" />
              <div class="proj-hub-overlay">
                <div class="proj-hub-overlay-title">${c.label.replace('\n','<br>')}</div>
              </div>
              <div class="play-arrow-lg" style="position:absolute;bottom:1em;right:1em"></div>
            </div>`).join('')}
        </div>
        <p class="section-cta"><em>Click</em> to know <em>further</em></p>
      </div>
      ${backBtn('s2')}
    </div>`;

  /* ── Data Analyst List ── */
  app.innerHTML += `
    <div class="slide sub-slide" id="s_da">
      ${projNav('da')}
      <div class="sub-card">
        <h2 class="sub-title"><em>Data</em> Analyst</h2>
        <p class="sub-subtitle">${d.dataAnalyst.subtitle}</p>
        <div class="carousel-wrapper" id="car-da">
          <div class="cards-track">${d.dataAnalyst.projects.map(projCard).join('')}</div>
        </div>
        <div class="carousel-dots" id="dots-da">
          ${d.dataAnalyst.projects.map((_,i) => `<div class="carousel-dot ${i===0?'active':''}" onclick="scrollToCard('car-da',${i})"></div>`).join('')}
        </div>
      </div>
      ${backBtn('s4')}
    </div>`;

  /* ── UI/UX List ── */
  app.innerHTML += `
    <div class="slide sub-slide" id="s_uiux">
      ${projNav('uiux')}
      <div class="sub-card">
        <h2 class="sub-title"><em>UI/UX</em> Design</h2>
        <p class="sub-subtitle">${d.uiux.subtitle}</p>
        <div class="carousel-wrapper" id="car-uiux">
          <div class="cards-track">${d.uiux.projects.map(projCard).join('')}</div>
        </div>
        <div class="carousel-dots" id="dots-uiux">
          ${d.uiux.projects.map((_,i) => `<div class="carousel-dot ${i===0?'active':''}" onclick="scrollToCard('car-uiux',${i})"></div>`).join('')}
        </div>
      </div>
      ${backBtn('s4')}
    </div>`;

  /* ── Business Process List ── */
  app.innerHTML += `
    <div class="slide sub-slide" id="s_bp">
      ${projNav('bp')}
      <div class="sub-card">
        <h2 class="sub-title"><em>Business</em> Process</h2>
        <p class="sub-subtitle">${d.business.subtitle}</p>
        <div class="carousel-wrapper" id="car-bp">
          <div class="cards-track">${d.business.projects.map(projCard).join('')}</div>
        </div>
        <div class="carousel-dots" id="dots-bp">
          ${d.business.projects.map((_,i) => `<div class="carousel-dot ${i===0?'active':''}" onclick="scrollToCard('car-bp',${i})"></div>`).join('')}
        </div>
      </div>
      ${backBtn('s4')}
    </div>`;

  /* ── Data Analyst Detail Slides ── */
  const daNavTabs = (activeId) => sectionNav(
    d.dataAnalyst.projects.map(p => ({ id: p.id || '', label: p.id ? p.id.replace('s_','').toUpperCase() : '–', active: p.id === activeId }))
  );
  // Use friendlier labels
  const daNav = (activeId) => sectionNav([
    { id:'s_elt',     label:'ELT Automation',  active: activeId==='s_elt'     },
    { id:'s_cluster', label:'Data Clustering',  active: activeId==='s_cluster' },
    { id:'s_kpi',     label:'KPI Dashboard',    active: activeId==='s_kpi'     },
    { id:'s_feat',    label:'Feature Selection',active: activeId==='s_feat'    },
    { id:'s_network', label:'Network Analysis', active: activeId==='s_network' },
  ]);

  d.dataAnalyst.projects.forEach(p => {
    if (!p.id) return;
    app.innerHTML += detailSlide({ slideId: p.id, navHtml: daNav(p.id), backTarget: 's_da', project: p });
  });

  /* ── UI/UX Detail Slides ── */
  const uiuxNav = (activeId) => sectionNav([
    { id:'s_relive', label:'Relive',            active: activeId==='s_relive' },
    { id:'s_scope',  label:'SCOPE',             active: activeId==='s_scope'  },
    { id:'s_sp4n',   label:'Redesign SP4NLAPOR',active: activeId==='s_sp4n'   },
  ]);
  d.uiux.projects.forEach(p => {
    app.innerHTML += detailSlide({ slideId: p.id, navHtml: uiuxNav(p.id), backTarget: 's_uiux', project: p });
  });

  /* ── Business Process Detail Slides ── */
  const bpNav = (activeId) => sectionNav([
    { id:'s_bpmn', label:'BPMN 2.0',           active: activeId==='s_bpmn' },
    { id:'s_sap',  label:'SAP SD, MM, PP Module',active: activeId==='s_sap'  },
  ]);
  d.business.projects.forEach(p => {
    if (!p.id) return;
    app.innerHTML += detailSlide({ slideId: p.id, navHtml: bpNav(p.id), backTarget: 's_bp', project: p });
  });

  /* ── Intern Experience ── */
  app.innerHTML += `
    <div class="slide" id="s_intern">
      ${mainNav('intern')}
      <div class="intern-card">
        <a class="intern-gray"
           href="${d.intern.link}"
           target="_blank"
           onclick="handleGrayClick(event,'${d.intern.link}')"
           ${d.intern.photo ? `style="background-image:url('${d.intern.photo}');background-size:cover;background-position:center;"` : ''}>
          <div class="intern-gray-overlay"></div>
          <div class="intern-gray-title" style="position:relative;z-index:1">
            <em>${d.intern.company}</em> ${d.intern.role}
          </div>
        </a>
        <div class="intern-right">
          <h2 class="intern-section-title"><em>Intern</em> Experience</h2>
          <p class="intern-section-sub">${d.intern.subtitle}</p>
          <p class="intern-desc">${d.intern.desc}</p>
        </div>
      </div>
      ${backBtn('s2')}
    </div>`;

  /* ── Volunteer Experience ── */
  app.innerHTML += `
    <div class="slide" id="s_volunteer">
      ${mainNav('volunteer')}
      <div class="vol-card">
        <h2 class="vol-title"><em>Volunteer</em> Experience</h2>
        <p class="vol-sub">${d.volunteer.subtitle}</p>
        <div class="vol-grid">
          ${d.volunteer.roles.map(r => `
            <div class="vol-item ${r.featured ? 'featured' : ''}"
                 ${r.photo ? `style="background-image:url('${r.photo}');background-size:cover;background-position:center;"` : ''}>
              <div class="vol-item-overlay"></div>
              <div class="vol-item-text" style="position:relative;z-index:1">${r.text}</div>
            </div>`).join('')}
        </div>
      </div>
      ${backBtn('s2')}
    </div>`;

  /* Extras */
  app.innerHTML += `<div class="progress-bar" id="progress"></div>`;

  updateProgress();
}

/* Run on page load */
document.addEventListener('DOMContentLoaded', buildSlides);