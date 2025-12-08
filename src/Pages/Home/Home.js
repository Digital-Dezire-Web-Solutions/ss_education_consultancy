import React from "react";
import Banner from "../../Components/Banner/Banner";
import Executive from "../../Components/Executive/Executive";
import Explore from "../../Components/Explore/Explore";
import Courses from "../../Components/Courses/Courses";
import Categories from "../../Components/Categories/Categories";
import Choose from "../../Components/Choose/Choose";
import Faq from "../../Components/Faq/Faq";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Director from "../../Components/Director/Director";

const Home = () => {
  return (
    <div>
      <Banner />
      <Executive/>
      <Explore/>
      <Courses/>
      <Categories/>
      <Choose/>
      <Director/>
      <Faq/>
      <Testimonial/>
    </div>
  );
};

export default Home;
