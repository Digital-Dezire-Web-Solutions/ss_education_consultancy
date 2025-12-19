import React, { useEffect } from "react";
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
    //   Seo
    useEffect(() => {
        if (!college) return;

        // -------------------------------
        // 1️⃣ Set Title
        // -------------------------------
        document.title = college.title || "ss education";

        // -------------------------------
        // 2️⃣ Set Canonical URL
        // -------------------------------
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

        // -------------------------------
        // 3️⃣ Meta Description
        // -------------------------------
        const description = college?.description || "";
        let metaDescription = document.querySelector("meta[name='description']");

        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // -------------------------------
        // 4️⃣ Meta Keywords
        // -------------------------------
        let keywords = "";
        // console.log(blog.keyword,"keywords")

        // blog.keywords (array)
        if (Array.isArray(college?.keyword)) {
            keywords = college.keyword.join(", ");
        }

        // blog.keywords (string)
        else if (typeof college?.keyword === "string") {
            keywords = college.keyword;
        }

        // blog.keyword (array)
        else if (Array.isArray(college?.keyword)) {
            keywords = college.keyword.join(", ");
        }

        // blog.keyword (string)
        else if (typeof college?.keyword === "string") {
            keywords = college.keyword;
        }

        // fallback keywords
        if (!keywords) {
            keywords = `${college?.keyword}, SS Education Consultancy, ${college?.category || "SS Education Consultancy"
                }`;
        }

        let metaKeywords = document.querySelector("meta[name='keywords']");

        if (metaKeywords) {
            metaKeywords.setAttribute("content", keywords);
        } else {
            metaKeywords = document.createElement("meta");
            metaKeywords.setAttribute("name", "keywords");
            metaKeywords.setAttribute("content", keywords);
            document.head.appendChild(metaKeywords);
        }
    }, [college, location.pathname]);

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
                            relatedColleges.slice(0, 10).map((item) => (
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
