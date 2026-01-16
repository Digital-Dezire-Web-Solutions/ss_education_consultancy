import React, { useState } from "react";
import "./Navbar.css";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaPinterestP, FaStream, FaEnvelope, FaSortDown, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/ss-logo-white-yellow.png"

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="navbar-wrapper">

            {/* --------- TOP BAR --------- */}
            <div className="top-bar">
                <div className="navbar-main">
                    <div className="top-bar">
                        <div className="top-left">
                            <Link to="mailto:ssadmission732@gmail.com">
                                <FaEnvelope /> ssadmission732@gmail.com
                            </Link>
                            <Link to="tel:+918792405697"><FaPhoneAlt /> +91 87924 05697</Link>
                        </div>

                        <div className="top-right">
                            <span><FaMapMarkerAlt />Bangalore</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------- MAIN NAVBAR --------- */}
            <div className="navbar">
                <div className="navbar-main">
                    <nav className="navbar">
                        {/* LOGO */}
                        <div className="logo">
                            <img src={logo} alt="" />
                            {/* <span className="logo-text">SS Edu Consultancy<br /><small>sseduconsultancy.com</small></span> */}
                        </div>

                        {/* MENU */}
                        <ul className="nav-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/colleges">Colleges</Link></li>
                            {/* <li><Link to="/cources">Cources</Link></li> */}
                            <li className="dropdown nav-li service-hover">
                                <Link to="/courses">Courses  <FaSortDown /></Link>
                                <div className="mega-dropdown">
                                    <div className="mega-row">
                                        <div className="mega-col">
                                            <ul>
                                                <li>
                                                    <Link
                                                        to={`/courses/${encodeURIComponent(
                                                            "engineering"
                                                        )}`}
                                                    >
                                                        Engineering
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={`/courses/${encodeURIComponent(
                                                            "ayurvedic"
                                                        )}`}
                                                    >
                                                        Ayurvedic
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={`/courses/${encodeURIComponent(
                                                            "mba"
                                                        )}`}
                                                    >
                                                        MBA
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={`/courses/${encodeURIComponent(
                                                            "mca"
                                                        )}`}
                                                    >
                                                        MCA
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={`/courses/${encodeURIComponent(
                                                            "mbbs"
                                                        )}`}
                                                    >
                                                        MBBS
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={`/courses/${encodeURIComponent(
                                                            "pg"
                                                        )}`}
                                                    >
                                                        PG
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={`/courses/${encodeURIComponent(
                                                            "dental"
                                                        )}`}
                                                    >
                                                        Dental
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={`/courses/${encodeURIComponent(
                                                            "law"
                                                        )}`}
                                                    >
                                                        Law
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/exam">Exam Updates</Link></li>
                            <li><Link to="/counseling">Counseling</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>

                        {/* SOCIAL ICONS */}
                        {/* <div className="social-icons desktop-social">
                            <FaFacebookF />
                            <FaXTwitter />
                            <FaInstagram />
                        </div> */}

                        {/* MOBILE HAMBURGER ICON */}
                        <div className="mobile-menu-icon" onClick={() => setSidebarOpen(true)}>
                            <FaStream />
                        </div>
                    </nav>
                </div>
            </div>

            {/* --------- SIDEBAR (MOBILE) --------- */}
            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="close-btn" onClick={() => setSidebarOpen(false)}>
                    ✕
                </div>

                <div className="sidebar-content">

                    {/* TOP ITEMS */}


                    {/* MENU */}
                    <ul className="sidebar-menu">
                        <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setSidebarOpen(false)}>About Us</Link></li>
                        <li><Link to="/colleges" onClick={() => setSidebarOpen(false)}>Colleges</Link></li>
                        <li><Link to="/courses" onClick={() => setSidebarOpen(false)}>Courses</Link></li>
                        <li><Link to="/exam" onClick={() => setSidebarOpen(false)}>Exam Updates</Link></li>
                        <li><Link to="/counseling" onClick={() => setSidebarOpen(false)}>Counseling</Link></li>
                        <ul>
                            <li>
                                <Link onClick={() => setSidebarOpen(false)}
                                    to={`/courses/${encodeURIComponent(
                                        "engineering"
                                    )}`}
                                >
                                    Engineering
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setSidebarOpen(false)}
                                    to={`/courses/${encodeURIComponent(
                                        "ayurvedic"
                                    )}`}
                                >
                                    Ayurvedic
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setSidebarOpen(false)}
                                    to={`/courses/${encodeURIComponent(
                                        "mba"
                                    )}`}
                                >
                                    MBA
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setSidebarOpen(false)}
                                    to={`/courses/${encodeURIComponent(
                                        "mca"
                                    )}`}
                                >
                                    MCA
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setSidebarOpen(false)}
                                    to={`/courses/${encodeURIComponent(
                                        "mbbs"
                                    )}`}
                                >
                                    MBBS
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setSidebarOpen(false)}
                                    to={`/courses/${encodeURIComponent(
                                        "pg"
                                    )}`}
                                >
                                    PG
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setSidebarOpen(false)}
                                    to={`/courses/${encodeURIComponent(
                                        "dental"
                                    )}`}
                                >
                                    Dental
                                </Link>
                            </li>
                        </ul>
                        <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact Us</Link></li>
                    </ul>

                    {/* SOCIAL ICONS */}
                    <div className="sidebar-social-icons">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaPinterestP />
                    </div>
                    <div className="sidebar-top-items">
                        <Link to="mailto:ssadmission732@gmail.com"><FaEnvelope /> ssadmission732@gmail.com</Link>
                        <Link to="tel:+918792405697"><FaPhoneAlt /> +91 87924 05697</Link>
                        <p><FaMapMarkerAlt /> 3rd Floor KRISHNA BUILDING MSR ROAD OPP TO GOKULA BUS STOP 560054 Bangalore </p>
                    </div>
                </div>
            </div>

            {/* BACKDROP */}
            {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)}></div>}

        </div>
    );
};

export default Navbar;