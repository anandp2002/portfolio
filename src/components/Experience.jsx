import { useRef } from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
    const experienceRef = useRef(null);

    return (
        <section
            className="p-5 pt-24 max-w-7xl mx-auto"
            id="experience"
            ref={experienceRef}
        >
            <div className="mx-auto max-w-full">
                <h2 className="mb-6 text-center text-3xl font-medium lg:text-4xl">
                    EXPERIENCE
                </h2>
                <div className="flex flex-col space-y-10 border border-purple-300/20 rounded-lg py-10 px-5">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className=""
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <h3 className="mb-2 text-lg sm:text-xl lg:text-2xl font-semibold text-violet-200">
                                {exp.role}
                            </h3>
                            <h4 className="text-md font-medium lg:text-xl mb-2">
                                {exp.company}
                            </h4>
                            <p className="mb-5 text-sm text-purple-300/80">{exp.duration}</p>
                            <div className="space-y-3">
                                {exp.points.map((point, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-3 group"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                    >
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 shadow-[0_0_6px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-shadow duration-300" />
                                        <p className="leading-relaxed text-stone-300 group-hover:text-stone-200 transition-colors duration-300">
                                            {point}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
