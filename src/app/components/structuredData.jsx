'use client';

import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Phyo Thwe Thwe Kyaw",
      "jobTitle": "Frontend Developer",
      "description": "Frontend Developer from Thailand specializing in React, Next.js, and modern web technologies.",
      "url": "https://phyothwethwekyaw-portfolio.vercel.app",
      "image": "https://phyothwethwekyaw-portfolio.vercel.app/julie.jpeg",
      "email": "phyothwethwekyaw404@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Thailand"
      },
      "knowsAbout": [
        "Frontend Development",
        "React",
        "Next.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Web Development"
      ],
      "sameAs": [
        "https://github.com/Phyothwethwekyaw"
      ]
    });
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}