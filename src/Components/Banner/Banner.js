import React from "react";
import "./Banner.css";
import manImg from "../../Assets/man.png";   // <-- replace with actual path of your image
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-main">

        {/* LEFT CONTENT */}
        <div className="banner-left">
          <h1>
            A better Learning <br />
            Future Starts Here
          </h1>

          <p>
            Over 1,000+ students choose SS Consultancy for career guidance and college admission.
          </p>

          <Link className="banner-btn"> <FaPhoneAlt/>Call Now</Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="banner-right">
          <div className="circle-bg"></div>
          <img src={manImg} alt="Student" className="banner-img" />
        </div>

      </div>
    </section>
  );
};

export default Banner;