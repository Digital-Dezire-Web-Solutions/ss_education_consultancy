import React, { useEffect } from "react";
import "./Exam.css";
import { useLocation, useNavigate } from "react-router-dom";
import ExamData from "../../Data/ExamData";
import { FaLongArrowAltRight, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";

const Exam = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Exam | SS Admission Consultancy";
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
                    <span></span>
                    <h2 className="exam-title">Entrance Exams</h2>

                    <div className="exam-container">
                        {ExamData.map((exam, index) => (
                            <div className="exam-card" key={index}>
                                <span>{exam.date}</span>
                                <h3>{exam.name}</h3>
                                <p>{exam.description}</p>
                                <div className="exam-info">
                                    <p>
                                        <FaRegClock size={16} /> {exam.time}
                                    </p>
                                    <p>
                                        <FaMapMarkerAlt size={16} /> {exam.place}
                                    </p>
                                </div>
                                <button className="enroll-btn" onClick={() => navigate("/contact")}>
                                    Know More <FaLongArrowAltRight />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exam;
