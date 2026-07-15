import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import './Accomplishments.scss';

const Accomplishments = () => {
  return (
    <section id="accomplishments" className="accomplishments-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certifications, Awards & Publications
      </motion.h2>

      <div className="accomplishments-container">
        
        {/* Certifications */}
        <div className="acc-group">
          <h3 className="acc-title">Certifications</h3>
          <ul className="acc-list">
            {resumeData.certifications.map((cert, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <strong>{cert.name}:</strong> {cert.description}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Awards */}
        <div className="acc-group">
          <h3 className="acc-title">Achievements & Awards</h3>
          <ul className="acc-list">
            {resumeData.awards.map((award, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <strong>{award.name}:</strong> {award.description}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Publications */}
        <div className="acc-group">
          <h3 className="acc-title">Publications</h3>
          <ul className="acc-list">
            {resumeData.publications.map((pub, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <strong>{pub.title}:</strong> {pub.description}
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Accomplishments;
