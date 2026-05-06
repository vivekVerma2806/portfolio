import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Travel AI',
      description: 'MERN stack platform generating personalized travel recommendations based on user preferences using AI algorithms.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/vivekVerma2806/Travel-ai',
      link: 'https://travelaround-ai.onrender.com/',
      category: 'Full Stack'
    },
    {
      title: 'SmartAttendAI',
      description: 'Facial recognition attendance system using OpenCV and Face Recognition to automate attendance tracking in real-time.',
      tech: ['OpenCV', 'Python', 'Flask', 'Streamlit'],
      github: 'https://github.com/vivekVerma2806/SmartAttendAI',
      link: '#',
      category: 'AI / CV'
    },
    {
      title: 'HealthStack',
      description: 'Scalable healthcare platform with WebRTC for real-time video consultations and Django/PostgreSQL for secure data management.',
      tech: ['React.js', 'Django', 'PostgreSQL', 'WebRTC'],
      github: 'https://github.com/vivekVerma2806/HealthStack',
      link: '#',
      category: 'HealthTech'
    }
  ];

  return (
    <section id="projects" className="projects container">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card glass-card"
          >
            <div className="project-image">
              <div className="project-image-overlay"></div>
            </div>
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><Code2 size={18} /></a>
                <a href={project.link} target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>
              </div>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
