const CV_DATA = {
  personal: {
    name:        'Mohammed Salih',
    role:        'Full Stack Developer · OSINT Researcher · Cybersecurity Enthusiast',
    email:       'mdrhoobe@gmail.com',
    phone:       '+218 91 787 5051',
    location:    'Tripoli, Libya',
    dob:         '16 February 1998',
    nationality: 'Libyan',
    github:      'github.com/mdrhoobe',
    linkedin:    'linkedin.com/in/mohammed-salih-3110bb1a8',
  },
  profile: 'IT specialist with expertise in full-stack web development, network infrastructure, and open-source intelligence (OSINT). Currently working as a Technical Support Specialist at the Libyan Ministry of Interior, with a strong focus on cybersecurity and digital transformation.',
  experience: [
    { title: 'Technical Support Specialist',
      org: 'Libyan Ministry of Interior — Communications Unit',
      city: 'Tripoli', from: 'Jan 2015', to: 'Present',
      bullets: [
        'Rapid resolution of hardware, software, and network issues.',
        'Diagnose faults and implement timely, effective solutions.',
        'Execute system upgrades, patches, and security hardening.',
        'Coordinate with IT teams on complex incident resolution.',
      ]},
    { title: 'Network Technician',
      org: 'Rawafed Libya for Communications and Technology',
      city: 'Tripoli', from: 'Jan 2017', to: 'Jan 2018',
      bullets: [
        'Installed and configured network devices for continuous connectivity.',
        'Troubleshot LAN/WAN faults with rapid turnaround.',
        'Conducted network performance audits and assessments.',
      ]},
  ],
  education: [
    { degree: 'B.Sc. Information Technology (Programming)',
      org: 'Libyan University of Modern Sciences and Technology',
      city: 'Benghazi', from: 'Jan 2020', to: 'Aug 2025' },
    { degree: 'Higher Diploma in Information Technology',
      org: 'Ain Shams Higher Institute',
      city: 'Tripoli', from: '', to: 'Completed' },
  ],
  courses: [
    { title: 'OSINT Certified Practitioner',
      org: 'UNODC — Regional Centre for Combatting Cybercrime',
      city: 'Doha, Qatar', date: 'Feb 2025',
      bullets: [
        'Open-source data analysis and intelligence extraction.',
        'Electronic threat detection using OSINT methodologies.',
        'Digital forensics and cyber-trail investigation.',
      ]},
    { title: 'Full Stack Developer',
      org: 'IT SHEAR Training Centre',
      city: '', date: 'Jan – Jun 2021',
      bullets: [
        'Frontend: HTML5, CSS3, JavaScript. Backend: Node.js.',
        'Database design: MongoDB and MySQL.',
        'App security, performance optimisation, deployment.',
      ]},
  ],
  skills: [
    { cat: 'Frontend',    detail: 'React, HTML5, CSS3, JavaScript' },
    { cat: 'Backend',     detail: 'Node.js, REST APIs' },
    { cat: 'Database',    detail: 'MongoDB, MySQL' },
    { cat: 'OSINT',       detail: 'Intelligence tools & methodology' },
    { cat: 'Network',     detail: 'Setup, config & troubleshooting' },
    { cat: 'Security',    detail: 'Cybersecurity & data protection' },
    { cat: 'Systems',     detail: 'Linux, Bash scripting' },
    { cat: 'Soft Skills', detail: 'Teamwork · Fast learner · Pressure-resilient' },
  ],
  languages: [
    { name: 'Arabic',  level: 'Native' },
    { name: 'English', level: 'C1 — Advanced' },
  ],
  interests: ['Technical literature', 'Photography', 'Volunteer work', 'Programming'],
};

function generateCV() {
  if (!window.jspdf) { alert('PDF library not loaded. Please try again.'); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });

  const PW=210, PH=297, SB_W=65;
  const MN_X=SB_W+7, MN_W=PW-SB_W-15;
  const SB_X=5, SB_TW=SB_W-10;
  const HDR_H=30;

  const BG_SIDE=[22,22,22], BG_MAIN=[250,250,250], BG_HDR=[10,10,10];
  const ACCENT=[200,241,53], WHITE=[255,255,255];
  const DARK_TEXT=[25,25,25], MID_TEXT=[85,85,85], MUTED=[150,150,150];
  const SIDE_RULE=[45,45,45];

  let y=0, sy=0;

  const fi = c => doc.setFillColor(c[0],c[1],c[2]);
  const ti = c => doc.setTextColor(c[0],c[1],c[2]);
  const di = c => doc.setDrawColor(c[0],c[1],c[2]);
  const fr = (x,yy,w,h,c) => { fi(c); doc.rect(x,yy,w,h,'F'); };

  function drawBg() {
    fr(0,0,PW,PH,BG_MAIN);
    fr(0,0,SB_W,PH,BG_SIDE);
    fr(SB_W,0,0.8,PH,ACCENT);
    fr(0,0,PW,HDR_H,BG_HDR);
    fr(0,HDR_H,PW,1.2,ACCENT);
  }

  function sbHead(label) {
    sy+=5;
    doc.setFontSize(6.5); doc.setFont('helvetica','bold'); ti(ACCENT);
    doc.text(label.toUpperCase(),SB_X,sy);
    sy+=1.5; di(SIDE_RULE); doc.setLineWidth(0.3);
    doc.line(SB_X,sy,SB_W-5,sy); sy+=4;
  }

  function mnHead(label) {
    y+=6;
    fr(MN_X-4,y-4,2,5,ACCENT);
    doc.setFontSize(7.5); doc.setFont('helvetica','bold'); ti(DARK_TEXT);
    doc.text(label.toUpperCase(),MN_X,y); y+=1;
    di([210,210,210]); doc.setLineWidth(0.3);
    doc.line(MN_X,y,MN_X+MN_W,y); y+=5;
  }

  function bul(text) {
    doc.setFontSize(8); doc.setFont('helvetica','normal'); ti(MID_TEXT);
    const lines=doc.splitTextToSize(text,MN_W-6);
    doc.text('•',MN_X+1,y);
    lines.forEach((l,i)=>doc.text(l,MN_X+5,y+i*3.8));
    y+=lines.length*3.8+1;
  }

  function checkY(n) {
    if(y+n>PH-12){
      doc.addPage(); drawBg(); y=12;
    }
  }

  drawBg();

  // Header
  const d = CV_DATA.personal;
  doc.setFontSize(20); doc.setFont('helvetica','bold'); ti(WHITE);
  doc.splitTextToSize(d.name,120).forEach((l,i)=>doc.text(l,SB_X,12+i*8));
  doc.setFontSize(7.5); doc.setFont('helvetica','normal'); ti(ACCENT);
  doc.splitTextToSize(d.role,130).forEach((l,i)=>doc.text(l,SB_X,22+i*4));
  doc.setFontSize(7.5); ti(MUTED);
  [d.email,d.phone,d.location].forEach((v,i)=>doc.text(v,PW-6,11+i*5,{align:'right'}));

  y=HDR_H+9; sy=HDR_H+8;

  // Sidebar
  sbHead('Personal');
  [['Date of Birth',d.dob],['Nationality',d.nationality],
   ['GitHub',d.github],['LinkedIn',d.linkedin]].forEach(([k,v])=>{
    doc.setFontSize(6.5); doc.setFont('helvetica','bold'); ti(MUTED);
    doc.text(k.toUpperCase(),SB_X,sy); sy+=3.5;
    doc.setFontSize(7.5); doc.setFont('helvetica','normal'); ti(WHITE);
    const ls=doc.splitTextToSize(v,SB_TW);
    ls.forEach((l,i)=>doc.text(l,SB_X,sy+i*3.6)); sy+=ls.length*3.6+2.5;
  });

  sbHead('Languages');
  CV_DATA.languages.forEach(({name,level})=>{
    doc.setFontSize(8.5); doc.setFont('helvetica','bold'); ti(WHITE);
    doc.text(name,SB_X,sy); sy+=3.8;
    doc.setFontSize(7); doc.setFont('helvetica','normal'); ti(ACCENT);
    doc.text(level,SB_X,sy); sy+=4.5;
  });

  sbHead('Skills');
  CV_DATA.skills.forEach(({cat,detail})=>{
    doc.setFontSize(7); doc.setFont('helvetica','bold'); ti(ACCENT);
    doc.text(cat,SB_X,sy); sy+=3.5;
    doc.setFontSize(7); doc.setFont('helvetica','normal'); ti([200,200,200]);
    const ls=doc.splitTextToSize(detail,SB_TW);
    ls.forEach((l,i)=>doc.text(l,SB_X,sy+i*3.4)); sy+=ls.length*3.4+2;
  });

  sbHead('Interests');
  CV_DATA.interests.forEach(item=>{
    doc.setFontSize(7.5); doc.setFont('helvetica','normal'); ti([190,190,190]);
    doc.text(`· ${item}`,SB_X,sy); sy+=4;
  });

  // Main
  mnHead('Profile');
  doc.setFontSize(8.5); doc.setFont('helvetica','normal'); ti(MID_TEXT);
  doc.splitTextToSize(CV_DATA.profile,MN_W).forEach(l=>{doc.text(l,MN_X,y);y+=4;}); y+=2;

  mnHead('Experience');
  CV_DATA.experience.forEach(job=>{
    checkY(28);
    doc.setFontSize(9.5); doc.setFont('helvetica','bold'); ti(DARK_TEXT);
    doc.text(job.title,MN_X,y); y+=4.5;
    doc.setFontSize(8); doc.setFont('helvetica','normal'); ti(MID_TEXT);
    const o=job.city?`${job.org}, ${job.city}`:job.org;
    doc.splitTextToSize(o,MN_W).forEach(l=>{doc.text(l,MN_X,y);y+=3.8;});
    fr(MN_X,y-2,1.5,1.5,ACCENT);
    doc.setFontSize(7.5); doc.setFont('helvetica','italic'); ti(MUTED);
    doc.text(`${job.from} — ${job.to}`,MN_X+3,y); y+=4.5;
    job.bullets.forEach(b=>{checkY(8);bul(b);}); y+=3;
  });

  mnHead('Education');
  CV_DATA.education.forEach(edu=>{
    checkY(18);
    doc.setFontSize(9.5); doc.setFont('helvetica','bold'); ti(DARK_TEXT);
    doc.splitTextToSize(edu.degree,MN_W).forEach(l=>{doc.text(l,MN_X,y);y+=4.5;});
    doc.setFontSize(8); doc.setFont('helvetica','normal'); ti(MID_TEXT);
    const o=edu.city?`${edu.org}, ${edu.city}`:edu.org;
    doc.splitTextToSize(o,MN_W).forEach(l=>{doc.text(l,MN_X,y);y+=3.8;});
    fr(MN_X,y-2,1.5,1.5,ACCENT);
    doc.setFontSize(7.5); doc.setFont('helvetica','italic'); ti(MUTED);
    doc.text(edu.from?`${edu.from} — ${edu.to}`:edu.to,MN_X+3,y); y+=6;
  });

  mnHead('Courses & Certifications');
  CV_DATA.courses.forEach(crs=>{
    checkY(28);
    doc.setFontSize(9.5); doc.setFont('helvetica','bold'); ti(DARK_TEXT);
    doc.text(crs.title,MN_X,y); y+=4.5;
    doc.setFontSize(8); doc.setFont('helvetica','normal'); ti(MID_TEXT);
    const o=crs.city?`${crs.org}, ${crs.city}`:crs.org;
    doc.splitTextToSize(o,MN_W).forEach(l=>{doc.text(l,MN_X,y);y+=3.8;});
    fr(MN_X,y-2,1.5,1.5,ACCENT);
    doc.setFontSize(7.5); doc.setFont('helvetica','italic'); ti(MUTED);
    doc.text(crs.date,MN_X+3,y); y+=4.5;
    crs.bullets.forEach(b=>{checkY(8);bul(b);}); y+=3;
  });

  doc.save('Mohammed_Salih_CV.pdf');
}

// تحميل jsPDF عند الضغط فقط
document.addEventListener('DOMContentLoaded', () => {
  const cvBtn = document.getElementById('cv-download-btn');
  if (!cvBtn) return;

  cvBtn.addEventListener('click', () => {
    const label = cvBtn.querySelector('.cv-btn-label');
    const orig  = label.textContent;
    label.textContent = 'Loading...';
    cvBtn.style.pointerEvents = 'none';

    const loadPDF = () => {
      label.textContent = 'Generating...';
      setTimeout(() => {
        try {
          generateCV();
          label.textContent = 'Downloaded ✓';
          cvBtn.style.borderColor = 'var(--accent)';
          setTimeout(() => {
            label.textContent = orig;
            cvBtn.style.pointerEvents = '';
            cvBtn.style.borderColor = '';
          }, 2500);
        } catch(e) {
          console.error(e);
          label.textContent = 'Error — try again';
          setTimeout(() => {
            label.textContent = orig;
            cvBtn.style.pointerEvents = '';
          }, 2000);
        }
      }, 100);
    };

    if (window.jspdf) {
      loadPDF();
    } else {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      s.onload = loadPDF;
      s.onerror = () => {
        label.textContent = 'No internet — try again';
        setTimeout(() => { label.textContent = orig; cvBtn.style.pointerEvents = ''; }, 3000);
      };
      document.body.appendChild(s);
    }
  });
});  const PW = 210;
  const SB = 60;

  function bg() {
    doc.setFillColor(...T.mainBg);
    doc.rect(0,0,PW,297,"F");

    doc.setFillColor(...T.sidebar);
    doc.rect(0,0,SB,297,"F");
  }

  bg();

  doc.setTextColor(...T.mainTxt);
  doc.setFontSize(18);
  doc.text(data.name, 70, 20);

  doc.setFontSize(10);
  doc.text(data.role, 70, 30);

  doc.setTextColor(...T.sidebarTxt);
  doc.text(data.email, 10, 40);
  doc.text(data.phone, 10, 50);

  doc.save("CV.pdf");
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("cv-download-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    buildPDF("dark", "en");
  });
});
