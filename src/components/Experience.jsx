import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Nullclass (Remote)',
      period: 'Dec 2025 – Jan 2026',
      tools: 'Node.js, Express.js, React.js, MongoDB, Razorpay',
      achievements: [
        'Architected and deployed an audio tweet system with real-time recording and uploads.',
        'Implemented strict validation (100MB size, 5-minute duration) for efficient media handling.',
        'Engineered a secure backend ecosystem with OTP-based authentication and Razorpay integration.',
        'Implemented user activity tracking (IP, device, browser) and event-driven notifications.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience container">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="timeline-item glass-card"
          >
            <div className="timeline-header">
              <div className="title-box">
                <Briefcase color="var(--primary)" size={24} />
                <div>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
              </div>
              <div className="period">{exp.period}</div>
            </div>
            
            <p className="tools-used"><strong>Tools:</strong> {exp.tools}</p>
            
            <ul className="achievement-list">
              {exp.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
