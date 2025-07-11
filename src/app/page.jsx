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
            Motivated and detail-oriented Bachelor's student majoring in Information and Communication Technology, with hands-on experience in front-end development. Skilled in building responsive web applications using Html, Tailwind CSS, Javascript and React.js, along with academic experience in data science, machine learning, and simulation modeling using Python. Enthusiastic about leveraging technology to solve problems and seeking an opportunity to contribute as a intern in a dynamic and innovative environment.
          </p>
          <div className="flex flex-col items-center md:items-start gap-4 mb-6">
            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
            </div>
            
            {/* Social Links Row */}
            <div className="flex gap-4 justify-center md:justify-start">
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
              <a
                href="https://www.linkedin.com/in/phyothwethwekyaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-[#2C2F48] bg-transparent text-gray-900 dark:text-[#F8F8F8] hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/jully.yan.9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-[#2C2F48] bg-transparent text-gray-900 dark:text-[#F8F8F8] hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://line.me/ti/p/4av6NAHy2r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-[#2C2F48] bg-transparent text-gray-900 dark:text-[#F8F8F8] hover:bg-green-500 dark:hover:bg-green-500 hover:text-white dark:hover:text-white hover:border-green-500 dark:hover:border-green-500 transition-all duration-300"
                aria-label="Line"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Education Section */}
      <section id="education" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-amber-600 dark:text-[#FFD700] text-left">Education</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="space-y-8">
            {/* Rangsit University */}
            <div className="relative flex items-start">
              {/* Timeline Dot */}
              <div className="absolute left-2 top-1 w-4 h-4 bg-amber-600 dark:bg-[#FFD700] rounded-full border-4 border-white dark:border-[#0E0E1A]"></div>
              
              {/* Content */}
              <div className="ml-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F8F8F8] mb-1">
                  Bachelor of Science in Information and Communication Technology
                </h3>
                <p className="text-gray-600 dark:text-[#AAAAAA] text-sm mb-2">Jan 2023 - Present</p>
                <p className="text-amber-600 dark:text-[#FFD700] font-medium mb-2">Rangsit University</p>
                <p className="text-gray-700 dark:text-[#CCCCCC] mb-1">
                  <span className="font-medium">CGPA:</span> 3.7
                </p>
                <p className="text-gray-700 dark:text-[#CCCCCC]">
                  <span className="font-medium">Relevant Courses:</span> Data Structures, Web Development, Databases, Data Science, Data Mining, Machine Learning
                </p>
              </div>
            </div>

            {/* University of Computer Studies */}
            <div className="relative flex items-start">
              {/* Timeline Dot */}
              <div className="absolute left-2 top-1 w-4 h-4 bg-amber-600 dark:bg-[#FFD700] rounded-full border-4 border-white dark:border-[#0E0E1A]"></div>
              
              {/* Content */}
              <div className="ml-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F8F8F8] mb-1">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600 dark:text-[#AAAAAA] text-sm mb-2">Dec 2018 - Mar 2020</p>
                <p className="text-amber-600 dark:text-[#FFD700] font-medium">University of Computer Studies, Taunggyi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-amber-600 dark:text-[#FFD700] text-left">Skills</h2>
        <div className="space-y-6">
          {/* Programming Languages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#F8F8F8] mb-3">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Python</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">JavaScript</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">HTML</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Tailwind CSS</span>
            </div>
          </div>

          {/* Tools/Frameworks */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#F8F8F8] mb-3">Tools/Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Rapid Miner</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Jupyter Notebook</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Google Colab</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Excel</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Pandas</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">NumPy</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Matplotlib</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Power BI</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">React.js</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">VS Code</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Chrome DevTools</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Git</span>
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#F8F8F8] mb-3">Databases</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">MySQL</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Google Sheets</span>
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#F8F8F8] mb-3">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Problem Solving</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Team Collaboration</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Fast Learner</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Data Visualization & Reporting</span>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#F8F8F8] mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Burmese (Fluent)</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Chinese (Conversational)</span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#232736] text-gray-900 dark:text-[#F8F8F8] font-medium">Thai (Basic)</span>
            </div>
          </div>
        </div>
      </section>
      <Separator />

      {/* Certificates Section */}
      <section id="certificates" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-amber-600 dark:text-[#FFD700] text-left">Certificates</h2>
        <div className="bg-gray-50 dark:bg-[#232736] rounded-lg p-6 border border-gray-200 dark:border-[#2C2F48]">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F8F8F8] mb-2">
            ASEAN Data Science Explorers 2023
          </h3>
          <p className="text-amber-600 dark:text-[#FFD700] font-medium mb-3">SAP Analytics Cloud Training</p>
          <p className="text-gray-700 dark:text-[#CCCCCC]">
            Attended the online Enablement Session focused on SAP Analytics Cloud. 
            Gained foundational knowledge in data analytics and cloud-based visualization concepts.
          </p>
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