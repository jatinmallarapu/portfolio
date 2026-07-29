import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
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
      <div className="hero-content">
        {/* Left Side: Info */}
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
          
          {/* Typing Role Box */}
          <motion.div
            className="role-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="role-bracket">[ </span>
            <span className="role-text">{currentText}</span>
            <span className="role-cursor">|</span>
            <span className="role-bracket"> ]</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="description">
              AI/ML Engineer with 4+ years building production-grade LLM systems, RAG pipelines, and automated MLOps platforms across banking, healthcare, and telecom — AWS · Azure · GCP.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn hero-btn">
              Explore Work
            </a>
            <a href="#connect" className="btn hero-btn">
              Get In Touch
            </a>
            <a href={`${import.meta.env.BASE_URL}JatinMallarapu_Resume.pdf`} target="_blank" rel="noreferrer" className="btn hero-btn download-btn">
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side: Photo + Contact Info + Status */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Circular Avatar */}
          <div className="hero-avatar-wrapper">
            <div className="gradient-ring"></div>
            <div className="avatar-inner">
              <img src={heroProfile} alt={resumeData.name} className="avatar-img" />
            </div>
            <div className="status-badge-inner">
              <span className="dot-pulse"></span>
              <div className="status-tooltip">
                <div className="tooltip-header">
                  <span className="tooltip-dot"></span>
                  <strong>Available May 2026</strong>
                </div>
                <p>Available for full-time roles. Authorized to work in the US on OPT (STEM OPT eligible).</p>
              </div>
            </div>
          </div>

          {/* Contact Info below image */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="contact-row">
              <FiMapPin className="contact-icon location-icon" />
              <span>TX, USA</span>
            </div>
            <div className="contact-row">
              <FiMail className="contact-icon email-icon" />
              <a href="mailto:jatinmallarapu27@gmail.com">jatinmallarapu27@gmail.com</a>
            </div>
            <div className="contact-row">
              <FiPhone className="contact-icon phone-icon" />
              <a href="tel:+18065440585">+1 (806) 544-0585</a>
            </div>
          </motion.div>

          {/* Availability Status Banner */}
          <motion.div 
            className="availability-banner"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="status-indicator"></span>
            <div className="availability-info">
              <strong>Available May 2026</strong>
              <span>Available for full-time roles. Authorized to work in the US on OPT (STEM OPT eligible).</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
