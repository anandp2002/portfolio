import { useRef } from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsRef = useRef(null);

  return (
    <section
      className="max-w-7xl mx-auto p-5 pt-24 "
      id="skills"
      ref={skillsRef}
    >
      <h2 className="mb-6 text-center text-3xl font-medium lg:text-4xl">
        SKILLS
      </h2>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 border border-purple-300/20 rounded-lg py-14">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{
                delay: 0.1,
                duration: 0.2,
              }}
              className="mb-4"
            >
              {skill.icon}
            </motion.div>
            <h3 className="mb-2 text-lg font-medium lg:text-xl">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
