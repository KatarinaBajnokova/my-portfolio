import { motion } from 'framer-motion';

export default function ProjectCard({
  title,
  image,
  video,
  tag,
  frameColor,
  customClass,
  onClick,
}) {
  const fullClassName = `project-card frame-${frameColor} ${customClass || ''}`;
  console.log(`[ProjectCard] Rendered with class:`, fullClassName);

  return (
    <motion.div
      className={fullClassName}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {video ? (
        <video src={video} muted autoPlay loop playsInline className="project-media" />
      ) : (
        <img src={image} alt={title} className="project-media" />
      )}
      <span className="tag">{tag}</span>
    </motion.div>
  );
}
