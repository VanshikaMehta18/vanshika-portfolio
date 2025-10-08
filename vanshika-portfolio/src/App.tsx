import React, { createContext, useContext, useState, useEffect } from 'react';
import { resume } from './resumeData';
import ChatWidget from './components/ChatWidget';
import profileVideo from '/profile-video.mp4';
import { 
    SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, 
    SiAmazon, SiGooglecloud, SiVercel, SiGit, SiGithubactions, SiJavascript, 
    SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiCplusplus, 
    SiApachespark, SiDatabricks, SiPandas, SiNumpy, 
    SiScikitlearn, SiTensorflow, SiPytorch, SiHuggingface, SiOpenai, SiLangchain,
    SiSupabase, SiFlask, SiFastapi, SiJupyter, SiTableau
} from 'react-icons/si';
import { FaDatabase, FaBrain, FaGem, FaRocket } from 'react-icons/fa';
import { GrCycle } from 'react-icons/gr';
import { LuBrainCircuit } from "react-icons/lu";
import { GiGears } from "react-icons/gi";
import { BsBoxes, BsKanban } from "react-icons/bs";
import { AiOutlineApartment } from "react-icons/ai";

// Theme Context
interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Theme Toggle Button
const ThemeToggle: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 1000,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: isDark ? '#374151' : '#f3f4f6',
                color: isDark ? '#f9fafb' : '#374151',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = isDark ? '#4b5563' : '#e5e7eb';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = isDark ? '#374151' : '#f3f4f6';
            }}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
};

const Navigation: React.FC = () => {
    const { isDark } = useTheme();
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sections = [
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' }
    ];

    return (
        <nav style={{ 
            display: 'flex', 
            gap: 12, 
            marginTop: 16, 
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: isDark ? '#374151' : '#f3f4f6',
                        border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: isDark ? '#f9fafb' : '#374151',
                        transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#4b5563' : '#e5e7eb';
                        e.currentTarget.style.borderColor = isDark ? '#6b7280' : '#9ca3af';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#374151' : '#f3f4f6';
                        e.currentTarget.style.borderColor = isDark ? '#4b5563' : '#d1d5db';
                    }}
                >
                    {section.label}
                </button>
            ))}
        </nav>
    );
};

const Recommendations: React.FC = () => {
    const { isDark } = useTheme();
    const [hovered, setHovered] = React.useState<number | null>(null);

    if (!resume.recommendations) {
        return null;
    }

    const recommendationCard = (rec: typeof resume.recommendations[0], index: number) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
                padding: '16px',
                border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
                borderRadius: '8px',
                backgroundColor: isDark ? '#1f2937' : '#f9fafb',
                transition: 'all 0.3s ease'
            }}
        >
            <p style={{
                margin: 0,
                color: isDark ? '#d1d5db' : '#374151',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: hovered === index ? 'unset' : 3,
                WebkitBoxOrient: 'vertical',
                cursor: 'pointer'
            }}>
                {rec.text}
            </p>
            <div style={{ marginTop: '12px', textAlign: 'right' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: isDark ? '#f9fafb' : '#111827' }}>- {rec.name}</p>
                <p style={{ margin: 0, fontSize: '14px', color: isDark ? '#9ca3af' : '#6b7280' }}>{rec.title}</p>
            </div>
        </div>
    );

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px'
        }}>
            {resume.recommendations.map((rec, index) => recommendationCard(rec, index))}
        </div>
    );
};

const HorizontalDivider: React.FC = () => {
    const { isDark } = useTheme();
    return (
        <div style={{
            height: '1px',
            backgroundColor: isDark ? '#374151' : '#e5e7eb',
            margin: '48px 0'
        }} />
    );
};

const About: React.FC = () => {
    const { isDark } = useTheme();
    const summary = `I'm a problem-solver who enjoys making complex things simple.
I bring strong technical skills along with patience and clear communication, so I can support both projects and people.
I like to take initiative, learn quickly, and stay adaptable.
Teammates know me for being reliable, thoughtful, and focused on getting results without losing the human touch.`;
    const summaryPoints = summary.split('\n');

    return (
        <section style={{
            padding: '48px 0',
            borderBottom: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                alignItems: 'center',
                gap: '48px',
            }}>
                <div>
                    <ul style={{
                        fontSize: '18px',
                        lineHeight: 1.6,
                        color: isDark ? '#d1d5db' : '#374151',
                        margin: 0,
                        paddingLeft: '24px'
                    }}>
                        {summaryPoints.map((point, index) => (
                            <li key={index} style={{ paddingBottom: index === summaryPoints.length - 1 ? 0 : '12px' }}>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    justifySelf: 'center',
                    boxShadow: `0 4px 12px rgba(0, 0, 0, ${isDark ? 0.3 : 0.1})`
                }}>
                    <video
                        src={profileVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>

            <HorizontalDivider />

            <Recommendations />

            <HorizontalDivider />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Navigation />
            </div>
        </section>
    );
};

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => {
    const { isDark } = useTheme();
    
    return (
        <section id={id} style={{ 
            padding: '32px 0', 
            borderBottom: `1px solid ${isDark ? '#374151' : '#e5e7eb'}` 
        }}>
            <h2 style={{ 
                fontSize: 24, 
                fontWeight: 700, 
                marginBottom: 16,
                color: isDark ? '#f9fafb' : '#111827'
            }}>{title}</h2>
        {children}
    </section>
);
};

const Header: React.FC = () => {
    const { isDark } = useTheme();
    
    return (
        <header style={{ padding: '24px 0', textAlign: 'center' }}>
            <h1 style={{ 
                fontSize: 40, 
                fontWeight: 800,
                color: isDark ? '#f9fafb' : '#111827',
                margin: '0 0 8px'
            }}>{resume.name}</h1>
            <p style={{ 
                color: isDark ? '#9ca3af' : '#4b5563',
                fontSize: '18px',
                margin: '0 0 16px'
            }}>
            {resume.locationLine}
            {resume.email ? (
                <>
                    {` | `}
                    <a 
                        href={`mailto:${resume.email}`}
                        style={{ color: isDark ? '#60a5fa' : '#2563eb', textDecoration: 'none' }}
                        onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
                    >
                        {resume.email}
                    </a>
                </>
            ) : ''}
                {resume.phone ? ` | ${resume.phone}` : ''}
        </p>
            <nav style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {resume.links?.map((l) => (
                    <a 
                        key={l.label} 
                        href={l.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ 
                            color: isDark ? '#60a5fa' : '#2563eb',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.textDecoration = 'none';
                        }}
                    >
                    {l.label}
                </a>
            ))}
        </nav>
    </header>
);
};

const Education: React.FC = () => {
    const { isDark } = useTheme();

    return (
    <Section id="education" title="Education">
        <ul style={{ display: 'grid', gap: 16 }}>
            {resume.education.map((ed) => (
                <li key={ed.school}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                        <div>
                                <div style={{ fontWeight: 700, color: isDark ? '#f9fafb' : '#111827' }}>{ed.school}</div>
                                <div style={{ color: isDark ? '#d1d5db' : '#374151' }}>{ed.degree}</div>
                                {ed.achievements && <div style={{ fontStyle: 'italic', color: isDark ? '#9ca3af' : '#6b7280' }}>{ed.achievements}</div>}
                                {ed.location ? <div style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>{ed.location}</div> : null}
                        </div>
                            <div style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                            {ed.start} – {ed.end} {ed.gpa ? `• GPA ${ed.gpa}` : ''}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </Section>
);
};

const Skills: React.FC = () => {
    const { isDark } = useTheme();

    const iconMap: { [key: string]: React.ReactElement } = {
        'Python': <SiPython />, 'SQL': <FaDatabase />, 'R': <SiPython />, 'JavaScript': <SiJavascript />, 'TypeScript': <SiTypescript />,
        'React': <SiReact />, 'Next.js': <SiNextdotjs />, 'LLMs/Prompt Engineering': <FaBrain />, 'LangChain': <SiLangchain />, 'HuggingFace': <SiHuggingface />, 'NLP': <LuBrainCircuit />, 'CV': <AiOutlineApartment />,
        'GCP': <SiGooglecloud />, 'BigQuery': <SiGooglecloud />, 'Vertex AI': <SiGooglecloud />, 'Pub/Sub': <SiGooglecloud />, 'Dataflow': <SiGooglecloud />, 'Docker': <SiDocker />, 'Supabase': <SiSupabase />,
        'FastAPI': <SiFastapi />, 'Flask': <SiFlask />, 'Tableau/Looker': <SiTableau />, 'Airflow': <SiApachespark />, 'Spark/Datroc': <SiApachespark />, 'GitHub Actions': <SiGithubactions />, 'Git': <SiGit />,
        'Vercel': <SiVercel />, 'Netlify': <SiVercel />, 'Postman': <FaRocket />, 'Jupyter': <SiJupyter />, 'VS Code': <FaRocket />,
        'Agentic AI': <FaBrain />, 'CrewAI': <GiGears />, 'Langflow': <BsKanban />, 'LangGraph': <AiOutlineApartment />,
        'Retrieval Augmented Generation': <GrCycle />, 'Computer Vision': <AiOutlineApartment />, 'PyTorch': <SiPytorch />, 'TensorFlow': <SiTensorflow />,
        'OpenAI': <SiOpenai />, 'Gemini': <FaGem />, 'Scikit-learn': <SiScikitlearn />, 'Pandas': <SiPandas />, 'NumPy': <SiNumpy />, 'SageMaker': <SiAmazon />,
        'AWS': <SiAmazon />, 'Bootstrap': <SiBootstrap />, 'C++': <SiCplusplus />, 'CSS': <SiCss3 />, 'Databricks': <SiDatabricks />,
        'ETL': <BsBoxes />, 'HTML': <SiHtml5 />, 'MongoDB': <SiMongodb />, 'Node.js': <SiNodedotjs />, 'PostgreSQL': <SiPostgresql />,
        'Power BI': <FaRocket />, 'PySpark': <SiApachespark />, 'TailwindCSS': <SiTailwindcss />, 'Transformers': <FaBrain />
    };

    const allSkills = resume.skills.flatMap(category => category.items);
    const uniqueSkills = [...new Set(allSkills)];

    return (
        <Section id="skills" title="">
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    background: isDark 
                        ? 'linear-gradient(90deg, #5eead4, #a78bfa, #f472b6)'
                        : 'linear-gradient(90deg, #0d9488, #7c3aed, #c026d3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '32px'
                }}>
                    Skills
                </h2>
            </div>
            <div style={{
                background: isDark ? 'rgba(22, 29, 47, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    justifyContent: 'center'
                }}>
                    {uniqueSkills.map(skill => (
                        <div key={skill} style={{
                            background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                            padding: '10px 16px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '16px',
                            fontWeight: 500,
                            color: isDark ? '#e5e7eb' : '#374151',
                            transition: 'transform 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                        >
                            <span style={{ fontSize: '20px', color: isDark ? '#9ca3af' : '#4b5563' }}>
                                {iconMap[skill] || <FaBrain />}
                            </span>
                            {skill}
                </div>
            ))}
                </div>
        </div>
    </Section>
);
};

const Experience: React.FC = () => {
    const { isDark } = useTheme();
    const [hovered, setHovered] = useState<string | null>(null);

    const professionalXp = resume.experience.filter(xp => xp.category === 'Professional');
    const researchXp = resume.experience.filter(xp => xp.category === 'Research');

    const ExperienceCard: React.FC<{ xp: typeof resume.experience[0] }> = ({ xp }) => (
        <div 
            key={`${xp.company}-${xp.title}`} 
            style={{
                border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s ease',
                transform: hovered === xp.company ? 'scale(1.03)' : 'scale(1)',
                boxShadow: hovered === xp.company ? `0 8px 30px rgba(0,0,0,${isDark ? 0.3 : 0.1})` : 'none'
            }}
            onMouseEnter={() => setHovered(xp.company)}
            onMouseLeave={() => setHovered(null)}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: '16px' }}>
                        <div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: isDark ? '#f9fafb' : '#111827' }}>{xp.company}</div>
                    <div style={{ color: isDark ? '#d1d5db' : '#374151' }}>{xp.title}</div>
                    {xp.location && <div style={{ fontSize: '14px', color: isDark ? '#9ca3af' : '#6b7280' }}>{xp.location}</div>}
                        </div>
                <div style={{ fontSize: '14px', color: isDark ? '#9ca3af' : '#6b7280', textAlign: 'right' }}>
                            {xp.start} – {xp.end}
                        </div>
                    </div>

            {hovered === xp.company ? (
                <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 8 }}>
                        {xp.bullets.map((b, i) => (
                        <li key={i} style={{ color: isDark ? '#d1d5db' : '#374151' }}>{b}</li>
                        ))}
                    </ul>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                    {xp.skills.map(skill => (
                        <span key={skill} style={{
                            background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                            padding: '6px 12px',
                            borderRadius: '12px',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: isDark ? '#cbd5e1' : '#475569'
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <Section id="experience" title="Experience">
            <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr auto 2fr',
                gap: '48px',
                alignItems: 'start'
            }}>
                <div>
                    <h3 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '22px', color: isDark ? '#e5e7eb' : '#374151' }}>
                        Professional Experience
                    </h3>
                    <div style={{ display: 'grid', gap: '24px' }}>
                        {professionalXp.map((xp) => <ExperienceCard xp={xp} />)}
                    </div>
                </div>

                <div style={{
                    width: '1px',
                    backgroundColor: isDark ? '#374151' : '#e5e7eb',
                    height: '100%'
                }}></div>

                <div>
                    <h3 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '22px', color: isDark ? '#e5e7eb' : '#374151' }}>
                        Research Experience
                    </h3>
                    <div style={{ display: 'grid', gap: '24px' }}>
                        {researchXp.map((xp) => <ExperienceCard xp={xp} />)}
                    </div>
                </div>
        </div>
    </Section>
);
};

const Projects: React.FC = () => {
    const { isDark } = useTheme();

    return (
    <Section id="projects" title="Projects">
        <div style={{ display: 'grid', gap: 16 }}>
            {resume.projects.map((p) => (
                    <div key={p.name} style={{
                        border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                        borderRadius: '16px',
                        padding: '24px',
                        transition: 'border-color 0.3s ease',
                    }}>
                        <div style={{ fontWeight: 600, color: isDark ? '#f9fafb' : '#111827' }}>{p.name}</div>
                        <div style={{ color: isDark ? '#d1d5db' : '#374151' }}>{p.description}</div>
                        {p.tech && <div style={{ color: isDark ? '#9ca3af' : '#6b7280', marginTop: 4 }}>{p.tech.join(' • ')}</div>}
                    {p.links && (
                        <div style={{ display: 'flex', gap: 12, marginTop: 6, flexWrap: 'wrap' }}>
                            {p.links.map((l) => (
                                    <a 
                                        key={l.label} 
                                        href={l.url} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        style={{ 
                                            color: isDark ? '#60a5fa' : '#2563eb',
                                            textDecoration: 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.textDecoration = 'underline';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.textDecoration = 'none';
                                        }}
                                    >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </Section>
);
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isDark } = useTheme();
    
    return (
        <div style={{ 
            maxWidth: 900, 
            margin: '0 auto', 
            padding: '24px',
            backgroundColor: isDark ? '#111827' : '#ffffff',
            color: isDark ? '#f9fafb' : '#111827',
            minHeight: '100vh',
            transition: 'background-color 0.3s ease, color 0.3s ease'
        }}>
        <Header />
        {children}
            <footer style={{ 
                padding: '24px 0', 
                color: isDark ? '#9ca3af' : '#6b7280',
                borderTop: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
            }}>
            © {new Date().getFullYear()} {resume.name}
        </footer>
    </div>
);
};

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ThemeToggle />
        <Layout>
                <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            {/* Live Chat Widget - Tawk.to Integration */}
            <ChatWidget 
                provider="tawk" 
                tawk={{ 
                    propertyId: '68e13bb2385fee1952fe51bb',
                    widgetId: '1j6nt2cs8'
                }} 
                position="bottom-right"
                theme="light"
            />
        </Layout>
        </ThemeProvider>
    );
};

export default App;


