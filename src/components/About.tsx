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
            I'm deeply passionate about the ever-evolving world of software engineering and artificial intelligence. There's something incredibly satisfying about building scalable solutions, optimizing backend architectures with Java, and integrating AI to solve complex problems. For me, it's not just about writing code—it's about creating systems that make a real impact and work seamlessly.
          </p>
          <p>
            My curiosity drives me to constantly explore new tools, frameworks, and best practices. Whether it's diving into microservices with Spring Boot, experimenting with the latest AI models, or understanding the intricacies of full-stack deployment pipelines—I find joy in the learning process itself. Every challenge is an opportunity to grow, and every failure is a lesson that makes me stronger.
          </p>
          <p>
            I believe in building systems that are not just functional, but resilient, secure, and maintainable. I'm currently pursuing my MS at Texas Tech University, and I'm always eager to collaborate, share knowledge, and contribute to teams that push the boundaries of what's possible in modern tech.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="stat-card">
            <h3 className="stat-value highlight-blue">10+</h3>
            <p className="stat-label">PROJECTS BUILT</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-value highlight-purple">May 2026</h3>
            <p className="stat-label">GRADUATING (MS) @ TTU</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-value highlight-purple">AI / Java</h3>
            <p className="stat-label">FOCUS AREA</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-value highlight-blue">OPT / STEM</h3>
            <p className="stat-label">WORK AUTH</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
