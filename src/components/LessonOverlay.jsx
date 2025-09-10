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
