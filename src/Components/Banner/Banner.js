import React from "react";
import "./Banner.css";
import manImg from "../../Assets/man.png";   // <-- replace with actual path of your image

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
            Aliquam venenatis egestas Justo. Fusce Dignissim Pellentesque
            Pulvinar. Curabitur Meet university, and cultural institutions,
            who'll share their experience.
          </p>

          <button className="banner-btn">Contact Us</button>
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