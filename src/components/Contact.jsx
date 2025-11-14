import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import './Contact.css';

const Contact = () => {
  const [ref, isInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Start Your Project
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get in touch to discuss your next project
        </motion.p>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.form className="contact-form" variants={itemVariants}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" className="form-input" required />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Project Topic"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Describe your project..."
                className="form-input form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <p>hello@devportfolio.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Location</h4>
                <p>Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">💬</div>
              <div className="info-text">
                <h4>Chat</h4>
                <p>Available for quick chat</p>
              </div>
            </div>
            <div className="social-links">
              {['GitHub', 'LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
