import { useRef } from 'react';
import { EDUCATION } from '../constants';

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
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="">
              <h3 className="mb-2 text-lg sm:text-xl lg:text-2xl font-semibold">
                {edu.degree}
              </h3>
              <h4 className="text-md font-medium lg:text-xl mb-2">
                {edu.board}
              </h4>
              <p className="mb-2">{edu.institute}</p>
              <p>{edu.mark}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
