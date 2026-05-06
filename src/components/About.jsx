import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-text"
        >
          <p>
            I am a passionate <strong>Computer Science student</strong> at MMMUT, dedicated to building high-impact software solutions. My journey is fueled by a curiosity for how technology can solve real-world problems.
          </p>
          <p>
            With a strong foundation in <strong>Data Structures and Algorithms</strong>, I enjoy the challenge of optimization and clean code. Whether it's architecting a backend ecosystem or crafting a responsive frontend, I strive for excellence in every line of code.
          </p>
        </motion.div>

        <div className="education-cards">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="edu-card glass-card"
          >
            <GraduationCap className="edu-icon" />
            <div className="edu-info">
              <h3>B.Tech in CSE</h3>
              <p>Madan Mohan Malaviya University of Technology</p>
              <span className="edu-date">Graduating 2027</span>
              <div className="edu-stats">CGPA: 7.96 / 10</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="edu-card glass-card"
          >
            <BookOpen className="edu-icon" />
            <div className="edu-info">
              <h3>Relevant Coursework</h3>
              <div className="course-tags">
                <span>DSA</span>
                <span>OOPs</span>
                <span>DBMS</span>
                <span>OS</span>
                <span>Computer Networks</span>
                <span>AI/ML</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default About;
