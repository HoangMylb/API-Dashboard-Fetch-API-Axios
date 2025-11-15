import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import './About.css';

const About = () => {
  const [ref, isInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={itemVariants} className="about-subtitle">
              Frontend Developer & UI/UX Enthusiast
            </motion.h3>

            <motion.p variants={itemVariants} className="about-text">
              I'm a frontend developer with over 5 years of experience building modern,
              responsive, and high-performance web applications.
            </motion.p>

            <motion.p variants={itemVariants} className="about-text">
              I'm passionate about turning ideas into reality through clean code,
              creative design, and exceptional user experience.
            </motion.p>

            <motion.div className="skills-grid" variants={itemVariants}>
              {['React', 'JavaScript', 'CSS/SCSS', 'Next.js', 'Tailwind', 'Node.js'].map(
                (skill) => (
                  <motion.div key={skill} className="skill-tag" whileHover={{ scale: 1.1 }}>
                    {skill}
                  </motion.div>
                )
              )}
            </motion.div>

            <motion.button
              className="btn btn-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            className="about-image"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="image-wrapper">
              <img
                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/533506347_1095918239409554_7117503038536388958_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&cb2=99be929b-bd9a46d7&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZLsbYm8ndfcQ7kNvwFNNULU&_nc_oc=AdkUDZY6SuInSBeRVBWjqQ8p9Mq3gBWcy_rmGV5dIPJQLvqM7_D7D9TKSigcxp0ctQM&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=WSFXi_44pV3in2oKvApXTA&oh=00_AfjQ3dRQIOfjhj49N9yTK7NmJxosL3JB-tywClESbCx2bQ&oe=691DB29C"
                alt="Profile"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
