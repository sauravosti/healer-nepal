import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleUserAction = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleUserDetails = () => {
    setShowDropdown(false);
    navigate("/user-profile");
  };

  //logout
  const handleLogout = () => {
    setShowDropdown(false);
    console.log("User logged out");
  };

  // click outside to close dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBookAction = () => {
    navigate("/book-session");
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ background: "#F5EBE0", fontFamily: "Poppins" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center px-3">
        {/* healer logo */}
        <div className="d-flex align-items-center">
          <img
            src="https://placehold.co/400"
            alt="Logo"
            height={60}
            width={60}
            className="p-2 rounded-5 img-fluid"
          />
        </div>

        {/* search, book btn, user profile */}
        <div className="d-flex align-items-center gap-3 order-lg-2" ref={dropdownRef}>
          <CiSearch size={25} />

          <motion.button
            onClick={handleBookAction}
            className="rounded text-white px-2 py-2"
            style={{ background: "#DDA15E" }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            Book Now
          </motion.button>

          <motion.button
            className="bg-transparent border-0"
            onClick={handleUserAction}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            <FaUserCircle size={25} />
          </motion.button>

          {/* user & logout dropdown */}
          {showDropdown && (
            <div
              className="position-absolute mt-5 shadow"
              style={{
                right: "10px",
                backgroundColor: "#65132A",
                color:"white",
                borderRadius: "8px",
                padding: "3px 3px",
                width: "150px",
              }}
            >
             <motion.button
            className="dropdown-item p-1 fw-bold border-bottom"
            onClick={handleUserDetails}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.91 }}
            style={{ width: "100%", textAlign: "left" }}
          >
            User Details
          </motion.button>

          <motion.button
            className="dropdown-item fw-bold p-1"
            onClick={handleLogout}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            style={{ width: "100%", textAlign: "left" }}
          >
            Logout
          </motion.button>
            </div>
          )}

          {/* nav-toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLinks"
            aria-controls="navbarLinks"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* nav links */}
        <div
          className="collapse navbar-collapse mt-2 mt-lg-0 order-lg-1"
          id="navbarLinks"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-wrap gap-3 justify-content-center fw-bold fs-5">
            <li className="nav-item">
              <NavLink to="/" className={`nav-link ${currentPath === "/" ? "active-link" : ""}`}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${currentPath === "/events" ? "active-link" : ""}`}
                to="/events"
              >
                Session & Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${currentPath === "/about-us" ? "active-link" : ""}`}
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${currentPath === "/blogs" ? "active-link" : ""}`}
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${currentPath === "/contact-us" ? "active-link" : ""}`}
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
