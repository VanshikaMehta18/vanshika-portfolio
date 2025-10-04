import React from 'react';
import { resume } from './resumeData';
import ChatWidget from './components/ChatWidget';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
    <section id={id} style={{ padding: '32px 0', borderBottom: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>{title}</h2>
        {children}
    </section>
);

const Header: React.FC = () => (
    <header style={{ padding: '24px 0' }}>
        <h1 style={{ fontSize: 32, fontWeight: 800 }}>{resume.name}</h1>
        <p style={{ color: '#4b5563' }}>
            {resume.locationLine}
            {resume.email ? ` | ${resume.email}` : ''}
        </p>
        <nav style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
            {resume.links?.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer" style={{ color: '#2563eb' }}>
                    {l.label}
                </a>
            ))}
        </nav>
    </header>
);

const Education: React.FC = () => (
    <Section id="education" title="Education">
        <ul style={{ display: 'grid', gap: 16 }}>
            {resume.education.map((ed) => (
                <li key={ed.school}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                        <div>
                            <div style={{ fontWeight: 700 }}>{ed.school}</div>
                            <div>{ed.degree}</div>
                            {ed.location ? <div style={{ color: '#6b7280' }}>{ed.location}</div> : null}
                        </div>
                        <div style={{ color: '#6b7280' }}>
                            {ed.start} – {ed.end} {ed.gpa ? `• GPA ${ed.gpa}` : ''}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </Section>
);

const Skills: React.FC = () => (
    <Section id="skills" title="Skills">
        <div style={{ display: 'grid', gap: 12 }}>
            {resume.skills.map((cat) => (
                <div key={cat.name}>
                    <div style={{ fontWeight: 600 }}>{cat.name}</div>
                    <div style={{ color: '#374151' }}>{cat.items.join(', ')}</div>
                </div>
            ))}
        </div>
    </Section>
);

const Experience: React.FC = () => (
    <Section id="experience" title="Experience">
        <div style={{ display: 'grid', gap: 24 }}>
            {resume.experience.map((xp) => (
                <div key={`${xp.company}-${xp.title}`}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                        <div>
                            <div style={{ fontWeight: 700 }}>{xp.company}</div>
                            <div>{xp.title}</div>
                            {xp.location ? <div style={{ color: '#6b7280' }}>{xp.location}</div> : null}
                        </div>
                        <div style={{ color: '#6b7280' }}>
                            {xp.start} – {xp.end}
                        </div>
                    </div>
                    <ul style={{ marginTop: 8, paddingLeft: 18, display: 'grid', gap: 6 }}>
                        {xp.bullets.map((b, i) => (
                            <li key={i} style={{ color: '#374151' }}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

const Projects: React.FC = () => (
    <Section id="projects" title="Projects">
        <div style={{ display: 'grid', gap: 16 }}>
            {resume.projects.map((p) => (
                <div key={p.name}>
                    <div style={{ fontWeight: 600 }}>{p.name}</div>
                    <div style={{ color: '#374151' }}>{p.description}</div>
                    {p.tech && <div style={{ color: '#6b7280', marginTop: 4 }}>{p.tech.join(' • ')}</div>}
                    {p.links && (
                        <div style={{ display: 'flex', gap: 12, marginTop: 6, flexWrap: 'wrap' }}>
                            {p.links.map((l) => (
                                <a key={l.label} href={l.url} target="_blank" rel="noreferrer" style={{ color: '#2563eb' }}>
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

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px' }}>
        <Header />
        {children}
        <footer style={{ padding: '24px 0', color: '#6b7280' }}>
            © {new Date().getFullYear()} {resume.name}
        </footer>
    </div>
);

const App: React.FC = () => {
    return (
        <Layout>
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
    );
};

export default App;


