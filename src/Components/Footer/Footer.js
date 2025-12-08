import React from "react";
import "./Footer.css";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowRight,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/ss-logo-white-yellow.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-main">
                {/* MAIN FOOTER ROW */}
                <div className="footer-container">
                    {/* ---------- COLUMN 1: COMPANY ---------- */}
                    <div className="footer-col">
                        <img src={logo} alt="" />
                        {/* <h2>SS Edu Consultancy</h2> */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            porta accumsan diam ut elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            porta accumsan diam ut elementum.
                        </p>

                        <div className="footer-info">
                            <p>
                                <FaEnvelope /> sseducation@gmail.com
                            </p>
                            <p>
                                <FaPhoneAlt /> +91 9876543210
                            </p>
                            <p>
                                <FaMapMarkerAlt /> 1010 Avenue of the Moon, New York United States of America
                            </p>
                        </div>
                    </div>

                    {/* ---------- COLUMN 2: IMPORTANT LINKS ---------- */}
                    <div className="footer-col">
                        <h2>Important Links</h2>

                        <ul className="footer-links">
                            <li>
                                <FaArrowRight /> Top 10 Most Sold Computer Courses?
                            </li>
                            <li>
                                <FaArrowRight /> 10 Best Mentors with Their Courses
                            </li>
                            <li>
                                <FaArrowRight /> How to Select The Best Course?
                            </li>
                            <li>
                                <FaArrowRight /> 10 Most Popular Course Categories
                            </li>
                            <li>
                                <FaArrowRight /> Upcoming Webinar "On Future Of IT"
                            </li>
                            <li>
                                <FaArrowRight /> Top 10 Most Sold Computer Courses?
                            </li>
                        </ul>
                    </div>

                    {/* ---------- COLUMN 3: VIDEO + SOCIAL ---------- */}
                    <div className="footer-col">
                        <h2>Useful Links</h2>

                        <ul className="footer-links">
                            <li>
                                <FaArrowRight /> About Us
                            </li>
                            <li>
                                <FaArrowRight /> Privacy Policy
                            </li>
                            <li>
                                <FaArrowRight /> Refund Policy
                            </li>
                            <li>
                                <FaArrowRight /> Payment Methoods
                            </li>
                        </ul>

                        <h3 className="follow-title">Follow Us:</h3>

                        <div className="footer-social">
                            <span>
                                <FaFacebookF />
                            </span>
                            <span>
                                <FaTwitter />
                            </span>
                            <span>
                                <FaInstagram />
                            </span>
                            <span>
                                <FaPinterestP />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* COPYRIGHT ROW */}
            <div className="footer-bottom">
                <p>© Sri Sai Consultancy 2026 | All Rights Reserved</p>
                <p>Developed By : <Link to={"https://digitaldezire.com/"}>Digital Dezire</Link></p>
            </div>
        </footer>
    );
};

export default Footer;
