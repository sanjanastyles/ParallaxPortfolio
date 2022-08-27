import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <div className="skills">
        <div className="skill">
          <div className="skill-name">HTML</div>
          <div className="skill-bar">
            <div className="skill-per" per="90"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">CSS</div>
          <div className="skill-bar">
            <div className="skill-per" per="70"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">Javascript</div>
          <div className="skill-bar">
            <div className="skill-per" per="60"></div>
          </div>
        </div>
      </div>
      <script src="./scripts.js"></script>
    </div>
  );
}

export default About;
