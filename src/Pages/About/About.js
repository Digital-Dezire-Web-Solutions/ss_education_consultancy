import React, { useEffect } from "react";
import "./About.css";
import {
    FaUserTie,
    FaExclamationCircle,
    FaHandshake,
    FaHandsHelping,
} from "react-icons/fa";
import aboutimg from "../../Assets/about.jpeg"
import { useLocation } from "react-router-dom";

const About = () => {

    const location = useLocation();

    useEffect(() => {
        document.title =
            "About | SS Admission Consultancy";
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

    const stats = [
        {
            id: 1,
            icon: <FaUserTie />,
            score: "9.6/10",
            label: "Student Satisfaction",
        },
        {
            id: 2,
            icon: <FaExclamationCircle />,
            score: "9.5/10",
            label: "Counseling Support",
        },
        {
            id: 3,
            icon: <FaHandshake />,
            score: "9.7/10",
            label: "Career & Academic Guidance",
        },
        {
            id: 4,
            icon: <FaHandsHelping />,
            score: "9.6/10",
            label: "Admission Success Rate",
        },
    ];

    return (
        <div className="page">
            <div className="page-main">
                <div className="page-box">
                    <div className="about-section">
                        {/* TOP CONTENT */}
                        <div className="about-main">
                            <div className="about-left">
                                <p className="about-subtitle">Welcome</p>
                                <h2 className="about-title">
                                    Sri Sai Consultancy
                                </h2>
                                <p style={{ fontSize: "17px", color: "#6b6b6b", lineHeight: "1.8" }}>
                                    <strong>Sri Sai Consultancy</strong> is an independent education consultancy platform operated by Sri Sai Consultancy (Registered Partnership Firm). We provide structured academic guidance and informational support to students exploring higher education opportunities across India.
                                </p>
                            </div>

                            <div className="about-right">

                                <p>Choosing the right course and institution is an important academic decision. Our objective is to present clear, accurate, and responsibly sourced information that helps students and parents better understand admission procedures, eligibility requirements, documentation processes, and institutional guidelines.</p>
                            </div>
                        </div>

                        {/* STAT BOXES */}
                        <div className="about-stats">
                            {stats.map((item) => (
                                <div className="about-stat-box" key={item.id}>
                                    <span className="about-icon">{item.icon}</span>
                                    <div className="about-detail">
                                        <h3 className="about-score">{item.score}</h3>
                                        <p className="about-label">{item.label}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="about-main">
                            <div className="about-right">
                                <img src={aboutimg} alt="" />
                            </div>
                            <div className="about-left">
                                <h2 className="about-title">
                                    Our Role
                                </h2>
                                <p>We function strictly as an independent advisory and guidance service.</p>
                                <h5>Our services include:</h5>
                                <ul>
                                    <li>Providing general information about colleges and academic programs</li>
                                    <li>Explaining publicly available admission procedures</li>
                                    <li>Clarifying eligibility criteria based on official institutional norms</li>
                                    <li>Assisting students in understanding documentation requirements</li>
                                    <li>Offering academic counselling discussions based on student background and preferences</li>
                                </ul>
                                <p>Our role is advisory in nature. We do not participate in institutional decision-making.</p>
                                <p><strong>Final admission decisions are made solely by the respective colleges or universities according to their official policies, eligibility standards, and seat availability.</strong></p>
                            </div>

                        </div>
                        <div className="about-grid">
                            <div className="about-grid-item">
                                <h3>Transparency & Ethical Practices</h3>
                                <p>We operate with transparency, accountability, and responsible communication.</p>
                                <h5>We:</h5>
                                <ul>
                                    <li>Do not guarantee admission to any institution</li>
                                    <li>Do not promise confirmed seats or assured placements</li>
                                    <li>Do not claim direct control over seat allocation</li>
                                    <li>Do not misrepresent affiliations with colleges or universities</li>
                                </ul>
                                <p>Admission outcomes depend entirely on eligibility criteria, merit, institutional policies, and availability of seats.</p>
                            </div>
                            <div className="about-grid-item">
                                <h3>Independent Consultancy Disclaimer</h3>
                                <p>Admission Details is an independent education consultancy service.</p>
                                <p>We are not directly affiliated with, endorsed by, or officially partnered with any college, university, or government body unless explicitly stated in writing.</p>
                                <p>Any institution names referenced on this website are used solely for informational purposes to assist students in exploring their academic options.</p>
                                <p>All information provided on this website is intended for general guidance purposes only and may be subject to change as per institutional updates.</p>
                            </div>
                            <div className="about-grid-item">
                                <h3>Our Commitment</h3>
                                <h5>We are committed to:</h5>
                                <ul>
                                    <li>Maintaining accurate and responsible communication</li>
                                    <li>Providing informed and ethical guidance</li>
                                    <li>Protecting student data and privacy</li>
                                    <li>Following fair advertising practices</li>
                                    <li>Complying with applicable digital advertising and consumer protection standards</li>
                                </ul>
                                <p>We prioritize long-term trust, clarity, and responsible counselling over unrealistic promises.</p>
                            </div>
                        </div>
                        <div className="about-operated-box">
                            <h3>Operated By:</h3>
                            <p>Sri Sai Consultancy (Registered Partnership Firm)</p>
                            <p>GSTIN: 29AEAFS5302K1ZY</p>
                            <p>Registered Office Address: 3RD FLOOR 14BOPP MSR HOUSE 1ST MAIN ROAD VENKRESHWARA TEMPLE GOKULA SUNDARANAGAR BENGALURU</p>
                            <p>BENGALURU URBAN KARNATAKA ,560054</p>
                            <p>Contact: +91- 78996 73489</p>
                            <p>Email: info@admissiondetails.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
