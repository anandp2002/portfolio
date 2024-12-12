import { useRef } from 'react';
import { SKILLS } from '../constants';

const Skills = () => {
  const skillsRef = useRef(null);

  return (
    <section
      className="max-w-7xl mx-auto p-5 pt-24"
      id="skills"
      ref={skillsRef}
    >
      <div className="px-4">
        <h2 className="mb-6 text-center text-3xl font-medium lg:text-4xl">
          SKILLS
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="mb-2 text-lg font-medium lg:text-xl">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
