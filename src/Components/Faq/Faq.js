import React, { useState } from "react";
import "./Faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "How Does Sri Sai Education Consultancy Help Students?",
    answer:
      "We provide complete academic and career guidance including course selection, college shortlisting, admission support, documentation assistance, and continuous counseling to help students make the right decisions for their future."
  },
  {
    id: 2,
    question: "What Services Are Included In Your Consultancy?",
    answer:
      "Our services include career counseling, course and college guidance, application processing, admission assistance, documentation support, and post-admission guidance for students in India and abroad."
  },
  {
    id: 3,
    question: "Do You Provide Counseling For Study Abroad?",
    answer:
      "Yes, we guide students for both Indian and international education opportunities, helping them choose the right universities, courses, and admission pathways based on their academic profile and career goals."
  },
  {
  id: 4,
  question: "Is There Any Counseling Fee?",
  answer:
    "We offer transparent and affordable counseling services. In many cases, initial career guidance sessions are free. Please contact us for detailed information."
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