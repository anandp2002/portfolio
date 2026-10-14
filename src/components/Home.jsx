import { Linkedin, Github, File } from 'lucide-react';
import { motion } from 'framer-motion';
import { RESUME_DRIVE_LINK } from '../constants';

const Home = () => {
  return (
    <div className="sm:min-h-screen flex justify-center items-center text-white pt-20 sm:pt-0 max-w-7xl mx-auto">
      <motion.div
        className="px-5"
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
            Software Engineer
          </h2>
          <p className="mt-4 text-xl text-justify font-extralight max-w-5xl">
           I’m a Developer at Thoughtplex Pvt. Ltd., where I work on building and deploying real-world software products from development to production. My experience includes full-stack development using React.js, Node.js, Express.js, and FastAPI, along with AI integration, system design, and API development. I also manage Dev, UAT, and Production deployments, maintain CI/CD pipelines, and work with cloud infrastructure and third-party integrations. In addition, I contribute to technical planning and mentor junior developers and interns through task breakdown, debugging, and code reviews. I focus on solving complex technical challenges, designing scalable and efficient solutions, and continuously improving my skills to build reliable, high-quality software.
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
      </motion.div>
    </div>
  );
};

export default Home;

