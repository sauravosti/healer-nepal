import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const BookSession = () => {
  const [treatment, setTreatment] = useState("");
 // const [healer, setHealer] = useState("Rajesh Hamal");

  const treatments = ["Workshop & Special Events", "Healing Sessions", "Intutive Readings"];

  const handleNext = () => {
    if (!treatment) {
      alert("Please select a treatment");
      return;
    }
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page
  };

  return (
    <div className="d-flex container justify-content-center m-5">
      <div className="col col-lg-3 col-md-3 col-sm-6 text-light p-4 rounded-4"
      style={{
        background:"#65132A"
      }}>
        <h4 className="fs-2">Logo</h4>
        <h5 className="mt-4">Book Appointment</h5>
        <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <span className="bg-light text-dark rounded-circle d-flex justify-content-center align-items-center me-2"
               style={{ width: "30px", height: "30px" }}>
                1
                </span>
              <span className="fw-bold">Service</span>
            </li>
            <li className="d-flex align-items-center mb-3 ">
              <span className="bg-light text-dark rounded-circle d-flex justify-content-center align-items-center me-2" style={{ width: "30px", height: "30px" }}>2</span>
              <span>Details</span>
            </li>
            <li className="d-flex align-items-center mb-3 ">
              <span className="bg-light text-dark rounded-circle d-flex justify-content-center align-items-center me-2" style={{ width: "30px", height: "30px" }}>3</span>
              <span>Time</span>
            </li>
            <li className="d-flex align-items-center ">
              <span className="bg-light text-dark rounded-circle d-flex justify-content-center align-items-center me-2" style={{ width: "30px", height: "30px" }}>4</span>
              <span>Checkout</span>
            </li>
          </ul>
      </div>
      <div className="p-5 rounded"
      style={{
        background:"#E9E9E9"
      }}>
        <h5 className="fw-bold">Please Select Service:</h5>
        <div className="mt-3">
          <label className="fw-bold p-2">Treatment</label>
          <select className="form-control" value={treatment} onChange={(e) => setTreatment(e.target.value)}>
            <option className="" value="">Select Treatment</option>
            {treatments.map((treat, index) => (
              <option key={index} value={treat}>{treat}</option>
            ))}
          </select>
        </div>
        {/* <div className="mt-3">
          <label className="fw-bold">Healer</label>
          <select className="form-control" value={healer} onChange={(e) => setHealer(e.target.value)}>
            {healers.map((heal, index) => (
              <option key={index} value={heal}>{heal}</option>
            ))}
          </select>
        </div> */}
        <p className="text-muted m-2">By submitting this form you are agreeing to our privacy policy</p>
        <div className="d-flex justify-content-between mt-5">
          <button className="btn btn-outline-dark"  onClick={handleBack}>Cancel</button>
          <button className="btn btn-dark" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default BookSession;

