import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Users } from 'lucide-react';

const Achievements = () => {
  const stats = [
    { label: 'DSA Problems', value: '650+', icon: <Trophy color="#ffcc00" /> },
    { label: 'LeetCode Rating', value: '1750+', icon: <Star color="#ff3366" /> },
    { label: 'CodeChef Stars', value: '3★', icon: <Star color="#00f2ff" /> },
    { label: 'SIH Participations', value: '3 Times', icon: <Users color="#9933ff" /> }
  ];

  return (
    <section className="achievements container">
      <h2 className="section-title">Achievements & Stats</h2>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="stat-card glass-card"
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="achievements-list">
        <div className="ach-item">
          <p>Solved 650+ DSA problems across LeetCode, GFG, and Codeforces, demonstrating strong algorithmic skills.</p>
        </div>
        <div className="ach-item">
          <p>Consistent performance in competitive programming with high ratings on major platforms.</p>
        </div>
        <div className="ach-item">
          <p>Active participation in Smart India Hackathon (SIH) working on innovative problem statements.</p>
        </div>
      </div>

    </section>
  );
};

export default Achievements;
