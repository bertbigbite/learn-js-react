import React, { useState } from "react";
import ConsoleRunner from "./ConsoleRunner";
import "../App.scss"; // Import styles for the component

function LessonCard({
  lesson,
  expanded,
  onExpand,
  onCollapse,
  className = ""
}) {
  const [showExample, setShowExample] = useState(true);

  const handleToggle = () => {
    expanded ? onCollapse?.() : onExpand?.();
  };

  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isIncorrect, setIsIncorrect] = React.useState(false);

  return (
    <article
      className={`lesson-card-wrapper  ${
        expanded ? "expanded" : ""
      } ${className}  ${isCorrect ? "correct" : ""} ${
        isIncorrect ? "incorrect" : ""
      }`}
    >
      <div className={`lesson-card ${expanded ? "expanded" : ""}`}>
        {/* Static info */}
        <div className="lesson-card-header">
          <time className="lesson-date">{lesson.date}</time>
          <h3 className="lesson-title">{lesson.title}</h3>

          {/* Tags */}
          <div className="lesson-tags">
            <span className="lesson-tag">{lesson.tag}</span>
          </div>
        </div>
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
                    code={lesson.task.code}
                    editable
                    onCodeCorrect={setIsCorrect}
                    onCodeIncorrect={setIsIncorrect}
                  />
                </>
              )}
            </div>
          </>
        )}

        {/* Expand/collapse indicator */}
        <div className="lesson-toggle-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`toggle-arrow ${expanded ? "open" : ""}`}
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <polyline points="7 7, 17 17" />
            <polyline points="17 7, 17 17, 7 17" />
          </svg>
        </div>
      </div>
    </article>
  );
}
export default LessonCard;
