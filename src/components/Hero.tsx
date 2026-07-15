import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="greeting">Hi, my name is</h1>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="name">{resumeData.name}.</h2>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="title">I build scalable solutions.</h3>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="description">
          Full Stack Java Developer &amp; AI Engineer
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="hero-buttons"
      >
        <a href={`mailto:${resumeData.email}`} className="btn hero-btn">
          Get In Touch
        </a>
        <a href={`${import.meta.env.BASE_URL}JatinMallarapu_Resume.pdf`} target="_blank" rel="noreferrer" className="btn hero-btn">
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
