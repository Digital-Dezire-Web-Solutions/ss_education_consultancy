import React from "react";
import "./About.css";
import {
    FaUserTie,
    FaExclamationCircle,
    FaHandshake,
    FaHandsHelping,
} from "react-icons/fa";
import aboutimg from "../../Assets/explore2.jpg"

const About = () => {
    const stats = [
        {
            id: 1,
            icon: <FaUserTie />,
            score: "9.6/19",
            label: "Client Ratings",
        },
        {
            id: 2,
            icon: <FaExclamationCircle />,
            score: "4.9/7",
            label: "Customer Support",
        },
        {
            id: 3,
            icon: <FaHandshake />,
            score: "5.7/13",
            label: "Technical Guidance",
        },
        {
            id: 4,
            icon: <FaHandsHelping />,
            score: "9.6/19",
            label: "Excellent Service",
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
                                    Global Students Provide Us With Outstanding Client
                                    Testimonials
                                </h2>
                            </div>

                            <div className="about-right">
                                <p>
                                    Donec laoreet quam in arcu tempor, ut aliquet diam sagittis.
                                    Morbi id elit sodales, facilisis enim sollicitudin,
                                    pellentesque quam. Donec tempor metus felis, egest ligula
                                    convallis Duis rutrum, massa non vehicula sodales.
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias distinctio numquam atque, dolorum aliquid fugiat nulla magnam quos iste voluptas nostrum consequatur? Eaque, corrupti praesentium? Ex repellat neque doloremque libero soluta aut a numquam assumenda laboriosam. Sapiente hic eveniet tempora vel? Pariatur fugit ullam nulla aliquam cum cupiditate modi dicta?</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
