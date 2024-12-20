import { Linkedin, Github, File } from 'lucide-react';
import ProfileImage from '../assets/profile.png';
import { motion } from 'framer-motion';
import { RESUME_DRIVE_LINK } from '../constants';

const Home = () => {
  return (
    <div className="sm:min-h-screen flex justify-center items-center text-white pt-20 sm:pt-0 max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 items-center px-5 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold">ANAND P</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-violet-200 pt-2">
            Full-stack Web Developer
          </h2>
          <p className="mt-4 text-xl text-justify font-extralight max-w-5xl">
            A 2024 B.Tech CSE graduate with a strong foundation in frontend
            technologies, backend frameworks, and responsive design. As a
            passionate MERN stack developer, I focus on creating efficient,
            user-friendly applications with an emphasis on seamless performance,
            consistently approaching the user experience from a mobile-first
            perspective.
          </p>
          <motion.div
            className="flex items-center pt-5 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/anand-p-18894a219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} className="hover:text-gray-300" />
            </a>
            <a
              href="https://github.com/anandp2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={28} className="hover:text-gray-300" />
            </a>
            <a
              href={RESUME_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center bg-gray-100 text-[#1a0218] p-2 rounded-lg hover:bg-gray-300">
                <File className="mr-2" size={18} />
                <button className="font-semibold">Resume</button>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={ProfileImage}
            alt="Anand P"
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
