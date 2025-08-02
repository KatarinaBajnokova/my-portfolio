export default function ModalLeftPage({
  title,
  content,
  isFirstPage = false,
  isLastPage = false,
  onPrev,
  onNext,
}) {
  return (
    <div className="modal-page left">
      <h2>{title}</h2>
      <p>{content}</p>

      <div className="page-controls">
        {!isFirstPage && (
          <button className="prev-btn" onClick={onPrev}>
            ← Previous
          </button>
        )}

        {!isLastPage && (
          <button className="next-btn" onClick={onNext}>
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
