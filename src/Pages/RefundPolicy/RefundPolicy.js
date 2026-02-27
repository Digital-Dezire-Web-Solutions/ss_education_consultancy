import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RefundPolicy = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Refund Policy | SS Admission Consultancy";
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
            <h2>Refund Policy – SRI SAI Consultancy</h2>
            {/* <p>
                            At [SRI SAI CONSULTANCY], we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data.
                        </p> */}
            <hr />
            <h3>1.⁠ ⁠Scope of Services</h3>
            <p>
              SRI SAI Consultancy is an independent education consultancy that
              provides admission guidance, career counseling, documentation
              support, and application assistance services. We are not a
              university, college, or admission authority and do not grant
              admissions. Admission decisions are made solely by the respective
              institution based on eligibility criteria, documentation
              verification, seat availability, and institutional policies.
            </p>
            <hr />
            <h3>2.⁠ ⁠Strict No Refund Policy on Professional Fees</h3>
            <p>
              All registration fees, consultation fees, counseling fees,
              processing fees, and service charges paid to SRI SAI Consultancy
              are strictly non-refundable and non-transferable under any
              circumstances, including but not limited to:
            </p>
            <ul>
              <li> Student withdrawal from the admission process</li>
              <li> Change of mind by the student or parent</li>
              <li> Failure to meet eligibility criteria</li>
              <li> Rejection of admission by the college/university</li>
              <li> Delay in document submission by the student</li>
              <li> Change in financial situation</li>
              <li> Institutional policy changes</li>
            </ul>
            <p>These fees cover professional time, administrative effort, counseling, documentation review, communication, and application processing services rendered.</p>
            <hr />
            <h3>3. ⁠College / University / Third-Party Fees</h3>
            <p>
              Any fees paid directly or indirectly to colleges, universities, examination authorities, or third parties are governed strictly by their respective refund policies.
            </p>
            <p>SRI SAI Consultancy shall not be liable for:</p>
            <ul>
              <li>Institutional refund rejections</li>
              <li>Delays in institutional refunds</li>
              <li>Partial refunds issued by institutions</li>
            </ul>
            <p>The consultancy acts only as a facilitator.</p>
            <hr />
            <h3>4. ⁠No Guarantee of Admission</h3>
            <p>
              SRI SAI Consultancy does not guarantee admission, scholarship approval, seat confirmation, visa approval, or financial aid.
              All admissions are subject to:
            </p>
            <ul>
              <li>Institutional eligibility criteria</li>
              <li>Document verification</li>
              <li>Interview performance (if applicable)</li>
              <li>Seat availability</li>
              <li>Regulatory approvals</li>
            </ul>
            <p>No verbal assurance shall be considered legally binding.</p>
            <hr />
            <h3>5. Chargebacks & Payment Disputes</h3>
            <p>
              If a client initiates a chargeback, payment dispute, or fraudulent transaction claim after receiving services:
            </p>
            <ul>
              <li>The consultancy reserves the right to provide all service records, communication logs, and signed agreements to the payment gateway and legal authorities.</li>
              <li>Legal action may be initiated for recovery of dues and damages.</li>
            </ul>
            <hr />
            <h3>6. Force Majeure</h3>
            <p>The consultancy shall not be held responsible for delays or service interruptions caused by events beyond its control, including but not limited to:</p>
            <ul>
              <li>⁠Government policy changes</li>
              <li>⁠University regulation changes</li>
              <li>⁠Natural disasters</li>
              <li>⁠Technical failures</li>
              <li>⁠Political disruptions</li>
            </ul>
            <hr />
            <h3>7. ⁠Dispute Resolution & Jurisdiction</h3>
            <p>
              Any dispute arising out of services provided shall be subject to the jurisdiction of courts located in [Insert City, State].
            </p>
            <p>Both parties agree to attempt resolution through written communication before initiating legal proceedings.</p>
            <hr />
            <h3>8. Contact Information</h3>
            <p>
              Email: info@ssadmissionconsultancy.com
              <br />
              Phone: ++91 87924 05697
            </p>
            <p><strong>Important Legal Notice</strong></p>
            <p>By making payment to SS Admission Consultancy, the client confirms that they have read, understood, and agreed to this Refund Policy and Terms & Conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
