import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CollegesData from "../../Data/CollegeData";
import "./CollegeDetail.css";
import Form from "../../Components/Form/Form";

const CollegeDetail = () => {
    const navigate = useNavigate();
    const { title } = useParams();
    const location = useLocation();
    const passedCategory = location.state?.category || null;

    const slugify = (str) => str.toLowerCase().replace(/ /g, "-");

    const handleClick = (course) => {
        const slug = course.toLowerCase().replace(/ /g, "-");
        navigate(`/college/${slug}`, {
            state: { category: passedCategory },
        });
    };
    const college = CollegesData.find((item) => slugify(item.title) === title);

    if (!college) {
        return (
            <div className="college">
                <div className="college-main">
                    <div className="college-box">
                        <h2>No College Found</h2>
                    </div>
                </div>
            </div>
        );
    }

    const categoriesToMatch = passedCategory
        ? [slugify(passedCategory)]
        : college.categories.map((cat) => slugify(cat));

    const relatedColleges = CollegesData.filter((item) => {
        if (item.title === college.title) return false;
        const itemCategorySlugs = item.categories.map((cat) => slugify(cat));
        return itemCategorySlugs.some((catSlug) =>
            categoriesToMatch.includes(catSlug)
        );
    });

    const truncateText = (text, limit) =>
        text?.length > limit ? text.substring(0, limit) + "..." : text;


    return (
        <div className="college">
            <div className="college-main">
                <div className="college-box">
                    <div className="college-box-left">
                        <div className="college-top">
                            <h2>{college.title}</h2>
                        </div>
                        <div className="college-detail-img">
                            <img src={college.image} alt={college.title} />
                        </div>
                        <div className="college-detail-info">
                            <h3>About the College</h3>
                            <p>{college.description}</p>

                            <h3>Available Courses</h3>
                            <div className="college-category-list">
                                {college.categories.map((cat, index) => (
                                    <span key={index} className="college-category-tag">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="test-right">
                            <h2>Looking for Consultation? </h2>
                            <Form />
                        </div>
                    </div>
                    <div className="college-box-right">
                        <h3>Related Colleges</h3>
                        {relatedColleges.length ? (
                            relatedColleges.map((item) => (
                                <div className="college-box-right-box" key={item.id} onClick={() => handleClick(item.title)}>
                                    <div className="college-box-right-image">
                                        <img src={item.image} alt="" />
                                    </div>

                                    <div className="college-box-right-detail">
                                        <h6>{truncateText(item.title, 20)}</h6>
                                        <p>{truncateText(item.description, 60)}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No related colleges found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetail;
