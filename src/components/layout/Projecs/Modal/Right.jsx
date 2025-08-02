import { motion } from 'framer-motion';
import TabbedViewer from '../Tabbed/Viewer';
import './Right.scss';
export default function ModalRightPage({ images = [], video, tabs = [] }) {
  return (
    <div className="modal-page right">
      {tabs && tabs.length > 0 ? (
        <motion.div
          className="modal-tabbed-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <TabbedViewer tabs={tabs} />
        </motion.div>
      ) : images && images.length > 0 ? (
        <motion.div
          className="modal-image-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Modal asset ${index}`}
              className={`modal-image image-${img.size || 'medium'}`}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="modal-video-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <video className="modal-video" src={video} controls autoPlay loop muted />
        </motion.div>
      )}
    </div>
  );
}
