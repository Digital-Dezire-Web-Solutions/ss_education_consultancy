import React from "react";
import "./CourseCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    const slug = course.title.toLowerCase().replace(/ /g, "-");

    const handleClick = () => {
        navigate(`/courses/${slug}`);
    };
    return (
        <div className="course-card" onClick={handleClick}>
            <div className="course-img">
                {course?.image && <img src={course?.image} alt={course?.title} />}
            </div>

            <div className="course-details">
                <h3 className="course-title">{course?.title}</h3>
                <div className="course-info">
                    <p>{course?.description}</p>
                </div>
                <div className="course-bottom">
                    <button className="enroll-btn">View Detail <FaLongArrowAltRight /></button>
                </div>
            </div>


        </div>
    );
};

export default CourseCard;