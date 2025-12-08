import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import College from "./Pages/College/College";
import Cources from "./Pages/Cources/Cources";
import CollegeDetail from "./Pages/College/CollegeDetail";
import CourseDetail from "./Pages/Cources/CourseDetail";
import BreadCrumb from "./Components/BreadCrumb/BreadCrumbs";
import About from "./Pages/About/About";
import Counselling from "./Pages/Counselling/Counselling";
import Contact from "./Pages/Contact/Contact";

const Layout = () => {
  const location = useLocation();
  const showBreadcrumb = location.pathname !== "/";

  return (
    <>
      {showBreadcrumb ? (
        <div>
          <Navbar />
          {showBreadcrumb && (
            <BreadCrumb
              title={
                location.pathname === "/about"
                  ? "About Us"
                  : location.pathname === "/colleges"
                  ? "Colleges"
                  : location.pathname.startsWith("/college")
                  ? "College"
                  : location.pathname === "/contact"
                  ? "Contact Us"
                  : location.pathname === "/counseling"
                  ? "Counseling"
                  : location.pathname === "/courses"
                  ? "Courses"
                  : location.pathname.startsWith("/courses")
                  ? "Course"
                  : "Page"
              }
              page={
                location.pathname === "/about"
                  ? "About Us"
                  : location.pathname === "/colleges"
                  ? "Colleges"
                  : location.pathname.startsWith("/college")
                  ? "Colleges"
                  : location.pathname === "/contact"
                  ? "Contact Us"
                  : location.pathname === "/counseling"
                  ? "Counseling"
                  : location.pathname === "/courses"
                  ? "Courses"
                  : location.pathname.startsWith("/courses")
                  ? "Courses"
                  : "Page"
              }
            />
          )}
        </div>
      ) : (
        <div>
          <Navbar />
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/counseling" exact element={<Counselling />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/colleges" exact element={<College />} />
        <Route path="/courses" exact element={<Cources />} />
        <Route path="/courses/:title" exact element={<CourseDetail />} />
        <Route path="/college/:title" exact element={<CollegeDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
