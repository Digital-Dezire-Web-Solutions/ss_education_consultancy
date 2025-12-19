import React, { useEffect, useState } from "react";
import "./Cources.css";
import CourseCard from "../../Components/CourseCard/CourseCard";
import CoursesData from "../../Data/CoursesData";
import Search from "../../Components/Search/Search";
import { useLocation } from "react-router-dom";

const Cources = () => {
  const [search, setSearch] = useState("");

  const location = useLocation();

  useEffect(() => {
    document.title =
      "Cources | SS Education Consultancy";
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

  const filteredUsers =
    CoursesData?.filter((item) =>
      item?.title?.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="college">
      <div className="college-main">
        <div className="courses-box">
          <div className="college-top">
            <h2>Cources</h2>
            <Search search={search} setSearch={setSearch} />
          </div>
          <div className="Courses-box">
            {filteredUsers.length ? (
              filteredUsers.map((item) => (
                <CourseCard key={item.id} course={item} />
              ))
            ) : (
              <div className="course-card">College Not Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cources;
