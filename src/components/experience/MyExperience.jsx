import React from "react";
import "./experience.css";
const MyExperience = () => {
  return (
    <div id="experience-section">
      <div className="left">
        <p>Experience</p>
        <h4>MY EXPERIENCE</h4>
      </div>
      <div className="right">
        <div className="ex-tab">
          <div className="year-desig">
            <p>-May 2023 - Present</p>
            <p>-Freelancer</p>
          </div>
          <h5>McDonald's North and East India</h5>
          <hr></hr>
        </div>
        <div className="ex-tab">
          <div className="year-desig">
            <p>-June 2022 - July 2022</p>
            <p>-Project Intern</p>
          </div>
          <h5>Bharat Electronics Ltd. (BEL)</h5>
          <hr></hr>
        </div>
        <div className="ex-tab">
          <div className="year-desig">
            <p>-January 2021 - July 2022</p>
            <p>-Design Head</p>
          </div>
          <h5>VIT Dance Club</h5>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
