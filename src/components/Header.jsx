import React from "react";
import Menu from "./Menu";

function Header({ modules = {}, handleSelect, activeContent, activeLessonId, setModuleColor

 }) {
  return (


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
  );
}

export default Header;
