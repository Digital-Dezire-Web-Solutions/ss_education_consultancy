import React from "react";
import "./Testimonial.css";
import testi1 from "../../Assets/explore1.jpg";
import Form from "../Form/Form";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="Testimonial-main">

        <div className="test-grid">

          {/* LEFT CARD */}
          <div className="test-left">
            <img 
              src={testi1} 
              className="test-img"
              alt=""
            />
            <h2>Happy Clients About Me</h2>
            <p className="sub">TESTIMONIALS</p>

            <p className="review">
              Most of the time we do not realize how great the life is.
              Dr. Judie Larson helps people start feeling alive and believe in themselves!
            </p>

            <p className="author">Pellentesque Luctus</p>
          </div>

          {/* RIGHT FORM */}
          <div className="test-right">
            <h2>Looking For Consultation <br /> Or Life Care Assistance?</h2>

            <p className="form-desc">
              Lorem ipsum dolor sit amet consectetur. Proin gravida nibh vel velit auctor aliquet.
            </p>

           <Form/>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Testimonial;