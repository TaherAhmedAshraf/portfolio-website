import React from "react";

export default function Service() {
  return (
    <>
      <section>
        <div className="container">
          <div className="title">
            <h1>Services</h1>
          </div>
          <div className="cards row fix-spacing">
            <div className="single-card col-12 col-md-6 col-lg-4">
              <div className="card-icon">
                <img
                  src="https://bolby-react.vercel.app/images/service-1.svg"
                  alt="Native-App"
                />
              </div>
              <div className="card-details">
                <h5 className="card-title">Native App Development</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                  commodo ligula eget.
                </p>
              </div>
            </div>
            <div className="single-card col-12 col-md-6 col-lg-4">
              <div className="card-icon">
                <img
                  src="https://bolby-react.vercel.app/images/service-1.svg"
                  alt="Native-App"
                />
              </div>
              <div className="card-details">
                <h5 className="card-title">Native App Development</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                  commodo ligula eget.
                </p>
              </div>
            </div>
            <div className="single-card col-12 col-md-6 col-lg-4">
              <div className="card-icon">
                <img
                  src="https://bolby-react.vercel.app/images/service-1.svg"
                  alt="Native-App"
                />
              </div>
              <div className="card-details">
                <h5 className="card-title">Native App Development</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                  commodo ligula eget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
