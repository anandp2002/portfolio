import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 sm:py-4 mx-auto text-white border-t border-purple-300/20  flex justify-center">
      <div className="flex flex-col items-center justify-between gap-2 md:h-20 md:flex-row">
        <div className="flex justify-center items-center text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          <p className="mr-3 text-lg">Connect With Me On</p>

          <div className="flex gap-x-3 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/anand-p-18894a219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="hover:text-gray-300" />
            </a>
            <a
              href="https://github.com/anandp2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="hover:text-gray-300" />
            </a>
            <a
              href="https://instagram.com/anandp__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} className="hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
