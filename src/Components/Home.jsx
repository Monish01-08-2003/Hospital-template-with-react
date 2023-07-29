import React from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Home() {
  const redirectdocpage = useNavigate();
  AOS.init();
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
  function navtodoc() {
    redirectdocpage("/DoctorProfile");
  }

  return (
    <>
      <div className="backgroundHome">
        <p className="h1 heading">Leading the Way in Healthcare Excellence</p>
      </div>

      {/* <div className=" "style={{
        backgroundColor:"#d4e1f1"
      }}> */}
      <div className="Services" >
      <div className="" > 
        <h2 className="text-center "  data-aos="fade-up" data-aos-duration="1000">
        More than just treating patients.
        </h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper slider"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <SwiperSlide>
            <img
              src="Images/happy-nurse-holding-elderly-man-hand-wheelchair-garden-nursing-home.jpg"
              alt=""
              style={{ height: "30rem", width: "50rem" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/closeup-support-hands.jpg"
              alt=""
              style={{ height: "30rem", width: "50rem" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="Images/social-assistant-worker-consoling-handicapped-pensioner-patient-touching-hands.jpg"
              alt=""
              style={{height: "30rem", width: "50rem" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="Images/happy-senior-man-handshaking-wit.jpg"
              alt=""
              style={{height: "30rem", width: "50rem"}}
            />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
      <div className="Services " data-aos="fade-up" data-aos-duration="1000">
        <h2>Explore our Centres of Clinical Excellence</h2>

        <div classNameName="sarvicewholecard ">
          <div className="row">
            <div className="col-sm-3 servicecard">
              <div
                className="row"
                data-aos="flip-right"
                data-aos-duration="2000"
              >
                <div className="col-md-3 whyussubcard ">
                  <img src="/Images/skin.png" alt="" className="whyuslogo " />
                </div>
                <div className="col-md-1 text-center servicetxt">
                  <h4>urology</h4>
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 servicecard"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="row">
                <div className="col-md-3 whyussubcard ">
                  <img src="../Images/head.png" alt="" className="logo" />
                </div>
                <div className="col-md-1 text-center servicetxt">
                  <h4>ENT</h4>
                </div>
              </div>
            </div>

            <div
              className="col-sm-3 servicecard"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="row">
                <div className="col-md-3 whyussubcard ">
                  <img src="/Images/irritation.png" alt="" className="logo" />
                </div>
                <div className="col-md-3 text-center servicetxt">
                  <h4>Dermatology</h4>
                </div>
              </div>
            </div>

            <div
              className="col-sm-3  servicecard"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="row">
                <div className="col-md-3 whyussubcard ">
                  <img src="/Images/heart.png" alt="" className="logo" />
                </div>
                <div className="col-md-1 text-center servicetxt">
                  <h4>cardiology</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sarvicewholecard ">
          <div className="row">
            <div
              className="col-sm-3 servicecard  "
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="row">
                <div className="col-md-3 whyussubcard ">
                  <img src="/Images/neurology.png" alt="" className="logo" />
                </div>
                <div className="col-md-3 text-center servicetxt">
                  <h4>Neurology</h4>
                </div>
              </div>
            </div>

            <div
              className="col-sm-3 servicecard"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="row">
                <div className="col-md-3 whyussubcard ">
                  <img src="/Images/stomach (1).png" alt="" className="logo" />
                </div>
                <div className="col-md-3 text-center servicetxt">
                  <h4>Gastrologist</h4>
                </div>
              </div>
            </div>

            <div
              className="col-sm-3 servicecard"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="row">
                <div className="col-md-3 whyussubcard ">
                  <img src="./Images/arthritis.png" alt="" className="logo" />
                </div>
                <div className="col-md-3 text-center servicetxt">
                  <h4>Orthopedic</h4>
                </div>
              </div>
            </div>

            <div
              className="col-sm-3 servicecard"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="row">
                <div className="col-md-3 whyussubcard ">
                  <img src="/Images/teeth.png" alt="" className="logo" />
                </div>
                <div className="col-md-3 text-center servicetxt">
                  <h4>Dental</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Doctors" data-aos="fade-up" data-aos-duration="1000">
        <h3 className="docheading">OurSpecialists</h3>

        <div className="row">
          <div
            className="col-md-1 doctorcard "
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="row">
              <img
                src="/Images/doctor1.png"
                alt=""
                className="doctorimg card-img-top col-md-6"
              />
              <div className="col-md-6" style={{ marginTop: "30px" }}>
                <h5 className="docname">Dr.P.Subramani</h5>
                <p>Chief Doctor</p>
              </div>
            </div>

            <p>
              About Dr. Subramani: <br /> Dr. Subramani is a dedicated and
              compassionate internal medicine specialist with 5 years of
              experience in providing comprehensive healthcare to adult
              patients.
            </p>

            <button className="btn btn-sm btncollapse" onClick={navtodoc}>
              Read more
            </button>
          </div>
          <div
            className="col-md-1 doctorcard"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="row">
              <img
                src="/Images/doctor1.png"
                alt=""
                className="doctorimg card-img-top col-md-6"
              />
              <div className="col-md-6" style={{ marginTop: "30px" }}>
                <h5 className="docname">Dr.P.Subramani</h5>
                <p>Chief Doctor</p>
              </div>
            </div>
            <p>
              About Dr. Kishore: <br /> Dr. Subramani is a dedicated and
              compassionate internal medicine specialist with 5 years of
              experience in providing comprehensive healthcare to adult
              patients.
            </p>
            <button className="btn btn-sm btncollapse" onClick={navtodoc}>
              Read more
            </button>
          </div>
          <div
            className="col-md-1 doctorcard"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="row">
              <img
                src="/Images/doctor1.png"
                alt=""
                className="doctorimg card-img-top col-md-6"
              />
              <div className="col-md-6" style={{ marginTop: "30px" }}>
                <h5 className="docname">Dr.P.Manikandan</h5>
                <p>Chief Doctor</p>
              </div>
            </div>
            <p>
              About Dr. Robecca: <br /> Dr. Subramani is a dedicated and
              compassionate internal medicine specialist with 5 years of
              experience in providing comprehensive healthcare to adult
              patients.
            </p>
            <button className="btn btn-sm btncollapse" onClick={navtodoc}>
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className=" whychoseus" data-aos="fade-up" data-aos-duration="1000">
        <div className="row ">
          <div className="col-md-4 uscard1 ">
            <div className=" ">
              <h2>Why choose Us?</h2>
              <p>
                First and foremost, we take immense pride in providing
                high-quality medical care. Our experienced and skilled staff,
                including doctors, nurses,specialists, and support personnel,
                are dedicated to delivering the best possible treatment to every
                patient.
              </p>
              <div className="row">
                <div className="col-md-2  ">
                  <a href="/">
                    <img
                      src="/Images/hospital.png"
                      alt=""
                      srcset=""
                      className="whyuslogo"
                    />
                  </a>
                </div>
                <div
                  className="col-md-2 whyustext "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <h4 style={{ color: "rgb(0, 124, 157)" }}>
                    70+ <br /> Hospitals
                  </h4>
                </div>

                <div className="col-md-2 whyussubcard  ">
                  <img
                    src="/Images/medical-team.png"
                    alt=""
                    srcset=""
                    className="whyuslogo"
                  />
                </div>
                <div
                  className="col-md-2 whyustext "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <h4 style={{ color: "rgb(0, 124, 157)" }}>
                    50+ <br />
                    Doctors
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2  ">
                  <img
                    src="/Images/syringe.png"
                    alt=""
                    srcset=""
                    className="whyuslogo"
                  />
                </div>
                <div
                  className="col-md-2 whyustext "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <h4 style={{ color: "rgb(0, 124, 157)" }}>
                    70+ <br />
                    Pharmacies
                  </h4>
                </div>
                <div className="col-md-2 whyussubcard ">
                  <img
                    src="/Images/ambulance.png"
                    alt=""
                    srcset=""
                    className="whyuslogo"
                  />
                </div>
                <div
                  className="col-md-2 whyustext "
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <h4 style={{ color: "rgb(0, 124, 157)" }}>
                    30+ <br />
                    Emergency Services
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 uscard1">
            <img
              src="/Images/happy-senior-man-handshaking-wit.jpg"
              className="whyusimg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className="Hospitalfeature"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row">
          <div
            className="col-md-5 featurealign"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src="/Images/young-handsome-physician-medical-robe-with-stethoscope.jpg"
              alt=""
              className="Hospitalfeatureimg "
            />
          </div>
          <div
            className="col-md-5 hospitalfeaturetxt featurealign"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h3>Hospital Testimonials</h3>
            <p className=" ">
              " I recently had the privilege of experiencing the outstanding
              care at JK Hospitals, and I am compelled to share my truly
              remarkable experience. From the moment I stepped into the
              hospital, I knew I was in capable hands, and my stay at JK
              Hospitals proved to be a journey to recovery filled with
              compassion and unwavering support. The team of doctors at JK
              Hospitals is a testament to the highest standards of healthcare.
              They demonstrated a level of expertise that instilled confidence
              and trust in their abilities. Their collaborative approach to my
              medical needs ensured that I received comprehensive and
              well-rounded care."
            </p>
            <img
              src="/Images/five-stars.png"
              alt=""
              srcset=""
              className="testimonialimg"
            />
            <p>Patients</p>
          </div>
        </div>
      </div>
      <div className="Testimonials" data-aos="fade-up" data-aos-duration="1000">
        <h2>Patient Testimonials</h2>
        <div className="row testmonialborder container">
          <div
            className="col-md-2 testtimonialtext"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p>
              "I recently had an incredible experience at JK Hospital, and I
              must say, their team of doctors is simply exceptional! "
            </p>
            <img
              src="/Images/five-stars.png"
              alt=""
              srcset=""
              className="testimonialimg"
            />
            <h4>T.Gowtham</h4>
            <p>Patient</p>
          </div>
          <div
            className="col-md-2 testtimonialtext"
            data-aos="fade-top"
            data-aos-duration="2000"
          >
            <p>
              "Dr. Subramani's dedication to preventive medicine and
              comprehensive healthcare is truly praiseworthy "
            </p>
            <img
              src="/Images/five-stars.png"
              alt=""
              srcset=""
              className="testimonialimg"
            />
            <h4>T.Vasudevan</h4>
            <p>Patient</p>
          </div>
          <div
            className="col-md-2 testtimonialtext"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p>
              "Dr. Kishore, with his vast experience and expertise, provided me
              with a thorough assessment and a well-thought-out treatment plan.
              "
            </p>
            <img
              src="/Images/five-stars.png"
              alt=""
              srcset=""
              className="testimonialimg"
            />
            <h4>T.Meena</h4>
            <p>Patient</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
