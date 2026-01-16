import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CollegesData from "../../Data/CollegeData";
import "./CourseDetail.css";
import CollegeCard from "../../Components/CourseCard/CollegeCard";
import Search from "../../Components/Search/Search";

const CourseDetail = () => {
  const { title } = useParams();

  const slugify = (str) => str.toLowerCase().replace(/ /g, "-");

  const filteredColleges = CollegesData.filter((college) =>
    college.categories.some((category) => slugify(category) === title)
  );

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 15;

  const filteredUsers =
    filteredColleges?.filter((item) =>
      item?.title?.toLowerCase().includes(search.toLowerCase())
    ) || [];

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentColleges = filteredUsers.slice(startIndex, endIndex);

  const location = useLocation();

  useEffect(() => {
    document.title =
      "Course Detail | SS Admission Consultancy";
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
    <div className="college">
      <div className="college-main">
        <div className="courses-box">
          <div className="college-top">
            <h2>Colleges offering {title}</h2>
            <Search search={search} setSearch={setSearch} />
          </div>

          <div className="Courses-box">
            {currentColleges.length ? (
              currentColleges.map((college) => (
                <CollegeCard
                  key={college.id}
                  course={college}
                  category={title}
                />
              ))
            ) : (
              <p>No colleges found for {title}</p>
            )}
          </div>
          {/* 🔢 Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
