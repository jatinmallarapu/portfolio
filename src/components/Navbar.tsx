import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Education', url: '#education' },
    { name: 'Projects', url: '#projects' },
    { name: 'Skills', url: '#skills' },
    { name: 'Connect', url: '#connect' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map(link => link.url.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (url: string) => {
    setMobileMenuOpen(false);
    const id = url.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav>
        <motion.a 
          href="#home"
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
        >
          JM
        </motion.a>

        {/* Desktop Nav */}
        <div className="nav-links">
          <ul>
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <a 
                  href={link.url}
                  className={activeSection === link.url.replace('#', '') ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.url); }}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: navLinks.length * 0.08 }}
            className="nav-actions"
          >
            <motion.button 
              onClick={toggleTheme} 
              className="theme-toggle" 
              aria-label="Toggle Theme"
              whileHover={{ rotate: 15, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiSun />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMoon />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                className={activeSection === link.url.replace('#', '') ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.url); }}
              >
                {link.name}
              </a>
            ))}

            <button onClick={toggleTheme} className="theme-toggle-mobile">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
