import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Banner } from "../Banner";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

const Blogs = () => {
  //dummy blogs data
  const blogs = [
    {
      id: 1,
      title: "The Complete Guide to Indoor Plant Care",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et quam tellus. Etiam imperdiet, sem eu aliquet vestibulum, orci lectus vestibulum risus, sed pulvinar lectus dui et ipsum. Aliquam rhoncus consectetur suscipit. Mauris in lectus efficitur, iaculis est eu, lobortis tellus. Nulla in ex sit amet tellus dictum consequat. Morbi eget dolor elementum ligula suscipit volutpat. Phasellus suscipit commodo ipsum gravida vehicula. Sed sollicitudin ut risus ut convallis. Suspendisse condimentum aliquam rhoncus. Sed massa lectus, luctus ut turpis id, imperdiet scelerisque eros. In vehicula, augue et eleifend pulvinar, magna lorem suscipit dolor, non molestie ante felis eu ante. Pellentesque consectetur bibendum tincidunt. Integer scelerisque erat id bibendum pulvinar.",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "The Complete Guide to Indoor Plant Care",
      content: "Learn how to keep your indoor plants thriving with our comprehensive guide. We cover watering schedules, light requirements...",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    },
    {
      id: 3,
      title: "Mindfulness Meditation: A Beginner's Journey",
      content: "Starting your mindfulness practice can be challenging. This post walks you through the first steps and common pitfalls to avoid...",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  //categories
  const categories = [
    { name: "Mind & Body Wellness", count: 69 },
    { name: "Spritual Growth & Guidance", count: 25 },
    { name: "Healing Practices", count: 13 },
    { name: "Offers", count: 37 },
    { name: "Events", count: 12 }

  ];

  return (
    <>
    <Banner />
    <div style={{background:" #FFF7F0", fontFamily:"Poppins"}}>
    <div className="container py-5">

      <div className="d-flex flex-column  justify-content-between align-items-center bg-success-light p-4 rounded mb-4">
        <h1 className=" d-flex justify-content-center">Explore all Featured Blogs</h1>
        <div className="w-100 w-md-auto">
          
        </div>
      </div>

      {/* main Concent */}
      <div className="d-flex flex-column flex-lg-row gap-4">
        {/* sidebar */}
        <div className="col-lg-3">

            {/* Search buttomn */}
        <div className="position-relative p-2 ">
            <input
              type="text"
              placeholder="Search blogs..."
              className="form-control form-control-lg rounded-pill bg-transparent"
              style={{border:"2px solid #65132A"}}
            />
          </div>

          {/* category list */}
          <div className=" p-4 rounded shadow-sm mb-4 bg-transparent">
            <h3 className=" mb-3 text-dark border-bottom fw-bold fs-5 pb-2">Category List</h3>
            <ul className="list-unstyled">
              {categories.map((category, index) => (
                <li key={index} className="d-flex justify-content-between align-items-center py-2 hover:bg-success-light rounded">
                  <Link to="#" className="text-dark text-decoration-none">{category.name}</Link>
                  <span className="badge rounded-5 text-light p-1"style={{background:"#65132A"}}>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* social media */}
           <div className="col-12 col-sm-16 col-md-6 mb-3">
           <h3 className="fs-5 fw-bold mb-3 text-dark pb-2">Follow Us</h3>
                  <div
                    className="d-flex align-items-center gap-2 fw-bold p-2"
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
        </div>

        {/* blogs posts */}
        <div className="col-lg-9">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {blogs.map((blog) => (
              <div className="col" key={blog.id}>
                <Link to="/blogs-detail" className="text-decoration-none">
                  <motion.div
                    className="bg-transparent rounded shadow-sm overflow-hidden h-100 d-flex flex-column"
                    initial="initial"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-100 h-100 object-cover transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex-grow-1">
                      <h3 className="h5 text-dark mb-2">{blog.title.length > 45 ? `${blog.title.substring(0, 45)}...` : blog.title}</h3>
                      <div className="d-flex align-items-center text-muted mb-3">
                      
                        {blog.date}
                      </div>
                      <p className="text-muted mb-4">{blog.content.length > 200 ? `${blog.content.substring(0, 200)}...` : blog.content}</p>
                      <div className="d-flex align-items-center">
                       <h6 className="w-100">Read More</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="10 0 150 24" stroke="currentColor">
                          <path strokeWidth={2} d="M30 5l10 7m0 0l-9 7m7-7H2" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </>
   
  );
};

export default Blogs;
