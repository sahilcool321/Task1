import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="mainFooter">
        <div>
          <h2>Contact Us</h2>
          <div className="subList">
            <li>Dummy Contact 1</li>
            <li>Dummy Contact 2</li>
            <li>Dummy Contact 3</li>
          </div>
        </div>

        <div>
          <h2>About Us</h2>
          <div className="subList">
            <li>Dummy About Us 1</li>
            <li>Dummy About Us 2</li>
            <li>Dummy About Us 3</li>
          </div>
        </div>
        <div>
          <h2>Services</h2>
          <div className="subList">
            <li>Dummy Services 1</li>
            <li>Dummy Services 2</li>
            <li>Dummy Services 3</li>
          </div>
        </div>
        <div>
          <h2>Social Media</h2>
          <div class="left_side">
            <li>
              <i class="fab fa-facebook lefti"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
            <li>
              <i class="fab fa-pinterest"></i>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
