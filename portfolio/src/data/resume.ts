import { WorkExperience, Education } from "./types";

export const KEY_QUALIFICATIONS: string[] = [
  "10+ years of distinguished experience leading talent development programs, enterprise systems, and operational rhythms in complex aerospace engineering environments.",
  "Architect and product owner of enterprise applications (Payloads Engineering Talent Management Tool) from concept to enterprise-wide deployment, serving 1,000+ employees.",
  "Highly skilled in developing interactive Tableau dashboards, SharePoint systems, and custom database reports translating complex engineering metrics into executive-level recommendations.",
  "Proficient across modern software development stacks: Python (Tkinter, OOP, data processing), C# (.NET class architectures), SQL (relational design, stored procedures, triggers), JavaScript/HTML/CSS, and React.",
  "Recognized leader in managing operating rhythms, executive briefings, cross-functional stakeholder alignment, and enterprise technical fellowship evaluations.",
  "Strong academic standing with a 4.00 GPA (President's Honor Roll) in Software Development at Bellevue College.",
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "boeing-senior-staff-analyst",
    title: "Senior Staff Analyst",
    company: "The Boeing Company",
    team: "BCA Payloads Engineering Core",
    period: "August 2018 – January 2025",
    location: "Renton & Everett, WA",
    bullets: [
      "Led enterprise-level Technical Talent Review processes, identifying organizational capability gaps and engineering recovery plans to secure future business requirements.",
      "Served as primary architect and product owner for the Payloads Engineering Talent Management Tool (TMT) from initial ideation to full production deployment, formalizing career development roadmaps for 1,000+ engineers.",
      "Engineered multiple interactive Tableau dashboards, SharePoint sites, and web-based tools with integrated financial and performance metrics tracking.",
      "Directed the prestigious Payloads Technical Excellence governance, including Boeing Designated Expert (BDE) nominations and Boeing Technical Fellowship evaluations.",
      "Orchestrated the comprehensive division operating rhythm: executive agendas, leadership briefings, organization-wide communications, and employee feedback analytics.",
      "Synthesized complex datasets into clear executive visualizations and briefing decks for vice presidents and chief engineers.",
    ],
  },
  {
    id: "boeing-staff-analyst-737-prod",
    title: "Staff Analyst",
    company: "The Boeing Company",
    team: "737 Production Engineering",
    period: "December 2015 – August 2018",
    location: "Renton, WA",
    bullets: [
      "Steered organizational strategic initiatives, aligning leadership priorities with factory engineering teams to achieve production milestone objectives.",
      "Constructed and presented real-time leadership KPI metrics, root-cause action plans, and organizational readiness scorecards.",
      "Provided strategic operational rhythm support to two senior managers overseeing 200+ employees, managing organizational development and employee engagement initiatives.",
      "Acted as organization-wide Subject Matter Expert (SME) for advanced Microsoft Excel, custom macros, and enterprise collaboration software, leading user training sessions.",
    ],
  },
  {
    id: "boeing-staff-analyst-737ng-interiors-integ",
    title: "Staff Analyst",
    company: "The Boeing Company",
    team: "737NG Interiors Integration",
    period: "July 2014 – December 2015",
    location: "Renton, WA",
    bullets: [
      "Developed and institutionalized a comprehensive Basis of Estimate (BOE) framework defining Statement of Work (SOW) across distinct coded airplane configurations.",
      "Delivered weekly performance-to-plan metrics reviews and established standardized procedural playbooks across integrated product teams.",
      "Spearheaded peer-coaching and employee onboarding programs for newly introduced software tools and operational guidelines.",
    ],
  },
  {
    id: "boeing-staff-analyst-737-airplane-integ",
    title: "Staff Analyst",
    company: "The Boeing Company",
    team: "737 Airplane Integration",
    period: "October 2013 – July 2014",
    location: "Renton, WA",
    bullets: [
      "Partnered cross-functionally across engineering, finance, and supplier management to execute cost-reduction and value-stream optimization projects.",
      "Drafted high-visibility executive briefings, organizational progress summaries, and engineering status reports.",
      "Automated weekly data rollups and performance metrics for the 737 Value Creation executive board.",
    ],
  },
  {
    id: "boeing-staff-analyst-737ng-interiors-sys",
    title: "Staff Analyst",
    company: "The Boeing Company",
    team: "737NG Interiors Systems",
    period: "November 2012 – October 2013",
    location: "Renton, WA",
    bullets: [
      "Supported value-stream engineering and cost-reduction proposals across multi-disciplinary engineering teams.",
      "Created leadership and airline customer presentations; supported implementation of regulatory FAA compliance updates.",
      "Facilitated engineering technical reviews, maintained action registries, and drove accountability across milestone commitments.",
    ],
  },
  {
    id: "boeing-staff-analyst-737max-interiors",
    title: "Staff Analyst",
    company: "The Boeing Company",
    team: "737NG / 737 MAX Interiors",
    period: "February 2012 – November 2012",
    location: "Renton, WA",
    bullets: [
      "Designed and deployed a cross-functional gated milestone tracking mechanism for Boeing Commercial Airplanes program teams.",
      "Formulated strategic agendas, executive summaries, and documentation management lifecycles.",
      "Contributed to establishing the FAA G-1 certification basis compliance framework for the 737 MAX Interiors program.",
    ],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "bellevue-bas",
    school: "Bellevue College",
    degree: "Software Development BAS (Bachelor of Applied Science)",
    period: "Started Summer 2026 – Expected June 2028",
    note: "In Progress",
    gpa: "4.00 (President's Honor Roll)",
    details: [
      "Enterprise Data Applications, Advanced Data Access & Application Architecture",
      "Software Testing, Quality Assurance & Capstone I & II Industry Project",
      "Developing Mobile Applications, Advanced Web Development & Security Essentials",
      "Critical Thinking, IT Project Management & Ethical Issues in Technology",
    ],
  },
  {
    id: "bellevue-aast",
    school: "Bellevue College",
    degree: "Software Development AAS-T",
    period: "Started Summer 2026 – Expected December 2026",
    note: "In Progress",
    gpa: "4.00 (President's Honor Roll)",
    details: [
      "Object-Oriented Programming (C# / .NET) & Python Software Development",
      "Database Theory, Relational Design, SQL Stored Procedures & Triggers",
      "Client-Side Web Programming, Server-Side Web Development & Linux Systems",
      "Systems Analysis & Design, Networking Basics & Mobile Solutions",
    ],
  },
  {
    id: "bellevue-web-cert",
    school: "Bellevue College",
    degree: "Web Development Certificate",
    period: "Started Summer 2026 – Expected December 2026",
    note: "In Progress",
    gpa: "4.00 (President's Honor Roll)",
    details: [
      "Introduction to Web Development & Client-Side JavaScript Programming",
      "Front End Web Development, UI/UX Layouts & Responsive Web Design",
      "Server-Side Web Development & Interactive Web Applications",
    ],
  },
  {
    id: "bellevue-python",
    school: "Bellevue College",
    degree: "Python Programming Certificate",
    period: "Started Summer 2026 – Expected December 2027",
    note: "In Progress",
    gpa: "4.00 (President's Honor Roll)",
    details: [
      "Introduction to Python & Object-Oriented Programming with Python",
      "Artificial Intelligence & Robotics Fundamentals",
      "Data Visualization & Exploration with Python, Algorithms & Machine Learning",
    ],
  },
  {
    id: "cascadia-environmental",
    school: "Cascadia College",
    degree: "Environmental Technologies & Sustainable Practices AAS",
    period: "2009 – 2012",
    note: "Graduated",
    details: [
      "Complex systems thinking, lifecycle modeling & sustainability analysis",
      "Anticipatory competence and environmental metric evaluation",
      "Collaborative, multi-stakeholder problem solving",
    ],
  },
  {
    id: "cascadia-integrated",
    school: "Cascadia College",
    degree: "Integrated Studies AAS",
    period: "2009 – 2012",
    note: "Graduated",
    details: [
      "Critical, creative, and reflective interdisciplinary problem solving",
      "High-impact technical and executive communication across diverse environments",
      "Synthesizing knowledge across sciences, humanities, and arts",
    ],
  },
];

