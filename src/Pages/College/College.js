import React, { useState } from "react";
import "./College.css";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Search from "../../Components/Search/Search";
import CollegeData from "../../Data/CollegeData";
import CollegeCard from "../../Components/CourseCard/CollegeCard";

const College = () => {
    const [search, setSearch] = useState("");
    const filteredUsers =
        CollegeData?.filter((item) =>
            item?.title?.toLowerCase().includes(search.toLowerCase())
        ) || [];

    return (
        <div className="college">
            <div className="college-main">
                <div className="courses-box">
                    <div className="college-top">
                        <h2>Colleges</h2>
                        <Search search={search} setSearch={setSearch} />
                    </div>
                    <div className="Courses-box">
                        {filteredUsers.length ?
                            filteredUsers.map((item) => (
                                <CollegeCard key={item.id} course={item} />
                            )) :
                            <div className="course-card">
                                College Not Found
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default College;
