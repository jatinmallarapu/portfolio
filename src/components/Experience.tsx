import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import './Experience.scss';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Where I've Worked
      </motion.h2>

      <div className="jobs-container">
        {resumeData.experience.map((job, i) => (
          <motion.div 
            key={i} 
            className="job"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="job-title">
              {job.role} <span className="company">@ {job.company}</span>
            </h3>
            <p className="job-period">{job.period} | {job.location}</p>
            <ul className="job-details">
              {job.achievements.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
