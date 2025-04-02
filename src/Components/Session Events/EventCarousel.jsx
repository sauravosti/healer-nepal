import React from "react";
import Slider from "react-slick";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import img from "../../assets/IMG/comingEvents.png"; 

export const EventCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomArrows />,
    prevArrow: <CustomArrows />,
  };

  const events = [
    {
      image: {img},
      title: "7 Days Neo Vipassana Retreat Events",
      date: "May 1 - May 5, 2025",
      location: "Osho Tapoban, Nagarjun Hills, Kathmandu",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {events.map((event, index) => (
          <div
            key={index}
            className=" d-flex card flex-wrap justify-content-center rounded-5 border bg-black img-fluid"
            style={{
              backgroundImage: `url(${event.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "55vh", 
            }}
          >
            {/* Overlay to darken the background */}
            <div className=" d-flex fw-bold">
              <button
                className="px-2 py-1 rounded-5 mt-5 ms-5 text-white"
                style={{
                  background: "#DDA15E",
                }}
              >
                Upcoming Events
              </button>
            </div>

            <div className="text-white text-center pt-5">
              <p
                className="rounded-5 p-1 ms-5 mt-5"
                style={{
                  border: "2px solid white",
                  width: "200px",
                }}
              >
                <LuCalendarDays /> {event.date}
              </p>
            </div>
            <div
              className="text-white text-start ms-5 pt-2 pb-1"
              style={{
                width: "450px",
              }}
            >
              <h2 className="fw-bold">{event.title}</h2>
            </div>
            <div className="text-white text-start ms-5 fs-6 w-50">
              <p>
                <IoLocationOutline size={20} /> {event.location}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

// Custom Arrows Component
const CustomArrows = ({ onClick }) => (
  <div className="custom-arrow-container d-flex justify-content-center">
    <button className="custom-arrow" onClick={() => onClick("prev")}>
      &#8592;
    </button>
    <button className="custom-arrow" onClick={() => onClick("next")}>
      &#8594;
    </button>
  </div>
);
