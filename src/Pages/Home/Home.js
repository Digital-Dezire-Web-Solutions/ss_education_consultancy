import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Executive from "../../Components/Executive/Executive";
import Explore from "../../Components/Explore/Explore";
import Courses from "../../Components/Courses/Courses";
import Categories from "../../Components/Categories/Categories";
import Faq from "../../Components/Faq/Faq";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Popup from "../../Components/Popup/Popup";
import { useLocation } from "react-router-dom";
import TopColleges from "../../Components/TopColleges/TopColleges";

const Home = () => {
  const location = useLocation();
  // const [showModal, setShowModal] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 10000);
  // }, showModal);

  useEffect(() => {
    document.title =
      "Home | SS Admission Consultancy";
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
    <div>
      <Banner />
      <Executive />
      <TopColleges/>
      <Explore />
      <Courses />
      <Categories />
      <Faq />
      <Testimonial />
      {/* {showModal && <Popup setShowModal={setShowModal} />} */}
    </div>
  );
};

export default Home;
