import React from "react";
import "./navbar.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Vedant.</h1>
      </div>
      <div className="navbar-links">
        <ul className="navbar-links_list">
          <li className="navbar-links_list_items">
            <a href="#home-section">HOME</a>
          </li>
          <li className="navbar-links_list_items">
            <a href="#about-section">ABOUT</a>
          </li>
          <li className="navbar-links_list_items">
            <a href="#projects-section">PROJECTS</a>
          </li>
          <li className="navbar-links_list_items">
            <a href="#experience-section">EXPERIENCE</a>
          </li>
          <li className="navbar-links_list_items">
            <a href="#contact-section">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-socials">
        <a href="https://github.com/vedant759" target="-blank">
          <BsGithub className="icons" />
        </a>
        <a href="https://www.instagram.com/vedant_759/" target="-blank">
          <AiOutlineInstagram className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/vedant-singhal-aa6423288"
          target="-blank"
        >
          <BiLogoLinkedin className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
