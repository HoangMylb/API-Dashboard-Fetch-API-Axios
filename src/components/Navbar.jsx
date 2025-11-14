import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const linkVariants = {
    hover: { scale: 1.05, color: '#00d4ff' },
  };

  return (
    <motion.nav className="navbar" variants={navVariants} initial="hidden" animate="visible">
      <div className="navbar-container">
        <motion.div className="logo" whileHover={{ scale: 1.1 }}>
          <span className="logo-text">DevPortfolio</span>
        </motion.div>

        <ul className="nav-links">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
            <motion.li key={link} variants={linkVariants} whileHover="hover">
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
