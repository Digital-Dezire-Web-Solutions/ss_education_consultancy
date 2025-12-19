import React, { useEffect, useState } from "react";
import "./College.css";
import Search from "../../Components/Search/Search";
import CollegeData from "../../Data/CollegeData";
import CollegeCard from "../../Components/CourseCard/CollegeCard";
import { useLocation } from "react-router-dom";

const College = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
      document.title =
        "SS Consultancy is a Bangalore based education firm";
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

  const ITEMS_PER_PAGE = 15;

  // 🔍 Filter data based on search
  const filteredColleges =
    CollegeData?.filter((item) =>
      item?.title?.toLowerCase().includes(search.toLowerCase())
    ) || [];

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredColleges.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentColleges = filteredColleges.slice(startIndex, endIndex);

  // 🔄 Reset page on search
  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <div className="college">
      <div className="college-main">
        <div className="courses-box">
          <div className="college-top">
            <h2>Colleges</h2>
            <Search search={search} setSearch={handleSearch} />
          </div>

          <div className="Courses-box">
            {currentColleges.length ? (
              currentColleges.map((item) => (
                <CollegeCard key={item.id} course={item} />
              ))
            ) : (
              <div className="course-card">College Not Found</div>
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

export default College;