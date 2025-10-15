import React from 'react';
import { useTheme } from '../App';
import type { Project } from '../types';
import { 
    SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, 
    SiAmazon, SiGooglecloud, SiVercel, SiGit, SiGithubactions, SiJavascript, 
    SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiCplusplus, 
    SiApachespark, SiDatabricks, SiPandas, SiNumpy, 
    SiScikitlearn, SiTensorflow, SiPytorch, SiHuggingface, SiOpenai, SiLangchain,
    SiSupabase, SiFlask, SiFastapi, SiJupyter, SiTableau
} from 'react-icons/si';
import { FaDatabase, FaBrain, FaGem, FaRocket, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { GrCycle } from 'react-icons/gr';
import { LuBrainCircuit } from "react-icons/lu";
import { GiGears } from "react-icons/gi";
import { BsBoxes, BsKanban } from "react-icons/bs";
import { AiOutlineApartment } from "react-icons/ai";

interface ProjectDetailProps {
    project: Project;
    onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
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
        'Power BI': <FaRocket />, 'PySpark': <SiApachespark />, 'TailwindCSS': <SiTailwindcss />, 'Transformers': <FaBrain />,
        'ML': <FaBrain />, 'LLM': <FaBrain />, 'DAX': <FaDatabase />, 'PowerBI': <SiTableau />,
        'Phi-3': <FaBrain />, 'NeMo Guardrails': <FaBrain />, 'Whisper': <FaBrain />, 'Streamlit': <FaRocket />,
        'Azure': <SiAmazon />, 'Parquet': <FaDatabase />, 'React Native': <SiReact />, 'Firebase': <FaRocket />, 'OpenAI API': <SiOpenai />
    };

    const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
        <div style={{ marginBottom: '32px' }}>
            <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: isDark ? '#f9fafb' : '#111827',
                marginBottom: '16px',
                borderBottom: `2px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                paddingBottom: '8px'
            }}>
                {title}
            </h3>
            {children}
        </div>
    );

    const InfoCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
        <div style={{
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
            padding: '12px 16px',
            borderRadius: '8px',
            border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
        }}>
            <div style={{
                fontSize: '12px',
                fontWeight: '500',
                color: isDark ? '#9ca3af' : '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '4px'
            }}>
                {label}
            </div>
            <div style={{
                fontSize: '14px',
                color: isDark ? '#f9fafb' : '#111827',
                fontWeight: '500'
            }}>
                {value}
            </div>
        </div>
    );

    return (
        <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '24px',
            backgroundColor: isDark ? '#111827' : '#ffffff',
            color: isDark ? '#f9fafb' : '#111827',
            minHeight: '100vh'
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
                paddingBottom: '24px',
                borderBottom: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
            }}>
                <button
                    onClick={onBack}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        backgroundColor: isDark ? '#374151' : '#f3f4f6',
                        border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: isDark ? '#f9fafb' : '#374151',
                        transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#4b5563' : '#e5e7eb';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#374151' : '#f3f4f6';
                    }}
                >
                    <FaArrowLeft />
                    Back to Projects
                </button>
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: isDark ? '#f9fafb' : '#111827',
                    margin: 0
                }}>
                    {project.name}
                </h1>
            </div>

            {/* Project Info Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '32px'
            }}>
                {project.duration && <InfoCard label="Duration" value={project.duration} />}
                {project.role && <InfoCard label="Role" value={project.role} />}
                {project.teamSize && <InfoCard label="Team Size" value={project.teamSize} />}
            </div>

            {/* Description */}
            <Section title="Project Overview">
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: isDark ? '#d1d5db' : '#374151',
                    margin: 0
                }}>
                    {project.detailedDescription || project.description}
                </p>
            </Section>

            {/* Tech Stack */}
            {project.tech && (
                <Section title="Technology Stack">
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px'
                    }}>
                        {project.tech.map(tech => (
                            <div key={tech} style={{
                                background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '14px',
                                fontWeight: '500',
                                color: isDark ? '#e5e7eb' : '#374151',
                                border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                                transition: 'transform 0.2s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                            >
                                <span style={{ fontSize: '16px', color: isDark ? '#9ca3af' : '#4b5563' }}>
                                    {iconMap[tech] || <FaBrain />}
                                </span>
                                {tech}
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* Features */}
            {project.features && (
                <Section title="Key Features">
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'grid',
                        gap: '12px'
                    }}>
                        {project.features.map((feature, index) => (
                            <li key={index} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '12px',
                                background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                                borderRadius: '8px',
                                border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
                            }}>
                                <div style={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    backgroundColor: isDark ? '#60a5fa' : '#2563eb',
                                    marginTop: '8px',
                                    flexShrink: 0
                                }} />
                                <span style={{
                                    fontSize: '15px',
                                    lineHeight: '1.5',
                                    color: isDark ? '#d1d5db' : '#374151'
                                }}>
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.solutions && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
                    <Section title="Challenges">
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'grid',
                            gap: '12px'
                        }}>
                            {project.challenges.map((challenge, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    padding: '12px',
                                    background: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)',
                                    borderRadius: '8px',
                                    border: `1px solid ${isDark ? '#dc2626' : '#fecaca'}`
                                }}>
                                    <div style={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        backgroundColor: '#ef4444',
                                        marginTop: '8px',
                                        flexShrink: 0
                                    }} />
                                    <span style={{
                                        fontSize: '15px',
                                        lineHeight: '1.5',
                                        color: isDark ? '#fca5a5' : '#dc2626'
                                    }}>
                                        {challenge}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section title="Solutions">
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'grid',
                            gap: '12px'
                        }}>
                            {project.solutions.map((solution, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    padding: '12px',
                                    background: isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)',
                                    borderRadius: '8px',
                                    border: `1px solid ${isDark ? '#22c55e' : '#bbf7d0'}`
                                }}>
                                    <div style={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        backgroundColor: '#22c55e',
                                        marginTop: '8px',
                                        flexShrink: 0
                                    }} />
                                    <span style={{
                                        fontSize: '15px',
                                        lineHeight: '1.5',
                                        color: isDark ? '#86efac' : '#16a34a'
                                    }}>
                                        {solution}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Section>
                </div>
            )}

            {/* Results */}
            {project.results && (
                <Section title="Results & Impact">
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'grid',
                        gap: '12px'
                    }}>
                        {project.results.map((result, index) => (
                            <li key={index} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '12px',
                                background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                                borderRadius: '8px',
                                border: `1px solid ${isDark ? '#3b82f6' : '#bfdbfe'}`
                            }}>
                                <div style={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    backgroundColor: '#3b82f6',
                                    marginTop: '8px',
                                    flexShrink: 0
                                }} />
                                <span style={{
                                    fontSize: '15px',
                                    lineHeight: '1.5',
                                    color: isDark ? '#93c5fd' : '#2563eb'
                                }}>
                                    {result}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* Links */}
            {project.links && project.links.length > 0 && (
                <Section title="Project Links">
                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap'
                    }}>
                        {project.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 20px',
                                    backgroundColor: isDark ? '#374151' : '#f3f4f6',
                                    border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    color: isDark ? '#60a5fa' : '#2563eb',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = isDark ? '#4b5563' : '#e5e7eb';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = isDark ? '#374151' : '#f3f4f6';
                                    e.currentTarget.style.transform = 'translateY(0px)';
                                }}
                            >
                                <FaExternalLinkAlt />
                                {link.label}
                            </a>
                        ))}
                    </div>
                </Section>
            )}
        </div>
    );
};

export default ProjectDetail;
