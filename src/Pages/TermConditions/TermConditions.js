import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TermConditions = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "Term & Conditions | SS Admission Consultancy";
        const description =
            "SS Admission Consultancy is a Bangalore based education guidance firm dedicated to helping students achieve their academic and career goals in India and abroad.";
        let metaDescription = document.querySelector("meta[name='description']");

        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }
    }, [location.pathname]);

    return (
        <div className="page">
            <div className="page-main">
                <div className="page-box">
                    <div className="about-section">
                        <h2>Terms and Conditions</h2>

                        <p>By using the services of [SRI SAI CONSULTANCY], you agree to the following terms:</p>

                        <h3>Services</h3>
                        <p>We provide education counseling and admission-related guidance only. We do not guarantee admission, or scholarships.</p>

                        <h3>User Information</h3>
                        <p>You agree to provide accurate and genuine information and documents. We are not responsible for issues caused by false or incomplete details.</p>

                        <h3>Fees</h3>
                        <p>Consultancy fees, if applicable, are non-refundable unless stated otherwise in writing. Third-party fees (universities, embassies, etc.) are the student’s responsibility.</p>

                        <h3>Decisions by Third Parties</h3>
                        <p>Final decisions regarding admission are made by universities and government authorities. We are not liable for rejections or delays.</p>

                        <h3>Privacy</h3>
                       <p> Your personal information will be handled as per our Privacy Policy.</p>

                        <h3>Changes</h3>
                        <p>We may update these terms at any time. Continued use of our services means you accept the updated terms.</p>

                        <h3>Governing Law</h3>
                        <p>These terms are governed by the laws of [INDIA/KARNATAKA].</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermConditions;
