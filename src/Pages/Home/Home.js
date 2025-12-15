import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Executive from "../../Components/Executive/Executive";
import Explore from "../../Components/Explore/Explore";
import Courses from "../../Components/Courses/Courses";
import Categories from "../../Components/Categories/Categories";
import Choose from "../../Components/Choose/Choose";
import Faq from "../../Components/Faq/Faq";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Director from "../../Components/Director/Director";
import Popup from "../../Components/Popup/Popup";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, showModal);
  return (
    <div>
      <Banner />
      <Executive />
      <Explore />
      <Courses />
      <Categories />
      {/* <Choose /> */}
      {/* <Director /> */}
      <Faq />
      <Testimonial />
      {showModal && <Popup setShowModal={setShowModal} />}
    </div>
  );
};

export default Home;
