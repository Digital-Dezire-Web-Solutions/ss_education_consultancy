import React from "react";
import "./Director.css";
import { FaUsers, FaBook } from "react-icons/fa";
import imagesse from "../../Assets/explore2.jpg"

const teachers = [
  {
    id: 1,
    name: "Mel G. Hendrix",
    role: "Creative Director",
    img: imagesse
  },
  {
    id: 2,
    name: "Matthew Wilder",
    role: "Creative Director",
    img: imagesse
  },
  {
    id: 3,
    name: "Caven Petterson",
    role: "Creative Director",
    img: imagesse
  }
];

const Director = () => {
  return (
    <section className="director">
      <div className="director-main">

        <div className="director-grid">
          {teachers.map((t, i) => (
            <div key={t.id} className={`director-card ${i === 2 ? "active" : ""}`}>
              <img src={t.img} className="director-img" alt={t.name} />

              <h3>{t.name}</h3>
              <p className="role">{t.role}</p>

              <div className="director-info">
                <span><FaBook /> Students 50+</span>
                <span><FaUsers /> 5 Courses</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Director;