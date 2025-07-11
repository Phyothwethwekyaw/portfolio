'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  // Handle scroll and section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust viewport offset

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      // Immediately update active section
      setActiveSection(href.slice(1));

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
  <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0E0E1A]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#2C2F48] transition-colors duration-300">
    <nav className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="relative z-50 flex items-center gap-2">
          {/* Flower SVG Logo */}
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 dark:bg-[#FFD700] shadow-md transition-colors duration-300">
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Center circle */}
              <circle cx="16" cy="16" r="5" fill="currentColor" className="text-white dark:text-[#0E0E1A]"/>
              {/* Petals */}
              <ellipse cx="16" cy="6" rx="3" ry="6" fill="currentColor" className="text-white dark:text-[#0E0E1A]" opacity="0.7"/>
              <ellipse cx="16" cy="26" rx="3" ry="6" fill="currentColor" className="text-white dark:text-[#0E0E1A]" opacity="0.7"/>
              <ellipse cx="6" cy="16" rx="6" ry="3" fill="currentColor" className="text-white dark:text-[#0E0E1A]" opacity="0.7"/>
              <ellipse cx="26" cy="16" rx="6" ry="3" fill="currentColor" className="text-white dark:text-[#0E0E1A]" opacity="0.7"/>
              <ellipse cx="8.5" cy="8.5" rx="2.5" ry="5" fill="currentColor" className="text-white dark:text-[#0E0E1A]" opacity="0.5" transform="rotate(-45 8.5 8.5)"/>
              <ellipse cx="23.5" cy="8.5" rx="2.5" ry="5" fill="currentColor" className="text-white dark:text-[#0E0E1A]" opacity="0.5" transform="rotate(45 23.5 8.5)"/>
              <ellipse cx="8.5" cy="23.5" rx="2.5" ry="5" fill="currentColor" className="text-white dark:text-[#0E0E1A]" opacity="0.5" transform="rotate(45 8.5 23.5)"/>
              <ellipse cx="23.5" cy="23.5" rx="2.5" ry="5" fill="currentColor" className="text-white dark:text-[#0E0E1A]" opacity="0.5" transform="rotate(-45 23.5 23.5)"/>
            </svg>
          </span>
          <h1 className="text-2xl font-bold">
            <span className="text-gray-900 dark:text-[#F8F8F8] transition-colors duration-300">Julie</span>
          </h1>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`py-2 font-medium transition-colors duration-300
                    ${
                      activeSection === link.href.slice(1)
                        ? 'text-gray-900 dark:text-[#F8F8F8]'
                        : 'text-gray-600 dark:text-[#CCCCCC]'
                    }
                    hover:text-amber-600 dark:hover:text-[#FFD700]`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FiSun className="w-4 h-4" />
            ) : (
              <FiMoon className="w-4 h-4" />
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full bg-gray-600 dark:bg-[#CCCCCC] transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-600 dark:bg-[#CCCCCC] transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-600 dark:bg-[#CCCCCC] transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 dark:bg-[#4B0082]/40 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-40 h-screen bg-white dark:bg-[#121212] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 pt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-2xl font-medium transition-colors duration-300
                ${
                  activeSection === link.href.slice(1)
                    ? 'text-gray-900 dark:text-[#F8F8F8]'
                    : 'text-gray-600 dark:text-[#CCCCCC]'
                }
                hover:text-amber-600 dark:hover:text-[#FFD700]`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  </header>
);  
};

export default Navbar;

