import React, { useState } from "react";
import CoursesData from "../../Data/CoursesData";
import "./Contact.css";
import Form from "../../Components/Form/Form";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="page">
      <div className="page-main">
        <div className="page-box">
          <div className="contact-container">
            {/* LEFT IMAGE */}
            <div className="contact-left">
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=900&auto=format&fit=crop&q=60"
                alt="Contact"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="contact-right">
              <div className="test-right">
                <span>Contact Us</span>
                <h2>Get in Touch with Us</h2>
                <Form />
              </div>
            </div>
          </div>
          <div className="contact-bottom">
            <Link className="contact-bottom-box">
            <FaPhoneAlt/>
              <h5>call us any time!</h5>
              <p>+91 78928 46798</p>
            </Link>
            <Link className="contact-bottom-box">
            <FaEnvelope/>
              <h5>send us e-mail</h5>
              <p>sseducation@gmail.com</p>
            </Link>
            <div className="contact-bottom-box">
              <FaLocationDot/>
              <h5>Office Address</h5>
              <p>Bangalore, Karnataka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
