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
            I'm an AI/ML Engineer with 4+ years of experience designing, building, and deploying production-grade machine learning and generative AI systems. My work spans across banking, healthcare, telecom, and fintech domains, where I've focused on creating scalable solutions that drive real business value.
          </p>
          <p>
            My technical expertise lies in building automated MLOps pipelines, developing RAG architectures, and deploying models using AWS, Azure, Docker, and Kubernetes. I find joy in the continuous learning process—whether it's fine-tuning LLMs, optimizing deep learning architectures, or ensuring enterprise-grade AI governance.
          </p>
          <p>
            I believe in building systems that are not just highly accurate, but performant, secure, and maintainable. I'm always eager to collaborate, share knowledge, and contribute to teams that push the boundaries of what's possible in Artificial Intelligence.
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
            <h3>AI / ML</h3>
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
