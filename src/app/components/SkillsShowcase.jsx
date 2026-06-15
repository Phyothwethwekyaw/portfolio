'use client';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiPython,
  SiStrapi,
  SiGit,
  SiFigma,
  SiMysql,
} from 'react-icons/si';

const skills = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: null },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Strapi', Icon: SiStrapi, color: '#4945FF' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
];

export default function SkillsShowcase() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
      {skills.map(({ name, Icon, color }) => (
        <div
          key={name}
          className="group relative flex flex-col items-center justify-center gap-3 px-4 py-6 hover:border-amber-500 dark:hover:border-[#FFD700] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
        >
          {/* Logo */}
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-50 dark:bg-[#0E0E1A] flex items-center justify-center border border-gray-200 dark:border-[#2C2F48] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ease-out">
            <Icon
              className={`w-8 h-8 ${color ? '' : 'text-gray-900 dark:text-white'}`}
              style={color ? { color } : undefined}
            />
          </div>

          {/* Name */}
          <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-[#F8F8F8] text-center">
            {name}
          </h4>

          {/* Decorative hover glow */}
          <div
            className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none"
            style={{ background: color || '#FFD700' }}
          />
        </div>
      ))}
    </div>
  );
}
