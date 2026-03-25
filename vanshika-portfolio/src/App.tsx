import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import ChatWidget from './components/ChatWidget';
import ProjectDetail from './components/ProjectDetail';
import { resume } from './resumeData';
import type { Project } from './types';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const heroCards = [
    { label: 'llm systems', tone: 'lime', x: -220, y: -120, rotate: -18, exitStart: 0.08, exitEnd: 0.24 },
    { label: 'agent workflows', tone: 'sky', x: 260, y: -80, rotate: 14, exitStart: 0.18, exitEnd: 0.34 },
    { label: 'data platforms', tone: 'violet', x: -260, y: 120, rotate: 11, exitStart: 0.28, exitEnd: 0.44 },
    { label: 'analyst tooling', tone: 'orange', x: 220, y: 140, rotate: -12, exitStart: 0.38, exitEnd: 0.54 },
    { label: 'ai products', tone: 'mint', x: 20, y: 220, rotate: 8, exitStart: 0.48, exitEnd: 0.66 },
];

const sectionNav = [
    { id: 'story', label: 'Story' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'products', label: 'Products' },
    { id: 'connect', label: 'Connect' },
];

const projectAccents = ['#a3e635', '#7dd3fc', '#c4b5fd', '#fdba74', '#86efac', '#f9a8d4'];

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <ThemeContext.Provider
            value={{
                isDark,
                toggleTheme: () => setIsDark((current) => !current),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const ThemeToggle: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button className="theme-toggle" onClick={toggleTheme} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? <FaSun /> : <FaMoon />}
        </button>
    );
};

const SiteHeader: React.FC = () => {
    return (
        <header className="site-header">
            <div className="brand-mark">
                <span className="brand-orb" />
                <div>
                    <p className="brand-name">{resume.name}</p>
                    <p className="brand-subtitle">Specialize in AI and Data with 3+ years of experience</p>
                </div>
            </div>

            <nav className="site-nav" aria-label="Primary">
                {sectionNav.map((item) => (
                    <button key={item.id} className="nav-link" onClick={() => scrollToSection(item.id)}>
                        {item.label}
                    </button>
                ))}
            </nav>

            <a className="nav-cta" href={`mailto:${resume.email}`}>
                Say "Hello!"
            </a>
        </header>
    );
};

const HeroCard: React.FC<{ card: (typeof heroCards)[number]; index: number; progress: any }> = ({ card, index, progress }) => {
    const x = useTransform(progress, [card.exitStart, card.exitEnd], [0, card.x]);
    const y = useTransform(progress, [card.exitStart, card.exitEnd], [0, card.y]);
    const rotate = useTransform(progress, [card.exitStart, card.exitEnd], [card.rotate / 4, card.rotate]);
    const scale = useTransform(progress, [card.exitStart, card.exitEnd], [1, 0.88]);
    const opacity = useTransform(progress, [card.exitStart, card.exitEnd], [1, 0]);

    return (
        <motion.div
            className={`hero-card tone-${card.tone}`}
            style={{
                x,
                y,
                rotate,
                scale,
                opacity,
                zIndex: heroCards.length - index,
            }}
        >
            {card.label}
        </motion.div>
    );
};

const LandingHero: React.FC = () => {
    const heroRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const headingY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.2]);

    return (
        <section id="story" ref={heroRef} className="hero-section">
            <div className="hero-sticky">
                <motion.div className="hero-copy" style={{ y: headingY, opacity: headingOpacity }}>
                    <p className="eyebrow">AI engineer / LLM builder / data engineer / analyst</p>
                    <h1>making sense; for computers and with them</h1>
                    <p className="hero-description">
                        I build thoughtful AI products, retrieval systems, data pipelines, and decision-ready analytics that help teams move from messy signals to confident action.
                    </p>
                    <div className="hero-actions">
                        <button className="primary-button" onClick={() => scrollToSection('products')}>
                            Explore work
                            <FaArrowRight />
                        </button>
                        <button className="secondary-button" onClick={() => scrollToSection('connect')}>
                            Let&apos;s build something
                        </button>
                    </div>
                    <div className="hero-meta">
                        <span>{resume.locationLine}</span>
                        <span>MS in ML/AI</span>
                        <span>Shipping production-first AI</span>
                    </div>
                </motion.div>

                <div className="hero-cards-cluster" aria-hidden="true">
                    {heroCards.map((card, index) => (
                        <HeroCard key={card.label} card={card} index={index} progress={scrollYProgress} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SectionHeading: React.FC<{ kicker: string; title: string; description: string }> = ({ kicker, title, description }) => (
    <div className="section-heading">
        <p className="section-kicker">{kicker}</p>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);

const StorySection: React.FC = () => {
    const highlights = [
        'Production-minded AI systems with a strong product sense.',
        'From ingestion and ETL to RAG, analytics, and frontend experiences.',
        'A mix of engineering rigor, experimentation, and clear storytelling.',
    ];

    return (
        <section className="content-section">
            <div className="story-grid">
                <div className="story-panel glass-card">
                    <SectionHeading
                        kicker="What I do"
                        title="I translate ambiguity into useful systems."
                        description="My work usually lives at the intersection of AI engineering, data engineering, analytics, and product thinking."
                    />
                    <div className="story-points">
                        {highlights.map((item) => (
                            <div key={item} className="story-point">
                                <span className="story-bullet" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="story-panel accent-panel">
                    <p className="handwritten-note">when teams need clarity, speed, and systems that can actually scale...</p>
                    <div className="metric-stack">
                        <div>
                            <strong>15+</strong>
                            <span>portfolio projects shipped across AI, data, and analytics</span>
                        </div>
                        <div>
                            <strong>6</strong>
                            <span>roles spanning product engineering, research, and data work</span>
                        </div>
                        <div>
                            <strong>1 goal</strong>
                            <span>build products that feel technically sharp and human-centered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="content-section">
            <SectionHeading
                kicker="Skills"
                title="Tools I reach for when the problem gets interesting."
                description="A mix of LLM infrastructure, application engineering, cloud data systems, and analytics."
            />
            <div className="skill-grid">
                {resume.skills.map((category, index) => (
                    <article
                        key={category.name}
                        className="glass-card skill-card"
                        style={{ ['--accent' as string]: projectAccents[index % projectAccents.length] }}
                    >
                        <p className="skill-card-title">{category.name}</p>
                        <div className="skill-chip-wrap">
                            {category.items.map((item) => (
                                <span key={item} className="skill-chip">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

const ExperienceSection: React.FC = () => {
    const grouped = useMemo(
        () => ({
            professional: resume.experience.filter((item) => item.category === 'Professional'),
            research: resume.experience.filter((item) => item.category === 'Research'),
        }),
        []
    );

    return (
        <section id="experience" className="content-section">
            <SectionHeading
                kicker="Experience"
                title="Built across startups, research labs, and fast-moving product teams."
                description="The common thread is turning complex data or AI requirements into something real, reliable, and useful."
            />

            <div className="experience-columns">
                {[
                    { title: 'Professional', items: grouped.professional },
                    { title: 'Research', items: grouped.research },
                ].map((group) => (
                    <div key={group.title} className="experience-column">
                        <div className="column-label">{group.title}</div>
                        <div className="experience-stack">
                            {group.items.map((xp) => (
                                <article key={`${xp.company}-${xp.title}`} className="glass-card experience-card">
                                    <div className="experience-header">
                                        <div>
                                            <h3>{xp.title}</h3>
                                            <p>{xp.company}</p>
                                        </div>
                                        <span>{xp.start} - {xp.end}</span>
                                    </div>
                                    {xp.location ? <div className="experience-location">{xp.location}</div> : null}
                                    <ul className="experience-bullets">
                                        {xp.bullets.slice(0, 3).map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                    <div className="skill-chip-wrap compact">
                                        {xp.skills.map((skill) => (
                                            <span key={skill} className="skill-chip">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ProductsSection: React.FC<{ onProjectClick: (project: Project) => void }> = ({ onProjectClick }) => {
    const railRef = useRef<HTMLDivElement | null>(null);

    const scrollRail = (direction: number) => {
        railRef.current?.scrollBy({
            left: direction * 420,
            behavior: 'smooth',
        });
    };

    return (
        <section id="products" className="content-section">
            <div className="products-heading-row">
                <SectionHeading
                    kicker="Products"
                    title="I&apos;ve also built products like"
                    description="A horizontally scrollable set of AI, data, and analytics products with different flavors of execution."
                />
                <div className="rail-controls" aria-label="Scroll product cards">
                    <button className="rail-button" onClick={() => scrollRail(-1)}>
                        <FaChevronLeft />
                    </button>
                    <button className="rail-button" onClick={() => scrollRail(1)}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <div ref={railRef} className="products-rail">
                {resume.projects.map((project, index) => (
                    <article
                        key={project.name}
                        className="product-card"
                        onClick={() => onProjectClick(project)}
                        style={{ ['--accent' as string]: projectAccents[index % projectAccents.length] }}
                    >
                        <div className="product-card-top">
                            <span className="product-badge">0{index + 1}</span>
                            <span className="product-arrow">
                                <FaArrowRight />
                            </span>
                        </div>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="product-tech">
                            {(project.tech || []).slice(0, 4).map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                        <div className="product-footer">
                            <span>{project.role || 'AI + data product'}</span>
                            <span>Open case study</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

const RecommendationsSection: React.FC = () => {
    if (!resume.recommendations?.length) {
        return null;
    }

    return (
        <section className="content-section">
            <SectionHeading
                kicker="Proof"
                title="What people noticed while working with me."
                description="A few signals from managers and collaborators across product and research work."
            />
            <div className="recommendation-grid">
                {resume.recommendations.map((recommendation, index) => (
                    <article
                        key={recommendation.name}
                        className="glass-card recommendation-card"
                        style={{ ['--accent' as string]: projectAccents[index % projectAccents.length] }}
                    >
                        <p className="recommendation-text">"{recommendation.text}"</p>
                        <div className="recommendation-author">
                            <strong>{recommendation.name}</strong>
                            <span>{recommendation.title}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

const EducationSection: React.FC = () => {
    return (
        <section id="education" className="content-section">
            <SectionHeading
                kicker="Education"
                title="The academic foundation."
                description="Formal training in machine learning, AI, and computer engineering with a strong applied focus."
            />
            <div className="education-grid">
                {resume.education.map((item, index) => (
                    <article
                        key={item.school}
                        className="glass-card education-card"
                        style={{ ['--accent' as string]: projectAccents[index % projectAccents.length] }}
                    >
                        <p className="education-period">{item.start} - {item.end}</p>
                        <h3>{item.school}</h3>
                        <p className="education-degree">{item.degree}</p>
                        {item.location ? <p className="education-detail">{item.location}</p> : null}
                        {item.achievements ? <p className="education-detail">{item.achievements}</p> : null}
                        {item.gpa ? <p className="education-detail">GPA: {item.gpa}</p> : null}
                    </article>
                ))}
            </div>
        </section>
    );
};

const ConnectSection: React.FC = () => {
    return (
        <section id="connect" className="content-section">
            <div className="connect-panel">
                <div>
                    <p className="section-kicker">Connect</p>
                    <h2>Need an AI engineer who can also think in products and data?</h2>
                    <p>
                        I like working on systems that need strong judgment, clean implementation, and a clear path from prototype to production.
                    </p>
                </div>

                <div className="connect-links">
                    <a className="primary-button" href={`mailto:${resume.email}`}>
                        Email me
                        <FaArrowRight />
                    </a>
                    <a className="secondary-button external" href="https://github.com/VanshikaMehta18" target="_blank" rel="noreferrer">
                        <FaGithub />
                        GitHub
                    </a>
                    <a className="secondary-button external" href="https://www.linkedin.com/in/vanshika-mehal-mehta/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    <a className="secondary-button external" href="https://medium.com/@vanshika.mehta" target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt />
                        Medium
                    </a>
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC = () => (
    <footer className="site-footer">
        <span>© {new Date().getFullYear()} {resume.name}</span>
        <span>{resume.phone}</span>
    </footer>
);

const HomePage: React.FC<{ onProjectClick: (project: Project) => void }> = ({ onProjectClick }) => {
    return (
        <main className="page-shell">
            <SiteHeader />
            <LandingHero />
            <StorySection />
            <SkillsSection />
            <ExperienceSection />
            <ProductsSection onProjectClick={onProjectClick} />
            <RecommendationsSection />
            <EducationSection />
            <ConnectSection />
            <Footer />
        </main>
    );
};

const App: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <ThemeProvider>
            <ThemeToggle />
            {selectedProject ? (
                <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
            ) : (
                <HomePage onProjectClick={setSelectedProject} />
            )}
            <ChatWidget
                provider="tawk"
                tawk={{
                    propertyId: '68e13bb2385fee1952fe51bb',
                    widgetId: '1j6nt2cs8',
                }}
                position="bottom-right"
                theme="light"
            />
        </ThemeProvider>
    );
};

export default App;


