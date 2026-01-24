import "../scss/LessonOverlay.scss";

function LessonOverlay({
  setHasSucceeded,
  setHasFailed,
  setIsCorrect,
  setIsIncorrect,
  activeLessonId,
  setActiveLessonId,
  lessons,
  popoverRef,
  showOverlay,
  setShowOverlay,
  overlayResult
}) {

    if (!showOverlay) return null;

  const handleNextLesson = () => {
    if (!activeLessonId) return;

    const currentIndex = lessons.findIndex((l) => l.id === activeLessonId);

    if (currentIndex === -1 || currentIndex === lessons.length - 1) {
      // Last lesson → just close
      setActiveLessonId(null);
      popoverRef.current?.hidePopover();
    } else {
      const nextLesson = lessons[currentIndex + 1];

      // Expand the next lesson
      setActiveLessonId(nextLesson.id);
    }
  };

  const handleClose = () => {
    setActiveLessonId(null);
    setHasSucceeded(false);
    setHasFailed(false);
    setShowOverlay(false);
    setIsCorrect?.(false);
    setIsIncorrect?.(false);
  }

  const handleTryAgain = () => {
    setHasSucceeded(false);
    setHasFailed(false);
    setShowOverlay(false);
    setIsCorrect?.(false);
    setIsIncorrect?.(false);
  };



  return (
    <div className="success-failure-message">
      {overlayResult === "success" && (
        <div className="success-message">
          <span className="checkmark"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/> </svg></span>
          <h2>Success!</h2>
          <p>You completed the task correctly. Let’s move onto the next lesson.</p>
          <div className="popup-buttons">
            <button className="close-button" onClick={handleClose}>Close</button>
            <button className="next-lesson-button" onClick={handleNextLesson}>Next Lesson</button>
          </div>
        </div>
      )}

      {overlayResult === "failure" && (
        <div className="failure-message">
          <span className="crossmark"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/> </svg></span>
          <h2>Oops!</h2>
          <p>That's not quite right. Look at the instructions carefully and try again.</p>
          <div className="popup-buttons">
            <button className="close-button" onClick={handleTryAgain}>Retry</button>
            <button className="next-lesson-button" disabled onClick={handleNextLesson}>Next Lesson</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default LessonOverlay;
