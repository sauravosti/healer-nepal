import React from "react";
import image from "../../assets/IMG/sessionimg.png";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate, Link } from 'react-router-dom';

const WorkshopEvents = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/book-session'); 
  };
  const data = [
    {
      id: 1,
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
      id: 2,
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
        id: 3,
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
        id: 4,
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
   <div className="container-fluid px-0 px-sm-3">
  <div className="row justify-content-center mx-0">
    {data.map((item) => (
      <div 
        key={item.id} 
        className="col-12 col-lg-10 col-md-11 col-sm-12 mb-4 p-0"
      >
        <div className="container-fluid d-flex flex-wrap p-3 rounded shadow-sm">
          {/* img section */}
          <div className="col-12 col-md-4 col-sm-12 p-0 mb-3 mb-md-0">
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid rounded w-100"
              style={{ height: "100%", minHeight: "250px", objectFit: "cover" }}
            />
          </div>
          
          {/* content */}
          <div className="col-12 col-md-8 col-sm-12 d-flex flex-wrap ps-md-3">
           
            <div className="col-12 col-sm-8 pe-sm-3">
              {/* date & time */}
              <div className="w-100 mb-3">
                <p className="fw-bold p-2 rounded-3 text-center d-flex justify-content-center align-items-center flex-wrap"
                  style={{
                    border: "2px solid #000",
                    fontSize: "clamp(0.8rem, 1.5vw, 1rem)"
                  }}>
                  <LuCalendarDays size={20} className="me-1" />
                  {item.duration}
                  <span className="mx-1">|</span>
                  {item.time}
                </p>
              </div>

              {/* title */}
              <h4 className="fw-bold mb-2" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
                {item.title}
              </h4>

              {/* location */}
              <p className="d-flex align-items-center mb-2">
                <IoLocationOutline size={20} className="me-2" />
                <span style={{ fontSize: "1.1rem" }}>
                  {item.location}
                </span>
              </p>

              {/* desc */}
              <p className="mb-3" style={{ fontSize: "1.13rem" }}>
                {item.desc}
              </p>
            </div>

            {/* date and btn */}
            <div className="col-12 col-sm-4 d-flex flex-sm-column align-items-center justify-content-center position-relative">
              {/* shows on sm+ screens */}
              <div className="d-none d-sm-block position-absolute start-0 h-100" 
                   style={{ width: "2px", backgroundColor: "rgba(0,0,0,0.5)" }}></div>
              
              {/* shows on xs screens */}
              <div className="d-block d-sm-none my-2">
                <hr style={{ borderTop: "2px solid rgba(0,0,0,0.5)" }} />
              </div>

              {/* date & btn */}
              <div className="d-flex flex-column align-items-center px-4">
                <div className="p-2 w-50 text-center mb-3 fw-bold text-white rounded"
                     style={{ 
                       background: "#65132A",
                     }}>
                  {item.date}
                </div>
                <Link 
                  to="/workshop-book/:id"  
                  state={{ workshop: item }} 
                  className="btn btn-outline-danger rounded-5 px-3 fw-bold"
                  style={{ fontSize: "1.1rem", whiteSpace: "nowrap" }}
                  onClick={handleClick}
                >
                  {item.btn}
                </Link>
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
