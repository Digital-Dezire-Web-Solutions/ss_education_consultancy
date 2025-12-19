import React from 'react'
import "./Courses.css"
import { Link, useNavigate } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import CollegeData from '../../Data/CollegeData'
import CollegeCard from '../CourseCard/CollegeCard'

const Courses = () => {
    const navigate = useNavigate();
    return (
        <div className='Courses'>
            <div className='Courses-main'>
                <div className="categories-header courses">
                    <h2>Explore Popular Colleges</h2>
                    <button className="view-btn" onClick={() => navigate("/colleges")}>View All Colleges <FaLongArrowAltRight /></button>
                </div>
                <div className="Courses-box">
                    {CollegeData.slice(7, 13).map((item) => (
                        <CollegeCard key={item.id} course={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Courses
