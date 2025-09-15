import React from "react";
import LessonCard from "./LessonCard";
import Menu from "./Menu";
import modules from "../modules";
import "../scss/Container.scss";

function Container({
  lessons,
  isCorrect,
  moduleName,
  moduleTime,
  moduleSummary,
  moduleQuantity,
  activeLessonId,
  setActiveLessonId,
  activeContent,
  handleSelect,
  setModuleColor,
  moduleColor,
  popoverRef
}) {
  const anyCardExpanded = activeLessonId !== null;

  return (
    <div className={`container ${anyCardExpanded ? "expanded" : ""}`}>

      <div className={`container-left ${anyCardExpanded ? "condensed" : ""}`}>
        <div className="sidebar">
          <div className ="sidebar-header">
                    <img
                      src="https://ik.imagekit.io/bertbigbite/logos/logo_dark.png?updatedAt=1749209733881"
                      alt="Logo"
                      className="container-logo"
              />
              <Menu
            modules={Object.keys(modules).map((name, index) => ({
              name,
              href: "#",
              color: ["#7f5af0", "#ff8906", "#f25f4c", "#2cb67d"][index % 4],
            }))}
            onSelect={handleSelect}
            activeContent={activeContent}
            activeLessonId={activeLessonId}
            onColorChange={setModuleColor}
            showIcons={true}
          />
      </div>


          <button
            className="Btn"
            popovertarget="lesson-popover"
            popovertargetaction="hide"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg> back
          </button>
        </div>
      </div>
      <div className={`container-right ${anyCardExpanded ? "expanded" : ""}`}>
        <div className={`container-body-header ${anyCardExpanded ? "expanded" : ""}`}>
          <div className="left-content">
            <h1 className="module-welcome">Working with {moduleName}</h1>
            <h3 className="summary">{moduleSummary}</h3>
          </div>
          <input
            type="text"
            className={`search-bar ${anyCardExpanded ? "hidden" : ""}`}
            placeholder="Search lessons..."
          />
        </div>
        <div className={`container-body ${anyCardExpanded ? "expanded" : ""}`}>
          <div className="container-center">
          <div className={`module-header-wrapper ${anyCardExpanded ? "hidden" : ""}`}>
          <div className="module-header-left">
          </div>
        </div>

          <div className={`module-hero ${anyCardExpanded ? "hidden" : ""}`}>
          <h1>Start learning</h1>
          </div>
          <div className={`lesson-grid ${anyCardExpanded ? "grid-expanded" : ""}`}>
          {lessons.map((lesson) => {
            const isActive = activeLessonId === lesson.id;
            const isAnotherLessonOpen = activeLessonId && !isActive;

            if (isAnotherLessonOpen) {
            return null; // hide all other cards
            }

            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                expanded={lesson.id === activeLessonId}
                onExpand={() => setActiveLessonId(lesson.id)}
                onCollapse={() => setActiveLessonId(null)}
                activeLessonId={activeLessonId}
                setActiveLessonId={setActiveLessonId}
                lessons={lessons}
                isCorrect={isCorrect}
                popoverRef={popoverRef}
              />
            );
          })}
        </div>


          </div>
          <div className={`container-end ${anyCardExpanded ? "expanded" : ""}`}>
            <span className="quantity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill={moduleColor}
                className="bi bi-grid-3x2-gap"
                viewBox="0 0 16 16"
              >
                <path d="M4 4v2H2V4zm1 7V9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 5V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 4v2H7V4zm5 0h-2v2h2zM4 9v2H2V9zm5 0v2H7V9zm5 0v2h-2V9zm-3-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
              </svg>

              <span className="large-info">{moduleQuantity}</span>
              <span className="small-info">lessons</span>
            </span>
            <span className="time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill={moduleColor}
                className="bi bi-stopwatch"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
              </svg>
              <span className="large-info">{moduleTime}</span>{" "}
              <span className="small-info">minutes</span>
            </span>

          </div>
        </div>
      </div>



    </div>
  );
}
export default Container;
