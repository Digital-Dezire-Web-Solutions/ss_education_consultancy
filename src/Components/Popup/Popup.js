import React from "react";
import "./Popup.css";
import popupimg from "../../Assets/popup.jpg"
import Form from "../Form/Form";
import { FaTimes } from "react-icons/fa";

const Popup = ({setShowModal}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <div className="modal-item">
                    <div className="closebtn" onClick={() => setShowModal(false)}>
                        <FaTimes />
                    </div>
                    <div className="modal-box-left">
                        <img src={popupimg} alt="" />
                    </div>
                    <div className="modal-box-right">
                        <span>contact us</span>
                        <h2>Get in Touch with Us</h2>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
