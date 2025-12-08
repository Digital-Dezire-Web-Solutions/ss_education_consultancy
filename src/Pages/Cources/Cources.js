import React, { useState } from 'react'
import "./Cources.css"
import CourseCard from '../../Components/CourseCard/CourseCard';
import CoursesData from '../../Data/CoursesData';
import Search from '../../Components/Search/Search';

const Cources = () => {
  const [search, setSearch] = useState("");
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
                        {filteredUsers.length ?
                            filteredUsers.map((item) => (
                                <CourseCard key={item.id} course={item} />
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

export default Cources
