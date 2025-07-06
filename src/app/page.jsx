'use client';
import Image from 'next/image';
import ProjectCard from './components/projectCard';
import { projects } from './data/projects';
import Separator from './components/separator';
import ContactForm from './components/contactForm';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 overflow-hidden bg-white dark:bg-[#0E0E1A] transition-colors duration-300">
      {/* Hero Section */}
      <section id="about" className="flex flex-col md:flex-row items-center justify-between py-16 md:py-32 gap-8">
        {/* Left side - Illustration/Profile */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <Image
              src="/julie.jpeg"
              alt="Phyo Thwe Thwe Kyaw - Frontend Developer"
              fill
              className="object-cover rounded-full"
              priority
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 320px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <p className="text-amber-600 dark:text-[#FFD700] mb-2 text-base md:text-lg">
            Welcome to my Portfolio, my name is
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 text-gray-900 dark:text-[#F8F8F8] leading-tight">
            <span className="block text-base sm:text-2xl md:text-3xl font-semibold text-gray-600 dark:text-[#AAAAAA] mb-1">Phyo Thwe Thwe Kyaw</span>
            <span className="block">
              <span className="text-gray-900 dark:text-[#F8F8F8]">Front</span>
              <span className="text-blue-600 dark:text-[#6EC1E4]">end</span>
              <span className="text-gray-900 dark:text-[#F8F8F8]"> Developer</span>
            </span>
          </h1>
          <p className="text-gray-700 dark:text-[#CCCCCC] mb-4 max-w-xl">
            I am a final-year ICT student and passionate frontend developer based in Thailand, actively seeking internship opportunities. Specializing in React, Next.js, and modern JavaScript frameworks, I create clean, responsive, and user-friendly web applications. Available for internships and work opportunities worldwide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            <a
              href="/PhyoThweThweKyaw (1).pdf"
              download
              className="flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-300 dark:border-[#2C2F48] bg-transparent text-gray-900 dark:text-[#F8F8F8] hover:bg-gray-200 dark:hover:bg-[#2C2F48] hover:text-amber-600 dark:hover:text-[#FFD700] transition-all duration-300 font-semibold"
            >
              Download CV
              {/* Download Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/>
              </svg>
            </a>
            <InteractiveHoverButton
              onClick={() => window.location.href = 'mailto:phyothwethwekyaw404@gmail.com'}
              className="bg-gray-200 dark:bg-[#232736] border-gray-300 dark:border-[#2C2F48] text-gray-900 dark:text-[#F8F8F8] hover:bg-amber-500 dark:hover:bg-[#FFD700] hover:text-white dark:hover:text-[#0E0E1A] hover:border-amber-500 dark:hover:border-[#FFD700]"
            >
              Hire Me
            </InteractiveHoverButton>
            <a
              href="https://github.com/Phyothwethwekyaw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-[#2C2F48] bg-transparent text-gray-900 dark:text-[#F8F8F8] hover:bg-gray-200 dark:hover:bg-[#2C2F48] hover:text-amber-600 dark:hover:text-[#FFD700] transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-amber-600 dark:text-[#FFD700] text-left">Skills</h2>
        <div className="flex flex-wrap text-left gap-4">
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">HTML</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">CSS</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">JavaScript</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">React</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Next.js</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Tailwind CSS</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Git</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Python</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Power BI</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">SQL</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Figma</span>
          <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Rapid Miner</span>
          

          
          {/* Add more skills as needed */}
        </div>
      </section>
      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-amber-600 dark:text-[#FFD700]">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-amber-600 dark:text-[#FFD700]">Let's Connect</h2>
        <p className="text-center text-gray-700 dark:text-[#CCCCCC] mb-8 md:mb-12 max-w-md mx-auto px-4">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        
        {/* Contact Form */}
        <ContactForm />
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 dark:text-[#CCCCCC] text-lg">Based in Thailand 🇹🇭</p>
          <p className="text-sm text-gray-600 dark:text-[#AAAAAA] mt-2">Frontend Developer available for remote work opportunities worldwide</p>
          <p className="text-xs text-gray-500 dark:text-[#888888] mt-1">Specializing in React, Next.js, and modern web development</p>
        </div>
      </section>
    </main>
  );
}