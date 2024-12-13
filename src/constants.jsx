export const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Website',
    description:
      'A responsive MERN e-commerce platform with customer and admin views. Customers can browse, add to cart, and purchase products, while admins manage inventory and track sales. Key features include JWT authentication, bcryptjs for security, Redis caching, coupons, Stripe payments, Tailwind CSS for styling, and Zustand for state management.',
    techStack: ['MongoDB', 'Express', 'React', 'Node'],
    imgSrc: 'ecommerce.png',
    link: 'https://anandpecommerce.onrender.com',
    githubLink: 'https://github.com/anandp2002/e-commerce',
  },
  {
    id: 2,
    title: 'Netflix clone',
    description:
      'Built a Netflix clone using the MERN stack with JWT authentication for secure login. Integrated the TMDB API to fetch movies, shows, and actors. Added search with history for convenience. Designed a responsive UI with Tailwind CSS and React-Toastify for notifications, ensuring seamless streaming across devices.',
    techStack: ['MongoDB', 'Express', 'React', 'Node'],
    imgSrc: 'netflix.png',
    link: 'https://anandpnetflix.onrender.com/',
    githubLink: 'https://github.com/anandp2002/Netflix-MERN',
  },
  {
    id: 3,
    title: 'Swiggy',
    description:
      'Created a responsive Swiggy clone using React & Tailwind CSS with a mobile-first design approach. Integrated Redux Toolkit for efficient state management and utilized Swiggy’s public API to fetch live restaurant data, menus, and reviews. Enabled dynamic listings and smooth category navigation for an enhanced, seamless UX.',
    techStack: ['React JS', 'Tailwind CSS', 'Redux toolkit'],
    imgSrc: 'swiggy.png',
    link: '',
    githubLink: 'https://github.com/anandp2002/Namaste-React',
  },
  {
    id: 4,
    title: 'Scarlet Macaw Remedies',
    description:
      'Developed a pharmaceutical website showcasing product details with a responsive, stylish design using React and Tailwind CSS. Integrated EmailJS for contact forms, and added animations with Framer Motion to enhance the user experience. Built with a focus on usability and modern design.',
    techStack: ['React JS', 'Tailwind CSS'],
    imgSrc: 'scarlet.png',
    link: 'https://scarletmacawremedies.com/',
    githubLink: 'https://github.com/araviind-p/Scarlet-Macaw-Remedies',
  },
  {
    id: 5,
    title: 'Image Denoising',
    description:
      'Implemented an advanced image denoising project using metaheuristic algorithms, including Genetic Algorithm, Differential Evolution, Particle Swarm Optimization, and Simulated Annealing. Implemented in Python with libraries like skimage, cv2, and numpy to enhance image quality by reducing noise.',
    techStack: ['Python', 'Numpy', 'Opencv'],
    imgSrc: 'denoise.png',
    link: '',
    githubLink:
      'https://github.com/anandp2002/Image-denoising-using-Metaheuristic-Algorithm',
  },
  {
    id: 6,
    title: 'Weather App',
    description:
      'Created a simple weather app that allows users to check weather conditions in different cities using the OpenWeatherMap API. The app provides real-time data on temperature, humidity, and other weather details, offering a user-friendly interface for easy city searches and weather updates.',
    techStack: ['Node JS', 'HTML', 'CSS'],
    imgSrc: 'weather.png',
    link: 'http://anandpweatherapp.onrender.com/',
    githubLink: 'https://github.com/anandp2002/weather_app',
  },
];

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiRedux } from 'react-icons/si'; // Import icons for MySQL, Tailwind CSS, and Redux
import { DiPython } from 'react-icons/di';

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    name: 'HTML 5',
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    name: 'CSS',
  },
  {
    icon: <FaJsSquare className="text-yellow-500 text-4xl" />,
    name: 'JavaScript',
  },
  {
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    name: 'React JS',
  },
  {
    icon: <FaNode className="text-green-500 text-4xl" />,
    name: 'Node JS',
  },
  {
    icon: <FaGitAlt className="text-red-500 text-4xl" />,
    name: 'Git',
  },
  {
    icon: <FaGithub className="text-white text-4xl" />,
    name: 'GitHub',
  },
  {
    icon: <SiMysql className="text-blue-700 text-4xl" />,
    name: 'MySQL',
  },
  {
    icon: <SiTailwindcss className="text-sky-500 text-4xl" />,
    name: 'Tailwind CSS',
  },
  {
    icon: <SiRedux className="text-purple-600 text-4xl" />,
    name: 'Redux Toolkit',
  },
  {
    icon: <DiPython className="text-yellow-500 text-4xl" />, // Python icon
    name: 'Python',
  },
  {
    icon: (
      <img
        src="c.png"
        alt="C Language Icon"
        className="text-green-500 h-[36px]"
      />
    ),
    name: 'C',
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree:
      'Bachelor of Technology in Computer Science and Engineering ( 2020 - 2024 )',
    board: 'APJ Abdul Kalam Technological University',

    institute: 'College Of Engineering Thalassery',
    mark: '8.26 CGPA',
  },
  {
    id: 2,
    degree: 'Plus Two ( 2018 - 2020 )',
    board: 'Board Of Higher Secondary Examinations, Kerala',

    institute: "St. Sebastian's Higher Secondary School Velimanam",
    mark: '96 %',
  },
  {
    id: 3,
    degree: 'SSLC ( 2017 - 2018 )',
    board: 'Board Of Public Examinations, Kerala',

    institute: "St. Sebastian's UP School Veerpad",
    mark: '100 %',
  },
];
