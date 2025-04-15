import { React } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Events from "./Components/Session Events/Events";
import BookSession from "./Components/Session Events/BookSession";
import Contact from "./Components/Connect/Contact";
import Blogs from "./Components/Blogs/Blogs";
import Blogsdetail from "./Components/Blogs/Blogsdetail";
import Aboutus from "./Components/AboutUs/Aboutus";
import WorkshopBook from "./Components/Session Events/WorkshopBook";
import WorkshopBookNow from "./Components/Session Events/WorkshopBookNow";
import UserProfile from "./Components/User Profile/UserProfile";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>} />
        </Route>

        {/* events & booking router */}
        <Route>
          <Route path="/events" element={<Events />} />
          <Route path="/book-session" element={<BookSession />} />
          <Route path="/workshop-book/:id" element={<WorkshopBook />} />
          <Route path="/workshop-book-now" element={<WorkshopBookNow />} />
        </Route>

        {/* contact router */}
        <Route>
          <Route path="contact-us" element={<Contact />} />
        </Route>

        {/* blogs router */}
        <Route path="/blogs">
          <Route index element={<Blogs />} />
          <Route path="/blogs-detail" element={<Blogsdetail />} />
        </Route>

        {/* about-us router */}
        <Route>
          <Route path="/about-us" element={<Aboutus />} />
        </Route>

        {/* profile-icon in navbar router */}
        <Route>
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
