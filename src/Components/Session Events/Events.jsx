import React from "react";
import { Banner } from "../Banner";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Slider from "react-slick";
import { EventCarousel } from "./EventCarousel";
import SearchWidget from "./SearchWidget";
import WorkshopEvents from "./WorkshopEvents";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <>
      <div
        style={{
          background: "#FFF7F0",
        }}
      >
        <div>
          <Banner pageTitle="All Events" />
        </div>

        {/* card bg img btn */}
        <div
          className="p-4 p-sm-4 p-md-5 d-flex flex-wrap justify-content-center"
          style={{ background: "#FFF7F0" }}
        >
          <div
            className="rounded-4 col-12 col-sm-11 col-md-10 col-lg-9 col-xl-10 p-4 p-sm-5"
            style={{
              backgroundImage: `url('src/assets/IMG/comingEvents.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              fontFamily: "Poppins",
            }}
          >
            <div className="p-3 p-sm-4 p-md-5">
              {/* btn */}
              <div className="d-flex fw-bold">
                <Link
                  to="/book-session"
                  className="px-3 py-2 fw-bold rounded-5 text-white text-decoration-none"
                  style={{ background: "#DDA15E" }}
                >
                  Upcoming Events
                </Link>
              </div>

              {/* date */}
              <div className="text-white pt-4 pt-sm-5 ms-2 ms-sm-4">
                <p
                  className="rounded-5 p-1 mb-3"
                  style={{
                    border: "2px solid white",
                    maxWidth: "fit-content",
                  }}
                >
                  <LuCalendarDays /> May 1 - May 5, 2025
                </p>
              </div>

              {/* title */}
              <div className="text-white text-start ms-2 ms-sm-4 pb-1">
                <h2 className="fw-bold" style={{ maxWidth: "90%" }}>
                  7 Days Neo Vipassana Retreat Events
                </h2>
              </div>

              {/* location */}
              <div className="text-white text-start ms-2 ms-sm-4 fs-6">
                <p className="mb-0">
                  <IoLocationOutline size={20} /> Osho Tapoban, Nagarjun Hills,
                  Kathmandu
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid my-2 my-md-4 px-0 px-sm-2">
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column flex-sm-nowrap flex-md-row align-items-center justify-content-between border shadow-sm rounded-5 p-4 py-2 mb-3 w-75">
              {/* items */}
              <div className="d-flex flex-wrap justify-content-center align-items-center text-center gap-3 flex-wrap gap-xl-4 gap-lg-3 gap-md-2 gap-sm-2">
                <p className="mb-0 fs-5 fw-bold">Workshops & Special Events</p>
                <span className="">|</span>

                <Link
                  to="/book-session"
                  className="fs-5 text-decoration-none text-black fw-bold hover-bg click-underline transition"
                >
                  Healing Sessions
                </Link>
                <span className="">|</span>

                <Link
                  to="/book-session"
                  className="fs-5 text-decoration-none text-black fw-bold hover-bg click-underline transition"
                >
                  Intuitive Readings
                </Link>
              </div>

              {/* search btn */}
              <div className="mt-0 mt-md-0">
                <SearchWidget />
              </div>
            </div>
          </div>
        </div>

        <WorkshopEvents />
      </div>
    </>
  );
};

export default Events;
