import React from "react";
import "./Explore.css";
import girlImg from "../../Assets/creative-classes.png";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Explore = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

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
            Explore Thousands of Academic Opportunities
          </h1>

          <p className="explore-desc">
            Empowering students with the right guidance, SS Consultancy helps you explore the best courses, colleges, and career paths across India and abroad. Our expert counselors ensure transparent processes and result-oriented academic planning for a successful future.
          </p>

          <ul className="explore-list">
            <li><FaCheck /> Get personalized career counseling</li>
            <li><FaCheck /> Choose the right course & institution</li>
            <li><FaCheck /> Secure admission with complete support</li>
          </ul>

          <button className="explore-btn"> <Link to={"/about"} onClick={scrollToTop}>About Us</Link> </button>
        </div>

      </div>
    </section>
  );
};

export default Explore;