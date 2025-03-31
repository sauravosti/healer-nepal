import React from "react";
import { Banner } from "../Banner";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Slider from "react-slick";
import { EventCarousel } from "./EventCarousel";
import SearchWidget from "./SearchWidget";
import WorkshopEvents from "./WorkshopEvents";

const Events = () => {
  return (
    <>
      <div
        style={{
          background: "#FFF7F0",
        }}
      >
        <div className="img-fluid">
          <Banner pageTitle="All Events" />
        </div>

        <div
          className="container m-5 d-flex flex-wrap col-5 col-md-8 col-lg-12"
          style={{
            background: "#FFF7F0",
          }}
        >
          <div
            className="rounded-4 img-fluid w-100"
            style={{
              backgroundImage: `url('src/assets/IMG/comingEvents.png')`,
              fontFamily: "Poppins",
            }}
          >
            <div className="d-flex fw-bold">
              <span
                className="px-2 py-1 rounded-5 mt-5 ms-5 text-white"
                style={{
                  background: "#DDA15E",
                }}
              >
                Upcoming Events
              </span>
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
 <div className="d-flex shadow rounded-5 m-3 fw-bold ">
  <div className="col-12 col-lg-8 col-sm-4 d-flex align-items-center justify-content-center ">
    <span className="m-3 m-sm-1 m-lg-3 m-md-3">Workshops & Special Events</span>
    <svg width="2" height="40%" className="svg-line">
      <line
        x1="0"
        y1="25%"
        x2="0"
        y2="70%"
        stroke="#00000080"
        strokeWidth="2"
      />
    </svg>
    <span className="m-3 m-sm-1 m-lg-3 m-md-3">Healing Sessions</span>
    <svg width="2" height="40%" className="svg-line">
      <line
        x1="0"
        y1="25%"
        x2="0"
        y2="70%"
        stroke="#00000080"
        strokeWidth="2"
      />
    </svg>
    <span className="m-3 m-sm-1 m-lg-3 m-md-3">Intuitive Readings</span>
  </div>

  <div className="d-flex align-items-center ps-0 ps-sm-3 ps-md-1"
  style={{
    width:"35rem"
  }}>
    <SearchWidget />
  </div>
</div>
<WorkshopEvents />
      </div>
    </>
  );
};

export default Events;
