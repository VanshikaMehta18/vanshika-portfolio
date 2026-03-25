import React from 'react';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../App';
import type { Project } from '../types';

interface ProjectDetailProps {
    project: Project;
    onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
    const { isDark } = useTheme();
    const accent = isDark ? '#a3e635' : '#84cc16';

    const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
        <section className="detail-section glass-card" style={{ ['--accent' as string]: accent }}>
            <div className="detail-section-header">
                <p className="section-kicker">Case Study</p>
                <h2>{title}</h2>
            </div>
            {children}
        </section>
    );

    return (
        <main className="page-shell detail-shell">
            <div className="detail-hero glass-card" style={{ ['--accent' as string]: accent }}>
                <div className="detail-topbar">
                    <button className="secondary-button" onClick={onBack}>
                        <FaArrowLeft />
                        Back to products
                    </button>
                    <span className="detail-tag">Detailed case study</span>
                </div>

                <div className="detail-title-wrap">
                    <p className="section-kicker">Featured Product</p>
                    <h1>{project.name}</h1>
                    <p className="detail-summary">{project.detailedDescription || project.description}</p>
                </div>

                <div className="detail-meta-grid">
                    {project.duration ? (
                        <article className="detail-meta-card">
                            <span>Duration</span>
                            <strong>{project.duration}</strong>
                        </article>
                    ) : null}
                    {project.role ? (
                        <article className="detail-meta-card">
                            <span>Role</span>
                            <strong>{project.role}</strong>
                        </article>
                    ) : null}
                    {project.teamSize ? (
                        <article className="detail-meta-card">
                            <span>Team</span>
                            <strong>{project.teamSize}</strong>
                        </article>
                    ) : null}
                </div>

                {project.tech?.length ? (
                    <div className="detail-tech-wrap">
                        {project.tech.map((tech) => (
                            <span key={tech} className="skill-chip">
                                {tech}
                            </span>
                        ))}
                    </div>
                ) : null}
            </div>

            {project.features?.length ? (
                <DetailSection title="What it does">
                    <ul className="detail-list">
                        {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </DetailSection>
            ) : null}

            {(project.challenges?.length || project.solutions?.length) ? (
                <div className="detail-two-column">
                    {project.challenges?.length ? (
                        <DetailSection title="Challenges">
                            <ul className="detail-list">
                                {project.challenges.map((challenge) => (
                                    <li key={challenge}>{challenge}</li>
                                ))}
                            </ul>
                        </DetailSection>
                    ) : null}

                    {project.solutions?.length ? (
                        <DetailSection title="How I solved it">
                            <ul className="detail-list">
                                {project.solutions.map((solution) => (
                                    <li key={solution}>{solution}</li>
                                ))}
                            </ul>
                        </DetailSection>
                    ) : null}
                </div>
            ) : null}

            {project.results?.length ? (
                <DetailSection title="Results and impact">
                    <ul className="detail-list">
                        {project.results.map((result) => (
                            <li key={result}>{result}</li>
                        ))}
                    </ul>
                </DetailSection>
            ) : null}

            {project.links?.length ? (
                <section className="detail-links-row">
                    {project.links.map((link) => (
                        <a key={link.label} className="primary-button" href={link.url} target="_blank" rel="noreferrer">
                            {link.label}
                            <FaExternalLinkAlt />
                        </a>
                    ))}
                    <button className="secondary-button" onClick={onBack}>
                        More products
                        <FaArrowRight />
                    </button>
                </section>
            ) : null}
        </main>
    );
};

export default ProjectDetail;
