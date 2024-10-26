// Navbar.js
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex text-white items-center">
            <img className="h-8 w-8 rounded-full" src="dp.webp" />
            <h1 className="font-bold ml-3">Anand P</h1>
          </div>

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
              to="about"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMenu();
                setSelected('about');
              }}
              className={`cursor-pointer px-2 py-1 ${
                selected === 'about'
                  ? 'bg-gray-100 rounded-lg text-[#1a0218]'
                  : ''
              }`}
            >
              About
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
              Contact
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
        <div className="md:hidden text-white flex font-bold text-md items-center justify-center pb-4 shadow-xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => {
              toggleMenu();
              setSelected('home');
            }}
            className={`block px-4 py-1 cursor-pointer ${
              selected === 'home'
                ? ' bg-gray-100 rounded-lg text-[#1a0218]'
                : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => {
              toggleMenu();
              setSelected('about');
            }}
            className={`block px-4 py-1 cursor-pointer ${
              selected === 'about'
                ? ' bg-gray-100 rounded-lg text-[#1a0218]'
                : ''
            }`}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => {
              toggleMenu();
              setSelected('projects');
            }}
            className={`block px-4 py-1 cursor-pointer ${
              selected === 'projects'
                ? ' bg-gray-100 rounded-lg text-[#1a0218]'
                : ''
            }`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => {
              toggleMenu();
              setSelected('contact');
            }}
            className={`block px-4 py-1 cursor-pointer ${
              selected === 'contact'
                ? ' bg-gray-100 rounded-lg text-[#1a0218]'
                : ''
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
