import Image from 'next/image';
import ProjectCard from './components/projectCard';
import { projects } from './data/projects';
import Separator from './components/separator';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 overflow-hidden bg-[#0E0E1A]">
      {/* Hero Section */}
      <section id="about" className="flex flex-col md:flex-row items-center justify-between py-16 md:py-32 gap-8">
        {/* Left side - Illustration/Profile */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <Image
              src="/julie.jpeg"
              alt="Portfolio hero"
              fill
              className="object-cover rounded-full"
              priority
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 320px"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <p className="text-[#FFD700] mb-2 text-base md:text-lg">
            Welcome to my Portfolio, my name is
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 text-[#F8F8F8] leading-tight">
            <span className="block text-base sm:text-2xl md:text-3xl font-semibold text-[#AAAAAA] mb-1">Phyo Thwe Thwe Kyaw</span>
            <span className="block">
              <span className="text-[#F8F8F8]">Front</span>
              <span className="text-[#6EC1E4]">end</span>
              <span className="text-[#F8F8F8]"> Developer</span>
            </span>
          </h1>
          <p className="text-[#CCCCCC] mb-4 max-w-xl">
            {/* Your description goes here */}
            I am a passionate ICT student and aspiring front-end developer based in Thailand. I love building clean, responsive, and user-friendly web interfaces.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            <a
              href="/PhyoThweThweKyaw_CV.pdf"
              download
              className="flex items-center gap-2 px-6 py-2 rounded-lg border border-[#2C2F48] bg-transparent text-[#F8F8F8] hover:bg-[#2C2F48] hover:text-[#FFD700] transition-all duration-300 font-semibold"
            >
              Download CV
              {/* Download Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/>
              </svg>
            </a>
            <a
              href="mailto:phyothwethwekyaw404@gmail.com"
              className="px-6 py-2 rounded-lg border border-[#2C2F48] bg-transparent text-[#F8F8F8] hover:bg-[#2C2F48] hover:text-[#FFD700] transition-all duration-300 font-semibold"
            >
              Hire Me
            </a>
            <a
              href="https://github.com/Phyothwethwekyaw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#2C2F48] bg-transparent text-[#F8F8F8] hover:bg-[#2C2F48] hover:text-[#FFD700] transition-all duration-300"
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
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFD700] text-left">Skills</h2>
        <div className="flex flex-wrap text-left gap-4">
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">HTML</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">CSS</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">JavaScript</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">React</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">Next.js</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">Tailwind CSS</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">Git</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">Python</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">Power BI</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">SQL</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">Figma</span>
          <span className="px-4 py-2 rounded-lg bg-[#232736] text-[#F8F8F8] font-medium">Rapid Miner</span>
          

          
          {/* Add more skills as needed */}
        </div>
      </section>
      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#FFD700]">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-[#FFD700]">Let's Connect</h2>
        <p className="text-center text-[#CCCCCC] mb-8 md:mb-12 max-w-md mx-auto px-4">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a
            href="mailto:phyothwethwekyaw404@gmail.com"
            className="group flex-1 flex flex-col items-center bg-[#232736] border border-[#2C2F48] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#FFD700] hover:-translate-y-2"
          >
            <div className="h-14 w-14 flex items-center justify-center bg-[#FFD700] rounded-full mb-4 group-hover:bg-[#6F42C1] transition-colors duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#0E0E1A] group-hover:text-[#F8F8F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1 text-[#F8F8F8] text-lg">Email</h3>
            <p className="text-sm text-[#CCCCCC] text-center group-hover:text-[#FFD700] transition-colors duration-300">
              phyothwethwekyaw404@gmail.com
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/phyothwethwekyaw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex flex-col items-center bg-[#232736] border border-[#2C2F48] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#FFD700] hover:-translate-y-2"
          >
            <div className="h-14 w-14 flex items-center justify-center bg-[#FFD700] rounded-full mb-4 group-hover:bg-[#6F42C1] transition-colors duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#0E0E1A] group-hover:text-[#F8F8F8]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-1 text-[#F8F8F8] text-lg">LinkedIn</h3>
            <p className="text-sm text-[#CCCCCC] text-center group-hover:text-[#FFD700] transition-colors duration-300">
              Connect with me
            </p>
          </a>
          <a
            href="https://github.com/Phyothwethwekyaw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex flex-col items-center bg-[#232736] border border-[#2C2F48] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#FFD700] hover:-translate-y-2"
          >
            <div className="h-14 w-14 flex items-center justify-center bg-[#FFD700] rounded-full mb-4 group-hover:bg-[#6F42C1] transition-colors duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#0E0E1A] group-hover:text-[#F8F8F8]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-1 text-[#F8F8F8] text-lg">GitHub</h3>
            <p className="text-sm text-[#CCCCCC] text-center group-hover:text-[#FFD700] transition-colors duration-300">
              Check out my code
            </p>
          </a>
        </div>
        <div className="mt-16 text-center">
          <p className="text-[#CCCCCC] text-lg">Based in Thailand 🇹🇭</p>
          <p className="text-sm text-[#AAAAAA] mt-2">Open to remote opportunities worldwide</p>
        </div>
      </section>
    </main>
  );
}