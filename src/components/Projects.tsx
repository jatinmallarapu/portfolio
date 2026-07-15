import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { resumeData } from '../data/resume';
import './Projects.scss';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <ul className="projects-grid">
        {resumeData.projects.map((project, i) => (
          <motion.li 
            key={i} 
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="project-content">
              <div>
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <FiExternalLink />
                    </div>
                    <div className="project-links">
                      <a href={resumeData.github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                        <FiGithub />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a href={resumeData.github} target="_blank" rel="noreferrer">{project.title}</a>
                  </h3>
                  <div className="project-description">
                    <p>{project.achievements[0]}</p>
                  </div>
                </header>
                <footer>
                  <ul className="project-tech-list">
                    {project.tech.map((tech, j) => (
                      <li key={j}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
