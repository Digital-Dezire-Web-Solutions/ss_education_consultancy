import React from "react";
import "./Explore.css";
import girlImg from "../../Assets/creative-classes.png";
import { FaCheck } from "react-icons/fa";

const Explore = () => {
  return (
    <section className="explore">
      <div className="explore-main">

        {/* LEFT IMAGES */}
        <div className="explore-left">
          <div className="big-circle">
            <img src={girlImg} alt="Student" className="girl-img" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="explore-right">
          <h1>
            Explore Thousands Of <br /> Creative Classes.
          </h1>

          <p className="explore-desc">
            Dramatically supply transparent deliverables before backward
            compinternal or "organic" sources.
          </p>

          <ul className="explore-list">
            <li><FaCheck /> Create an E-Pora account</li>
            <li><FaCheck /> Choose Your Perfect Courses</li>
            <li><FaCheck /> After Finished Courses, Get Certificate</li>
          </ul>

          <button className="explore-btn">About Us</button>
        </div>

      </div>
    </section>
  );
};

export default Explore;