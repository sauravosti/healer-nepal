import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex flex-wrap border container-fluid col-6 col-sm-6 col-md-9 col-lg-12 ms-2"
      style={{
        width:"1210px"
      }}>
   
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex flex-wrap align-items-center gap-3" id="navbarSupportedContent"
          style={{
            background:"#F5EBE0",
            fontFamily:"Poppins",
          }}>
            <div>
            <img
            className="p-2 me-4 img-fluid"
            src="https://placehold.co/400" 
            height={50}
            width={60}
            />
            </div>
            <ul className=" navbar-nav me-auto mb-2 mt-2 mb-lg-2 d-flex flex-wrap fw-bold">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="events">
                  Session & Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Meet a Healer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Connect
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Social Media
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="search-btn">
            <CiSearch size={25}  className=" fs-2 ms-5 m-3"/>
            </div>
            <div className="book-btn">
                <button className=" rounded text-white px-1 py-1"
                style={{
                    background:"#DDA15E"
                }}>
                    Book Now
                </button>
            </div>
            <div>
            <FaUserCircle size={25} className="me-5" />
            </div>
            </div>
      </nav>
    </>
  );
};

export default Navbar;
