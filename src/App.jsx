import React, { useState } from "react";
import modules from "./modules";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import Container from "./components/Container";
import "./App.scss";
import HowItWorks from "./components/HowItWorks";

function App() {
  const [activeModule, setActiveModule] = useState("Variables");
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [activeContent, setActiveContent] = useState(null);
  const [moduleColor, setModuleColor] = useState("#f3e8ff");
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const lessons = modules[activeModule]?.lessons || [];
  const currentLessons = modules[activeModule];

  const moduleImg =
    modules[activeModule]?.img_url ||
    "https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174";

  const handleSelect = (name) => {
    setActiveModule(name);
    setActiveContent(name);
    setActiveLessonId(null);
    setIsPopoverVisible(true);
  };

  const handleClose = () => {
    setActiveLessonId(null);
    setIsPopoverVisible(false);
  };

  return (
    <div className="wrapper">
      <div className="app">


        {/* Main content - hidden when popover is visible */}
        {!isPopoverVisible && (
          <div className="main-content-holder">
                    {/* Header/Menu stays visible */}
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
                color: ["#d57bff", "#ecdcfd", "#d57bff", "#ecdcfd"][index % 4]
              }))}
              onSelect={handleSelect}
              activeContent={activeContent}
              activeLessonId={activeLessonId}
              onColorChange={setModuleColor}
              showIcons={false}
            />
          </div>
        </div>
            <Hero />
            <HowItWorks />
            <Footer />
          </div>
        )}

        {/* Full-screen popover, OUTSIDE any collapsing parent */}
        {isPopoverVisible && (
          <div className="popover-container">
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
              handleClose={handleClose} // Close button inside Container
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
