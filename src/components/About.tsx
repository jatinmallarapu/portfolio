import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import profilePic from '../assets/profile.jpg';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="inner">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>{resumeData.summary}</p>
        </motion.div>
        
        <motion.div 
          className="about-pic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="wrapper">
            <img src={profilePic} alt="Jatin Mallarapu" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
