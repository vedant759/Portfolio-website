import React from "react";
import "./projects.css";
import gpt3_ss from "../../assets/gpt3-ss.jpg";
import sidcup_ss from "../../assets/sidcup-ss.jpg";
const Projects = () => {
  return (
    <div id="projects-section">
      <h1 className="heading">PROJECTS </h1>
      <div className="project-container">
        <div className="project-display">
          <img src={gpt3_ss} alt="gpt3-ss"></img>
          <a href="https://vedant759.github.io/GPT3-OpenAI/" target="-blank">
            <h4>
              GPT3 OpenAI website
              <i class="ri-arrow-right-up-line"></i>
            </h4>
          </a>
        </div>
        <div className="project-display">
          <img src={sidcup_ss} alt="sidcup-ss"></img>
          <a
            href="https://vedant759.github.io/SIDCUP-Family-Golf/"
            target="-blank"
          >
            <h4>
              SIDCUP Family Golf website
              <i class="ri-arrow-right-up-line"></i>
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
