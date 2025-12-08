import React from "react";
import "./Executive.css";
import { FaBookOpen, FaTools } from "react-icons/fa";

const Executive = () => {
  return (
    <section className="executive">
      <div className="executive-main">

        {/* CARD 1 */}
        <div className="card">
          <div className="icon-box">
            <FaBookOpen />
          </div>
          <h3>Business And Executive Class</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the...
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <div className="icon-box">
            <FaBookOpen />
          </div>
          <h3>Business And Executive</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the...
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <div className="icon-box">
            <FaTools />
          </div>
          <h3>Sports Coaching</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the...
          </p>
        </div>

      </div>
    </section>
  );
};

export default Executive;