import React, { useState } from "react";
import CoursesData from "../../Data/CoursesData";
import emailjs from "@emailjs/browser";

const Form = ({setShowModal}) => {
    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_1ypcrc3",
                "template_m5dvyjs",
                formData,
                "OuogqKQmyn7ocWfN_"
            )
            .then(
                () => {
                    setMessage("✅ Message Sent Successfully!");
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        course: "",
                        message: "",
                    });
                    setTimeout(() => {
                        setMessage("");
                        setShowModal(false);
                    }, 2000);
                },
                (error) => {
                    setMessage("❌ Failed to send message!");
                    setTimeout(() => {
                        setMessage("");
                    }, 2000);
                    console.log(error);
                }
            );
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {message && <p>{message}</p> }
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
                        type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
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
