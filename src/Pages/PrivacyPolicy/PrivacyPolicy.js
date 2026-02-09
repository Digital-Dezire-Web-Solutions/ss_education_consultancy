import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PrivacyPolicy = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "Privacy Policy | SS Admission Consultancy";
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
                        {/* TOP CONTENT */}
                        <h2>Privacy Policy – SRI SAI Consultancy</h2>
                        <p>
                            At [SRI SAI CONSULTANCY], we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data.
                        </p>
                        <hr />
                        <h3>1. Information We Collect</h3>
                        <p>We may collect the following personal information:</p>
                        <ul>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Date of birth</li>
                            <li>Educational background and academic records</li>
                        </ul>
                        <hr />
                        <h3>2. How We Use Your Information</h3>
                        <p>We use your information for the following purposes:</p>
                        <ul>
                            <li>To provide education counseling and consultancy services</li>
                            <li>To process applications with universities, colleges, or institutions</li>
                            <li>To assist with admission in top university or colleges</li>
                            <li>To communicate with you regarding our services</li>
                            <li>To maintain internal records and improve our services</li>
                        </ul>
                        <hr />
                        <h3>3. Information Sharing and Disclosure</h3>
                        <p>We do not sell, trade, or rent your personal information to third parties. Information may be shared only with: </p>
                        <ul>

                        <li>Universities and educational institutions</li>
                        <li>Immigration or visa consultants (if applicable)</li>
                        <li>Government or legal authorities when required by law</li>
                        </ul>
<hr />
                        <h3>4. Data Security</h3>
                        <p>We take reasonable technical and administrative measures to protect your personal data from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
<hr />
                        <h3>5. Cookies</h3>
                        <p>Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings if you prefer.</p>
<hr />
                        <h3>6. Your Rights</h3>
                        <p>You have the right to:</p>
                        <ul>

                        <li>Access your personal information</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your personal data, subject to legal requirements</li>
                        </ul>
<hr />
                        <h3>7. Changes to This Policy</h3>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website with the updated date.</p>
<hr />
                        <h3>8. Contact Us</h3>
                        <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
                        <p>Company Name:   [SRI SAI CONSULTANCY] Email: [ssadmission732@gmail.com] Phone: [+9187924 05697] Address: [Corporate office - 3rd Floor, Opp to MSR House, 1st Main Road, venkteshwara Temple, Gokula Sundarnagar, Bengaluru, Bangaluru Urban, Karnataka 560054 ]</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
