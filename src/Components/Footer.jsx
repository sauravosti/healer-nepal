import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
   <div>
  <div
    className="pt-5 px-5"
    style={{
      fontFamily: "Poppins",
      // backgroundImage: `url('src/assets/IMG/footerimg.png')`,
    }}
  >
    <div className="row d-flex flex-wrap mt-5 pt-5">
      
      {/* social media icons */}
      <div className="col-12 col-sm-6 col-md-3 mb-3">
        <div className="d-flex justify-content-center pb-2">
          <img
          className="mt-0"
          src="https://placehold.co/600x400"
          height="100px"
          width="100px"
          />
        </div>
        <div
          className="d-flex justify-content-center align-items-center gap-2 fw-bold p-2"
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


      {/* Footer links div */}
      <div className="col-12 col-sm-6 col-md-3 mb-3">
        <div className="fw-bold">
          <ul className="list-unstyled row">
            <Link to="/" className=" text-decoration-none fw-bold text-black pb-3">Home</Link>
            <Link to="/blogs" className="pb-3 text-decoration-none fw-bold text-black">Blogs</Link>
            <Link to="/events" className="pb-3 text-decoration-none fw-bold text-black">Events</Link>
            <Link to="/book-session" className="pb-3 text-decoration-none fw-bold text-black">Our Healer</Link>
          </ul>
        </div>
      </div>

      {/* Contact information div */}
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <div className="text-start">
          <h3>Contact Us</h3>
          <a href="mailto:example@gmail.com" className="text-decoration-none text-black fw-bold">example@gmail.com</a>
          <p className="fw-bold mb-3 mt-3">
            Nagarjun Hills, Kathmandu, Nepal
          </p>
          <p className="fw-bold mb-3">+977-9847807082</p>
        </div>
      </div>

      {/* Subscription div */}
      <div className="col-12 col-md-6 col-lg-3 mb-3">
        <form>
          <h3>Subscribe</h3>
          <span className="text-black">
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

      <footer className=" d-flex justify-content-center align-items-center fw-bold col-12 p-2">
        <span>Copyright &copy; 2025. All Rights Reserved.</span>
      </footer>
    </div>
  </div>
</div>

     
    </>
  );
};

export default Footer;
