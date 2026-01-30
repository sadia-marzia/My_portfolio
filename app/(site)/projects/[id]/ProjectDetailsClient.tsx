"use client"; // Mark as Client Component

import ImagesCarousel from "../../components/ImagesCarousel"; // Import the reusable carousel

interface ProjectDetailsProps {
  project: {
    tools: string;
    significance: string;
    description: string;
    github: string;
    images: string[];
  };
  title: string;
}

export default function ProjectDetailsClient({
  project,
  title,
}: ProjectDetailsProps) {
  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-3xl text-navy font-bold mb-6">{title}</h1>
      <p className="text-lg text-ash-dark mb-4 text-justify">{project.description}</p>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-navy">Tools:</h2>
        <p>{project.tools}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-navy">Significance:</h2>
        <p>{project.significance}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-navy">Images:</h2>
        {/* Use the ImagesCarousel component */}
        <ImagesCarousel images={project.images} />
      </div>

      {/* Centered and Hover-Styled GitHub Button */}
      <div className="flex justify-center mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-navy text-white rounded-md hover:bg-navy-dark transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}