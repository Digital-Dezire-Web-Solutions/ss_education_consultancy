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
import { FaXTwitter } from "react-icons/fa6";

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
                            SS Admission Consultancy, every student matters. We understand that choosing the right course or college is a life-changing decision. Our experienced counselors take time to understand each student’s background.
                        </p>

                        <div className="footer-info">
                            <p>
                                <Link to="mailto:ssadmission732@gmail.com">
                                    <FaEnvelope /> ssadmission732@gmail.com
                                </Link>
                            </p>
                            <p>
                                <Link to="tel:+918792405697"><FaPhoneAlt /> +91 87924 05697</Link>
                            </p>
                            <p>
                                <FaMapMarkerAlt />2nd Floor, Opp to MSR House, Next Gurudarshan Sweets Building, Sundara Nagar, Bangalore
                            </p>
                        </div>
                    </div>

                    {/* ---------- COLUMN 2: IMPORTANT LINKS ---------- */}
                    <div className="footer-col">
                        <h2>Important Links</h2>

                        <ul className="footer-links">
                            <li>
                                <Link to={"/courses/engineering"}>
                                    <FaArrowRight /> Engineering
                                </Link>
                            </li>
                            <li>
                                <Link to={"/courses/ayurvedic"}>
                                    <FaArrowRight /> Ayurvedic
                                </Link>
                            </li>
                            <li>
                                <Link to={"/courses/mba"}>
                                    <FaArrowRight /> MBA
                                </Link>
                            </li>
                            <li>
                                <Link to={"/courses/mca"}>
                                    <FaArrowRight /> MCA
                                </Link>
                            </li>
                            <li>
                                <Link to={"/courses/mbbs"}>
                                    <FaArrowRight /> MBBS
                                </Link>
                            </li>
                            <li>
                                <Link to={"/courses/pg"}>
                                    <FaArrowRight /> PG
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ---------- COLUMN 3: VIDEO + SOCIAL ---------- */}
                    <div className="footer-col">
                        <h2>Useful Links</h2>

                        <ul className="footer-links">
                            <li>
                                <Link to={"/about"}>
                                    <FaArrowRight /> About Us
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <FaArrowRight /> Privacy Policy
                                </Link>
                            </li>
                            {/* <li>
                                <Link to={"#"}>
                                    <FaArrowRight /> Term & Conditions
                                </Link>
                            </li> */}
                            <li>
                                <Link to={"/contact"}>
                                    <FaArrowRight /> Contact Us
                                </Link>
                            </li>
                        </ul>

                        {/* <h3 className="follow-title">Follow Us:</h3>

                        <div className="footer-social">
                            <span>
                                <FaFacebookF />
                            </span>
                            <span>
                                <FaXTwitter />
                            </span>
                            <span>
                                <FaInstagram />
                            </span>
                        </div> */}
                    </div>
                </div>
            <p className="Disclaimer"><strong>Disclaimer : </strong>SS Admission Consultancy provides admission guidance only. Admission decisions are made by respective institutions. We do not guarantee admission or results and are not affiliated with any government authority.</p>
            </div>
            {/* COPYRIGHT ROW */}
            <div className="footer-bottom">
                <p>©  SS Admission Consultancy 2026 | All Rights Reserved</p>
                <p>Developed By : <Link to={"https://digitaldezire.com/"}>DD</Link></p>
            </div>
        </footer>
    );
};

export default Footer;
