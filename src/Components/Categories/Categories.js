import React from "react";
import "./Categories.css";
import {FaLongArrowAltRight } from "react-icons/fa";
import CoursesData from "../../Data/CoursesData";
import { useNavigate } from "react-router-dom";

const Categories = () => {
      const navigate = useNavigate();
  return (
    <div className="Categories">
      <div className="Categories-main">

        {/* HEADER */}
        <div className="categories-header">
          <h2>Explore 100+ Categories</h2>
          <button className="view-btn" onClick={() => navigate("/courses")}>View All Courses <FaLongArrowAltRight /></button>
        </div>

        {/* GRID */}
        <div className="categories-grid">
          {CoursesData.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="cat-icon">
                <span>{cat.icon}</span>
              </div>

              <div className="cat-text">
                <h3>{cat.title}</h3>
                <p>{cat.courses} Courses Available</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Categories;