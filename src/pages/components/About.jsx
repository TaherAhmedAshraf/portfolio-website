import React from "react";

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h1>About me</h1>
        <div className="row">
          <div className="profile col-12 col-md-4">
            <img
              src="https://bolby-react.vercel.app/images/avatar-2.svg"
              alt="profile_picture"
            />
          </div>
          <div className="col-12 col-md-8 center">
            <div className="about-content row">
              <div className="half-width col-12 col-md-6">
                <p>
                  I am Bolby Doe, web developer from London, United Kingdom. I
                  have rich experience in web site design and building and
                  customization, also I am good at WordPress.
                </p>
                <button className="btn btn-danger">DOWNLOAD CV</button>
              </div>
              <div className="half-width col-12 col-md-6">
                <div className="skill-item">
                  <div className="progress-label">
                    <label htmlFor="">React</label>
                    <label htmlFor="">85%</label>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-yellow"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="progress-label">
                    <label htmlFor="">Node.js</label>
                    <label htmlFor="">60%</label>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-red"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="progress-label">
                    <label htmlFor="">Flutter</label>
                    <label htmlFor="">20%</label>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-purple"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
