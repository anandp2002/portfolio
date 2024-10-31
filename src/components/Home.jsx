import { Linkedin, Github, File } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';

const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex justify-center items-center text-white"
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-extrabold">Anand P</h1>
        </div>
        <div className="flex items-center justify-center pt-2 text-3xl font-semibold text-violet-100">
          Fullstack Web Developer
        </div>
        <div className="mt-2 flex justify-center items-center max-w-4xl px-12 smLpx-0">
          <p className="text-xl text-justify sm:text-center font-extralight">
            A 2024 B.Tech CSE graduate with a strong foundation in frontend
            technologies, backend frameworks, and responsive design. As a
            passionate MERN stack developer, I focus on creating efficient,
            user-friendly applications with an emphasis on seamless performance,
            consistently approaching the user experience from a mobile-first
            perspective.
          </p>
        </div>
        <div className="flex items-center justify-center pt-5">
          <a
            href="https://www.linkedin.com/in/anand-p-18894a219/"
            target="_blank"
          >
            <Linkedin size={28} className="mr-4 hover:text-gray-300" />
          </a>
          <a href="https://github.com/anandp2002" target="_blank">
            <Github size={28} className="hover:text-gray-300" />
          </a>
          <a
            href="https://drive.google.com/file/d/18mbAKhc7angmp4Goo9LKIxFMZTETqw7S/view?usp=sharing"
            target="_blank"
          >
            <div className="ml-4 flex  items-center justify-center bg-gray-100 text-[#1a0218]  p-2 rounded-lg hover:bg-gray-300">
              <File className="mr-1" size={18} />
              <button className="font-semibold">Resume</button>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
