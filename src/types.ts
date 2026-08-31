export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend' | 'ai_cloud';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  categoryLabel: string;
  tags: string[];
  metrics: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  image: string;
  accentColor: string;
  highlights: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    devops: string;
  };
  challenges: string;
  solution: string;
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  iconName: string;
  proficiency: number; // 0 - 100
  experienceYears: number;
  highlight: string;
  popularWith: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Freelance';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  certificateUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface UserProfile {
  name: string;
  title: string;
  subtitle: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  whatsapp: string;
  availableForHire: boolean;
  avatarUrl: string;
  resumeUrl: string;
  stats: {
    yearsOfExperience: number;
    projectsCompleted: number;
    githubContributions: number;
    clientSatisfaction: number;
  };
}
