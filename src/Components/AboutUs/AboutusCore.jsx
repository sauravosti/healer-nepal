import React from "react";
//import { img } from "../../assets/IMG/abtexp.png"
import "../../assets/css/AboutImage.css"

const images = [
  {
    src: "https://images.unsplash.com/photo-1657708284169-7932f985f502?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FREEDOM",
    text: "We all deserve to pursue our unique gifts and deepest passions, free from worry about judgement, financial constraints, or outside pressures – to connect to our highest calling.",
  },
  {
    src: "https://images.unsplash.com/photo-1657708284169-7932f985f502?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FREEDOM",
    text: "We all deserve to pursue our unique gifts and deepest passions, free from worry about judgement, financial constraints, or outside pressures – to connect to our highest calling.",
  },
  {
    src: `url('src/assets/IMG/abtexp.png')`,
    title: "FREEDOM",
    text: "We all deserve to pursue our unique gifts and deepest passions, free from worry about judgement, financial constraints, or outside pressures – to connect to our highest calling.",
  },
  {
    src: "https://images.unsplash.com/photo-1657708284169-7932f985f502?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FREEDOM",
    text: "We all deserve to pursue our unique gifts and deepest passions, free from worry about judgement, financial constraints, or outside pressures – to connect to our highest calling.",
  },
  {
    src: "https://images.unsplash.com/photo-1657708284169-7932f985f502?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FREEDOM",
    text: "We all deserve to pursue our unique gifts and deepest passions, free from worry about judgement, financial constraints, or outside pressures – to connect to our highest calling.",
  },

];

const AboutusCore = () => {
  return (
    <div className="container mt-5">
        <h5 className="fs-3 fw-bold text-center py-5">Our Core Values</h5>
      <div className="image-gallery gap-2 col-lg-12 pb-5">
        {images.map((img, index) => (
          <div className="hover-panel border" key={index}>
            <img src={img.src} alt={`image-${index}`} className={index === 1 ? "blurred-image" : ""}/>
            {img.title && (
              <div className="hover-overlay">
                <h5 className="fw-bold p-2">{img.title}</h5>
                <p className="fs-6 p-2">{img.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutusCore;
