import React, { useEffect } from "react";
import "./Contact.css";
import Form from "../../Components/Form/Form";
import { Link, useLocation } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import contac from "../../Assets/contact.jpg"

const Contact = () => {

  const location = useLocation();

  useEffect(() => {
    document.title =
      "Contact Us | SS Admission Consultancy";
    const description =
      "SS Admission Consultancy is a Bangalore based education guidance firm dedicated to helping students achieve their academic and career goals in India and abroad.";
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
                src={contac}
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
            <Link to="tel:+918792405697" className="contact-bottom-box">
              <FaPhoneAlt />
              <h5>Call Cs Any Time!</h5>
              <p>+91 87924 05697</p>
            </Link>
            <Link to="mailto:ssadmission732@gmail.com" className="contact-bottom-box">
              <FaEnvelope />
              <h5>Send Us E-mail</h5>
              <p>ssadmission732@gmail.com</p>
            </Link>
            <div className="contact-bottom-box">
              <FaLocationDot />
              <h5>Office Address</h5>
              <p><strong>Corporate office </strong>- 3rd Floor, Opp to MSR House, 1st Main Road, venkteshwara Temple, Gokula Sundarnagar, Bengaluru, Bangaluru Urban, Karnataka 560054</p>
              <p><strong>Noida office</strong> - Golden I Tower T3 - 309, Amprapali leisure vally, Noida, Greater Noida - UP :- 201318</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
