import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import './Education.scss';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className="education-container">
        {resumeData.education.map((edu, i) => (
          <motion.div 
            key={i} 
            className="edu-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="edu-top">
              <h3 className="degree">{edu.degree}</h3>
              <span className="gpa">GPA: {edu.gpa}</span>
            </div>
            <p className="university">{edu.university}</p>
            <p className="period">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
