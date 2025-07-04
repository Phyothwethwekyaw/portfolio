import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl, status } = project;

  return (
    <div className="group relative bg-white dark:bg-[#121212] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      {/* Status Badge */}
      {status && (
        <div className="absolute top-3 right-3 z-10">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            status === 'Complete' 
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {status}
          </span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-40 sm:h-48 w-full">
        <Image
          src={image}
          alt={`${title} - Screenshot of project`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Overlay with buttons - works on both desktop and mobile */}
        <div className="absolute inset-0 bg-blue-600/40 dark:bg-[#4B0082]/40 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 md:gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-[#2C2F48] rounded-full text-blue-600 dark:text-[#FFD700] hover:bg-blue-600 dark:hover:bg-[#6F42C1] hover:text-white dark:hover:text-[#F8F8F8] active:bg-blue-600 dark:active:bg-[#6F42C1] active:text-white dark:active:text-[#F8F8F8] transition-colors"
            title="Live Demo"
          >
            <FiExternalLink className="w-5 h-5" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 dark:bg-[#2C2F48] rounded-full text-blue-600 dark:text-[#FFD700] hover:bg-blue-600 dark:hover:bg-[#6F42C1] hover:text-white dark:hover:text-[#F8F8F8] active:bg-blue-600 dark:active:bg-[#6F42C1] active:text-white dark:active:text-[#F8F8F8] transition-colors"
            title="View Code"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-amber-600 dark:text-[#FFD700]">{title}</h3>
        <p className="text-sm md:text-base text-gray-700 dark:text-[#CCCCCC] mb-4 line-clamp-2">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 md:px-3 py-1 bg-gray-200 dark:bg-[#2C2F48] text-blue-600 dark:text-[#FFD700] rounded-full text-xs font-medium"
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