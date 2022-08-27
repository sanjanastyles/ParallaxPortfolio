import React from "react";
import "./Header.css";
import backg from "../../images/backg.png";
import grass1 from "../../images/grass1.png";
import grass2 from "../../images/grass2.png";
import grass1shadown from "../../images/grass1shadow.png";
import grass2shadown from "../../images/grass2shadow.png";
import backg1 from "../../images/backg1.png";
import bush1 from "../../images/bush1.png";
import bush2 from "../../images/bush2.png";
import lotus from "../../images/lotus.png";
import water from "../../images/water.png";
import weed from "../../images/weed.png";
import fish2 from "../../images/fish2.png";
import fish1 from "../../images/fish1.png";

function Header() {
  return (
    <>
      <body>
        <section>
          <img src={backg} alt="backg" />
          <img
            src={grass1}
            alt="grass1"
            id="grass1"
            style={{ left: window.scrollY * -0.2 + "px" }}
          />
          <img src={grass2} alt="grass2" id="grass2" />
          <img src={grass1shadown} alt="grass1shadow" id="grass1shadow" />
          <img src={grass2shadown} alt="grass2shadow" id="grass2shadow" />
          <img src={backg1} alt="backg1" />
          <img
            src={bush1}
            alt="bush1"
            id="bush1"
            style={{ left: window.scrollY * -0.2 + "px" }}
          />
          <img src={bush2} alt="bush2" id="bush2" />
          <h2 id="slogan">Web Developer</h2>
          <a
            href="#about"
            id="btn"
            style={{ marginTop: window.scrollY * 1 + "px" }}
          >
            Explore
          </a>
          <img
            src={lotus}
            alt="lotus"
            id="lotus"
            style={{ marginTop: window.scrollY * 0.06 + "px" }}
          />
          <img src={water} alt="water" id="water" />
          <img src={weed} alt="weed" id="weed" />
          <img
            src={fish2}
            alt="fish2"
            id="fish2"
            style={{ left: window.scrollY * 0.4 + "px" }}
          />
          <img
            src={fish1}
            alt="fish1"
            id="fish1"
            style={{ left: window.scrollY * -0.4 + "px" }}
          />
        </section>
      </body>
    </>
  );
}

export default Header;
