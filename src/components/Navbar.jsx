// Navbar.js
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#190417] shadow-xl z-50 ">
      <div className="max-w-7xl mx-auto px-5">
        <div
          className={`flex justify-between items-center py-4 ${
            !isOpen ? 'shadow-xl' : ''
          }`}
        >
          <Link to="home" smooth={true} duration={500}>
            <div className="flex text-white items-center cursor-pointer ">
              <img className="h-7 w-7 rounded-full" src="dp.gif" />
              <h1 className="font-bold ml-2 text-xl">AP</h1>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text-white font-bold">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMenu();
                setSelected('home');
              }}
              className={`cursor-pointer px-2 py-1 ${
                selected === 'home'
                  ? 'bg-gray-100 rounded-lg text-[#1a0218]'
                  : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMenu();
                setSelected('projects');
              }}
              className={`cursor-pointer px-2 py-1 ${
                selected === 'projects'
                  ? 'bg-gray-100 rounded-lg text-[#1a0218]'
                  : ''
              }`}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMenu();
                setSelected('skills');
              }}
              className={`cursor-pointer px-2 py-1 ${
                selected === 'skills'
                  ? 'bg-gray-100 rounded-lg text-[#1a0218]'
                  : ''
              }`}
            >
              Skills
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMenu();
                setSelected('education');
              }}
              className={`cursor-pointer px-2 py-1 ${
                selected === 'education'
                  ? 'bg-gray-100 rounded-lg text-[#1a0218]'
                  : ''
              }`}
            >
              Education
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMenu();
                setSelected('contact');
              }}
              className={`cursor-pointer px-2 py-1 ${
                selected === 'contact'
                  ? 'bg-gray-100 rounded-lg text-[#1a0218]'
                  : ''
              }`}
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger menu icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden text-white flex flex-col min-h-screen -mt-14 font-bold text-2xl gap-y-4 items-center justify-center mb-20">
          {['home', 'projects', 'skills', 'education', 'contact'].map(
            (item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                onClick={() => {
                  toggleMenu();
                  setSelected(item);
                }}
                className={`block px-4 py-1 cursor-pointer ${
                  selected === item ? 'text-white' : ''
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
