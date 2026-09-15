import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl, status } = project;

  return (
    <div className="group relative bg-[#f5f5f7] dark:bg-[#121826] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      {/* Status Badge */}
      {/* {status && (
        <div className="absolute top-3 right-3 z-10">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            status === 'Complete' 
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {status}
          </span>
        </div>
      )} */}

      {/* Project Image */}
      <div className="relative h-[28rem] sm:h-[36rem] w-full">
        <Image
          src={image}
          alt={`${title} - Screenshot of project`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Overlay with buttons - works on both desktop and mobile */}
        <div className="absolute inset-0 bg-[#1d1d1f]/40 dark:bg-[#4B0082]/40 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 md:gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#f5f5f7] dark:bg-[#2C2F48] rounded-full text-[#1d1d1f] dark:text-[#FFD700] hover:bg-[#1d1d1f] dark:hover:bg-[#6F42C1] hover:text-white dark:hover:text-[#F8F8F8] active:bg-[#1d1d1f] dark:active:bg-[#6F42C1] active:text-white dark:active:text-[#F8F8F8] transition-colors"
              title="Live Demo"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#f5f5f7] dark:bg-[#2C2F48] rounded-full text-[#1d1d1f] dark:text-[#FFD700] hover:bg-[#1d1d1f] dark:hover:bg-[#6F42C1] hover:text-white dark:hover:text-[#F8F8F8] active:bg-[#1d1d1f] dark:active:bg-[#6F42C1] active:text-white dark:active:text-[#F8F8F8] transition-colors"
            title="View Code"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-[#1d1d1f] dark:text-[#ffffff]">{title}</h3>
        <p className="text-sm md:text-base text-[#1d1d1f] dark:text-[#cccccc] mb-4 line-clamp-3">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 md:px-3 py-1 bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#d2d2d7] dark:border-[#3a3a3c] rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;