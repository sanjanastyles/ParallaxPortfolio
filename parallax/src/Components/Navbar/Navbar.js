import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header id="header">
      <img className="logo" alt="logo" src="./images/logo.png" />
      <div className="menu"></div>
      <nav>
        <ul className="menulist">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
