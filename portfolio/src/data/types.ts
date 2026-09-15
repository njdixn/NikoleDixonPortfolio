export interface Project {
  id: string;
  title: string;
  category: "Web Development" | "Python" | "C#" | "Database" | "React";
  description: string;
  detail: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: "Code2" | "Layers" | "Wrench" | "BarChart3" | "Palette" | "Users";
  accentColor: string;
  bgLight: string;
  skills: SkillItem[];
}

export interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
  description: string;
}

export type DegreeProgram = "AAS SD" | "BAS SD" | "Python C" | "Web C" | "Extra";

export interface Course {
  code: string;
  degree: DegreeProgram;
  name: string;
  term: string;
  gpa?: number | string;
  units: number;
  grade?: string;
}

export interface DegreeMilestone {
  title: string;
  credential: "AAS-T" | "BAS" | "Certificate";
  completionDate: string;
  status: "Completed" | "In Progress" | "Planned";
  gpa?: string;
  description?: string;
}

export interface GPAInfo {
  overallGpa: string;
  scale: string;
  honor: string;
  institution: string;
  program: string;
  status: string;
  degrees: DegreeMilestone[];
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  team: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  note: string;
  details: string[];
  gpa?: string;
}

export interface AboutData {
  fullName: string;
  title: string;
  tagline: string;
  location: string;
  philosophy: {
    quote: string;
    statement: string;
    body: string[];
  };
  bio: string[];
  artPractice: {
    title: string;
    medium: string;
    description: string;
    link: string;
    linkText: string;
  };
  originStory: {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  outsideWork: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export interface ContactData {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  artworkSite: string;
}

