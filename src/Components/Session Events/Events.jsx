import React from "react";
import { Banner } from "../Banner";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Slider from "react-slick";
import { EventCarousel } from "./EventCarousel";
import SearchWidget from "./SearchWidget";
import WorkshopEvents from "./WorkshopEvents";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <>
      <div className=""
        style={{
          background: "#FFF7F0",
        }}
      >
        <div className="img-fluid">
          <Banner pageTitle="All Events" />
        </div>

        <div
          className="py-5 d-flex flex-wrap col-6 col-md-8 col-sm-4 col-lg-12 justify-content-center"
          style={{
            background: "#FFF7F0",
          }}
        >
          <div
            className="rounded-4 card d-flex justify-items-center card-fluid col-lg-9 col-md-12"
            style={{
              backgroundImage: `url('src/assets/IMG/comingEvents.png')`,
              fontFamily: "Poppins",
            }}
          >
            <div className="d-flex fw-bold">
              <Link to="/book-session"
                className="px-2 py-1 rounded-5 mt-5 ms-5 text-white"
                style={{
                  background: "#DDA15E",
                }}
              >
                Upcoming Events
              </Link>
            </div>
            <div className="text-white pt-5">
              <p
                className=" rounded-5 p-1 ms-5 mt-5"
                style={{
                  border: "2px solid white",
                  width: "200px",
                }}
              >
                <LuCalendarDays /> May 1 - May 5, 2025
              </p>
            </div>
            <div
              className="text-white text-start ms-5 pt-2 pb-1"
              style={{
                width: "450px",
              }}
            >
              <h2 className="fw-bold">7 Days Neo Vipassana Retreat Events</h2>
            </div>
            <div className="text-white text-start ms-5 fs-6 w-50">
              <p>
                {" "}
                <IoLocationOutline size={20} /> Osho Tapoban, Nagarjun Hills,
                Kathmandu
              </p>
            </div>
          </div>
        </div>
        {/* <EventCarousel /> */}
 <div className="container my-4">
  <div className="d-flex fw-bold border shadow flex-wrap w-100 mx-0 col-12 col-lg-6 col-sm-6 align-items-center justify-content-between ">
   
    <div className="d-flex align-items-center justify-content-around">
    <p className=" m-sm-1 m-lg-3 m-md-3">Workshops & Special Events</p>
    <svg width="2" height="20%" className="svg-line">
      <line
        x1="0"
        y1="40%"
        x2="0"
        y2="60%"
        stroke="#00000080"
        strokeWidth="4"
      />
    </svg>
    <p className=" m-sm-1 m-lg-3 m-md-3">Healing Sessions</p>
    <svg width="2" height="20%" className="svg-line">
      <line
        x1="0"
        y1="40%"
        x2="0"
        y2="60%"
        stroke="#00000080"
        strokeWidth="4"
      />
    </svg>
    <p className=" m-sm-1 m-lg-3 m-md-3">Intuitive Readings</p>
      </div>
    <div className=" d-flex align-items-end ps-0 ps-sm-5 ps-md-5"
  style={{
    width:"30rem"
  }}>
    <SearchWidget />
  </div>
  </div>

  
</div>
<WorkshopEvents />
      </div>
    </>
  );
};

export default Events;
