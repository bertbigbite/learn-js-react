import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.scss";

gsap.registerPlugin(ScrollTrigger);

function Menu({ modules, onSelect, onColorChange, showIcons = true }) {
  const rootRef = useRef();
  const indicator1Ref = useRef();
  const indicator2Ref = useRef();
  const itemRefs = useRef(modules.map(() => React.createRef()));

  const [active, setActive] = useState(0);
  const [isTight, setIsTight] = useState(false);

  const animate = useCallback(() => {
    if (!itemRefs.current[active]?.current || !rootRef.current) return;

    const menuOffset = rootRef.current.getBoundingClientRect();
    const activeItem = itemRefs.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();
    const color = modules[active]?.color;

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width,
      height,
      backgroundColor: color,
      ease: "elastic.out(.7, .7)",
      duration: 0.8,
    };

    gsap.to(indicator1Ref.current, settings);
    gsap.to(indicator2Ref.current, { ...settings, duration: 1 });
  }, [active, modules]);

  useEffect(() => {
    animate();
    window.addEventListener("resize", animate);
    return () => window.removeEventListener("resize", animate);
  }, [animate]);

  const handleClick = (mod, index) => {
    onSelect(mod.name);
    setActive(index);
    setIsTight(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (onColorChange) {
      onColorChange(mod.color);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`menu transition-all duration-300 ${isTight ? "tight" : ""}`}
    >
      {modules.map((mod, index) => (
        <a
          key={mod.name}
          ref={itemRefs.current[index]}
          className={`item ${active === index ? "active" : ""}`}
          onMouseEnter={() => setActive(index)}
          onClick={(e) => {
            e.preventDefault();
            handleClick(mod, index);
          }}
          href={mod.href}
        >
          {showIcons && mod.icon ? (
            <span className="icon">
              <img src={mod.icon} alt={mod.name} className="icon" />
            </span>
          ) : (
            <span className="label">{mod.name}</span>
          )}
        </a>
      ))}

      <div ref={indicator1Ref} className="indicator" />
      <div ref={indicator2Ref} className="indicator" />
    </div>
  );
}

export default Menu;
