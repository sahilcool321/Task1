import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="mainFooter">
        <div>
          <h2>Contact Us</h2>
          <div className="subList">
            <li>Contact 1</li>
            <li>Contact 2</li>
            <li>Contact 3</li>
          </div>
        </div>

        <div>
          <h2>About Us</h2>
          <div className="subList">
            <li>About Us 1</li>
            <li>About Us 2</li>
            <li>About Us 3</li>
          </div>
        </div>
        <div>
          <h2>Services</h2>
          <div className="subList">
            <li>Services 1</li>
            <li>Services 2</li>
            <li>Services 3</li>
          </div>
        </div>
        <div>
          <h2>Social Media</h2>
          <div className="left_side">
            <li>
              <i className="fab fa-facebook lefti"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-pinterest"></i>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
