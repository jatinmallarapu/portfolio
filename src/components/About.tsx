import { motion } from 'framer-motion';
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
          <p>
            I'm deeply passionate about the ever-evolving world of Software Engineering and Artificial Intelligence. There's something incredibly satisfying about architecting complex backends, optimizing algorithms, and watching scalable solutions come to life. For me, it's not just about the code—it's about solving real-world problems and building applications that make a difference.
          </p>
          <p>
            My curiosity drives me to constantly explore new tools, frameworks, and best practices. Whether it's diving deep into Spring Boot microservices, experimenting with generative AI models, or understanding the intricacies of cloud deployments—I find joy in the continuous learning process. Every challenge is an opportunity to grow, and every complex bug is a lesson that makes me a stronger engineer.
          </p>
          <p>
            I believe in building systems that are not just functional, but performant, secure, and maintainable. The philosophy of writing clean, scalable code resonates deeply with me. I'm always eager to collaborate, share knowledge, and contribute to teams that push the boundaries of what's possible in software development and AI.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="stat-card">
            <h3>10+</h3>
            <span>PROJECTS BUILT</span>
          </div>
          <div className="stat-card">
            <h3>May 2026</h3>
            <span>GRADUATING (MS) TTU</span>
          </div>
          <div className="stat-card">
            <h3>AI / Java</h3>
            <span>FOCUS AREA</span>
          </div>
          <div className="stat-card">
            <h3>OPT / STEM</h3>
            <span>WORK AUTH</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
