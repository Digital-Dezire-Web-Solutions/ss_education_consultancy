import React from "react";
import "./BreadCrumb.css";
import { FaAngleRight, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, page }) => {
  return (
    <div className="bread-crum-bx">
      <div className="common-container">
        <div className="bread-crum">
          <h3>{title}</h3>

          <div className="breadcrum-text">
            <FaHome className="bhome"/>
            <Link to="/">Home</Link>
            <FaAngleRight />
            <span>{page}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
