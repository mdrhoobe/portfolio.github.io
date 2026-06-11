/**
 * cv.js — Professional CV Generator (rebuilt)
 * لتعديل البيانات: غيّر في CV_DATA فقط
 */

// ═══════════════════════════════════════════════════════
//  البيانات — عدّل هنا فقط
// ═══════════════════════════════════════════════════════
const CV_DATA = {
  personal: {
    name:        'Mohammed Drhoobe',
    role:        'Full Stack Developer  ·  OSINT Researcher  ·  Cybersecurity Enthusiast',
    email:       'mdrhoobe@gmail.com',
    phone:       '+218 91 787 5051',
    location:    'Tripoli, Libya',
    dob:         '16 February 1998',
    nationality: 'Libyan',
    github:      'github.com/yourusername',
    linkedin:    'linkedin.com/in/yourusername',
  },
  profile: 'IT professional with 10+ years of experience in full-stack web development, network infrastructure, and OSINT cyber investigation. Currently serving as Technical Support Specialist at the Libyan Ministry of Interior while building advanced web systems and open-source intelligence tools.',
  experience: [
    {
      title:   'Technical Support Specialist',
      org:     'Libyan Ministry of Interior — Communications Unit',
      city:    'Tripoli',
      from:    'Jan 2015',
      to:      'Present',
      bullets: [
        'Rapid resolution of hardware, software, and network issues.',
        'Diagnose faults and implement timely, effective solutions.',
        'Execute system upgrades, patches, and security hardening.',
        'Coordinate with IT teams on complex incident resolution.',
      ],
    },
    {
      title:   'Network Technician',
      org:     'Rawafed Libya for Communications and Technology',
      city:    'Tripoli',
      from:    'Jan 2017',
      to:      'Jan 2018',
      bullets: [
        'Installed and configured network devices for continuous connectivity.',
        'Troubleshot LAN/WAN faults with rapid turnaround.',
        'Conducted network performance audits and assessments.',
      ],
    },
  ],
  education: [
    {
      degree: 'B.Sc. Information Technology (Programming)',
      org:    'Libyan University of Modern Sciences and Technology',
      city:   'Benghazi',
      from:   'Jan 2020',
      to:     'Aug 2025',
    },
    {
      degree: 'Higher Diploma in Information Technology',
      org:    'Ain Shams Higher Institute',
      city:   'Tripoli',
      from:   '',
      to:     'Completed',
    },
  ],
  courses: [
    {
      title:   'OSINT Certified Practitioner',
      org:     'UNODC — Regional Centre for Combatting Cybercrime',
      city:    'Doha, Qatar',
      date:    'Feb 2025',
      bullets: [
        'Open-source data analysis and intelligence extraction.',
        'Electronic threat detection using OSINT methodologies.',
        'Digital forensics and cyber-trail investigation.',
      ],
    },
    {
      title:   'Full Stack Developer',
      org:     'IT SHEAR Training Centre',
      city:    '',
      date:    'Jan – Jun 2021',
      bullets: [
        'Frontend: HTML5, CSS3, JavaScript. Backend: Node.js.',
        'Database design: MongoDB and MySQL.',
        'App security, performance optimisation, deployment.',
      ],
    },
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

// ═══════════════════════════════════════════════════════
//  PDF GENERATOR
// ═══════════════════════════════════════════════════════
function generateCV() {
  if (!window.jspdf) { alert('PDF library not loaded. Please refresh.'); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });

  // ── Page dimensions ──────────────────────────────────
  const PW   = 210;          // page width
  const PH   = 297;          // page height
  const SB_W = 65;           // sidebar width
  const MN_X = SB_W + 7;    // main content left edge
  const MN_W = PW - MN_X - 8; // main content width
  const SB_X = 5;            // sidebar text left edge
  const SB_TW = SB_W - 10;  // sidebar text max width

  // ── Colours ──────────────────────────────────────────
  const BG_DARK   = [15,  15,  15];
  const BG_SIDE   = [22,  22,  22];
  const BG_MAIN   = [250, 250, 250];
  const BG_HDR    = [10,  10,  10];
  const ACCENT    = [200, 241,  53];
  const WHITE     = [255, 255, 255];
  const DARK_TEXT = [ 25,  25,  25];
  const MID_TEXT  = [ 85,  85,  85];
  const MUTED     = [150, 150, 150];
  const SIDE_RULE = [ 45,  45,  45];

  // ── Cursor trackers ───────────────────────────────────
  let y  = 0;   // main column Y
  let sy = 0;   // sidebar Y

  // ── Colour helpers ────────────────────────────────────
  const setFill   = c => doc.setFillColor(c[0], c[1], c[2]);
  const setInk    = c => doc.setTextColor(c[0], c[1], c[2]);
  const setStroke = c => doc.setDrawColor(c[0], c[1], c[2]);

  const fillRect = (x, yy, w, h, c) => {
    setFill(c); doc.rect(x, yy, w, h, 'F');
  };

  // ── Page background ───────────────────────────────────
  function drawPageBg() {
    // White main area (full page first, sidebar over it)
    fillRect(0,   0,  PW,   PH,  BG_MAIN);
    // Dark sidebar
    fillRect(0,   0,  SB_W, PH,  BG_SIDE);
    // Accent divider line between sidebar and main
    fillRect(SB_W, 0, 0.8,  PH,  ACCENT);
  }

  // ── Header (full width, dark) ─────────────────────────
  const HDR_H = 30;
  function drawHeader() {
    // Header band
    fillRect(0, 0, PW, HDR_H, BG_HDR);
    // Accent underline strip
    fillRect(0, HDR_H, PW, 1.2, ACCENT);

    const d = CV_DATA.personal;

    // Name — left side
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    setInk(WHITE);
    // Constrain name to left 120mm to avoid overflow
    const nameLines = doc.splitTextToSize(d.name, 120);
    nameLines.forEach((line, i) => {
      doc.text(line, SB_X, 11 + i * 8);
    });

    // Role — left side, below name
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    setInk(ACCENT);
    const roleLines = doc.splitTextToSize(d.role, 130);
    roleLines.forEach((line, i) => {
      doc.text(line, SB_X, 21 + i * 4);
    });

    // Contact — right side, aligned right
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    setInk(MUTED);
    const rightX = PW - 6;
    doc.text(d.email,    rightX, 11, { align: 'right' });
    doc.text(d.phone,    rightX, 16, { align: 'right' });
    doc.text(d.location, rightX, 21, { align: 'right' });
  }

  // ── Sidebar section heading ───────────────────────────
  function sbSection(label) {
    sy += 5;
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'bold');
    setInk(ACCENT);
    doc.text(label.toUpperCase(), SB_X, sy);
    sy += 1.5;
    setStroke(SIDE_RULE);
    doc.setLineWidth(0.3);
    doc.line(SB_X, sy, SB_W - 5, sy);
    sy += 4;
  }

  // ── Main section heading ──────────────────────────────
  function mnSection(label) {
    y += 6;
    // Accent left bar
    fillRect(MN_X - 4, y - 4, 2, 5, ACCENT);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    setInk(DARK_TEXT);
    doc.text(label.toUpperCase(), MN_X, y);
    y += 1;
    setStroke([210, 210, 210]);
    doc.setLineWidth(0.3);
    doc.line(MN_X, y, MN_X + MN_W, y);
    y += 5;
  }

  // ── Bullet point (main) ───────────────────────────────
  function bullet(text) {
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    setInk(MID_TEXT);
    const lines = doc.splitTextToSize(text, MN_W - 6);
    doc.text('•', MN_X + 1, y);
    lines.forEach((line, i) => {
      doc.text(line, MN_X + 5, y + i * 3.8);
    });
    y += lines.length * 3.8 + 1;
  }

  // ── New page with backgrounds ─────────────────────────
  function newPage() {
    doc.addPage();
    drawPageBg();
    y  = 12;
    sy = 12;  // sidebar continues from top on page 2
  }

  // ── Page overflow check ───────────────────────────────
  function checkY(needed) {
    if (y + needed > PH - 12) newPage();
  }

  // ═══════════════════════════════════════════════════════
  //  DRAW PAGE 1
  // ═══════════════════════════════════════════════════════
  drawPageBg();
  drawHeader();

  // ── Starting Y positions (below header) ───────────────
  y  = HDR_H + 9;
  sy = HDR_H + 8;

  // ═══════════════════════════════════════════════════════
  //  SIDEBAR CONTENT
  // ═══════════════════════════════════════════════════════

  // Personal
  sbSection('Personal');
  const personalItems = [
    ['Date of Birth', CV_DATA.personal.dob],
    ['Nationality',   CV_DATA.personal.nationality],
    ['GitHub',        CV_DATA.personal.github],
    ['LinkedIn',      CV_DATA.personal.linkedin],
  ];
  personalItems.forEach(([key, val]) => {
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'bold');
    setInk(MUTED);
    doc.text(key.toUpperCase(), SB_X, sy);
    sy += 3.5;
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    setInk(WHITE);
    const lines = doc.splitTextToSize(val, SB_TW);
    lines.forEach((l, i) => doc.text(l, SB_X, sy + i * 3.6));
    sy += lines.length * 3.6 + 2.5;
  });

  // Languages
  sbSection('Languages');
  CV_DATA.languages.forEach(({ name, level }) => {
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'bold');
    setInk(WHITE);
    doc.text(name, SB_X, sy);
    sy += 3.8;
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    setInk(ACCENT);
    doc.text(level, SB_X, sy);
    sy += 4.5;
  });

  // Skills
  sbSection('Skills');
  CV_DATA.skills.forEach(({ cat, detail }) => {
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    setInk(ACCENT);
    doc.text(cat, SB_X, sy);
    sy += 3.5;
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    setInk([200, 200, 200]);
    const lines = doc.splitTextToSize(detail, SB_TW);
    lines.forEach((l, i) => doc.text(l, SB_X, sy + i * 3.4));
    sy += lines.length * 3.4 + 2;
  });

  // Interests
  sbSection('Interests');
  CV_DATA.interests.forEach(item => {
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    setInk([190, 190, 190]);
    doc.text(`· ${item}`, SB_X, sy);
    sy += 4;
  });

  // ═══════════════════════════════════════════════════════
  //  MAIN CONTENT
  // ═══════════════════════════════════════════════════════

  // Profile
  mnSection('Profile');
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  setInk(MID_TEXT);
  const profileLines = doc.splitTextToSize(CV_DATA.profile, MN_W);
  profileLines.forEach(l => { doc.text(l, MN_X, y); y += 4; });
  y += 2;

  // Experience
  mnSection('Experience');
  CV_DATA.experience.forEach(job => {
    checkY(28);
    // Title
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    setInk(DARK_TEXT);
    doc.text(job.title, MN_X, y);
    y += 4.5;
    // Org + city
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    setInk(MID_TEXT);
    const orgText = job.city ? `${job.org}, ${job.city}` : job.org;
    const orgLines = doc.splitTextToSize(orgText, MN_W);
    orgLines.forEach(l => { doc.text(l, MN_X, y); y += 3.8; });
    // Date — with accent left dot
    fillRect(MN_X, y - 2, 1.5, 1.5, ACCENT);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'italic');
    setInk(MUTED);
    doc.text(`${job.from} — ${job.to}`, MN_X + 3, y);
    y += 4.5;
    // Bullets
    job.bullets.forEach(b => { checkY(8); bullet(b); });
    y += 3;
  });

  // Education
  mnSection('Education');
  CV_DATA.education.forEach(edu => {
    checkY(18);
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    setInk(DARK_TEXT);
    const degLines = doc.splitTextToSize(edu.degree, MN_W);
    degLines.forEach(l => { doc.text(l, MN_X, y); y += 4.5; });
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    setInk(MID_TEXT);
    const eduOrg = edu.city ? `${edu.org}, ${edu.city}` : edu.org;
    const eduOrgLines = doc.splitTextToSize(eduOrg, MN_W);
    eduOrgLines.forEach(l => { doc.text(l, MN_X, y); y += 3.8; });
    fillRect(MN_X, y - 2, 1.5, 1.5, ACCENT);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'italic');
    setInk(MUTED);
    const dateStr = edu.from ? `${edu.from} — ${edu.to}` : edu.to;
    doc.text(dateStr, MN_X + 3, y);
    y += 6;
  });

  // Courses & Certifications
  mnSection('Courses & Certifications');
  CV_DATA.courses.forEach(crs => {
    checkY(28);
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    setInk(DARK_TEXT);
    doc.text(crs.title, MN_X, y);
    y += 4.5;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    setInk(MID_TEXT);
    const crsOrg = crs.city ? `${crs.org}, ${crs.city}` : crs.org;
    const crsOrgLines = doc.splitTextToSize(crsOrg, MN_W);
    crsOrgLines.forEach(l => { doc.text(l, MN_X, y); y += 3.8; });
    fillRect(MN_X, y - 2, 1.5, 1.5, ACCENT);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'italic');
    setInk(MUTED);
    doc.text(crs.date, MN_X + 3, y);
    y += 4.5;
    crs.bullets.forEach(b => { checkY(8); bullet(b); });
    y += 3;
  });

  // ── Save ─────────────────────────────────────────────
  doc.save('Mohammed_Drhoobe_CV.pdf');
}

// ── Button wiring ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const cvBtn = document.getElementById('cv-download-btn');
  if (!cvBtn) return;
  cvBtn.addEventListener('click', e => {
    e.preventDefault();
    const label = cvBtn.querySelector('.cv-btn-label');
    const orig  = label.textContent;
    label.textContent    = 'Generating...';
    cvBtn.style.pointerEvents = 'none';
    setTimeout(() => {
      try {
        generateCV();
        label.textContent       = 'Downloaded ✓';
        cvBtn.style.borderColor = 'var(--accent)';
        setTimeout(() => {
          label.textContent         = orig;
          cvBtn.style.pointerEvents = '';
          cvBtn.style.borderColor   = '';
        }, 2500);
      } catch (err) {
        console.error('CV error:', err);
        label.textContent = 'Error — try again';
        setTimeout(() => {
          label.textContent         = orig;
          cvBtn.style.pointerEvents = '';
        }, 2000);
      }
    }, 60);
  });
});
