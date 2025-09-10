import React, { useState, useEffect } from "react";
import ConsoleRunner from "./ConsoleRunner";
import LessonOverlay from "./LessonOverlay";
import "../scss/LessonCard.scss"; // Import styles for the component

function LessonCard({
  lesson,
  lessons,
  expanded,
  onExpand,
  onCollapse,
  activeLessonId,
  setActiveLessonId,
  popoverRef,
  className = ""
}) {
  const [showExample, setShowExample] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayResult, setOverlayResult] = useState(null);


  const handleToggle = () => {
    expanded ? onCollapse?.() : onExpand?.();
  };

  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isIncorrect, setIsIncorrect] = React.useState(false);
  const [hasSucceeded, setHasSucceeded] = React.useState(false);
  const [hasFailed, setHasFailed] = React.useState(false);
  const [status, setStatus] = React.useState("");

// When a user runs their code and it passes/fails, the status (correct or incorrect) is saved in localStorage.
// On reload or revisiting, LessonCard reads that saved status and applies the class, automatically styling the card based on correct or incorrect.

useEffect(() => {
  const saved = localStorage.getItem(`lesson-${lesson.id}-status`);
  if (saved) setStatus(saved);
}, [lesson.id]);

useEffect(() => {
  if (status) {
    localStorage.setItem(`lesson-${lesson.id}-status`, status);
  }
}, [status, lesson.id]);

// keep status in sync with isCorrect/isIncorrect
useEffect(() => {
  if (isCorrect) setStatus("correct");
  if (isIncorrect) setStatus("incorrect");
}, [isCorrect, isIncorrect]);

  useEffect(() => {
  let timer;

  if (isCorrect) {
    timer = setTimeout(() => {
      setOverlayResult("success");
      setShowOverlay(true);
    }, 2000);
  } else if (isIncorrect) {
    timer = setTimeout(() => {
      setOverlayResult("failure");
      setShowOverlay(true);
    }, 2000);
  } else {
    setShowOverlay(false);
    setOverlayResult(null);
  }

  return () => clearTimeout(timer);
  }, [isCorrect, isIncorrect]);

  return (
    <article className={`lesson-card-wrapper ${expanded ? "expanded" : ""} ${className} ${status}`}>
  <div className={`lesson-card ${expanded ? "expanded" : ""} ${expanded && showOverlay ? "overlay-active" : ""} ${status}`}>
        {/* Static info */}
        <div className="lesson-card-header">
          <time className="lesson-date">{lesson.date}</time>
          <div className="lesson-title-header">
            <h3 className={`lesson-title ${status}`} >{lesson.title}</h3>
          <p className="lesson-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt varius,
nisl nunc faucibus lorem, sed placerat elit leo a risus. Cras vel leo ac purus cursus interdum.
Aliquam erat volutpat. Integer at facilisis magna, vel hendrerit risus.</p>

          </div>

          {/* Tags */}
          <div className="lesson-tags">
            <span className="lesson-tag">{lesson.tag}</span>
          </div>
        </div>
        <div className={`lesson-card-body ${expanded ? "expanded" : ""}`}>
                  {/* Expandable content */}
        {expanded && (
          <>
            {/* Toggle buttons */}
            <div className="lesson-toggle-buttons">
              <button
                className={`lesson-toggle-button ${
                  showExample ? "active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowExample(true);
                }}
              >
                Example
              </button>
              <button
                className={`lesson-toggle-button ${
                  !showExample ? "active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowExample(false);
                }}
              >
                Try It
              </button>
            </div>

            {/* Expanded content */}
            <div
              className="lesson-expanded-content"
              onClick={(e) => e.stopPropagation()}
            >
              {showExample && (
                <p className="lesson-task-title">Let's look at an example</p>
              )}
              {showExample ? (
                <>
                  <ul className="lesson-task-list">
                    {lesson.example.description.map((sentence, index) => (
                      <li key={index}>{sentence}</li>
                    ))}
                  </ul>
                  <ConsoleRunner code={lesson.example.code} />
                </>
              ) : (
                <>
                  <h4 className="lesson-task-title">{lesson.task.title}</h4>
                  <ul className="lesson-task-list">
                    {lesson.task.steps.map((sentence, index) => (
                      <li key={index}>{sentence}</li>
                    ))}
                  </ul>
                      <ConsoleRunner
                        lesson={lesson}
                        userCode={lesson.task.code}
                        editable
                        onCodeCorrect={setIsCorrect}
                        onCodeIncorrect={setIsIncorrect}
                        onSuccess={setHasSucceeded}
                        onFailure={setHasFailed}
                  />
                </>
              )}
            </div>
          </>
          )}
          </div>

        <div className={`lesson-card-footer ${expanded ? "expanded" : ""}`}>
          <div className="lesson-footer-tags">
            <span className="lesson-tag">{lesson.tag}</span>
          </div>
          <span></span>
        <div className="lesson-toggle-icon">
          <svg
  viewBox="0 0 20 20"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={`toggle-arrow ${expanded ? "open" : ""}`}
  onClick={handleToggle}
  style={{ cursor: "pointer", display: "block", margin: "auto" }}
>
  <polyline points="7 7, 13 13" />
  <polyline points="13 7, 13 13, 7 13" />
</svg>

        </div>
        </div>
      </div>

      {showOverlay && (
    <div className="lesson-overlay">
      <LessonOverlay
        isCorrect={isCorrect}
        isIncorrect={isIncorrect}
        hasSucceeded={hasSucceeded}
        hasFailed={hasFailed}
        activeLessonId={activeLessonId}
        setActiveLessonId={setActiveLessonId}
        lessons={lessons}
        setIsCorrect={setIsCorrect}
        setIsIncorrect={setIsIncorrect}
        setHasSucceeded={setHasSucceeded}
        setHasFailed={setHasFailed}
        popoverRef={popoverRef}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        overlayResult={overlayResult}
      />
    </div>
  )}
</article>
  );
}
export default LessonCard;
