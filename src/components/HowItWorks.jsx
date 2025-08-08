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
      <div className="hiw-dotted-line">
        <img
          className="w-full"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
          alt=""
        />
      </div>

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
    </div>
  </div>
</section>

  );
};
export default HowItWorks;
