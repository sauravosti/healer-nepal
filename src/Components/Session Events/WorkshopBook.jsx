import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";

const WorkshopBook = () => {
  const [person, setPerson] = useState(1);

  const increaseGuests = () => {
    setPerson((prevPerson) => prevPerson + 1);
  };

  const decreaseGuests = () => {
    setPerson((prevPerson) => (prevPerson > 1 ? prevPerson - 1 : 1));
  };

  const { state } = useLocation();
  const navigate = useNavigate();
  const workshop = state?.workshop;

  if (!workshop) {
    return (
      <div className="container py-5 text-center">
        <p>No workshop data found. Please select a workshop from the list.</p>
        <button
          onClick={() => navigate(-1)}
          className="btn text-white mt-3"
          style={{ backgroundColor: "#65132A" }}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <div style={{ background: "#FFF7F0" }}>
        <div className="container py-5" style={{ fontFamily: "Poppins" }}>
          <button
            onClick={() => navigate("/events")}
            className="btn p-2 d-flex align-items-center mb-4 text-white"
            style={{ backgroundColor: "#65132A" }}
          >
            <IoArrowBack size={22} className="me-2" /> Back to Workshops
          </button>

          <div className="row g-4">
            {/* img section */}
            <div className="col-lg-6">
              <img
                src={workshop.image}
                alt={workshop.title}
                className="img-fluid rounded shadow w-100"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>

           
            <div className="col-lg-6">
               {/* title section */}
              <h1 className="fw-bold mb-3 ">{workshop.title}</h1>

              {/* date/time section */}
              <div className="d-flex align-items-center mb-3">
                <LuCalendarDays
                  size={25}
                  className="me-2"
                  style={{ color: "#65132A" }}
                />
                <div>
                  <span className="fw-bold me-2 fs-5">{workshop.duration}</span>
                  <span className="text-muted fs-5">{workshop.time}</span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <IoLocationOutline
                  size={25}
                  className="me-2"
                  style={{ color: "#65132A" }}
                />
                <span className="fs-5">{workshop.location}</span>
              </div>

              <div className="mb-4 fs-5">
                <h4 className="fw-bold mb-3">Workshop Description</h4>
                <p className="text-muted">{workshop.desc}</p>
              </div>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body border shadow-sm" style={{ background:"#F5EBE0",}}>
                  <h4 className="fw-bold mb-3 fs-4">Session Details</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="fw-bold mb-1 fs-5">Date</div>
                      <div className="">{workshop.date}</div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="fw-bold mb-1 fs-5">Duration</div>
                      <div>{workshop.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex gap-lg-0 gap-md-0 gap-sm-0 gap-2 justify-content-around">
                <div className="col-12 col-lg-6 col-md-6 col-sm-5">
                  <div className="">
                    {/* total person */}
                    <div className="rounded px-5"
                      style={{
                        backgroundColor: "#DDA15E",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      <div className="d-flex flex-lg-nowrap gap-1 flex-sm-nowrap align-items-center justify-content-center ms-2 py-3">
                        <label htmlFor="Adults" className="mb-0 fw-bold">
                          Total:
                        </label>
                        <div className="d-flex px-2 fw-bold">
                          <button
                            className="btn btn-outline-light px-2 py-0"
                            onClick={decreaseGuests}
                          >
                            <FaMinus size={10}/>
                          </button>
                          <span className="px-3 d-flex align-items-center">
                            {person}
                          </span>
                          <button
                            className="btn btn-outline-light px-2 py-0"
                            onClick={increaseGuests}
                          >
                            <FaPlus size={10}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-5 ">
                  <Link
                    to="/workshop-book-now"
                    className="btn text-white py-3 px-5 fw-bold rounded col-12"
                    style={{ backgroundColor: "#65132A" }}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkshopBook;
