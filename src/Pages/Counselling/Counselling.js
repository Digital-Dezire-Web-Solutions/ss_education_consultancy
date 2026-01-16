import React, { useEffect } from "react";
import "./Counseling.css";
import {
  FaUserGraduate,
  FaPhoneAlt,
  FaChalkboardTeacher,
  FaCheckCircle,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Councel from "../../Assets/councling.png"

const Counselling = () => {
  const location = useLocation();

  useEffect(() => {
    document.title =
      "Counseling | SS Admission Consultancy";
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
        <div className="page-box counselling-box">
          {/* ---------- HERO / BANNER SECTION ---------- */}
          <div className="counselling-hero">
            <div className="counselling-hero-content">
              <h1>Expert Career Counselling</h1>
              <p>
                Personalized guidance to help you choose the right course and
                college for a successful future. Our experts help you make
                confident and informed decisions.
              </p>
              <button className="counselling-btn">Book Counselling</button>
            </div>
            <div className="counselling-hero-img">
              <img
                src={Councel}
                alt="counselling"
              />
            </div>
          </div>

          {/* ---------- WHY CHOOSE US SECTION ---------- */}
          <div className="counselling-features">
            <h2>Why Choose Our Counselling?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <FaUserGraduate className="feature-icon" />
                <h3>Expert Advisors</h3>
                <p>
                  Our certified career counsellors guide students to make the
                  best academic choices.
                </p>
              </div>

              <div className="feature-card">
                <FaChalkboardTeacher className="feature-icon" />
                <h3>Personalized Guidance</h3>
                <p>
                  Understand your strengths and pick the right career path
                  tailored especially for you.
                </p>
              </div>

              <div className="feature-card">
                <FaPhoneAlt className="feature-icon" />
                <h3>24/7 Support</h3>
                <p>
                  Our support team is always available to answer your queries
                  and guide you.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- COUNSELLING STEPS SECTION ---------- */}
          <div className="counselling-steps">
            <h2>Our Counselling Process</h2>
            <div className="steps-list">
              <div className="step-card">
                <FaCheckCircle className="step-icon" />
                <h4>1. Initial Discussion</h4>
                <p>
                  We understand your goals, interests, and academic background.
                </p>
              </div>

              <div className="step-card">
                <FaCheckCircle className="step-icon" />
                <h4>2. Course & College Mapping</h4>
                <p>
                  We match your profile with the best possible courses and
                  colleges.
                </p>
              </div>

              <div className="step-card">
                <FaCheckCircle className="step-icon" />
                <h4>3. Application Assistance</h4>
                <p>
                  We help you with documentation, applications, and admissions.
                </p>
              </div>

              <div className="step-card">
                <FaCheckCircle className="step-icon" />
                <h4>4. Final Admission Guidance</h4>
                <p>End-to-end support until your admission is confirmed.</p>
              </div>
            </div>
          </div>

          {/* ---------- CTA SECTION ---------- */}
          <div className="counselling-cta">
            <h2>Ready to Begin Your Career Journey?</h2>
            <p>
              Speak to our expert counsellors today and get personalised
              guidance.
            </p>
            <button className="counselling-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselling;
