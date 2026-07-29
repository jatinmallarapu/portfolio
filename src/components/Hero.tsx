import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { resumeData } from '../data/resume';
import heroProfile from '../assets/hero_profile.jpg';
import './Hero.scss';

const ROLES = [
  'AI / ML Engineer',
  'Generative AI Engineer',
  'ML Platform Engineer',
  'LLM Systems Architect'
];

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content centered">
        {/* Profile Image with Animated Gradient Ring */}
        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-ring"></div>
          <div className="avatar-inner">
            <img src={heroProfile} alt={resumeData.name} className="avatar-img" />
          </div>
          <div className="status-badge" title="Open to Opportunities"></div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          className="greeting-text"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="gradient-text">{resumeData.name}</span>
        </motion.h1>

        {/* Typing Role Box */}
        <motion.div
          className="role-box"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="role-bracket">[ </span>
          <span className="role-text">{currentText}</span>
          <span className="role-cursor">|</span>
          <span className="role-bracket"> ]</span>
        </motion.div>

        {/* Description Summary */}
        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          AI/ML Engineer with 4+ years building production-grade LLM systems, RAG pipelines, and automated MLOps platforms across banking, healthcare, and telecom — AWS · Azure · GCP.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#projects" className="btn-primary">
            Explore My Work
          </a>
          <a href="#connect" className="btn-secondary">
            Get In Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href={resumeData.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={resumeData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${resumeData.email}`} aria-label="Email">
            <FiMail />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
