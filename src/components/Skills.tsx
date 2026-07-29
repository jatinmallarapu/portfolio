import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import './Skills.scss';

// Skills to highlight (AI/ML core from resume)
const HIGHLIGHTED_KEYWORDS = [
  'python', 'tensorflow', 'pytorch', 'keras', 'scikit-learn', 'xgboost', 'llms', 
  'hugging face', 'langchain', 'openai apis', 'rag', 'agentic ai', 'fastapi', 
  'mlflow', 'kubeflow', 'sagemaker', 'vertex ai', 'azure ml', 'pyspark', 
  'transformers', 'faiss', 'pinecone', 'spacy', 'bert', 'gpt', 'docker', 'kubernetes'
];

const isHighlighted = (skill: string) => {
  return HIGHLIGHTED_KEYWORDS.some(keyword => skill.toLowerCase().includes(keyword));
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="subtitle">Tech Stack & Tools</p>
        <h2 className="title">Skills & <span className="gradient-text">Expertise</span></h2>
      </motion.div>

      <div className="skills-categories-grid">
        {Object.entries(resumeData.skills).map(([category, skills], i) => (
          <motion.div 
            key={category} 
            className="category-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
          >
            <h3 className="category-title">{category}</h3>
            <div className="pills-wrapper">
              {skills.map((skill, j) => {
                const highlighted = isHighlighted(skill);
                return (
                  <span 
                    key={j} 
                    className={`skill-pill ${highlighted ? 'highlighted' : 'standard'}`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
