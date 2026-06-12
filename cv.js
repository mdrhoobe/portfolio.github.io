// ═══════════════════════════════════════════
//  CV DATA
// ═══════════════════════════════════════════
var CV_TRANSLATIONS = {
  en: {
    langName: 'English',
    name: 'Mohammed Salih',
    role: 'Full Stack Developer · OSINT Researcher · Cybersecurity Enthusiast',
    email: 'mdrhoobe@gmail.com',
    phone: '+218 91 787 5051',
    location: 'Tripoli, Libya',
    dob: '16 February 1998',
    nationality: 'Libyan',
    github: 'github.com/mdrhoobe',
    linkedin: 'linkedin.com/in/mohammed-salih-3110bb1a8',
    labels: {
      personal: 'PERSONAL', languages: 'LANGUAGES', skills: 'SKILLS',
      interests: 'INTERESTS', profile: 'PROFILE', experience: 'EXPERIENCE',
      education: 'EDUCATION', courses: 'COURSES & CERTIFICATIONS',
      dob: 'DATE OF BIRTH', nationality: 'NATIONALITY',
      from: 'from', to: 'to'
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
        city: '', date: 'Jan - Jun 2021',
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
      { cat: 'Soft Skills', detail: 'Teamwork, Fast learner, Pressure-resilient' },
    ],
    languages: [
      { name: 'Arabic',  level: 'Native' },
      { name: 'English', level: 'C1 - Advanced' },
    ],
    interests: ['Technical literature', 'Photography', 'Volunteer work', 'Programming'],
  },

  ar: {
    langName: 'Arabic',
    name: 'محمد درهوبة',
    role: 'مطور ويب متكامل · باحث OSINT · متحمس للأمن السيبراني',
    email: 'mdrhoobe@gmail.com',
    phone: '+218 91 787 5051',
    location: 'طرابلس، ليبيا',
    dob: '16 فبراير 1998',
    nationality: 'ليبي',
    github: 'github.com/mdrhoobe',
    linkedin: 'linkedin.com/in/mohammed-salih-3110bb1a8',
    labels: {
      personal: 'شخصي', languages: 'اللغات', skills: 'المهارات',
      interests: 'الاهتمامات', profile: 'الملف الشخصي',
      experience: 'الخبرة', education: 'التعليم',
      courses: 'الدورات والشهادات',
      dob: 'تاريخ الميلاد', nationality: 'الجنسية',
      from: 'من', to: 'إلى'
    },
    profile: 'متخصص تقنية معلومات بخبرة تزيد عن 10 سنوات في تطوير الويب المتكامل والبنية التحتية للشبكات والتحقيق المفتوح المصدر. يعمل حالياً كمتخصص دعم فني في وزارة الداخلية الليبية.',
    experience: [
      { title: 'متخصص دعم فني',
        org: 'وزارة الداخلية الليبية - وحدة الاتصالات',
        city: 'طرابلس', from: 'يناير 2015', to: 'الحاضر',
        bullets: [
          'حل سريع لمشاكل الاجهزة والبرمجيات والشبكات.',
          'تشخيص الاعطال وتنفيذ الحلول المناسبة.',
          'تنفيذ ترقيات النظام والتحديثات وتقوية الامان.',
          'التنسيق مع فرق تقنية المعلومات.',
        ]},
      { title: 'فني شبكات',
        org: 'شركة روافد ليبيا للاتصالات والتقنية',
        city: 'طرابلس', from: 'يناير 2017', to: 'يناير 2018',
        bullets: [
          'تركيب وتهيئة اجهزة الشبكة.',
          'استكشاف اعطال الشبكات واصلاحها.',
          'اجراء مراجعات اداء الشبكة.',
        ]},
    ],
    education: [
      { degree: 'بكالوريوس تقنية المعلومات (برمجة)',
        org: 'الجامعة الليبية للعلوم الحديثة والتقنية',
        city: 'بنغازي', from: 'يناير 2020', to: 'اغسطس 2025' },
      { degree: 'دبلوم عالي في تقنية المعلومات',
        org: 'معهد عين الشمس العالي',
        city: 'طرابلس', from: '', to: 'مكتمل' },
    ],
    courses: [
      { title: 'ممارس معتمد في OSINT',
        org: 'UNODC - المركز الاقليمي لمكافحة الجرائم الالكترونية',
        city: 'الدوحة، قطر', date: 'فبراير 2025',
        bullets: [
          'تحليل البيانات المفتوحة المصدر.',
          'الكشف عن التهديدات الالكترونية.',
          'الطب الشرعي الرقمي والتحقيق.',
        ]},
      { title: 'مطور ويب متكامل',
        org: 'مركز IT SHEAR للتدريب',
        city: '', date: 'يناير - يونيو 2021',
        bullets: [
          'HTML5 وCSS3 وJavaScript و Node.js.',
          'تصميم قواعد البيانات MongoDB وMySQL.',
          'امان التطبيقات وتحسين الاداء.',
        ]},
    ],
    skills: [
      { cat: 'الواجهة الامامية', detail: 'React, HTML5, CSS3, JavaScript' },
      { cat: 'الواجهة الخلفية',  detail: 'Node.js, REST APIs' },
      { cat: 'قواعد البيانات',   detail: 'MongoDB, MySQL' },
      { cat: 'OSINT',            detail: 'ادوات ومنهجيات الاستخبارات' },
      { cat: 'الشبكات',          detail: 'الاعداد والتهيئة واستكشاف الاعطال' },
      { cat: 'الامن',            detail: 'الامن السيبراني وحماية البيانات' },
      { cat: 'الانظمة',          detail: 'Linux والبرمجة النصية Bash' },
      { cat: 'مهارات لينة',      detail: 'العمل الجماعي، التعلم السريع' },
    ],
    languages: [
      { name: 'العربية',     level: 'اللغة الام' },
      { name: 'الانجليزية', level: 'C1 - متقدم' },
    ],
    interests: ['الادب التقني', 'التصوير الفوتوغرافي', 'العمل التطوعي', 'البرمجة'],
  },

  de: {
    langName: 'Deutsch',
    name: 'Mohammed Salih',
    role: 'Full Stack Entwickler · OSINT Forscher · Cybersicherheit',
    email: 'mdrhoobe@gmail.com',
    phone: '+218 91 787 5051',
    location: 'Tripolis, Libyen',
    dob: '16. Februar 1998',
    nationality: 'Libyscher',
    github: 'github.com/mdrhoobe',
    linkedin: 'linkedin.com/in/mohammed-salih-3110bb1a8',
    labels: {
      personal: 'PERSOENLICH', languages: 'SPRACHEN', skills: 'FAEHIGKEITEN',
      interests: 'INTERESSEN', profile: 'PROFIL', experience: 'ERFAHRUNG',
      education: 'AUSBILDUNG', courses: 'KURSE & ZERTIFIKATE',
      dob: 'GEBURTSDATUM', nationality: 'NATIONALITAET',
      from: 'von', to: 'bis'
    },
    profile: 'IT-Spezialist mit Expertise in Full-Stack-Webentwicklung, Netzwerkinfrastruktur und Open-Source-Intelligence (OSINT). Derzeit als technischer Supportspezialist im libyschen Innenministerium taetig.',
    experience: [
      { title: 'Technischer Supportspezialist',
        org: 'Libysches Innenministerium - Kommunikationsabteilung',
        city: 'Tripolis', from: 'Jan 2015', to: 'Heute',
        bullets: [
          'Schnelle Behebung von Hardware-, Software- und Netzwerkproblemen.',
          'Fehlerdiagnose und Implementierung effektiver Loesungen.',
          'Systemaktualisierungen und Sicherheitshaertung.',
          'Koordination mit IT-Teams bei komplexen Vorfaellen.',
        ]},
      { title: 'Netzwerktechniker',
        org: 'Rawafed Libyen fuer Kommunikation und Technologie',
        city: 'Tripolis', from: 'Jan 2017', to: 'Jan 2018',
        bullets: [
          'Installation und Konfiguration von Netzwerkgeraeten.',
          'Fehlerbehebung bei LAN/WAN-Problemen.',
          'Netzwerk-Leistungspruefungen durchgefuehrt.',
        ]},
    ],
    education: [
      { degree: 'B.Sc. Informationstechnologie (Programmierung)',
        org: 'Libysche Universitaet fuer moderne Wissenschaften',
        city: 'Bengasi', from: 'Jan 2020', to: 'Aug 2025' },
      { degree: 'Hoehere Ausbildung in Informationstechnologie',
        org: 'Ain Shams Hoehere Institut',
        city: 'Tripolis', from: '', to: 'Abgeschlossen' },
    ],
    courses: [
      { title: 'OSINT Zertifizierter Praktiker',
        org: 'UNODC - Regionales Zentrum zur Bekaempfung der Cyberkriminalitaet',
        city: 'Doha, Katar', date: 'Feb 2025',
        bullets: [
          'Open-Source-Datenanalyse und Informationsgewinnung.',
          'Erkennung elektronischer Bedrohungen mit OSINT-Methoden.',
          'Digitale Forensik und Cyberermittlungen.',
        ]},
      { title: 'Full Stack Entwickler',
        org: 'IT SHEAR Ausbildungszentrum',
        city: '', date: 'Jan - Jun 2021',
        bullets: [
          'Frontend: HTML5, CSS3, JavaScript. Backend: Node.js.',
          'Datenbankdesign: MongoDB und MySQL.',
          'App-Sicherheit und Leistungsoptimierung.',
        ]},
    ],
    skills: [
      { cat: 'Frontend',      detail: 'React, HTML5, CSS3, JavaScript' },
      { cat: 'Backend',       detail: 'Node.js, REST APIs' },
      { cat: 'Datenbank',     detail: 'MongoDB, MySQL' },
      { cat: 'OSINT',         detail: 'Intelligence-Tools & Methodik' },
      { cat: 'Netzwerk',      detail: 'Einrichtung & Fehlerbehebung' },
      { cat: 'Sicherheit',    detail: 'Cybersicherheit & Datenschutz' },
      { cat: 'Systeme',       detail: 'Linux, Bash-Scripting' },
      { cat: 'Soft Skills',   detail: 'Teamarbeit, Schnelles Lernen' },
    ],
    languages: [
      { name: 'Arabisch',    level: 'Muttersprache' },
      { name: 'Englisch',    level: 'C1 - Fortgeschritten' },
    ],
    interests: ['Technische Literatur', 'Fotografie', 'Freiwilligenarbeit', 'Programmierung'],
  },

  ko: {
    langName: 'Korean',
    name: 'Mohammed Salih',
    role: '풀스택 개발자 · OSINT 연구원 · 사이버보안 전문가',
    email: 'mdrhoobe@gmail.com',
    phone: '+218 91 787 5051',
    location: '트리폴리, 리비아',
    dob: '1998년 2월 16일',
    nationality: '리비아인',
    github: 'github.com/mdrhoobe',
    linkedin: 'linkedin.com/in/mohammed-salih-3110bb1a8',
    labels: {
      personal: '개인정보', languages: '언어', skills: '기술',
      interests: '관심사', profile: '프로필', experience: '경력',
      education: '학력', courses: '교육 및 자격증',
      dob: '생년월일', nationality: '국적',
      from: '~부터', to: '~까지'
    },
    profile: '풀스택 웹 개발, 네트워크 인프라 및 OSINT 분야에서 10년 이상의 경험을 보유한 IT 전문가입니다.',
    experience: [
      { title: '기술 지원 전문가',
        org: '리비아 내무부 - 통신부',
        city: '트리폴리', from: '2015년 1월', to: '현재',
        bullets: [
          '하드웨어, 소프트웨어 및 네트워크 문제 신속 해결.',
          '장애 진단 및 효과적인 솔루션 구현.',
          '시스템 업그레이드 및 보안 강화 실행.',
          'IT 팀과 복잡한 사고 해결 조율.',
        ]},
      { title: '네트워크 기술자',
        org: 'Rawafed 리비아 통신 기술',
        city: '트리폴리', from: '2017년 1월', to: '2018년 1월',
        bullets: [
          '네트워크 장치 설치 및 구성.',
          'LAN/WAN 장애 신속 해결.',
          '네트워크 성능 감사 실시.',
        ]},
    ],
    education: [
      { degree: '정보기술 학사 (프로그래밍)',
        org: '리비아 현대과학기술대학교',
        city: '벵가지', from: '2020년 1월', to: '2025년 8월' },
      { degree: '정보기술 고급 디플로마',
        org: 'Ain Shams 고등학교',
        city: '트리폴리', from: '', to: '완료' },
    ],
    courses: [
      { title: 'OSINT 인증 실무자',
        org: 'UNODC - 사이버범죄 퇴치 지역센터',
        city: '도하, 카타르', date: '2025년 2월',
        bullets: [
          '오픈소스 데이터 분석 및 정보 추출.',
          'OSINT 방법론을 사용한 전자 위협 탐지.',
          '디지털 포렌식 및 사이버 추적 조사.',
        ]},
      { title: '풀스택 개발자',
        org: 'IT SHEAR 훈련센터',
        city: '', date: '2021년 1월 - 6월',
        bullets: [
          'Frontend: HTML5, CSS3, JavaScript. Backend: Node.js.',
          'MongoDB 및 MySQL 데이터베이스 설계.',
          '앱 보안, 성능 최적화, 배포.',
        ]},
    ],
    skills: [
      { cat: 'Frontend',  detail: 'React, HTML5, CSS3, JavaScript' },
      { cat: 'Backend',   detail: 'Node.js, REST APIs' },
      { cat: '데이터베이스', detail: 'MongoDB, MySQL' },
      { cat: 'OSINT',     detail: '인텔리전스 도구 및 방법론' },
      { cat: '네트워크',   detail: '설정, 구성 및 문제 해결' },
      { cat: '보안',       detail: '사이버보안 및 데이터 보호' },
      { cat: '시스템',     detail: 'Linux, Bash 스크립팅' },
      { cat: '소프트스킬', detail: '팀워크, 빠른 학습' },
    ],
    languages: [
      { name: '아랍어',   level: '모국어' },
      { name: '영어',     level: 'C1 - 고급' },
    ],
    interests: ['기술 문학', '사진', '자원봉사', '프로그래밍'],
  },

  ja: {
    langName: 'Japanese',
    name: 'Mohammed Salih',
    role: 'フルスタック開発者 · OSINT研究者 · サイバーセキュリティ専門家',
    email: 'mdrhoobe@gmail.com',
    phone: '+218 91 787 5051',
    location: 'トリポリ、リビア',
    dob: '1998年2月16日',
    nationality: 'リビア人',
    github: 'github.com/mdrhoobe',
    linkedin: 'linkedin.com/in/mohammed-salih-3110bb1a8',
    labels: {
      personal: '個人情報', languages: '言語', skills: 'スキル',
      interests: '趣味', profile: 'プロフィール', experience: '職歴',
      education: '学歴', courses: '資格・コース',
      dob: '生年月日', nationality: '国籍',
      from: 'から', to: 'まで'
    },
    profile: 'フルスタックWeb開発、ネットワークインフラ、OSINTサイバー調査において10年以上の経験を持つITの専門家です。',
    experience: [
      { title: '技術サポートスペシャリスト',
        org: 'リビア内務省 - 通信部',
        city: 'トリポリ', from: '2015年1月', to: '現在',
        bullets: [
          'ハードウェア・ソフトウェア・ネットワーク問題の迅速な解決。',
          '障害診断と効果的なソリューションの実装。',
          'システムアップグレードとセキュリティ強化の実行。',
          'ITチームとの複雑なインシデント解決の調整。',
        ]},
      { title: 'ネットワーク技術者',
        org: 'Rawafed Libya 通信技術',
        city: 'トリポリ', from: '2017年1月', to: '2018年1月',
        bullets: [
          'ネットワーク機器の設置と設定。',
          'LAN/WANの障害を迅速に解決。',
          'ネットワークパフォーマンス監査の実施。',
        ]},
    ],
    education: [
      { degree: '情報技術学士（プログラミング）',
        org: 'リビア現代科学技術大学',
        city: 'ベンガジ', from: '2020年1月', to: '2025年8月' },
      { degree: '情報技術上級ディプロマ',
        org: 'アインシャムス高等学院',
        city: 'トリポリ', from: '', to: '修了' },
    ],
    courses: [
      { title: 'OSINT認定実務者',
        org: 'UNODC - サイバー犯罪対策地域センター',
        city: 'ドーハ、カタール', date: '2025年2月',
        bullets: [
          'オープンソースデータ分析と情報抽出。',
          'OSINTを使用した電子的脅威の検出。',
          'デジタルフォレンジックとサイバー追跡調査。',
        ]},
      { title: 'フルスタック開発者',
        org: 'IT SHEARトレーニングセンター',
        city: '', date: '2021年1月 - 6月',
        bullets: [
          'フロントエンド: HTML5、CSS3、JavaScript。バックエンド: Node.js。',
          'データベース設計: MongoDBおよびMySQL。',
          'アプリセキュリティ、パフォーマンス最適化、デプロイ。',
        ]},
    ],
    skills: [
      { cat: 'フロントエンド', detail: 'React, HTML5, CSS3, JavaScript' },
      { cat: 'バックエンド',   detail: 'Node.js, REST APIs' },
      { cat: 'データベース',   detail: 'MongoDB, MySQL' },
      { cat: 'OSINT',         detail: 'インテリジェンスツール' },
      { cat: 'ネットワーク',   detail: '設定・構成・トラブルシューティング' },
      { cat: 'セキュリティ',   detail: 'サイバーセキュリティ・データ保護' },
      { cat: 'システム',       detail: 'Linux、Bashスクリプト' },
      { cat: 'ソフトスキル',   detail: 'チームワーク、高速学習' },
    ],
    languages: [
      { name: 'アラビア語', level: '母国語' },
      { name: '英語',       level: 'C1 - 上級' },
    ],
    interests: ['技術文学', '写真', 'ボランティア活動', 'プログラミング'],
  },

  zh: {
    langName: 'Chinese',
    name: 'Mohammed Salih',
    role: '全栈开发者 · OSINT研究员 · 网络安全专家',
    email: 'mdrhoobe@gmail.com',
    phone: '+218 91 787 5051',
    location: '的黎波里，利比亚',
    dob: '1998年2月16日',
    nationality: '利比亚人',
    github: 'github.com/mdrhoobe',
    linkedin: 'linkedin.com/in/mohammed-salih-3110bb1a8',
    labels: {
      personal: '个人信息', languages: '语言', skills: '技能',
      interests: '兴趣', profile: '简介', experience: '工作经历',
      education: '教育背景', courses: '课程与证书',
      dob: '出生日期', nationality: '国籍',
      from: '从', to: '至'
    },
    profile: '拥有10年以上全栈Web开发、网络基础设施和OSINT网络调查经验的IT专业人士。目前在利比亚内政部担任技术支持专家。',
    experience: [
      { title: '技术支持专家',
        org: '利比亚内政部 - 通信部门',
        city: '的黎波里', from: '2015年1月', to: '至今',
        bullets: [
          '快速解决硬件、软件和网络问题。',
          '诊断故障并实施及时有效的解决方案。',
          '执行系统升级、补丁和安全加固。',
          '与IT团队协调处理复杂事件。',
        ]},
      { title: '网络技术员',
        org: 'Rawafed利比亚通信技术公司',
        city: '的黎波里', from: '2017年1月', to: '2018年1月',
        bullets: [
          '安装和配置网络设备确保持续连接。',
          '快速解决LAN/WAN故障。',
          '进行网络性能审计和评估。',
        ]},
    ],
    education: [
      { degree: '信息技术学士（编程）',
        org: '利比亚现代科技大学',
        city: '班加西', from: '2020年1月', to: '2025年8月' },
      { degree: '信息技术高级文凭',
        org: 'Ain Shams高等学院',
        city: '的黎波里', from: '', to: '已完成' },
    ],
    courses: [
      { title: 'OSINT认证从业者',
        org: 'UNODC - 打击网络犯罪区域中心',
        city: '多哈，卡塔尔', date: '2025年2月',
        bullets: [
          '开源数据分析和情报提取。',
          '使用OSINT方法检测电子威胁。',
          '数字取证和网络追踪调查。',
        ]},
      { title: '全栈开发者',
        org: 'IT SHEAR培训中心',
        city: '', date: '2021年1月 - 6月',
        bullets: [
          '前端: HTML5、CSS3、JavaScript。后端: Node.js。',
          '数据库设计: MongoDB和MySQL。',
          '应用安全、性能优化和部署。',
        ]},
    ],
    skills: [
      { cat: '前端',     detail: 'React, HTML5, CSS3, JavaScript' },
      { cat: '后端',     detail: 'Node.js, REST APIs' },
      { cat: '数据库',   detail: 'MongoDB, MySQL' },
      { cat: 'OSINT',   detail: '情报工具和方法论' },
      { cat: '网络',     detail: '设置、配置和故障排除' },
      { cat: '安全',     detail: '网络安全和数据保护' },
      { cat: '系统',     detail: 'Linux、Bash脚本' },
      { cat: '软技能',   detail: '团队合作、快速学习' },
    ],
    languages: [
      { name: '阿拉伯语', level: '母语' },
      { name: '英语',     level: 'C1 - 高级' },
    ],
    interests: ['技术文献', '摄影', '志愿服务', '编程'],
  },
};

// ═══════════════════════════════════════════
//  PDF GENERATOR
// ═══════════════════════════════════════════
function generateCV(langCode) {
  if (!window.jspdf) {
    alert('PDF library not loaded. Please try again.');
    return;
  }

  var lang = langCode || 'en';
  var D = CV_TRANSLATIONS[lang];
  if (!D) { alert('Language not found'); return; }

  var jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });

  var PW=210, PH=297, SB_W=65;
  var MN_X=SB_W+7, MN_W=PW-SB_W-15;
  var SB_X=5, SB_TW=SB_W-10;
  var HDR_H=30;

  var BG_SIDE=[22,22,22], BG_MAIN=[250,250,250], BG_HDR=[10,10,10];
  var ACCENT=[200,241,53], WHITE=[255,255,255];
  var DARK_TEXT=[25,25,25], MID_TEXT=[85,85,85], MUTED=[150,150,150];
  var SIDE_RULE=[45,45,45];

  var y=0, sy=0;

  function fi(c){ doc.setFillColor(c[0],c[1],c[2]); }
  function ti(c){ doc.setTextColor(c[0],c[1],c[2]); }
  function di(c){ doc.setDrawColor(c[0],c[1],c[2]); }
  function fr(x,yy,w,h,c){ fi(c); doc.rect(x,yy,w,h,'F'); }

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
    doc.text(label,SB_X,sy);
    sy+=1.5; di(SIDE_RULE); doc.setLineWidth(0.3);
    doc.line(SB_X,sy,SB_W-5,sy); sy+=4;
  }

  function mnHead(label) {
    y+=6;
    fr(MN_X-4,y-4,2,5,ACCENT);
    doc.setFontSize(7.5); doc.setFont('helvetica','bold'); ti(DARK_TEXT);
    doc.text(label,MN_X,y); y+=1;
    di([210,210,210]); doc.setLineWidth(0.3);
    doc.line(MN_X,y,MN_X+MN_W,y); y+=5;
  }

  function bul(text) {
    doc.setFontSize(8); doc.setFont('helvetica','normal'); ti(MID_TEXT);
    var lines=doc.splitTextToSize(text,MN_W-6);
    doc.text('•',MN_X+1,y);
    lines.forEach(function(l,i){ doc.text(l,MN_X+5,y+i*3.8); });
    y+=lines.length*3.8+1;
  }

  function checkY(n) {
    if(y+n>PH-12){
      doc.addPage(); drawBg(); y=12;
    }
  }

  drawBg();

  // Header
  doc.setFontSize(20); doc.setFont('helvetica','bold'); ti(WHITE);
  doc.splitTextToSize(D.name,120).forEach(function(l,i){
    doc.text(l,SB_X,12+i*8);
  });
  doc.setFontSize(7.5); doc.setFont('helvetica','normal'); ti(ACCENT);
  doc.splitTextToSize(D.role,130).forEach(function(l,i){
    doc.text(l,SB_X,22+i*4);
  });
  doc.setFontSize(7.5); ti(MUTED);
  [D.email, D.phone, D.location].forEach(function(v,i){
    doc.text(v,PW-6,11+i*5,{align:'right'});
  });

  y=HDR_H+9; sy=HDR_H+8;

  // Sidebar
  sbHead(D.labels.personal);
  var personalItems = [
    [D.labels.dob,       D.dob],
    [D.labels.nationality, D.nationality],
    ['GitHub',           D.github],
    ['LinkedIn',         D.linkedin],
  ];
  personalItems.forEach(function(pair){
    doc.setFontSize(6.5); doc.setFont('helvetica','bold'); ti(MUTED);
    doc.text(pair[0],SB_X,sy); sy+=3.5;
    doc.setFontSize(7.5); doc.setFont('helvetica','normal'); ti(WHITE);
    var ls=doc.splitTextToSize(pair[1],SB_TW);
    ls.forEach(function(l,i){ doc.text(l,SB_X,sy+i*3.6); });
    sy+=ls.length*3.6+2.5;
  });

  sbHead(D.labels.languages);
  D.languages.forEach(function(lang){
    doc.setFontSize(8.5); doc.setFont('helvetica','bold'); ti(WHITE);
    doc.text(lang.name,SB_X,sy); sy+=3.8;
    doc.setFontSize(7); doc.setFont('helvetica','normal'); ti(ACCENT);
    doc.text(lang.level,SB_X,sy); sy+=4.5;
  });

  sbHead(D.labels.skills);
  D.skills.forEach(function(s){
    doc.setFontSize(7); doc.setFont('helvetica','bold'); ti(ACCENT);
    doc.text(s.cat,SB_X,sy); sy+=3.5;
    doc.setFontSize(7); doc.setFont('helvetica','normal'); ti([200,200,200]);
    var ls=doc.splitTextToSize(s.detail,SB_TW);
    ls.forEach(function(l,i){ doc.text(l,SB_X,sy+i*3.4); });
    sy+=ls.length*3.4+2;
  });

  sbHead(D.labels.interests);
  D.interests.forEach(function(item){
    doc.setFontSize(7.5); doc.setFont('helvetica','normal'); ti([190,190,190]);
    doc.text('* '+item,SB_X,sy); sy+=4;
  });

  // Main
  mnHead(D.labels.profile);
  doc.setFontSize(8.5); doc.setFont('helvetica','normal'); ti(MID_TEXT);
  doc.splitTextToSize(D.profile,MN_W).forEach(function(l){
    doc.text(l,MN_X,y); y+=4;
  }); y+=2;

  mnHead(D.labels.experience);
  D.experience.forEach(function(job){
    checkY(28);
    doc.setFontSize(9.5); doc.setFont('helvetica','bold'); ti(DARK_TEXT);
    doc.text(job.title,MN_X,y); y+=4.5;
    doc.setFontSize(8); doc.setFont('helvetica','normal'); ti(MID_TEXT);
    var o=job.city ? job.org+', '+job.city : job.org;
    doc.splitTextToSize(o,MN_W).forEach(function(l){ doc.text(l,MN_X,y); y+=3.8; });
    fr(MN_X,y-2,1.5,1.5,ACCENT);
    doc.setFontSize(7.5); doc.setFont('helvetica','italic'); ti(MUTED);
    doc.text(job.from+' - '+job.to,MN_X+3,y); y+=4.5;
    job.bullets.forEach(function(b){ checkY(8); bul(b); }); y+=3;
  });

  mnHead(D.labels.education);
  D.education.forEach(function(edu){
    checkY(18);
    doc.setFontSize(9.5); doc.setFont('helvetica','bold'); ti(DARK_TEXT);
    doc.splitTextToSize(edu.degree,MN_W).forEach(function(l){ doc.text(l,MN_X,y); y+=4.5; });
    doc.setFontSize(8); doc.setFont('helvetica','normal'); ti(MID_TEXT);
    var o=edu.city ? edu.org+', '+edu.city : edu.org;
    doc.splitTextToSize(o,MN_W).forEach(function(l){ doc.text(l,MN_X,y); y+=3.8; });
    fr(MN_X,y-2,1.5,1.5,ACCENT);
    doc.setFontSize(7.5); doc.setFont('helvetica','italic'); ti(MUTED);
    doc.text(edu.from ? edu.from+' - '+edu.to : edu.to, MN_X+3,y); y+=6;
  });

  mnHead(D.labels.courses);
  D.courses.forEach(function(crs){
    checkY(28);
    doc.setFontSize(9.5); doc.setFont('helvetica','bold'); ti(DARK_TEXT);
    doc.text(crs.title,MN_X,y); y+=4.5;
    doc.setFontSize(8); doc.setFont('helvetica','normal'); ti(MID_TEXT);
    var o=crs.city ? crs.org+', '+crs.city : crs.org;
    doc.splitTextToSize(o,MN_W).forEach(function(l){ doc.text(l,MN_X,y); y+=3.8; });
    fr(MN_X,y-2,1.5,1.5,ACCENT);
    doc.setFontSize(7.5); doc.setFont('helvetica','italic'); ti(MUTED);
    doc.text(crs.date,MN_X+3,y); y+=4.5;
    crs.bullets.forEach(function(b){ checkY(8); bul(b); }); y+=3;
  });

  var filename = 'Mohammed_Salih_CV_' + lang.toUpperCase() + '.pdf';
  doc.save(filename);
}

// ═══════════════════════════════════════════
//  UI — Language selector + Download button
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  var cvBtn = document.getElementById('cv-download-btn');
  if (!cvBtn) return;

  // إنشاء شريط اختيار اللغة
  var bar = document.createElement('div');
  bar.className = 'cv-lang-bar';
  bar.innerHTML =
    '<span class="cv-lang-label">CV Language:</span>' +
    '<button class="cv-lang-btn active" data-lang="en">EN</button>' +
    '<button class="cv-lang-btn" data-lang="ar">AR</button>' +
    '<button class="cv-lang-btn" data-lang="de">DE</button>' +
    '<button class="cv-lang-btn" data-lang="ko">KO</button>' +
    '<button class="cv-lang-btn" data-lang="ja">JA</button>' +
    '<button class="cv-lang-btn" data-lang="zh">ZH</button>';

  cvBtn.parentNode.insertBefore(bar, cvBtn.nextSibling);

  var selectedLang = 'en';

  bar.querySelectorAll('.cv-lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectedLang = btn.dataset.lang;
      bar.querySelectorAll('.cv-lang-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
    });
  });

  // Download button
  cvBtn.addEventListener('click', function() {
    var label = cvBtn.querySelector('.cv-btn-label');
    var orig  = label.textContent;
    label.textContent         = 'Loading...';
    cvBtn.style.pointerEvents = 'none';

    function doGenerate() {
      label.textContent = 'Generating...';
      setTimeout(function() {
        try {
          generateCV(selectedLang);
          label.textContent       = 'Downloaded!';
          cvBtn.style.borderColor = 'var(--accent)';
          setTimeout(function() {
            label.textContent         = orig;
            cvBtn.style.pointerEvents = '';
            cvBtn.style.borderColor   = '';
          }, 2500);
        } catch(e) {
          console.error('CV Error:', e);
          label.textContent = 'Error - try again';
          setTimeout(function() {
            label.textContent         = orig;
            cvBtn.style.pointerEvents = '';
          }, 2000);
        }
      }, 100);
    }

    if (window.jspdf) {
      doGenerate();
    } else {
      var s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      s.onload = doGenerate;
      s.onerror = function() {
        label.textContent = 'No internet - try again';
        setTimeout(function() {
          label.textContent         = orig;
          cvBtn.style.pointerEvents = '';
        }, 3000);
      };
      document.body.appendChild(s);
    }
  });
});
