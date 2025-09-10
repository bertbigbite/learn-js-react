import React, { useState, useEffect, useRef } from "react";
import modules from "./modules";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import Container from "./components/Container";
import "./App.scss"; // Global styles
import HowItWorks from "./components/HowItWorks";

function App() {
  const [activeModule, setActiveModule] = useState("Variables");
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [activeContent, setActiveContent] = useState(null);
  const [moduleColor, setModuleColor] = useState("#f3e8ff");

  const popoverRef = useRef(null);

  const lessons = modules[activeModule]?.lessons || [];
  const currentLessons = modules[activeModule];


  const moduleImg =
    modules[activeModule]?.img_url ||
    "https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174";

  const handleSelect = (name) => {
    setActiveModule(name);
    setActiveContent(name);
    setActiveLessonId(null);

    requestAnimationFrame(() => {
      popoverRef.current?.showPopover();
    });
  };

  const handleClose = () => {
    popoverRef.current?.hidePopover();
    setActiveLessonId(null);
  };

  useEffect(() => {
    const pop = popoverRef.current;
    const handleToggle = () => {
      const isOpen = pop.matches(":popover-open");
      if (!isOpen) setActiveLessonId(null);
    };

    pop?.addEventListener("toggle", handleToggle);
    return () => pop?.removeEventListener("toggle", handleToggle);
  }, []);


  return (
    <div className="wrapper">
      <div className="app dark">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <img
              className="logo"
              src="https://ik.imagekit.io/bertbigbite/logos/logo.png?updatedAt=1749121280588"
              alt="Logo"
            />
          </div>

          <div className="nav-menu">
            <Menu
              modules={Object.keys(modules).map((name, index) => ({
                name,
                href: "#",
                color: ["#d57bff", "#f3e8ff", "#d57bff", "#f3e8ff"][index % 4]
              }))}
              onSelect={handleSelect}
              activeContent={activeContent}
              activeLessonId={activeLessonId}
              onColorChange={setModuleColor}
              showIcons={false}
            />
          </div>
        </div>

        {/* Hero & Popover */}
        <div className="main-content-holder">
          <Hero />
          <div
            id="lesson-popover"
            ref={popoverRef}
            popover="manual"
            className="popover-container"
          >
            <div className ="container-header">
              <img
                src="https://ik.imagekit.io/bertbigbite/logos/logo.png?updatedAt=1749121280588"
                alt="Logo"
                className="container-logo"
              />
            </div>
            <Container
              lessons={lessons}
              activeLessonId={activeLessonId}
              setActiveLessonId={setActiveLessonId}
              moduleName={activeModule}
              moduleTime={currentLessons?.time || ""}
              moduleQuantity={currentLessons?.quantity || ""}
              moduleSummary={currentLessons?.summary || ""}
              moduleImg={moduleImg}
              moduleColor={moduleColor}
              setModuleColor={setModuleColor}
              activeContent={activeModule}
              handleSelect={handleSelect}
              handleClose={handleClose}
              popoverRef={popoverRef}
            />
          </div>
          <HowItWorks />
          <ContactBanner />
          <Footer />
        </div>

      </div>

    </div>
  );
}

export default App;
