import React from "react";
import "./about.css";
import sign from "../../assets/me+sign.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/nodejs.png";
const About = () => {
  return (
    <div id="about-section" className="about">
      <div className="about-left">
        <div className="top-text">
          <p className="top-p">Nice to meet you!</p>
          <h4 className="top-h4">GREETINGS...</h4>
        </div>
        <div className="about-left-main">
          <img src={sign} alt="signature" />
          <h3 className="my-name">VEDANT SINGHAL</h3>
          <p className="bottom-p">Ambitious Web Developer</p>
          <div className="download-cv">
            <a
              className="view-cv"
              href="https://drive.google.com/file/d/19mAdIVGWY3hQii6yAsjwgF2d964keEzi/view?usp=sharing"
              download
              target="-blank"
            >
              View CV
            </a>
            <div className="arrow">
              <i class="ri-arrow-right-up-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="personal-details">
          <div className="phone contact-tile">
            <div className="circle">
              <i class="ri-phone-line"></i>
            </div>
            <p>8527561933</p>
          </div>
          <div className="age contact-tile">
            <div className="circle">
              <i class="ri-contacts-book-2-line"></i>
            </div>
            <p>23 yrs</p>
          </div>
          <div className="mail contact-tile">
            <div className="circle">
              <i class="ri-mail-line"></i>
            </div>
            <p>vedant759@gmail.com</p>
          </div>
          <div className="location contact-tile">
            <div className="circle">
              <i class="ri-map-pin-line"></i>
            </div>
            <p>Noida, Uttar Pradesh</p>
          </div>
        </div>
        <div className="dividing-line"></div>
        <div className="cards">
          <div className="cardItem">
            <div className="mainHead">
              <span className="threePlus">About me</span>
            </div>
            <p className="description">
              An ambitious and dedicated recent graduate with a{" "}
              <span className="name">Bachelor of Technology</span> in{" "}
              <span className="name">
                Electrical and Electronics Engineering
              </span>{" "}
              from <span className="name">Vellore Institute of Technology</span>
              . I am eager to launch my career in IT field, bringing a strong
              foundation in coding and programming and a passion for{" "}
              <span className="name">Frontend Web Development</span>.
            </p>
          </div>
        </div>
        <div className="skills">
          <img src={html} alt="html"></img>
          <img src={css} alt="css"></img>
          <img src={js} alt="js"></img>
          <img src={react} alt="react"></img>
          <img src={nodejs} alt="nodejs"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
