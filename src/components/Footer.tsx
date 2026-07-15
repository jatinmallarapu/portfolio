import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { resumeData } from '../data/resume';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="credit">
          <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        </div>
        <div className="social-links">
          <a href={resumeData.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
          <a href={resumeData.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href={`mailto:${resumeData.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
