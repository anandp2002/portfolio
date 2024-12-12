import { Linkedin, Github, File } from 'lucide-react';
import ProfileImage from '../assets/profile.png';

const Home = () => {
  return (
    <div className="sm:min-h-screen flex justify-center items-center text-white pt-20 sm:pt-0 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold">ANAND P</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-violet-100 pt-2">
            Fullstack Web Developer
          </h2>
          <p className="mt-4 text-xl text-justify font-extralight max-w-5xl">
            A 2024 B.Tech CSE graduate with a strong foundation in frontend
            technologies, backend frameworks, and responsive design. As a
            passionate MERN stack developer, I focus on creating efficient,
            user-friendly applications with an emphasis on seamless performance,
            consistently approaching the user experience from a mobile-first
            perspective.
          </p>
          <div className="flex items-center pt-5 space-x-4">
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
              href="https://drive.google.com/file/d/18mbAKhc7angmp4Goo9LKIxFMZTETqw7S/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center bg-gray-100 text-[#1a0218] p-2 rounded-lg hover:bg-gray-300">
                <File className="mr-2" size={18} />
                <button className="font-semibold">Resume</button>
              </div>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src={ProfileImage}
            alt="Anand P"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
