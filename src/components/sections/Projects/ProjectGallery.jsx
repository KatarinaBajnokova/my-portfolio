import { useState } from 'react';
import './ProjectGallery.scss';
import ProjectCard from '@/components/layout/Projecs/Card/Card';
import ProjectModal from '@/components/layout/Projecs/Modal/Modal';

import guess from '@/assets/videos/guess.mp4';
import koyekolaVideo from '@/assets/videos/koyekola.mp4';
import sentoraVideo from '@/assets/videos/sentora.mp4';
import rougeVideo from '@/assets/videos/rouge.mp4';

const koyekolaProject = [
  {
    title: 'Koyekola',
    video: koyekolaVideo,
    tag: '#EducationalGame',

    isFeatured: true,
  },
];

const otherProjects = [
  {
    title: 'Guess Redesign',
    video: guess,
    tag: '#UI Design',
  },
  {
    title: 'Sentora',
    video: sentoraVideo,
    tag: '#InclusiveMusicApp',
  },
  {
    title: 'Rouge',
    video: rougeVideo,
    tag: '#ReactSassPHP',
  },
];

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = project => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section className="projects-gallery">
      <h2>My Projects</h2>
      <p>A collection of projects showcasing my work in UX design and front-end development.</p>

      <div className="gallery-row single-center">
        {koyekolaProject.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            onClick={() => handleOpenModal(project)}
            customClass={project.isFeatured ? 'featured' : ''}
          />
        ))}
      </div>

      <div className="gallery-row">
        {otherProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            onClick={() => handleOpenModal(project)}
            customClass={project.isFeatured ? 'featured' : ''}
          />
        ))}
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}
