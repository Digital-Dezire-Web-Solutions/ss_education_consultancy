import React from "react";
import "./Choose.css";
import { FaCheck } from "react-icons/fa";
import chooseImg from "../../Assets/explore1.jpg"; // your main image

const Choose = () => {
  return (
    <div className="choose">
      <div className="choose-main">
        {/* Left Text */}
        <div className="choose-left">
          <h2>
            Why You Choose Our <br />
            E-Pora Online Learning
          </h2>

          <p className="choose-desc">
            Dramatically supply transparent deliverables before backward
            compinternal or "organic" sources. Dramatically supply transparent
            deliverables before backward comp internal or “organic” sources.
          </p>

          <ul>
            <li>
              <FaCheck /> Easy Online Learning Platform
            </li>
            <li>
              <FaCheck /> 98% Course Completion Rates
            </li>
            <li>
              <FaCheck /> Friendly Environments & Teachers
            </li>
          </ul>

          <button className="choose-btn">View All Category</button>
        </div>

        {/* Right Image Box */}
        <div className="choose-right">
          <div className="choose-card">
            <img src={chooseImg} alt="Online Learning" />
            <h3 className="choose-caption">Video Class Interface</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
