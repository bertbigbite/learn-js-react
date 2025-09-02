import React, { useState } from "react";
import ConsoleRunner from "./ConsoleRunner";
import "../scss/LessonCard.scss"; // Import styles for the component

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
  const [hasSucceeded, setHasSucceeded] = React.useState(false);
  const [hasFailed, setHasFailed] = React.useState(false);


  return (
    <article
      className={`lesson-card-wrapper  ${
        expanded ? "expanded" : ""
      } ${className}  ${isCorrect ? "correct" : ""} ${
        isIncorrect ? "incorrect" : ""
      } ${hasSucceeded ? "succeeded" : ""} ${ hasFailed ? "failed" : "" }`}
    >
      <div className={`lesson-card ${expanded ? "expanded" : ""}`}>
        {/* Static info */}
        <div className="lesson-card-header">
          <time className="lesson-date">{lesson.date}</time>
          <div className="lesson-title-header">
            <h3 className="lesson-title">{lesson.title}</h3>
          <p className="lesson-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt varius,
nisl nunc faucibus lorem, sed placerat elit leo a risus. Cras vel leo ac purus cursus interdum.
Aliquam erat volutpat. Integer at facilisis magna, vel hendrerit risus.</p>

          </div>

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
                      onSuccess={setHasSucceeded}
                      onFailure={setHasFailed}
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
      <div>
        <div className="success-failure-message">
          {hasSucceeded && (
            <div className="success-message">
              <strong>Success!</strong> You completed the task correctly. Lets move onto the next lesson.
            </div>
          )}
          {hasFailed && (
            <div className="failure-message">
              <strong>Try Again!</strong> The code did not produce the expected output.
            </div>
          )}

        </div>
      </div>
    </article>
  );
}
export default LessonCard;
