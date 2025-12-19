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
            "About | SS Education Consultancy";
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
                                <p className="about-subtitle">ABOUT US</p>
                                <h2 className="about-title">
                                    Global Students Trust Us With Their Academic Journey
                                </h2>
                            </div>

                            <div className="about-right">
                                <p>
                                    <strong>SS Consultancy is a Bangalore</strong> based education guidance firm dedicated to helping students achieve their academic and career goals in India and abroad. With years of experience, transparent counseling, and student-first values, we have successfully guided thousands of students toward the right courses, colleges, and universities.
                                </p>
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
                                    Personal Experience
                                </h2>
                                <p>At SS Consultancy, every student matters. We understand that choosing the right course or college is a life-changing decision. Our experienced counselors take time to understand each student’s background, strengths, and ambitions before suggesting the best academic path.</p>
                                <p>From career counseling, college selection, application support, documentation, and admission assistance, we walk with students at every step. Our commitment to honesty, clarity, and long-term success has made us one of the most trusted education consultancies in Bangalore.</p>
                                <p>Whether you are planning higher education in India or abroad, SS Consultancy is your reliable partner for a confident future.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
