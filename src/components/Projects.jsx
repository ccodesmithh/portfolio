import React from 'react';

const ProjectCard = ({ title, desc, href }) => (
  <article className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-desc">{desc}</p>
    {href && (
      <a href={href} className="project-cta" target="_blank" rel="noreferrer">View</a>
    )}
  </article>
);

const Projects = ({ projects = [], className='' }) => {
  const items = projects.length
    ? projects
    : [
        { title: 'Project Satu', desc: 'Deskripsi di sini.', href: '#' },
        { title: 'Project Dua', desc: 'Deskripsi di sini.', href: '#' },
        { title: 'Project Tiga', desc: 'Deskripsi di sini.', href: '#' },
      ];

  return (
    <section id="projects" className={`projects ${className}`}>
      <div className="container">
        <h2 className="section-title">Latest Projects</h2>
        <div className="projects-grid">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
