import React from 'react'
import "../../assets/css/AboutImage.css"

const AboutusWeDo = () => {
  return (
    <>
    <div className='container'>
    <div class="row pt-5 mt-5 d-flex gap-5 pb-5 d-flex justify-content-around">
            <div className="col-lg-5 col-md-7 col-12 ">
              <div
                className="position-relative"
                style={{
                  height: "100%",
                  minHeight: "350px",
                }}
              >
                {/* image div */}
                <div
                  className="position-absolute img-div z-1 rounded-2"
                  style={{
                    top: "2%",
                    right: "10%",
                    height: "100%",
                    width: "80%",
                    backgroundImage: `url('src/assets/IMG/abt2.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px",
                  }}
                ></div>

                {/* bg div */}
                <div
                  className="position-absolute bg-div z-0"
                  style={{
                    background: "#370412",
                    top: "15%",
                    right: "0",
                    height: "100%",
                    width: "80%",
                  }}
                ></div>
              </div>
            </div>

            <div class="col col-lg-5 col-md-12 p-lg-2 p-md-0 col-12">
              <h5 className="text-start fs-3 fw-bold ms-3 mt-5">What we do for you?</h5>
              <p className="text-justify p-3 d-flex lh-2">
              We made the process of booking quality, expert holistic health 
              practitioners in massage therapy, reiki, acupuncture, yoga and 
              more simple—do it in moments right from your phone and enjoy your 
              service from the comfort of your home (or virtually) in as soon as 24 hours.
              </p>
              <ul className=''>
                <li>
                HSA and FSA accepted
                </li>
                <li>
                Perfect for your next event
                </li>
                <li>
                Certified True Healers all background and interviewed by us
                </li>
                <li>
                Endless choices for the same cost
                </li>
                <li>
                Safe and secure platform 
                </li>
                <li>
                Simple, convenient, personalized process
                </li>

              </ul>
            </div>
            
          </div>
    </div>
      
    </>
  )
}

export default AboutusWeDo
