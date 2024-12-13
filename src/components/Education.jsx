import { useRef } from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const Education = () => {
  const educationRef = useRef(null);

  return (
    <section
      className="p-5 pt-24 max-w-7xl mx-auto"
      id="education"
      ref={educationRef}
    >
      <div className="mx-auto max-w-full">
        <h2 className="mb-6 text-center text-3xl font-medium lg:text-4xl">
          EDUCATION
        </h2>
        <div className="flex flex-col space-y-8 border border-purple-300/20 rounded-lg py-10 px-5">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              className=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="mb-2 text-lg sm:text-xl lg:text-2xl font-semibold text-violet-100">
                {edu.degree}
              </h3>
              <h4 className="text-md font-medium lg:text-xl mb-2">
                {edu.board}
              </h4>
              <p className="mb-2">{edu.institute}</p>
              <p>{edu.mark}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
