/* ============================================
   DATA.JS
   ✏️  ALL YOUR CONTENT LIVES HERE.
   Edit text, links, badges, photos — no need
   to touch any other file for content changes.

   📸 HOW TO ADD YOUR PHOTOS:
   For every item that has a `photo` field,
   replace the value with your image path.
   Examples:
     photo: "./assets/kpi-dashboard.png"
     photo: "./assets/scope-app.jpg"
     photo: "https://your-link.com/image.jpg"
   ============================================ */

const DATA = {

  /* ── Personal Info ── */
 personal: {
    name:  "Zaskia Muazatun",
    roles: "Data Analyst – Business Analyst – UI/UX Designer enthusiast",
    bio:   "Hi! You can call me by Zaskia. Information systems student at Institut Teknologi Sepuluh Nopember, Class of 2023. I eager to continuously learn, adapt and take responsibility for every role that i'm in.",
    photo: "foto/zaskia-profile.png",
    /* ↑ Replace with your real photo path */
 
    cvLink:      "https://drive.google.com/file/d/1K_yCsyN3D2vCIUfi2SKvVRDHac7R6R5Q/view?usp=sharing",
    /* ↑ Paste your CV link here, e.g. Google Drive share link */
 
    linkedin:       "#",
    /* ↑ Your LinkedIn profile link */
 
    contactLink: "https://www.linkedin.com/in/zaskia-muazatun/",
    /* ↑ Optional: LinkedIn, WhatsApp, etc. If empty, uses mailto: email above */
  },

  /* ── Skills ── */
  /* 📸 HOW TO ADD TOOL ICONS:
     Replace the `photo` value with your image path.
     If `photo` is set, it shows as the icon image.
     If `photo` is null, it falls back to the text/emoji icon.
     Recommended size: square, at least 128×128px.
     Put files in assets/icons/ folder.
     Examples:
       photo: "./assets/icons/vscode.png"
       photo: "./assets/icons/figma.png"
  */
  skills: {
    codeTools: [
      { name: "VSCode",       photo: "./foto/vscode icon.png"       },
      { name: "RStudio",      photo: "./foto/rstudio icon.png"      },
      { name: "DBeaver",      photo: "./foto/dbeaver icon (1).png"      },
      { name: "PowerBI",      photo: "./foto/powerBI icon.png"      },
      { name: "SAP Signavio", photo: "./foto/sap icon.png"          },
      { name: "Tableau",      photo: "./foto/tableau icon.png"      },
    ],
    basicTools: [
      { name: "MS. Word",  photo: "./foto/word icon.png"  },
      { name: "MS. Excel", photo: "./foto/excel icon.png" },
    ],
    designTools: [
      { name: "Capcut",  photo: "./foto/capcut icon.png" },
      { name: "Figma",   photo: "./foto/figma icon.png"  },
      { name: "Canva",   photo: "./foto/canva icon.png"  },
    ],
    programmingLanguages: "Python, SQL, R, HTML, CSS, JavaScript, Java",
  },

  /* ── Project Hub ── */
  projectCategories: [
    { label: "Data\nAnalyst",     id: "s_da",   img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70" },
    { label: "UI/UX\nDesign",     id: "s_uiux", img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&q=70" },
    { label: "Business\nProcess", id: "s_bp",   img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=70" },
  ],

  /* ── Data Analyst Projects ── */
  dataAnalyst: {
    subtitle: "I only put 5 out of 7 projects.",
    projects: [
      {
        id:       "s_elt",
        title:    "Data Lakehouse <em>ELT Automation</em> using <em>Python and SqL</em>",
        category: "Data Lakehouse",
        badges:   ["Major marks: AB (76 to 85 score)"],
        desc:     "Built an automated ELT process using Python and SQL for AdventureWorks annual reporting data then Architected and optimized data flow to ensure efficient integration and transformation across data layers.",
        link:     "https://github.com/zsky-le/Data-Lakehouse-ELT.git",
        linkLabel:"Click to learn further about this project.",
        featured: false,
        photo:    "foto/data elt cover (1).png",
        detailPhoto: "foto/dlh-elt-github.png",
        /* ↑ paste your screenshot/photo path here */
      },
      {
        id:       "s_cluster",
        title:    "<em>Data Clustering Analysis</em> using <em>K-Means Clustering</em>",
        category: "Data and Diagnostic Analytics",
        badges:   ["Major marks: AB (76 to 85 score)"],
        desc:     "Cleaned and processed a large-scale health dataset from Kaggle using RStudio then applied K-Means clustering to identify health patterns in the Japanese population.",
        link:     "https://drive.google.com/file/d/1x7TnN_jnTe0uXlLVD7ji_86RUdayZvG2/view?usp=sharing",
        linkLabel:"Click to learn further about this project.",
        featured: false,
        photo:    "foto/clustering cover.png",
        detailPhoto: "foto/clustering preview.png", /*ini pake apa ya*/
        /* ↑ paste your screenshot/photo path here */
      },
      {
        id:       "s_kpi",
        title:    "KPI <em>Dashboard</em> using <em>PowerBI</em>",
        category: "Monitoring and Evaluating Information Technology Organization",
        badges:   ["2nd place out of 6 teams in my class for the best project.", "Major marks: AB (76 to 85 score)"],
        desc:     "Created an interactive annual company report dashboard covering financials, and other KPIs using Power BI for improved readability and stakeholder communication.",
        link:     "https://app.powerbi.com/groups/me/reports/5f0fc6a1-f149-42ec-be54-66413dc6afe5/61fbff3e8750934e9b32?experience=power-bi",
        linkLabel:"Click to learn further about this project.",
        featured: true,
        photo:    "foto/KPI cover.png",
        detailPhoto: "foto/kpi preview.png",
        /* ↑ paste your screenshot/photo path here */
      },
      {
        id:       "s_feat",
        title:    "<em>Feature Selection</em> using LightGBM, CatBoost etc.",
        category: "Machine Learning",
        badges:   ["Major marks: AB (76 to 85 score)"],
        desc:     "Applied multiple feature selection techniques using gradient boosting algorithms to identify the most significant predictors in high-dimensional datasets.",
        link:     "https://drive.google.com/file/d/1JAU8uemKPOnB2XvixHvkJ344UtrFxjvJ/view?usp=drive_link",
        linkLabel:"Click to learn further about this project.",
        featured: false,
        photo:    "./foto/feature selction cover.png",
        detailPhoto: "foto/feature selection preview.png",
        /* ↑ paste your screenshot/photo path here */
      },
      {
        id:       "s_network",
        title:    "<em>Network Analysis</em> on Bitcoin Account using <em>RStudio</em>",
        category: "Data Lakehouse",
        badges:   ["One of my internship project at Otoritas Jasa Keuangan NTB"],
        desc:     "Analyze the transactional relationship between two accounts with no direct connection. Focuses on identifying indirect transaction patterns and intermediary accounts.",
        link:     "https://drive.google.com/file/d/120ZzVy2f57mFPrT8LxkTWD4uYyQINBfk/view?usp=drive_link",
        linkLabel:"Click to learn further about this project.",
        featured: false,
        photo:    "foto/crypto cover.png",
        detailPhoto: "foto/network analysis preview.png",
        /* ↑ paste your screenshot/photo path here */
      },
    ],
  },

  /* ── UI/UX Projects ── */
  uiux: {
    subtitle: "1 of my UI/UX Project got the 1st place!",
    projects: [
      {
        id:       "s_relive",
        title:    "<em>Relive:</em> the Digital Well-Being App Prototype using <em>Design Thinking</em>",
        category: "Top 20 Finalist at GEMASTIK 2025",
        badges:   ["Reached the national top 20 out of 400+ teams from universities and institutes across Indonesia."],
        desc:     "A gamification-based digital well-being app prototype focused on healthy device usage habits, grounded in user psychology, using Design Thinking methodology.",
        link:     "https://www.figma.com/proto/ZGfhwLlLrwRcNWb9lsnU9n/Relive-?node-id=1302-7864&t=P7Z2wAJRruPDsG7R-1&scaling=scale-down&content-scaling=fixed&page-id=590%3A3132&starting-point-node-id=1302%3A7878&show-proto-sidebar=1",
        linkLabel:"Click to learn further about this project.",
        featured: false,
        photo:    "foto/relive cover.png",
        detailPhoto: "foto/relive preview.png",
        /* ↑ paste your screenshot/photo path here */
      },
      {
        id:       "s_scope",
        title:    "<em>SCOPE:</em> the Scholarship App Prototype using <em>User-Centered Design</em>",
        category: "1st place at UI/UX Competition",
        badges:   ["1st place at UI/UX Competition held by DTETI UGM"],
        desc:     "A Scholarship-matching application designed to help high school students find the most suitable scholarship programs based on their profile.",
        link:     "https://www.figma.com/proto/NzERmxb0kgEGdNdanKyehk/SCOPE-2025?node-id=621-8084&p=f&t=nyIUXypOyyL9WaYr-1&scaling=scale-down&content-scaling=fixed&page-id=621%3A7227&starting-point-node-id=621%3A8175&show-proto-sidebar=1",
        linkLabel:"Click to learn further about this project.",
        featured: true,
        photo:    "foto/scope cover.png",
        detailPhoto: "foto/scope preview.png",
        /* ↑ paste your screenshot/photo path here */
      },
      {
        id:       "s_sp4n",
        title:    "Redesign <em>SP4NLAPOR</em> web using <em>Design Thinking</em>",
        category: "UI/UX (Desain Pengalaman Pengguna)",
        badges:   ["Major marks: A (86 to 100 score)"],
        desc:     "Designed and prototyped 4 new features based on user needs and usability testing results.",
        link:     "https://www.figma.com/proto/d1VRa2hFoEdyyNF6eBX1Oi/DPP-Kel-4---JalanKita?node-id=545-416&p=f&t=OWKXsUp8VfdQicF6-1&scaling=scale-down&content-scaling=fixed&page-id=545%3A289&starting-point-node-id=545%3A402&show-proto-sidebar=1",
        linkLabel:"Click to learn further about this project.",
        featured: false,
        photo:    "foto/span lapor cover.png",
        detailPhoto: "foto/spanlapor preview.png",
        /* ↑ paste your screenshot/photo path here */
      },
    ],
  },

  /* ── Business Process Projects ── */
  business: {
    subtitle: "There's a lot of Project Manager and Business Process course in my Major",
    projects: [
      {
        id:       null,
        title:    "<em>Decision Support System</em> & Supply Chain Management",
        category: "Currently taking this in 6th Semester",
        badges:   [],
        desc:     "Currently enrolled in this course.",
        link:     null,
        linkLabel:"",
        featured: false,
        photo:    "foto/dss scm cover.png",
        /* ↑ no photo yet — add one when you have it */
      },
      {
        id:       "s_bpmn",
        title:    "<em>BPMN 2.0</em>",
        category: "Business Process Modelling",
        badges:   ["Major Marks: A (86 to 100 score)"],
        desc:     "Making a BPMN (Business Process Modelling Notation) 2.0 based on studycase that given.",
        link:     "#",
        linkLabel:"Click to learn further about this project.",
        featured: true,
        photo:    "foto/mpb cover.png",
        /* ↑ paste your screenshot/photo path here */
      },
      {
        id:       "s_sap",
        title:    "<em>SAP</em> SD, MM, PP Module",
        category: "Business Process Modelling",
        badges:   ["Major Marks: AB (76 to 85 score)"],
        desc:     "Learn about SD, MM and PP module and doing the process based on studycase that given.",
        link:     "https://drive.google.com/file/d/1uEu4VzUfoi56eoa98IudutFikCBH3vmm/view?usp=drive_link",
        linkLabel:"Certificate of participation for this module",
        featured: false,
        photo:    "foto/sertif sap.png",
        /* ↑ paste your screenshot/photo path here */
      },
    ],
  },

  /* ── Intern Experience ── */
  intern: {
    subtitle: "Only one month internship, but i learn a lot of things.",
    company:  "Otoritas Jasa Keuangan NTB",
    role:     "Internship staff – Consumer Education & Protection (EPK)",
    desc:     "Served as front-liner staff for one month; handled data entry and verification of consumer records for SLIK financial history checks, Assisted with consumer consultations related to disputes with financial institutions. Then given extra task to do network analysis about bitcoin transaction.",
    link:     "#",
    photo:    "foto/ojk magang cover.png",
    /* ↑ paste your internship photo path here */
  },

  /* ── Volunteer Experience ── */
  volunteer: {
    subtitle: "A lot of friendship was made, and a lot of lesson learned.",
    roles: [
      {
        text:     "From <em>staff</em> to <em> head of Social Development</em> Himpunan Mahasiswa Sistem Informasi ITS",
        featured: false,
        link:     "https://drive.google.com/file/d/1AI1U6LvdLJE86NHmGS3iNokYfCpGZxQG/view?usp=sharing",
        photo:    "foto/hmsi socdev cover.png",
        /* ↑ paste your volunteer photo path here */
      },
      {
        text:     "<strong><em>Supported the internalization for ITS</em></strong> with ITS Global Engagement Season 15",
        featured: true,
        link:     "https://drive.google.com/file/d/1zHNCxpFcXe0XbjBELTiNQTs9ljCczMxf/view?usp=sharing",
        photo:    "foto/itsge cover.png",
        /* ↑ paste your volunteer photo path here */
      },
      {
        text:     "Giving my love for <em>Branding and Marketing</em> for Ini Lho ITS, UKM EXPO ITS and more...",
        featured: false,
        link:     "https://drive.google.com/file/d/128jlO5dWphScQk4WQ2K1qjk9K0xI7jU9/view?usp=drive_link",
        photo:    "foto/bnmcover.png",
        /* ↑ paste your volunteer photo path here */
      },
    ],
  },

};