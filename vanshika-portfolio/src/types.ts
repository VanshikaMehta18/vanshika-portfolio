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
};

export type Project = {
    name: string;
    description: string;
    links?: Link[];
    tech?: string[];
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
};


