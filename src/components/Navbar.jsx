// Navbar.js
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const SECTIONS = ['home', 'experience', 'projects', 'skills', 'education', 'contact'];

const LABELS = {
  home: 'Home',
  experience: 'Experience',
  projects: 'Projects',
  skills: 'Skills',
  education: 'Education',
  contact: 'Contact Me',
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('home');
  const isClickScrolling = useRef(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Intersection Observer — auto-highlight section in view
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Only update via scroll, not when user clicked a nav link
          if (entry.isIntersecting && !isClickScrolling.current) {
            setSelected(id);
          }
        },
        {
          // Trigger when section occupies >30% of the viewport
          threshold: 0.3,
          rootMargin: '-60px 0px 0px 0px', // account for fixed navbar height
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Snap to 'home' when scrolled back to the very top
    const handleScroll = () => {
      if (!isClickScrolling.current && window.scrollY < 80) {
        setSelected('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // When user clicks a nav link, briefly lock scroll-driven updates
  // so the highlight doesn't flicker while smooth-scrolling
  const handleNavClick = (item) => {
    isClickScrolling.current = true;
    setSelected(item);
    setIsOpen(false);
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 700); // matches react-scroll duration (500ms) + buffer
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#190417] shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div
          className={`flex justify-between items-center py-4 ${!isOpen ? 'shadow-xl' : ''}`}
        >
          <Link to="home" smooth={true} duration={500} onClick={() => handleNavClick('home')}>
            <div className="flex text-white items-center cursor-pointer">
              <img className="h-7 w-7 rounded-full" src="dp.gif" alt="AP" />
              <h1 className="font-bold ml-2 text-xl">AP</h1>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text-white font-bold">
            {SECTIONS.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                onClick={() => handleNavClick(item)}
                className={`cursor-pointer px-2 py-1 transition-all duration-200 ${
                  selected === item
                    ? 'bg-gray-100 rounded-lg text-[#1a0218]'
                    : ''
                }`}
              >
                {LABELS[item]}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden text-white flex flex-col min-h-screen -mt-14 font-bold text-2xl gap-y-4 items-center justify-center mb-20">
          {SECTIONS.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              onClick={() => handleNavClick(item)}
              className={`block px-4 py-1 cursor-pointer ${
                selected === item ? 'text-white' : ''
              }`}
            >
              {LABELS[item]}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
