import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import heroProfile from '../assets/hero_profile.jpg';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
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
              {resumeData.title}
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
        </div>

        {/* Right side animated image */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="image-container">
            <motion.img 
              src={heroProfile} 
              alt={resumeData.name} 
              className="hero-img"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="image-backdrop"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
