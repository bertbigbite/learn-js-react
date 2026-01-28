import "../scss/Hero.scss";

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

          </div>
          <div className="hero-container-right">
            <img src="https://ik.imagekit.io/bertbigbite/learn_js_hero.png?updatedAt=1756718006321" alt="Hero Illustration" />

          </div>
    </div>
  </section>
</div>
  );
}

export default Hero;
