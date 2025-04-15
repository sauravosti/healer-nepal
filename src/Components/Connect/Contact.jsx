import React from "react";
import { Banner } from "../Banner";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdOutlineWhatsapp } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  return (
    <div style={{ background: "#FFF7F0", fontFamily: "Poppins" }}>
      <Banner pageTitle="Contact Us" />
      
      <div className="container-fluid px-0 px-md-3 px-lg-5 py-4">
        <div className="row g-4 justify-content-center">
          {/* Crystal Nepal paragraph part */}
          <div className="col-12 col-lg-6 col-md-6 px-4 px-md-5 px-lg-4">
            <h5 className="fw-bold text-center mb-4">Crystal Nepal</h5>
            <div className="text-center">
              <p className="mb-3">
                If you have a general inquiry you can call us during office
                times (10am-5pm Nepal Tme) and talk to our volunteers at the
                welcome center who will step by step guide you through our
                programs and registration process. You can also drop by and walk
                in to our information and welcome center and talk to our
                volunteers in person.
              </p>
              <p className="mb-3">
                Spending some time at the welcome center can be a great delight
                as our welcome center is just next to our book store and library
                and has all of Osho books and many other spiritual literature
                that you can choose from.
              </p>
              <p>
                The book store also offers variety of different items used for
                meditation including meditation and yoga apparels, footwear,
                souveniers, inscence, toiletry, Ayurvedic and Yogic edibles etc.
              </p>
            </div>
          </div>

          {/* Contact us form */}
          <div className="col-12 col-lg-5 col-md-6 px-4 px-md-3">
            <div className="d-flex justify-content-center">
              <div
                className="card p-3 p-md-4 shadow w-100"
                style={{
                  maxWidth: "500px",
                  borderRadius: "12px",
                  background: "#FFF7F0"
                }}
              >
                <h5 className="text-center fw-bold mb-4 mb-md-5">
                  We are always ready to help you and answer your questions
                </h5>
                <form>
                  <div className="row mb-3 mb-md-4">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <input
                        type="text"
                        className="form-control bg-transparent p-2 p-md-3"
                        placeholder="First Name*"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        className="form-control bg-transparent p-2 p-md-3"
                        placeholder="Last Name*"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 mb-md-4">
                    <input
                      type="email"
                      className="form-control bg-transparent p-2 p-md-3"
                      placeholder="Email*"
                      required
                    />
                  </div>
                  <div className="row mb-3 mb-md-4">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <input
                        type="text"
                        className="form-control bg-transparent p-2 p-md-3"
                        placeholder="Country*"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="tel"
                        className="form-control bg-transparent p-2 p-md-3"
                        placeholder="Phone Number*"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 mb-md-5">
                    <textarea
                      className="form-control bg-transparent p-2 p-md-3"
                      placeholder="Your Message*"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn py-2 py-md-3 text-white" style={{background:"#65132A"}}
                  >
                    Send Message <span className="ms-1"><IoMdSend /></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info cards */}
        <div className="container-fluid mt-5 px-3 px-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-12 px-0">
              <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center gap-3 gap-md-0 p-3 p-md-4 shadow-sm rounded-1 bg-transparent">
                <div className="text-center flex-grow-1 min-width-150">
                  <IoLocationSharp size={25} style={{ color: "#65132A" }} />
                  <p className="m-2">Nagarjun Hills, Kathmandu, 00977, Nepal</p>
                </div>
                <div className="text-center flex-grow-1 min-width-150">
                  <FaPhoneAlt size={25} style={{ color: "#65132A" }} />
                  <p className="my-2">01 5112012/13</p>
                </div>
                <div className="text-center flex-grow-1 min-width-150">
                  <GrMail size={25} style={{ color: "#65132A" }} />
                  <p className="m-2">example@gmail.com</p>
                </div>
                <div className="text-center flex-grow-1 min-width-150">
                  <MdOutlineWhatsapp size={25} style={{ color: "#65132A" }} />
                  <p className="m-2">9804185602, 9856085602</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="container-fluid mt-4 px-0">
          <div className="row">
            <div className="col-12">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33539.547236817045!2d85.269018!3d27.764222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb21e31370c487%3A0xbde30ac187d685cd!2sOsho%20Tapoban%20International%20Commune!5e1!3m2!1sen!2sin!4v1743762676487!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;