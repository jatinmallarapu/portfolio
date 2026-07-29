import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import { resumeData } from '../data/resume';
import './Experience.scss';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {resumeData.experience.map((job, i) => (
          <motion.div 
            key={i} 
            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="timeline-node">
              <FiBriefcase />
            </div>

            <div className="timeline-card">
              <div className="card-header">
                <div>
                  <h3 className="job-role">{job.role}</h3>
                  <h4 className="job-company">{job.company}</h4>
                </div>
                <div className="meta-tags">
                  <span className="tag period">
                    <FiCalendar /> {job.period}
                  </span>
                  <span className="tag location">
                    <FiMapPin /> {job.location}
                  </span>
                </div>
              </div>

              <ul className="bullet-list">
                {job.achievements.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
