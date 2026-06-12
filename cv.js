/**
 * CV Generator — Clean Version
 * jsPDF-based dynamic CV builder
 */

/* ─────────────────────────────────────────────
   THEME CONFIG
──────────────────────────────────────────── */
const CV_THEMES = {
  dark: {
    sidebar: [17,17,17], sidebarTxt:[230,230,230],
    mainBg:[250,250,250], mainTxt:[25,25,25], midTxt:[85,85,85],
    muted:[150,150,150], header:[10,10,10], headerTxt:[255,255,255],
    accent:[200,241,53], rule:[45,45,45], skillTxt:[200,200,200],
  },

  light: {
    sidebar:[235,240,245], sidebarTxt:[30,30,30],
    mainBg:[255,255,255], mainTxt:[20,20,20], midTxt:[75,75,75],
    muted:[130,130,130], header:[25,45,80], headerTxt:[255,255,255],
    accent:[14,100,200], rule:[190,205,220], skillTxt:[55,55,55],
  },

  minimal: {
    sidebar:[245,245,245], sidebarTxt:[30,30,30],
    mainBg:[255,255,255], mainTxt:[20,20,20], midTxt:[85,85,85],
    muted:[155,155,155], header:[255,255,255], headerTxt:[20,20,20],
    accent:[180,30,30], rule:[215,215,215], skillTxt:[60,60,60],
  }
};

/* ─────────────────────────────────────────────
   LANGUAGE CONFIG
──────────────────────────────────────────── */
const CV_LANGS = {
  en: {
    personal: {
      name: "Mohammed Drhoobe",
      role: "Full Stack Developer · OSINT Researcher · Cybersecurity Enthusiast",
      email: "mdrhoobe@gmail.com",
      phone: "+218 91 787 5051",
      location: "Tripoli, Libya",
      dob: "1998",
      nationality: "Libyan",
      github: "github.com/mdrhoobe",
      linkedin: "linkedin.com/in/mdrhoobe",
    },

    labels: {
      personal:"Personal",
      languages:"Languages",
      skills:"Skills",
      interests:"Interests",
      profile:"Profile",
      experience:"Experience",
      education:"Education",
      courses:"Courses & Certifications",
      dob:"Date of Birth",
      nationality:"Nationality",
    },

    profile:
      "IT professional with experience in full-stack development, networking, and OSINT.",

    experience: [
      {
        title:"Technical Support Specialist",
        org:"Libyan Ministry of Interior",
        city:"Tripoli",
        from:"Jan 2015",
        to:"Present",
        bullets:[
          "Resolved hardware and software issues.",
          "Maintained systems and security updates.",
        ],
      },
    ],

    education: [
      {
        degree:"B.Sc. Information Technology",
        org:"Libyan University",
        city:"Benghazi",
        from:"2020",
        to:"2025",
      },
    ],

    courses: [
      {
        title:"OSINT Practitioner",
        org:"UNODC",
        city:"Doha",
        date:"2025",
        bullets:[
          "Data analysis and intelligence extraction.",
        ],
      },
    ],

    skills: [
      {cat:"Frontend", detail:"React, HTML, CSS, JS"},
      {cat:"Backend", detail:"Node.js, APIs"},
    ],

    languages: [
      {name:"Arabic", level:"Native"},
      {name:"English", level:"C1"},
    ],

    interests:["Programming","Photography"]
  },

  ar: {
    personal: {
      name: "محمد درهوبي",
      role: "مطور ويب متكامل · باحث OSINT · أمن سيبراني",
      email: "mdrhoobe@gmail.com",
      phone: "+218 91 787 5051",
      location: "طرابلس، ليبيا",
      dob: "1998",
      nationality: "ليبي",
      github: "github.com/mdrhoobe",
      linkedin: "linkedin.com/in/mdrhoobe",
    },

    labels: {
      personal:"شخصي",
      languages:"اللغات",
      skills:"المهارات",
      interests:"الاهتمامات",
      profile:"الملف الشخصي",
      experience:"الخبرة",
      education:"التعليم",
      courses:"الدورات والشهادات",
      dob:"تاريخ الميلاد",
      nationality:"الجنسية",
    },

    profile:
      "متخصص تقنية معلومات بخبرة في تطوير الويب والشبكات وOSINT.",

    experience: [],
    education: [],
    courses: [],
    skills: [],
    languages: [],
    interests:[]
  }
};

/* ─────────────────────────────────────────────
   STATE
──────────────────────────────────────────── */
let currentTheme = "dark";
let currentLang = "en";

/* ─────────────────────────────────────────────
   PDF GENERATOR
──────────────────────────────────────────── */
function buildPDF(themeId, langId) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:"mm", format:"a4" });

  const T = CV_THEMES[themeId];
  const D = CV_LANGS[langId];

  const PW = 210, PH = 297;
  const SB = 65;

  const MAIN_X = SB + 7;
  const MAIN_W = PW - SB - 15;

  let y = 0;
  let sy = 0;

  /* ───── Helpers ───── */
  const fill = c => doc.setFillColor(...c);
  const text = c => doc.setTextColor(...c);
  const draw = c => doc.setDrawColor(...c);

  const rect = (x,y,w,h,c) => {
    fill(c);
    doc.rect(x,y,w,h,"F");
  };

  function checkPage(n){
    if(y + n > PH - 12){
      doc.addPage();
      drawBackground();
      y = 12;
    }
  }

  function bullet(txt){
    const lines = doc.splitTextToSize(txt, MAIN_W - 6);
    doc.text("•", MAIN_X, y);
    lines.forEach((l,i)=>doc.text(l, MAIN_X+5, y+i*4));
    y += lines.length * 4;
  }

  /* ───── Background ───── */
  function drawBackground(){
    rect(0,0,PW,PH,T.mainBg);
    rect(0,0,SB,PH,T.sidebar);
    rect(SB,0,1,PH,T.accent);
  }

  drawBackground();

  /* ───── Header ───── */
  const p = D.personal;

  doc.setFontSize(20);
  doc.setFont("helvetica","bold");
  text(T.headerTxt);
  doc.text(p.name, 10, 15);

  doc.setFontSize(8);
  text(T.accent);
  doc.text(p.role, 10, 22);

  /* ───── Sidebar ───── */
  sy = 40;

  doc.setFontSize(8);
  text(T.sidebarTxt);
  doc.text(p.email, 10, sy); sy += 5;
  doc.text(p.phone, 10, sy); sy += 5;

  /* ───── Main ───── */
  y = 40;

  doc.setFontSize(10);
  text(T.mainTxt);
  doc.text(D.labels.profile, MAIN_X, y);
  y += 6;

  doc.setFontSize(8);
  text(T.midTxt);

  doc.splitTextToSize(D.profile, MAIN_W)
    .forEach(l => { doc.text(l, MAIN_X, y); y += 4; });

  doc.save(`${p.name}_CV.pdf`);
}

/* ─────────────────────────────────────────────
   UI INIT
──────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("cv-download-btn");
  if(!btn) return;

  btn.addEventListener("click", e => {
    e.preventDefault();

    buildPDF(currentTheme, currentLang);
  });
});
