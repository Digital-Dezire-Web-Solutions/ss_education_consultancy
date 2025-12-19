import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import CollegeData from '../../Data/CollegeData'
import CollegeCard from '../CourseCard/CollegeCard'
import "./TopColleges.css"

const TopColleges = () => {
    const navigate = useNavigate();
    return (
        <div className='Courses top-colleges'>
            <div className='Courses-main'>
                <div className="categories-header">
                    <h2>Top 8 Colleges</h2>
                    <button className="view-btn" onClick={() => navigate("/colleges")}>View All Colleges <FaLongArrowAltRight /></button>
                </div>
                <div className="Courses-box ">
                    {CollegeData.slice(0, 8).map((item) => (
                        <CollegeCard key={item.id} course={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopColleges
