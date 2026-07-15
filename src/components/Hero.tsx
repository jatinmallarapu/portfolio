import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
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
        </div>

        {/* Right side animated visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-window">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="window-title">developer.ts</span>
            </div>
            <div className="window-body">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">developer</span>{' '}
                <span className="code-operator">=</span>{' '}
                <span className="code-bracket">{'{'}</span>
              </motion.div>
              <motion.div
                className="code-indent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <span className="code-prop">name</span>
                <span className="code-operator">:</span>{' '}
                <span className="code-string">"Jatin Mallarapu"</span>
                <span className="code-comma">,</span>
              </motion.div>
              <motion.div
                className="code-indent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <span className="code-prop">role</span>
                <span className="code-operator">:</span>{' '}
                <span className="code-string">"Full Stack Developer"</span>
                <span className="code-comma">,</span>
              </motion.div>
              <motion.div
                className="code-indent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <span className="code-prop">skills</span>
                <span className="code-operator">:</span>{' '}
                <span className="code-bracket">[</span>
                <span className="code-string">"Java"</span>
                <span className="code-comma">,</span>{' '}
                <span className="code-string">"React"</span>
                <span className="code-comma">,</span>{' '}
                <span className="code-string">"AI"</span>
                <span className="code-bracket">]</span>
                <span className="code-comma">,</span>
              </motion.div>
              <motion.div
                className="code-indent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <span className="code-prop">available</span>
                <span className="code-operator">:</span>{' '}
                <span className="code-bool">true</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <span className="code-bracket">{'}'}</span>
                <span className="code-operator">;</span>
              </motion.div>
            </div>
          </div>

          {/* Floating decoration elements */}
          <motion.div
            className="float-element float-1"
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            &lt;/&gt;
          </motion.div>
          <motion.div
            className="float-element float-2"
            animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            { '{ }' }
          </motion.div>
          <motion.div
            className="float-element float-3"
            animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ⚡
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
