import React, { useEffect } from "react";
import "./Contact.css";
import Form from "../../Components/Form/Form";
import { Link, useLocation } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

  const location = useLocation();

  useEffect(() => {
    document.title =
      "SS Consultancy is a Bangalore based education firm";
    const description =
      "SS Consultancy is a Bangalore based education guidance firm dedicated to helping students achieve their academic and career goals in India and abroad.";
    let metaDescription = document.querySelector("meta[name='description']");

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalLink);
    }
  }, [location.pathname]);

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
              <FaPhoneAlt />
              <h5>call us any time!</h5>
              <p>+91 78928 46798</p>
            </Link>
            <Link className="contact-bottom-box">
              <FaEnvelope />
              <h5>send us e-mail</h5>
              <p>sseducation@gmail.com</p>
            </Link>
            <div className="contact-bottom-box">
              <FaLocationDot />
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
