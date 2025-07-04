import LessonCard from "./LessonCard";
import Menu from "./Menu";
import modules from "../modules";
import "../App.scss";
import React from "react";

function Container({
  lessons,
  moduleName,
  moduleTime,
  moduleSummary,
  moduleImg,
  moduleQuantity,
  activeLessonId,
  setActiveLessonId,
  activeContent,
  handleSelect,
  setModuleColor,
  moduleColor
}) {
  const reorderedLessons = [
    ...(activeLessonId ? [lessons.find((l) => l.id === activeLessonId)] : []),
    ...lessons.filter((lesson) => lesson.id !== activeLessonId)
  ];

  const anyCardExpanded = activeLessonId !== null;

  return (
    <div className="container">
      <div className={`container-left ${anyCardExpanded ? "condensed" : ""}`}>
        <div className="sidebar">
          <img
            className="logo"
            src="https://ik.imagekit.io/bertbigbite/logos/logo.png?updatedAt=1749121280588"
            alt="Logo"
          />
          <Menu
            modules={Object.keys(modules).map((name, index) => ({
              name,
              href: "#",
              color: ["#7f5af0", "#ff8906", "#f25f4c", "#2cb67d"][index % 4],
              icon: modules[name].icon || null
            }))}
            onSelect={handleSelect}
            activeContent={activeContent}
            activeLessonId={activeLessonId}
            onColorChange={setModuleColor}
            showIcons={true}
          />

          <button
            className="Btn"
            popovertarget="lesson-popover"
            popovertargetaction="hide"
            style={{ backgroundColor: moduleColor }}
          >
            <div className="sign">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
            </div>

            <div className="text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="container-right">
        <div
          className={`module-header-wrapper ${anyCardExpanded ? "hidden" : ""}`}
        >
          <div className="module-header-left">
            <div className="left-top">
              <div className="left-content">
                <h1 className="module-welcome">Working with {moduleName}</h1>
                <h3 className="summary">{moduleSummary}</h3>
              </div>
              <div className="right-content">
                <img className="module-image large" src={moduleImg} alt="" />
              </div>
            </div>
          </div>

          <div className="module-header-right">
            <span className="quantity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill={moduleColor}
                class="bi bi-grid-3x2-gap"
                viewBox="0 0 16 16"
              >
                <path d="M4 4v2H2V4zm1 7V9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 5V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 4v2H7V4zm5 0h-2v2h2zM4 9v2H2V9zm5 0v2H7V9zm5 0v2h-2V9zm-3-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
              </svg>

              <span className="large-info">{moduleQuantity}</span>
              <span className="small-info">lessons to complete</span>
            </span>
            <span className="time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill={moduleColor}
                class="bi bi-stopwatch"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
              </svg>
              <span className="large-info">{moduleTime}</span>{" "}
              <span className="small-info">minutes of learning</span>
            </span>
          </div>
        </div>
        <div className={`module-hero ${anyCardExpanded ? "hidden" : ""}`}>
          <h1>Start learning</h1>
        </div>
        <div
          className={`lesson-grid ${anyCardExpanded ? "grid-expanded" : ""}`}
        >
          {reorderedLessons.map((lesson) => {
            const isActive = activeLessonId === lesson.id;
            const isAnotherLessonOpen = activeLessonId && !isActive;

            if (isAnotherLessonOpen) {
              return null;
            }

            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                expanded={isActive}
                onExpand={() => setActiveLessonId(lesson.id)}
                onCollapse={() => setActiveLessonId(null)}
                onToggle={() => setActiveLessonId(isActive ? null : lesson.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Container;
