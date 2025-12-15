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
            <h2>Happy Students & Parents</h2>
            <p className="sub">TESTIMONIALS</p>

            <p className="review">
              Most students and parents come to us confused and stressed about academic decisions. With the right guidance and honest counseling from Sri Sai Education Consultancy, they gain clarity, confidence, and successful admissions into reputed institutions.
            </p>

            <p className="author">— Trusted Students & Parents</p>
          </div>

          {/* RIGHT FORM */}
          <div className="test-right">
            <h2>Looking For Education Consultation Or Career Guidance?</h2>

            <p className="form-desc">
              Choosing the right course or college can shape your future.
            </p>

           <Form/>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Testimonial;