import React from "react";
import "./HowItWorks.scss";


const HowItWorks = () => {
  return (
    <section className="hiw-section">
  <div className="hiw-container">
    <div className="hiw-header">
      <h2>How does it work?</h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis.
      </p>
    </div>

        <div className="hiw-steps">

          <div class="hiw-step-group group">
            <div className="hiw-grid">


  <div className="hiw-step">
          <div className="hiw-step-number">
            <span>1</span>
          </div>
          <h3>Choose your topic</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        <div className="hiw-step">
          <div className="hiw-step-number">
            <span>2</span>
          </div>
          <h3>Study the example</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        <div className="hiw-step">
          <div className="hiw-step-number">
            <span>3</span>
          </div>
          <h3>Try it yourself</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
            </div>

            </div>

  <div class="hiw-dotted-line">
    <svg
      class="hiw-svg"
      viewBox="0 0 1000 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
        <linearGradient id="hiw-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="50%" stop-color="#8b5cf6" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
      </defs>
      <path
        class="hiw-dotted-path"
        d="M0 50 Q 250 0, 500 50 T 1000 50"
        stroke="#d1d5db"
        stroke-width="4"
        stroke-dasharray="8 12"
        stroke-linecap="round"
      />
    </svg>
  </div>
</div>



    </div>
  </div>
</section>

  );
};
export default HowItWorks;
