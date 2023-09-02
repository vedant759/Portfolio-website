import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div id="contact-section">
      <div className="contact">
        <p>Contact</p>
        <h4>REACH OUT TO ME</h4>
        <h5 className="phone">+918527561933</h5>
        <h5>vedant759@gmail.com</h5>
      </div>
      <div className="links">
        {/* <div className="links-heading">
          <h4>LINKS</h4>
        </div> */}
        <div className="social-icons">
          <a href="https://github.com/vedant759" target="-blank">
            <i class="ri-github-fill social-icons-ind"></i>
          </a>
          <a href="https://www.instagram.com/vedant_759/" target="-blank">
            <i class="ri-instagram-line social-icons-ind"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vedant-singhal-aa6423288"
            target="-blank"
          >
            <i class="ri-linkedin-box-fill social-icons-ind"></i>
          </a>
        </div>

        <a href="https://dribbble.com/DesignerZubaear">
          <p>Design by Zubaear</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
