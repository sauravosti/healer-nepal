import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";

const WorkshopBookNow = () => {
  const location = useLocation();
  const person = location.state?.person || 1;

  const [transactionId, setTransactionId] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTransactionIdChange = (e) => {
    setTransactionId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file || !transactionId) {
      toast.error("Both transaction ID and file are required.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    toast.success("File uploaded successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setTransactionId("");
    setFile(null);
  };

  return (
    <>
      <div style={{ background: "#FFF7F0" }}>
        <div className="container pt-4" style={{ fontFamily: "Poppins" }}>
          <button
            onClick={() => navigate(-1)}
            className="btn p-2 d-flex align-items-center text-white"
            style={{ backgroundColor: "#65132A" }}
          >
            <IoArrowBack size={22} className="me-2" /> Back to Workshops
          </button>
          <div className="col">
            {/* QR code */}
            <div className="col-12 col-md-12 col-lg-12 d-flex justify-content-center">
              <img
                className="img-fluid mt-5"
                src="https://placehold.co/600x400"
                alt="QR Code"
                height="450px"
                style={{
                  border: "2px solid #65132A",
                }}
              />
            </div>

            {/* total: part */}
            <div className="d-flex col justify-content-center align-items-center ms-5 col-lg-12 flex-wrap">
            <div className=" mt-4 d-flex">
              <label
                htmlFor="text"
                className="form-label fs-5 me-2 mt-2 fw-bold"
              >
                Total Amount:
              </label>
              <input
                value="1000"
                type="number"
                className="form-control w-25 bg-transparent shadow-sm ps-1 pe-0 "
                style={{
                  border: "2px solid #65132A",
                }}
                disabled
              />
              </div>
              <div className="mt-4 d-flex">
                <label htmlFor="file" className="form-label fs-5 me-2 mt-2 fw-bold">
                  Total Person:
                </label>
                <input
                  value={person}
                  type="number"
                  className="form-control w-25 bg-transparent shadow-sm ps-1 pe-0"
                  style={{ border: "2px solid #65132A" }}
                  disabled
                />
              </div>
            </div>
            </div>
          
          {/* transaction ID & files upload */}
          <div className="row mt-4">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              {/* transaction ID */}
              <div className="mb-3 w-75">
                <label htmlFor="transactionId" className="form-label fs-5">
                  Transaction ID
                </label>
                <input
                  type="text"
                  style={{
                    border: "2px solid #65132A",
                  }}
                  className="form-control rounded-4 bg-transparent shadow-sm p-3"
                  id="transactionId"
                  value={transactionId}
                  onChange={handleTransactionIdChange}
                  placeholder="Enter Transaction ID*"
                />
                <p className="text-muted m-1">
                By proceeding, you agree to our payment policy.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center">
              {/* ss / files upload */}
              <div className="mb-3 w-75 ">
                <label htmlFor="file" className="form-label fs-5 ">
                  Upload File
                </label>
                <input
                  type="file"
                  style={{
                    border: "2px solid #65132A",
                  }}
                  className="form-control rounded-4 bg-transparent shadow-sm"
                  id="file"
                  onChange={handleFileChange}
                  accept="image/*,application/pdf,.docx,.xlsx"
                />
              </div>
            </div>
          </div>

          {/* submit btn */}
          <div className="d-flex justify-content-center">
            <motion.button
              className="btn text-white my-4 px-4 py-2"
              style={{ background: "#65132A" }}
              onClick={handleSubmit}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Book
            </motion.button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default WorkshopBookNow;
