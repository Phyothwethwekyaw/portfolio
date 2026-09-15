import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#1d1d1f] border-t border-[#d2d2d7] dark:border-[#3a3a3c] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">Julie</span>
            </h2>
            <p className="text-[#1d1d1f] dark:text-[#a1a1a6] mb-4">
              Crafting modern web solutions with React and Next.js
            </p>
            <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
              Based in Thailand 🇹🇭
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-[#1d1d1f] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-300">About</a>
              <a href="#projects" className="text-[#1d1d1f] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-[#1d1d1f] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-300">Contact</a>
              {/* <a 
                href="/Phyo_Thwe_Thwe_Kyaw_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#a1a1a6] hover:text-[#f5f5f7] transition-colors duration-300"
              >
                Resume
              </a> */}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h3 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold mb-4">Let's Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="mailto:phyothwethwekyaw404@gmail.com"
                className="bg-[#f5f5f7] dark:bg-[#3a3a3c] p-3 rounded-full text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#1d1d1f] dark:hover:bg-[#1d1d1f] hover:text-white dark:hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/phyothwethwekyaw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f5f5f7] dark:bg-[#3a3a3c] p-3 rounded-full text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#1d1d1f] dark:hover:bg-[#1d1d1f] hover:text-white dark:hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Phyothwethwekyaw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f5f5f7] dark:bg-[#3a3a3c] p-3 rounded-full text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-gray-700 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d2d2d7] dark:border-[#3a3a3c] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6] mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Phyo Thwe Thwe Kyaw. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};