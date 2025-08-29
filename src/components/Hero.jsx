import "../scss/Hero.scss";
import React from "react";
import HowItWorks from "./HowItWorks";

function Hero() {
  return (

<div className="hero-bg">
  <section>
    <div className="hero-container">
      <div className="hero-container-left">

            <h1>Learn the fundamentals of JavaScript</h1>
            <div className="hero-images">
              <div className="hero">
                <img src="https://ik.imagekit.io/bertbigbite/logos/6.png?updatedAt=1749040040523" alt="" />
                <img src="https://ik.imagekit.io/bertbigbite/logos/7.png?updatedAt=1749040040547" alt="" />
                <img src="https://ik.imagekit.io/bertbigbite/logos/8.png?updatedAt=1749040040547" alt="" />
              </div>
              <p>Study <span>10+ topics</span> and develop your skills</p>
            </div>
                      <div className="buttons">
            <a href="#" className="btn-primary">Get feedback</a>
            <a href="#" className="btn-secondary">
              <svg>...</svg>
              Download iOS App
            </a>


          </div>
          </div>

          <div className="hero-container-right">
          <img className="hero-image" src="https://ik.imagekit.io/bertbigbite/logos/hero.png?updatedAt=1751546383253" alt="" />
        </div>
    </div>
    <HowItWorks />
  </section>
</div>
  );
}

export default Hero;
