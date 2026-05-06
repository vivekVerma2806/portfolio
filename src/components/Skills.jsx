import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Languages',
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Material UI']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Django', 'REST APIs']
    },
    {
      category: 'Database & Tools',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Git', 'Linux']
    }
  ];

  return (
    <section id="skills" className="skills container">
      <h2 className="section-title">Technical Expertise</h2>
      
      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            viewport={{ once: true }}
            className="skill-group"
          >
            <h3 className="group-title">{group.category}</h3>
            <div className="skill-items">
              {group.skills.map((skill, index) => (
                <div key={skill} className="skill-pill">
                  <div className="skill-dot"></div>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
