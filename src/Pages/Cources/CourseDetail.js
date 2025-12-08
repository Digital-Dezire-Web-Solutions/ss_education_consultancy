import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
  const filteredUsers =
    filteredColleges?.filter((item) =>
      item?.title?.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="college">
      <div className="college-main">
        <div className="courses-box">
          <div className="college-top">
            <h2>Colleges offering {title}</h2>
            <Search search={search} setSearch={setSearch} />
          </div>

          <div className="Courses-box">
            {filteredUsers.length ? (
              filteredUsers.map((college) => (
                <CollegeCard key={college.id} course={college} category={title}/>
              ))
            ) : (
              <p>No colleges found for {title}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
