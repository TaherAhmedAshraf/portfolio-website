import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import Typewriter from "typewriter-effect";
// import Tryanle from "../../Assets/Polygon.svg";
// import Particles from "react-particles-js";

export default function Home() {
  return (
    <>
      <section className="container onMouseMove">
        <div className="home-section">
          <div className="profile">
            <img
              src="https://bolby-react.vercel.app/images/avatar-1.svg"
              alt="Profile_Picture"
            />
          </div>
          <div className="name">
            <h1>Taher Ahmed Ashraf</h1>
          </div>
          <div className="bio">
            <p>
              <span>I'm a Junior</span>
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "React-Native Developer",
                      "Flutter Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>
          </div>
          <div className="social-icons">
            <span className="home-social-icon">
              <FaFacebookF />
            </span>
            <span className="home-social-icon">
              <FaInstagram />
            </span>
            <span className="home-social-icon">
              <FaGithub />
            </span>
            <span className="home-social-icon">
              <FaDiscord />
            </span>
          </div>
          <button className="btn btn-danger">Hire me</button>
        </div>
        <div className="icons"></div>
      </section>
    </>
  );
}
