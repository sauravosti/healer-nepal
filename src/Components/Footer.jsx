import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="pt-5"
        style={{
          fontFamily: "Poppins",
          backgroundImage:  `url('src/assets/IMG/footerimg.png')`
        }}
      >
        <div className="row mt-5 pt-5">
          <div className=" col-sm-1 col-md-2 col-lg-3">
            <div
              className=" d-flex mt-5 align-items-center gap-2 text-md-end fw-bold p-2"
              style={{ color: "#65132A" }}
            >
              <a href="">
                <FaFacebookF
                  size={25}
                  className="text-white me-1 rounded-5"
                  style={{ background: "#65132A", padding: "3px" }}
                />
              </a>
              <a href="">
                <FaInstagram
                  size={25}
                  className="text-white me-1 rounded-5"
                  style={{ background: "#65132A", padding: "3px" }}
                />
              </a>
              <a href="">
                <TiSocialLinkedin
                  size={25}
                  className="text-white me-1 rounded-5"
                  style={{ background: "#65132A", padding: "1px" }}
                />
              </a>
              <a href="">
                <FaXTwitter
                  size={25}
                  className="text-white me-1 rounded-5"
                  style={{ background: "#65132A", padding: "3px" }}
                />
              </a>
            </div>
          </div>
          <div
            className="col page-link fw-bold">
            <div className="">
              <li className="mb-2">Home</li>
              <li className="mb-2">Blogs</li>
              <li className="mb-2">Events</li>
              <li className="mb-2">Our Healer</li>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-3">
            <div className="text-start">
            <h5>Contact Us</h5>
              <a tomail=" ">example@gmail.com</a>
              <p className="fw-bold mb-1 mt-1">
                Nagarjun Hills, Kathmandu, Nepal
              </p>
              <p className="fw-bold mb-3">+977-9847807082</p>
            </div>
          </div>
          <div className="col-sm-3 col-md-5 col-lg-4">  
            <form>
            <h5>Subscribe</h5>
            <span className=" text-black">
              Enter your email to get notified about our new update
            </span>
              <div className="m-3 d-flex position-relative">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  style={{
                    background: "#FFDDB8",
                    paddingRight: "30px",
                  }}
                />
                <MdEmail
                  size={25}
                  className="position-absolute"
                  style={{
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
            </form>
          </div>
          <svg className="mt-5" width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="5"
              x2="100%"
              y2="5"
              stroke="#00000099"
              strokeWidth="1"
            />
          </svg>
          <footer className="p-4 d-flex justify-content-center align-items-center fw-bold col col-lg-12 col-md-8">
            <span>Copyright &copy; 2025. All Rights Reserved.</span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
