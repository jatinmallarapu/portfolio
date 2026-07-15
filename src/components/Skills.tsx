import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import './Skills.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="skills-container">
        {Object.entries(resumeData.skills).map(([category, skills], i) => (
          <motion.div 
            key={i} 
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3>{category}</h3>
            <ul className="skills-list">
              {skills.map((skill, j) => (
                <li key={j}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
