import React from "react";
import "./CourseCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CollegeCard = ({ course, category }) => {
  const navigate = useNavigate();

  // Convert title to URL-friendly slug
  const slug = course.title.toLowerCase().replace(/ /g, "-");

  const handleClick = () => {
    navigate(`/college/${slug}`, {
      state: { category }, // pass selected category
    });
  };

  // utils/text.js
  const truncateWords = (text, numWords = 20) => {
    if (!text) return "";
    const words = String(text).trim().split(/\s+/);
    if (words.length <= numWords) return words.join(" ");
    return words.slice(0, numWords).join(" ") + "...";
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <div className="course-img">
        {course?.image && <img src={course?.image} alt={course?.title} />}
      </div>

      <div className="course-details">
        <h3 className="course-title">{course?.title}</h3>
        <div className="course-info">
          <p>{truncateWords(course?.description, 20)}</p>
        </div>
        <div className="course-bottom">
          <button className="enroll-btn">
            View Detail <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
