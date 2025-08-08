import React from "react";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import "./Hero.scss"; // Import styles for the Hero component

function Hero() {
  return (
    <div className="hero-bg">
      <section>
          <div className="flex-layout">
            <div className="flex-left">
              <div className="max-w-sm">
                <h1>Learn the fundamentals of JavaScript</h1>

                <div className="hero-images">
                  <div className="hero">
                    <img
                      src="https://ik.imagekit.io/bertbigbite/logos/6.png?updatedAt=1749040040523"
                      alt=""
                    />
                    <img
                      src="https://ik.imagekit.io/bertbigbite/logos/7.png?updatedAt=1749040040547"
                      alt=""
                    />
                    <img
                      src="https://ik.imagekit.io/bertbigbite/logos/8.png?updatedAt=1749040040547"
                      alt=""
                    />
                  </div>
                  <p>
                    Study <span>10+ topics</span> and develop your skills
                  </p>
                </div>

                <div className="buttons">
                  <a href="#" className="btn-primary">
                    Get feedback
                  </a>

                  <a href="#" className="btn-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download iOS App
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-right">
              <img
                className="hero-image"
                src="https://ik.imagekit.io/bertbigbite/logos/hero.png?updatedAt=1751546383253"
                alt=""
              />
            </div>
          </div>
        <HowItWorks />
      </section>
    </div>
  );
}

export default Hero;
