'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './projectCard';

gsap.registerPlugin(ScrollTrigger);

export default function LayeredProjects({ projects }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.layered-card');

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: () => `top top+=${96 + i * 20}`,
          endTrigger: containerRef.current,
          end: () => `bottom top+=${96 + (cards.length - 1) * 20 + card.offsetHeight}`,
          pin: true,
          pinSpacing: false,
        });

        gsap.to(card, {
          scale: 1 - (cards.length - 1 - i) * 0.04,
          opacity: 0.6,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top+=120',
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto space-y-12">
      {projects.map((project) => (
        <div key={project.id} className="layered-card">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
