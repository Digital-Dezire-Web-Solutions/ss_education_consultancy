import React, { useState } from "react";
import "./Faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "How Long Should A Business Plan Be?",
    answer:
      "Dramatically supply transparent deliverables before backward compinternal or 'organic' sources. Dramatically supply transparent deliverables before backward comp internal."
  },
  {
    id: 2,
    question: "What Is Included In Your Services?",
    answer:
      "Full course access, live classes, certification, instructor support, and learning materials."
  },
  {
    id: 3,
    question: "What Type Of Company Is Measured?",
    answer:
      "We measure all educational performance metrics from students, tutors, and course outcomes."
  }
];

const Faq = () => {
  const [open, setOpen] = useState(1);

  return (
    <div className="faq">
      <div className="faq-main">
        
        <h4 className="faq-sub">FAQ’S</h4>
        <h2 className="faq-title">
          We Are Always Ensure Best Course <br /> For Your Learning
        </h2>

        <div className="faq-box">
          {faqData.map((item) => (
            <div key={item.id} className={`faq-item ${open === item.id ? "active" : ""}`}>
              
              <div className="faq-question" onClick={() => setOpen(open === item.id ? null : item.id)}>
                {open === item.id ? <FaMinus /> : <FaPlus />}
                {item.question}
              </div>

              {open === item.id && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq;