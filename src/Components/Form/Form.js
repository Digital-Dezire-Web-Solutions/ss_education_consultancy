import React, { useState } from "react";
import CoursesData from "../../Data/CoursesData";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        course: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Message Sent Successfully!");
    };
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-items">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Email"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="form-items">
                <div className="form-group">
                    <input
                        type="number"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    {/* <label>Select Course</label> */}
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Choose a course</option>
                        {CoursesData.map((c) => (
                            <option key={c.id} value={c.title}>
                                {c.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="form-group">
                {/* <label>Your Message</label> */}
                <textarea
                    name="message"
                    placeholder="Write your message..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <button type="submit" className="contact-btn">
                Send Message
            </button>
        </form>
    );
};

export default Form;
