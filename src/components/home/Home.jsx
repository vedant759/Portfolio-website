import React from "react";
import "./home.css";
import main_me from "../../assets/main_me.png";
import curve from "../../assets/curve.png";
const Home = () => {
  return (
    <div id="home-section" className="home">
      <div className="home-content">
        <div className="home-content-intro">
          <div className="curve">
            <img src={curve} alt="curve-shape" />
          </div>
          <h1>
            my name is <span className="vedant">vedant...</span>
          </h1>
          <p>Ambitious Web Developer</p>

          <div className="home-content-btn">
            <button className="home-content-btn_main">
              <div className="home-content-btn_main-text">Let's talk</div>
              <div className="home-content-btn_main-arrow">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </button>
          </div>
        </div>
        <div className="home-content-contact">
          <div className="home-content-contact_phone">
            <div className="circle">
              <i class="ri-phone-line"></i>
            </div>
            8527561933
          </div>
          <div className="home-content-contact_mail">
            <div className="circle">
              <i class="ri-mail-line"></i>
            </div>
            vedant759@gmail.com
          </div>
        </div>
      </div>
      <div className="home-me">
        <img src={main_me} alt="my_image" />
      </div>
      <div className="home-socials">
        <a
          href="https://www.linkedin.com/in/vedant-singhal-aa6423288"
          target="-blank"
        >
          <div className="whiteCircle">
            <i class="ri-linkedin-fill"></i>
          </div>
        </a>
        <a href="https://github.com/vedant759" target="-blank">
          <div className="whiteCircle">
            <i class="ri-github-line"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/vedant_759/" target="-blank">
          <div className="whiteCircle">
            <i class="ri-instagram-line"></i>
          </div>
        </a>
        <hr />
      </div>
    </div>
  );
};

export default Home;
