import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { FaCheck } from "react-icons/fa";

const BookSession = () => {
  const [step, setStep] = useState(1);
  //steps for book-session
  const steps = ["Service", "Details", "Time", "Checkout", "Payment"];

  const [treatment, setTreatment] = useState("");

  const [fullName, setFullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const [countryCode, setCountryCode] = useState("+977");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  const [transactionId, setTransactionId] = useState("");
  const [file, setFile] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.includes("@"))
      return { valid: false, message: "Invalid Email Format" };
    if (email.split("@")[1]?.indexOf(".") === -1) {
      return { valid: false, message: "Invalid Email Format" };
    }
    const disposableDomains = [];
    const domain = email.split("@")[1];
    if (disposableDomains.some((d) => domain.includes(d))) {
      return { valid: false, message: "Invalid Email Format" };
    }

    return {
      valid: regex.test(email),
      message: regex.test(email) ? "" : "Invalid Email Format",
    };
  };

  const handleChange = (e) => {
    const value = e.target.value.trim();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
    setEmail(value);

    // mail validation that only show errors after first interaction
    if (isTouched || value.length > 5) {
      const { valid, message } = validateEmail(value);
      setError(valid ? "" : message);
    }
  };

  const handleBlur = () => {
    setIsTouched(true);
    const { valid, message } = validateEmail(email);
    setError(valid ? "" : message);
  };

  // helper functions for case 3
  const handlePrevWeek = () => {
    const prevWeek = new Date(currentWeekStart);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setCurrentWeekStart(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentWeekStart);
    nextWeek.setDate(nextWeek.getDate() + 14);
    setCurrentWeekStart(nextWeek);
  };

  const getWeekDays = (startDate) => {
    const days = [];
    for (let i = 0; i < 14; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      days.push({
        date,
        dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
      });
    }
    return days;
  };

  const weekDays = getWeekDays(currentWeekStart);
  const currentMonthYear = currentWeekStart.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // available times for case 3
  const availableTimes = [
    "9:00 - 10:00 AM",
    "10:00 - 11:00 AM",
    "11:00 - 12:00 PM",
    "1:00 - 2:00 PM",
    "2:00 - 3:00 PM",
    "3:00 - 4:00 PM",
    "4:00 - 5:00 PM",
  ];

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmBooking = () => {
    if (!transactionId && !file) {
      toast.error("Please provide either transaction ID or upload payment proof");
      return;
    }

    // handling booking confirmation btn
    console.log("booking confirmation detaills:", {
      treatment,
      personalDetails: { fullName, lastName, age },
      addressDetails: { country, address },
      contact: { countryCode, phoneNumber, email },
      appointment: { date: selectedDate, time: selectedTime },
      payment: { transactionId, file: file?.name },
    });
    toast.success("Booking confirmed successfully!");
  };
  const treatments = [
    "Workshop & Special Events",
    "Healing Sessions",
    "Intuitive Readings",
  ];

  const nextStep = () => {
    if (step === 1 && !treatment) {
      toast("Please select a Treatment");
      return;
    }
    if (
      step === 2 &&
      (!fullName || !lastName || !age || !country || !address || !phoneNumber || !email)
    ) {
      toast("Please fill out your Personal Details");
      return;
    }
    if (step === 3 && (!selectedDate || !selectedTime)) {
      toast("Please select an appointment date and time");
      return;
    }
    setStep((prev) => (prev < 5 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTransactionIdChange = (e) => {
    setTransactionId(e.target.value);
  };

  const renderStepContent = () => {
    switch (step) {

      //service select
      case 1:
        return (
          <div>
            <h4 className="fw-bold p-3">Please Select Service:</h4>
            <div className="mt-3 p-3">
              <label className="fw-bold pb-3 fs-5">Treatment</label>
              <select
                className="form-control h-100 p-3"
                style={{
                  border: "2px solid #000000B2",
                  background: "transparent",
                }}
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
              >
                <option value="" disabled selected>
                  Select a treatment
                </option>
                {treatments.map((treat, index) => (
                  <option
                    style={{ background: "#E9E9E9" }}
                    key={index}
                    value={treat}
                  >
                    {treat}
                  </option>
                ))}
              </select>

              <small className="text-muted">
                By submitting this form you are agreeing to our privacy policy
              </small>
            </div>
          </div>
        );

        //details
      case 2:
        return (
          <div className="container-fluid px-3 personal-details">
            {/* personal details */}
            <h4 className="fw-bold mb-3">Your Personal Details:</h4>
            <div className="row g-3 mb-4">
              <div></div>
              <div className="col-12 col-lg-6 col-md-12">
                <input
                  type="text"
                  className="form-control p-4"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    border: "2px solid #000000B2",
                    background: "transparent",
                  }}
                />
              </div>
              <div className="col-12 col-lg-6 col-md-12">
                <input
                  type="text"
                  className="form-control form-control p-4"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{
                    border: "2px solid #000000B2",
                    background: "transparent",
                  }}
                />
              </div>
              <div className="col-12 col-lg-6 col-md-12">
                <input
                  type="number"
                  className="form-control form-control p-4"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  style={{
                    border: "2px solid #000000B2",
                    background: "transparent",
                  }}
                />
              </div>
            </div>

            {/* residential adddress */}
            <h5 className="fw-bold mb-4">Your Residential Address</h5>
            <div className="row g-3 mb-4">
              <div className="col-12 col-lg-6 col-md-12">
                <select
                  className="form-select pb-3 pt-2"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  style={{
                    border: "2px solid #000000B2",
                    background: "transparent",
                  }}
                >
                  <option value="" disabled>
                    Country
                  </option>
                  <option value="USA">USA</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              <div className="col-12 col-lg-6 col-md-12">
                <input
                  type="text"
                  className="form-control form-control p-4"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{
                    border: "2px solid #000000B2",
                    background: "transparent",
                  }}
                />
              </div>
            </div>

            {/* contact form */}
            <h5 className="fw-bold mb-4">Contact</h5>
            <div className="row g-3 mb-4">
              <div className="col-12 col-lg-6 col-md-12 col-lg-2">
                <input
                  type="text"
                  className="form-control form-control p-4"
                  placeholder="+977"
                  disabled
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  style={{
                    border: "2px solid #000000B2",
                    background: "transparent",
                  }}
                />
              </div>
              <div className="col-12 col-lg-6 col-md-12 col-lg-4">
                <input
                  type="tel"
                  className="form-control form-control p-4"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{
                    border: "2px solid #000000B2",
                    background: "transparent",
                  }}
                />
              </div>
              <div className="col-12 col-lg-6 col-md-12 col-lg-6">
                <input
                  type="email"
                  className={`form-control p-4 ${
                    error ? "is-invalid" : isTouched && email ? "is-valid" : ""
                  }`}
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    border: `2px solid ${
                      error
                        ? "#dc3545"
                        : isTouched && email
                        ? "#28a745"
                        : "#000000B2"
                    }`,
                    background: "transparent",
                  }}
                />
                {error && <div className="invalid-feedback">{error}</div>}
              </div>
            </div>
          </div>
        );

        // appoinment time
      case 3:
        return (
          <div>
            <h4 className="fw-bold p-3">Select Appointment Time:</h4>
            <div className="shadow-sm rounded-4 p-3">
              {/* week navigation */}
              <div className="d-flex justify-content-between mb-2">
                <button
                  className="btn border shadow-sm fw-bold"
                  onClick={handlePrevWeek}
                >
                  &lt;
                </button>
                <span className="fw-bold fs-5 text-center">
                  {currentMonthYear}
                </span>
                <button
                  className="btn border shadow-sm fw-bold"
                  onClick={handleNextWeek}
                >
                  &gt;
                </button>
              </div>

              {/* days&week days */}
              <div className="d-flex justify-content-center row ">
                {weekDays.map((day, index) => (
                  <motion.div
                    key={index}
                    className={`text-center col-4 col-sm-3 col-xl-1 col-lg-2 col-md-2 border shadow-sm p-1 fw-bold rounded m-4 justify-content-center`}
                    onClick={() => setSelectedDate(day.date)}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedDate &&
                        selectedDate.getTime() === day.date.getTime()
                          ? "#65132A"
                          : "#ffffff",
                      color:
                        selectedDate &&
                        selectedDate.getTime() === day.date.getTime()
                          ? "white"
                          : "black",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="pb-2"> {day.dayName} </div>
                    <div className="fw-bold"> {day.date.getDate()} </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* available slots */}
            {selectedDate && (
              <div className="m-3 m-md-4">
                <h5 className="fw-bold mb-3 fs-4">Available Slots</h5>
                <div className="d-flex flex-column gap-3">
                  {availableTimes.map((time, index) => (
                    <div
                      key={index}
                      className="d-flex flex-column flex-md-row shadow-sm p-3 justify-content-between align-items-center fw-bold w-100"
                      style={{
                        fontFamily: "Poppins",
                        borderRadius: "8px",
                        boxSizing: "border-box",
                        border: "2px solid #E9E9E9",
                      }}
                      onClick={() => handleTimeSelect(time)}
                    >
                      <span className="mb-2 mb-md-0">{time}</span>
                      <span className="mb-2 mb-md-0">6 Slots Available</span>
                      <motion.button
                        className={`btn px-4 py-2 rounded-5`}
                        style={{
                          background: "transparent",
                          border: "2px solid #65132A",
                          minWidth: "100px",
                          backgroundColor:
                            selectedTime === time ? "#65132A" : "#ffffff",
                          color: selectedTime === time ? "white" : "black",
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.99 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTimeSelect(time);
                        }}
                      >
                        Select
                      </motion.button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      case 4:
        return (
          <div
            className="container-fluid px-3 px-sm-4 py-4 "
            style={{ fontFamily: "Poppins" }}
          >
            <h5 className="fw-bold mb-4">Full Details</h5>

            {/* service */}
            <div className="">
            <div className="mb-4">
              <h6 className="fs-5 fw-bold mb-3">Service</h6>
              <div className="row g-3">
                <div className="col-12">
                  <label className="fs-5 mb-2 d-block">Treatment</label>
                  <div
                    className="p-3 rounded"
                    style={{
                      border: "1px solid #000000",
                      minHeight: "48px",
                    }}
                  >
                    {treatment || "Not selected"}
                  </div>
                </div>
              </div>
            </div>

            {/* personal details */}
            <div className="mb-4">
              <h6 className="fs-5 fw-bold mb-3">Personal Details</h6>
              <div className="row g-3">
                {[
                  { label: "First Name", value: fullName },
                  { label: "Last Name", value: lastName },
                  { label: "Age", value: age },
                ].map(({ label, value }, idx) => (
                  <div className="col-12 col-sm-6" key={idx}>
                    <label className="fs-5 mb-2 d-block">{label}</label>
                    <div
                      className="p-3 rounded"
                      style={{
                        border: "1px solid #000000",
                        minHeight: "48px",
                      }}
                    >
                      {value || "Not provided"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* address */}
            <div className="mb-4">
              <h6 className="fs-5 mb-3 fw-bold">Address</h6>
              <div className="row d-flex g-3">
                <div className="col-12 col-sm-6">
                  <label className="fs-5 mb-2 d-block">Country</label>
                  <div
                    className="p-3 rounded"
                    style={{
                      border: "1px solid #000000",
                      minHeight: "48px",
                    }}
                  >
                    {country || "Not selected"}
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <label className="fs-5 mb-2 d-block">Address</label>
                  <div
                    className="p-3 rounded"
                    style={{
                      border: "1px solid #000000",
                      minHeight: "48px",
                    }}
                  >
                    {address || "Not provided"}
                  </div>
                </div>
              </div>
            </div>

            {/* contact infos */}
            <div className="mb-4">
              <h6 className="fs-5 mb-3 fw-bold">Contact Information</h6>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <label className=" mb-2 d-block fs-5">Phone Number</label>
                  <div
                    className="p-3 rounded"
                    style={{
                      border: "1px solid #000000",
                      minHeight: "48px",
                    }}
                  >
                    {phoneNumber
                      ? `+${countryCode} ${phoneNumber}`
                      : "Not provided"}
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <label className=" mb-2 d-block fs-5">Email</label>
                  <div
                    className="p-3 rounded"
                    style={{
                      border: "1px solid #000000",
                      minHeight: "48px",
                    }}
                  >
                    {email || "Not provided"}
                  </div>
                </div>
              </div>
            </div>

            {/* date&time appointment details */}
            <div className="mb-4">
              <h6 className="fs-5 mb-3 fw-bold">Appointment Details</h6>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <label className="fs-5 mb-2 d-block">Date</label>
                  <div
                    className="p-3 rounded"
                    style={{
                      border: "1px solid #000000",
                      minHeight: "48px",
                      backgroundColor: "transparent",
                    }}
                  >
                    {selectedDate
                      ? selectedDate.toLocaleDateString()
                      : "Not selected"}
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <label className="fs-5 mb-2 d-block">Time</label>
                  <div
                    className="p-3 rounded"
                    style={{
                      border: "1px solid #000000",
                      minHeight: "48px",
                      backgroundColor: "transparent",
                    }}
                  >
                    {selectedTime || "Not selected"}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
          <div className="container pt-4" style={{ fontFamily: "Poppins" }}>
            <div className="row">
              <div className="col-12">
                <h2 className="fw-bold text-center text-md-start">Payment</h2>
        
                {/* QR code */}
                <div className="d-flex justify-content-center mt-4">
                  <img
                    className="img-fluid"
                    src="https://placehold.co/600x400"
                    alt="QR Code"
                    style={{
                      border: "2px solid #65132A",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
        
                {/* Total Amount & Person */}
                <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
                  <div className="d-flex flex-column flex-sm-row align-items-center gap-2">
                    <label className="form-label fs-5 fw-bold mb-0">Total Amount:</label>
                    <input
                      value="1000"
                      type="number"
                      className="form-control bg-transparent shadow-sm"
                      style={{ border: "2px solid #65132A", maxWidth: "150px" }}
                      disabled
                    />
                  </div>
                </div>
        
                {/* Transaction ID & Upload */}
                <div className="row mt-5">
                  <div className="col-12 col-lg-6 col-md-12 d-flex justify-content-center">
                    <div className="w-100 px-0 px-md-0" style={{ maxWidth: "400px" }}>
                      <label htmlFor="transactionId" className="form-label fs-5">
                        Transaction ID
                      </label>
                      <input
                        type="text"
                        style={{ border: "2px solid #65132A" }}
                        className="form-control rounded-4 bg-transparent shadow-sm p-3"
                        id="transactionId"
                        value={transactionId}
                        onChange={handleTransactionIdChange}
                        placeholder="Enter Transaction ID*"
                      />
                      <p className="text-muted m-1 small">
                        By proceeding, you agree to our payment policy.
                      </p>
                    </div>
                  </div>
        
                  <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-center">
                    <div className="w-100 px-0 px-md-0" style={{ maxWidth: "400px" }}>
                      <label htmlFor="file" className="form-label fs-5">
                        Upload File
                      </label>
                      <input
                        type="file"
                        style={{ border: "2px solid #65132A" }}
                        className="form-control rounded-4 bg-transparent shadow-sm"
                        id="file"
                        onChange={handleFileChange}
                        accept="image/*,application/pdf,.docx,.xlsx"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        );
      default:
        return <p>default case</p>;
    }
  };

  return (
    <div style={{ background: "#FFF7F0" }}>
    <div className="container container-fluid pt-4" style={{ fontFamily: "Poppins" }}>
      <div className="row justify-content-center">
        {/* sidebar */}
        <div className="col-md-4 d-none d-md-block p-4 rounded-start"
          style={{ background: "#65132A99" }} >
          <h4 className="fs-2 text-dark p-4">Logo</h4>
          <h4 className="text-dark fw-bold p-4">Book Appointment</h4>
  
          <ul className="list-unstyled mt-4 p-4">
            {steps.map((item, index) => (
              <motion.li
                key={index}
                className="d-flex gap-3 align-items-start"
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: step === index + 1 ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex flex-column align-items-center position-relative">
                  {/* item steps circles */}
                  <motion.span
                    className="rounded-circle d-flex justify-content-center align-items-center fw-bold m-1"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor:
                        step === index + 1
                          ? "#8A3E4A"
                          : step > index + 1
                          ? "#65132A"
                          : "#ffffff",
                      color:
                        step === index + 1 || step > index + 1
                          ? "white"
                          : "black",
                      zIndex: 2,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step > index + 1 ? (
                      <FaCheck size={15} color="white" />
                    ) : (
                      index + 1
                    )}
                  </motion.span>
  
                  {/* vertical Line */}
                  {index !== steps.length - 1 && (
                    <span
                      style={{
                        width: "4px",
                        height: "12vh",
                        backgroundColor:
                          step > index + 1 ? "#65132A" : "#ffffff",
                      }}
                    ></span>
                  )}
                </div>
                {/* Step Label */}
                <motion.span
                  className={`fw-bold fs-5 mt-2 ${
                    step === index + 1 ? "text-custom" : "text-muted"
                  }`}
                >
                  {item}
                </motion.span>
              </motion.li>
            ))}
          </ul>
        </div>
  
        {/* horizontal sidebar for mobile screens */}
        <div className="d-block d-md-none p-1 rounded mb-3" style={{ background: "#8A3E4A66" }}>
          <div className=" mb-2 d-flex justify-content-around pt-2 pb-3">
            <h5 className="fw-bold">Logo</h5>
            <h5 className="fw-bold">Book Appointment</h5>
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-1">
            {steps.map((item, index) => (
              <div key={index} className="d-flex align-items-center gap-1 mb-2">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center fw-bold"
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor:
                      step === index + 1
                        ? "#8A3E4A"
                        : step > index + 1
                        ? "#65132A"
                        : "#ffffff",
                    color:
                      step === index + 1 || step > index + 1
                        ? "white"
                        : "black",
                  }}
                >
                  {step > index + 1 ? (
                    <FaCheck size={15} color="white" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={`fw-bold ${
                    step === index + 1 ? "text-custom" : "text-muted"
                  }`}
                  style={{ fontSize: "14px" }}
                >
                  {item}
                </span>
                {index !== steps.length - 1 && (
                  <div
                    style={{
                      width: "20px",
                      height: "2px",
                      backgroundColor:
                        step > index + 1 ? "#65132A" : "#ffffff",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-8 p-3 p-md-5 rounded-end" style={{ background: "#E9E9E9" }}>
          {renderStepContent()}
  
          {/* prev&confirm buttons */}
          <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 mt-4">
            <button
              className="rounded-5 py-2 px-4 btn btn-outline-light fw-bold"
              style={{
                border:"2px solid #000000",
                color:"#65132A"
              }}
              onClick={prevStep}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              className="rounded-5 py-2 px-4 btn fw-bold"
              style={{ background: "#65132A", color: "white" }}
              onClick={() => {
                if (step === 5) {
                  handleConfirmBooking();
                  console.log("booked");
                } else {
                  nextStep();
                  console.log("next");
                }
              }}
            >
              {step === 5 ? "Confirm" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  
    <ToastContainer />
  </div>
  
  );
};

export default BookSession;
