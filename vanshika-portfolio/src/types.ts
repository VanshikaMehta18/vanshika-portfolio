export type Link = {
    label: string;
    url: string;
};

export type Education = {
    school: string;
    degree: string;
    location?: string;
    start: string;
    end: string;
    details?: string[];
    gpa?: string;
    achievements?: string;
};

export type SkillCategory = {
    name: string;
    items: string[];
};

export type ExperienceItem = {
    company: string;
    title: string;
    location?: string;
    start: string;
    end: string;
    bullets: string[];
    category: 'Professional' | 'Research';
    skills: string[];
};

export type Project = {
    name: string;
    description: string;
    links?: Link[];
    tech?: string[];
    detailedDescription?: string;
    features?: string[];
    challenges?: string[];
    solutions?: string[];
    results?: string[];
    images?: string[];
    duration?: string;
    teamSize?: string;
    role?: string;
};

export type Recommendation = {
    name: string;
    title: string;
    relationship: string;
    text: string;
};

export type Resume = {
    name: string;
    locationLine?: string;
    email?: string;
    phone?: string;
    links?: Link[];
    summary?: string;
    education: Education[];
    skills: SkillCategory[];
    experience: ExperienceItem[];
    projects: Project[];
    recommendations?: Recommendation[];
};


