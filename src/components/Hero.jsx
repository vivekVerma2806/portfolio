import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="badge">
            <span className="dot"></span> Available for Opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Vivek Kumar Verma</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Crafting Digital Excellence through <br />
            <span className="highlight">Full Stack Development</span> & <span className="highlight">Competitive Programming</span>
          </h2>
          
          <p className="hero-description">
            B.Tech CSE student at MMMUT. 1750+ LeetCode rating. 
            Building scalable AI-driven solutions and high-performance web applications.
          </p>
          
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="floating-card card-1">
            <Code color="var(--primary)" />
            <span>MERN Stack</span>
          </div>
          <div className="floating-card card-2">
            <Terminal color="var(--secondary)" />
            <span>650+ Problems</span>
          </div>
          <div className="floating-card card-3">
            <Cpu color="#ff8e3c" />
            <span>AI & ML</span>
          </div>
          <div className="hero-image-container">
            {/* Placeholder for actual image if needed, using a gradient for now */}
            <div className="hero-image-glow"></div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
