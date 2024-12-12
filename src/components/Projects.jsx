import { useRef } from 'react';
import { PROJECTS } from '../constants';
import { FaGithub } from 'react-icons/fa'; // GitHub icon
import { FiExternalLink } from 'react-icons/fi'; // Live Demo icon

const Projects = () => {
  const projectsRef = useRef(null);

  return (
    <section
      className="pt-16 max-w-7xl mx-auto"
      id="projects"
      ref={projectsRef}
    >
      <div className="">
        <h2 className="mb-6 text-center text-3xl font-medium lg:text-4xl">
          PROJECTS
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex w-full flex-col p-5 md:w-1/2 lg:w-1/3"
            >
              <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-56 w-full object-cover"
                  />
                </a>

                {/* Live and github links */}
                <div className="flex space-x-4 mt-4 gap-4 justify-start px-6 font-semibold text-pink-100">
                  {project.link != '' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center  hover:underline"
                    >
                      <FiExternalLink className="mr-1" size={20} /> Live
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  hover:underline"
                  >
                    <FaGithub className="mr-1" size={20} /> GitHub
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-justify">{project.description}</p>
                  <div className="mb-4">
                    <ul className="mt-2 gap-1 flex flex-wrap justify-start">
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
