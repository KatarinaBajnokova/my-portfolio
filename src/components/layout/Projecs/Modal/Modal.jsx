import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './Modal.scss';

import getModalPages from './Content';
import ModalLeftPage from './Left';
import ModalRightPage from './Right';

export default function ProjectModal({ isOpen, onClose, project }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!project) return null;

  const pages = getModalPages(project);

  if (!pages || pages.length === 0) return null;

  const page = pages[currentPage];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-book">
              <ModalLeftPage
                title={page.title}
                content={page.content}
                isFirstPage={currentPage === 0}
                isLastPage={currentPage === pages.length - 1}
                onPrev={() => setCurrentPage(p => p - 1)}
                onNext={() => setCurrentPage(p => p + 1)}
              />

              <div className="modal-divider" />

              {/* Ensure video is passed correctly, and fallback for empty video */}
              <ModalRightPage images={page.images} video={page.video} tabs={page.tabs} />
            </div>

            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
