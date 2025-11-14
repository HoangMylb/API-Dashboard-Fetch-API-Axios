import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <motion.div className="gradient-orb orb-1" variants={floatingVariants} animate="float" />
        <motion.div className="gradient-orb orb-2" variants={floatingVariants} animate="float" />
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <h1 className="hero-title">
            Build a <span className="gradient-text">Responsive Landing Page</span>
          </h1>
          <p className="hero-subtitle">
            Clean • Modern • Fast • Animated
          </p>
          <p className="hero-description">
            I create modern, responsive, and high-performance landing pages
            with smooth animations to help impress your customers.
          </p>
        </motion.div>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat">
            <h3>50+</h3>
            <p>Projects</p>
          </div>
          <div className="stat">
            <h3>40+</h3>
            <p>Clients</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Years</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p>Scroll Down</p>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
