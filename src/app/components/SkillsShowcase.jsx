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

function SkillPill({ name, Icon, color }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-3 whitespace-nowrap">
      <Icon
        className={`w-7 h-7 ${color ? '' : 'text-[#1d1d1f] dark:text-white'}`}
        style={color ? { color } : undefined}
      />
      <span className="text-sm md:text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
        {name}
      </span>
    </div>
  );
}

export default function SkillsShowcase() {
  const track = [...skills, ...skills];

  return (
    <div className="group relative max-w-5xl mx-auto rounded-2xl overflow-hidden">
      <div
        className="py-6"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((skill, i) => (
            <SkillPill key={`${skill.name}-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
