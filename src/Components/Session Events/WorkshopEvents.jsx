import React from "react";
import image from "../../assets/IMG/sessionimg.png";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const WorkshopEvents = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/book-session'); 
  };
  const data = [
    {
      image: image,
      duration: "May 1 - May 5, 2025",
      time: "10:00 AM - 4:00 PM",
      title: "9-Day Osho Mystic Rose Therapy",
      location: "Osho Tapoban, Nagarjun Hills, Kathmandu",
      desc: "9-Day Osho Mystic Rose Therapy: Laugh, cry and let the wounds of the past melt into silence. Osho Mystic Rose gives you this opportunity. It is a process that lasts...",
      date: "Mon 24",
      btn: "Book Session",
    },
    {
      image: image,
      duration: "May 1 - May 5, 2025",
      time: "10:00 AM - 4:00 PM",
      title: "9-Day Osho Mystic Rose Therapy",
      location: "Osho Tapoban, Nagarjun Hills, Kathmandu",
      desc: "9-Day Osho Mystic Rose Therapy: Laugh, cry and let the wounds of the past melt into silence. Osho Mystic Rose gives you this opportunity. It is a process that lasts...",
      date: "Mon 24",
      btn: "Book ession",
    },
    {
        image: image,
        duration: "May 1 - May 5, 2025",
        time: "10:00 AM - 4:00 PM",
        title: "9-Day Osho Mystic Rose Therapy",
        location: "Osho Tapoban, Nagarjun Hills, Kathmandu",
        desc: "9-Day Osho Mystic Rose Therapy: Laugh, cry and let the wounds of the past melt into silence. Osho Mystic Rose gives you this opportunity. It is a process that lasts...",
        date: "Mon 24",
        btn: "Book Session",
      },
      {
        image: image,
        duration: "May 1 - May 5, 2025",
        time: "10:00 AM - 4:00 PM",
        title: "9-Day Osho Mystic Rose Therapy",
        location: "Osho Tapoban, Nagarjun Hills, Kathmandu",
        desc: "9-Day Osho Mystic Rose Therapy: Laugh, cry and let the wounds of the past melt into silence. Osho Mystic Rose gives you this opportunity. It is a process that lasts...",
        date: "Mon 24",
        btn: "Book Session",
      },
  ];
  return (
    <>
    <div className="container gx-0">
      <div className=" col-lg-12">
        {data.map((item, index) => (
          <div key={index} className="col-12 col-lg-10 mb-4 p-3 rounded shadow-sm">
            <div className="row align-items-center">
              {/* Image Section (4 columns) */}
              <div className="col-12 col-md-4 col-sm-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded "
                />
              </div>
              
              {/* Description Section (8 columns) */}
              <div className=" d-flex justify-content-center col-12 col-lg-8 col-md-8 col-sm-4">
                <div className="col d-flex flex-wrap col-lg-9 col-md-3 p-3 rounded">
                  <p className=" fw-bold p-1 rounded-3 text-center"
                  style={{
                    border:"2px solid #000",
                  }}>
                    <LuCalendarDays size={20} className="me-1" />
                    {item.duration}
                    {" | "}
                   {item.time}
                  </p>

                  <h4 className="fw-bold">{item.title}</h4>
                  <p className="d-flex align-items-center">
                    <IoLocationOutline size={20} className="me-2" />
                    {item.location}
                  </p>
                  <p>{item.desc}</p>
                  </div>
                  <div className=" col d-flex col-lg-4 col-md-4 col-sm-4">
                  <svg width="2" height="100%" className="svg-line">
                    <line
                      x1="0"
                      y1="10%"
                      x2="0"
                      y2="100%"
                      stroke="#00000080"
                      strokeWidth="2"
                    />
                  </svg>
                   {/* Date & Button */}
                   <div className=" text-center">
                    <div className=" p-3 px-2 m-5 mb-3 fw-bold text-white rounded"
                         style={{ background: "#65132A", }}>
                      {item.date}
                    </div>
                    <button className="btn btn-outline-danger rounded-5 px-3 fw-bold"  onClick={handleClick}>
                      {item.btn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default WorkshopEvents;
