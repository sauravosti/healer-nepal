import React from "react";
import { Banner } from "../Banner";
import AboutusCore from "./AboutusCore";
import AboutusWeDo from "./AboutusWeDo";
//import { img } from "../../assets/IMG/abtexp.png"

const Aboutus = () => {
  return (
    <>
      <div
        className="pb-5"
        style={{
          fontFamily: "Poppins",
          background: "#FFF7F0",
        }}
      >
        <Banner pageTitle="About Us" />

        <div className="container">
          <div class="row mt-5 d-flex gap-5">
            <div className="col-lg-5 col-md-10 col-12">
              <div
                className="position-relative"
                style={{
                  height: "100%",
                  minHeight: "350px",
                }}
              >
                {/* image div */}
                <div
                  className="position-absolute img-div z-1"
                  style={{
                    top: "2%",
                    right: "10%",
                    height: "90%",
                    width: "80%",
                    backgroundImage: `url('src/assets/IMG/abtexp.png')`,
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
                    top: "8%",
                    right: "0",
                    height: "90%",
                    width: "80%",
                  }}
                ></div>

                {/* experience div */}
                <div
                  className="position-absolute text-white d-flex flex-column justify-content-center align-items-center z-3 border-bottom-0 border-right-0"
                  style={{
                    bottom: "2%",
                    right: "0%",
                    background: "#65132A",
                    border: "6px solid white",
                    width: "180px",
                    height: "120px",
                    borderRadius: "0px",
                  }}
                >
                  <h2 className="fw-bold m-2" style={{ fontSize: "2rem" }}>
                    30+
                  </h2>
                  <p className="m-0 text-center" style={{ fontSize: "1rem" }}>
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>

            <div class="col col-lg-6 col-md-10 col-12">
              <h5 className="text-start fs-3 fw-bold">Our Story</h5>
              <p className="text-justify d-flex lh-2">
                Osho Tapoban is dedicated towards sharing the vision of the
                enlightened mystic Osho. It stands for all that is life
                affirmative and elevating. With meditation and soul seeking at
                its heart, we here at Tapoban are committed to creating a space
                where seekers from all over the world regardless of their
                nationality, religion, gender and ethnicity can feel at home and
                glide ahead in their pursuit for wellbeing. With a dedicated
                team of seasoned and compassionate yogis, sadhakas, sannyasins
                and therapists who are led and guided by Swami Anand Arun,
                we, here at Tapoban are keen on providing you the best courses of
                meditation, yoga, and meditative therapies that can help you
                delve deeper into yourself. What if there was a platform for
                healers that provided encouragement, fair pay, and professional
                treatment from clients?
              </p>
            </div>
          </div>
          <div class="row mt-5 d-flex gap-5">
            <div class="col col-lg-6 col-md-10 col-12">
              <p className="text-justify d-flex lh-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
                tellus lacinia nibh pretium posuere tincidunt cursus ligula. Sed
                vitae ornare lectus, et dictum lorem. Sed nec pellentesque sem.
                Sed egestas luctus ullamcorper. Aliquam dictum nulla sit amet
                tellus scelerisque, vulputate convallis metus sollicitudin.
                Donec ac convallis leo. Quisque non ex efficitur, condimentum
                enim imperdiet, maximus ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
                tellus lacinia nibh pretium posuere tincidunt cursus ligula. Sed
                vitae ornare lectus, et dictum lorem. Sed nec pellentesque sem.
                Sed egestas luctus ullamcorper. Aliquam dictum nulla sit amet
                tellus scelerisque, vulputate convallis metus sollicitudin.
                Donec ac convallis leo. Quisque non ex efficitur, condimentum
                enim imperdiet, maximus ante.
              </p>
            </div>

            <div className="col-lg-5 col-md-9 col-12">
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
                    right: "5%",
                    height: "90%",
                    width: "80%",
                    backgroundImage: `url('src/assets/IMG/abt2.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* bg div */}
                <div
                  className="position-absolute bg-div z-0"
                  style={{
                    background: "#370412",
                    top: "15%",
                    right: "12%",
                    height: "90%",
                    width: "80%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5" style={{ background: "#F5EBE0" }}>
          <AboutusCore />
        </div>
        <AboutusWeDo />
      </div>
    </>
  );
};

export default Aboutus;
