import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiCopy, FiCheck, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { resumeData } from '../data/resume';
import './Connect.scss';

const Connect = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'c2a139a7-b127-44be-b14a-7bd4f312fab1',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to send. Please email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="connect" className="connect-section">
      <div className="connect-content">
        {/* Left Column */}
        <motion.div 
          className="connect-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">SAY HELLO</span>
          <h2 className="connect-heading">Let's Work Together</h2>
          <p className="connect-description">
            Actively seeking full-time Software Engineering, Full Stack Java Development, and AI Engineering roles. 
            Open to industry and applied infrastructure positions.
          </p>

          <div className="info-cards">
            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-left">
                <FiMail className="card-icon" />
                <a href={`mailto:${resumeData.email}`} className="card-text">{resumeData.email}</a>
              </div>
              <button className="copy-btn" onClick={handleCopy} aria-label="Copy email">
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-left">
                <FiMapPin className="card-icon" />
                <span className="card-text">TX, USA — open to relocation & remote</span>
              </div>
            </motion.div>
          </div>

          <div className="connect-socials">
            <a href={resumeData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={resumeData.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={`mailto:${resumeData.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>

          <motion.div 
            className="availability-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="badge-dot" />
            <div className="badge-content">
              <strong>Available May 2026</strong>
              <p>Available for full-time roles. Authorized to work in the US on OPT (STEM OPT eligible).</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.form 
          className="connect-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="your@email.com" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Tell me about the role or opportunity..." 
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={sending}
          >
            {sending ? (
              <span>Sending...</span>
            ) : submitted ? (
              <span>✓ Message Sent!</span>
            ) : (
              <>
                <FiSend />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Connect;
