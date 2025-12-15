import React from "react";
import "./Executive.css";
import { FaBookOpen, FaTools } from "react-icons/fa";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4 } from "react-icons/tb";

const Executive = () => {
  return (
    <section className="executive">
      <div className="executive-main">

        {/* CARD 1 */}
        <div className="card">
          <div className="icon-box">
            <TbHexagonNumber1 />
          </div>
          <h3>SCIENTIFIC CAREER COUNSELLING</h3>
          <p>
            Helps to manage student’s problem such as low concentration in study, Trust issue with parents.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <div className="icon-box">
            <TbHexagonNumber2 />
          </div>
          <h3>APPLICATION & DOCUMENTATION</h3>
          <p>
            Need to follow proper admission procedure as per college rules. Fill application form and submit required documents
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <div className="icon-box">
            <TbHexagonNumber3 />
          </div>
          <h3>ADMISSION GUIDANCE</h3>
          <p>
            Complete admission guidance for various courses including course fees, placement, hostel fees, education loan etc
          </p>
        </div>
        <div className="card">
          <div className="icon-box">
            <TbHexagonNumber4 />
          </div>
          <h3>GET ADMISSION</h3>
          <p>
            We offer direct admission in top colleges or Universities through management quota. Get admission letter and education loan facility.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Executive;