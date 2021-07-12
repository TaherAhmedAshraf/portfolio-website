import React from "react";
import {
  AiOutlineFire,
  AiOutlineCoffee,
  AiOutlineUsergroupAdd,
  AiOutlineCode,
} from "react-icons/ai";

export default function Facts() {
  return (
    <>
      <section>
        <div className="container">
          <div className="fact">
            <div className=" row col-12">
              <div className="fact-item col-12 col-sm-6 col-md-3">
                <span>
                  <AiOutlineFire />
                </span>
                <div className="fact-detail">
                  <h3>216</h3>
                  <p>Projects Completed</p>
                </div>
              </div>

              <div className="fact-item col-12 col-sm-6 col-md-3">
                <span>
                  <AiOutlineCoffee />
                </span>
                <div className="fact-detail">
                  <h3>5670</h3>
                  <p>Cup Of Coffee</p>
                </div>
              </div>

              <div className="fact-item col-12 col-sm-6 col-md-3">
                <span>
                  <AiOutlineUsergroupAdd />
                </span>
                <div className="fact-detail">
                  <h3>421</h3>
                  <p>Satisfied Client</p>
                </div>
              </div>

              <div className="fact-item col-12 col-sm-6 col-md-3">
                <span>
                  <AiOutlineCode />
                </span>
                <div className="fact-detail">
                  <h3>956182</h3>
                  <p>Lines Of Codes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
