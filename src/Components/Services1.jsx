import React from "react";
import "../Components/Services.css";
function Services1() {
  return (
    <>
      <div className="services2">
        <div className="row">
          <h4 className="serviceheading">We are specialized in</h4>
          <div
            className="col-md-3 servicecard2 "
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <div className="cards row">
              <img
                src="/Images/heart.png"
                alt=""
                className="servicecardimg card-img-top col-md-5"
              />
              <div className="servicecardtxt card-body col-md-5">
                <h4 className="card-title"> Cardiology</h4>
                <p className="card-text">
                  Cardiology is a branch of medicine that deals with the study,
                  diagnosis, and treatment of disorders related to the heart and
                  the cardiovascular system.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3  servicecard2"  data-aos="flip-left"
              data-aos-duration="2000">
            <div className="cards row">
              <img
                src="/Images/head.png"
                alt=""
                className="servicecardimg card-img-top col-md-5"
              />
              <div className="servicecardtxt card-body col-md-5">
                <h4 className="card-head">ENT</h4>
                <p className="card-text">
                  ENT doctors use various diagnostic tools and procedures, such
                  as endoscopy, allergy testing to assess and diagnose
                  conditions related to the ear, nose, and throat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 servicecard2"  data-aos="flip-right"
              data-aos-duration="2000">
            <div className="cards row">
              <img
                src="/Images/skin.png"
                alt=""
                className="servicecardimg card-img-top col-md-5"
              />
              <div className="servicecardtxt card-body col-md-5">
                <h4 className="card-head">Urology</h4>
                <p className="card-text">
                  Urologists are medical doctors who specialize in this field
                  and are trained to manage a wide range of conditions affecting
                  the kidneys, ureters, bladder,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 servicecard2"  data-aos="flip-right"
              data-aos-duration="2000">
            <div className="cards row">
              <img
                src="/Images/irritation.png"
                alt=""
                className="servicecardimg card-img-top col-md-5"
              />
              <div className="servicecardtxt card-body col-md-5">
                <h4 className="card-head">Dermatology</h4>
                <p className="card-text">
                  Cardiology is a branch of medicine that deals with the study,
                  diagnosis, and treatment of disorders related to the heart and
                  the cardiovascular system.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 servicecard2"  data-aos="flip-right"
              data-aos-duration="2000">
            <div className="cards row">
              <img
                src="/Images/teeth.png"
                alt=""
                className="servicecardimg card-img-top col-md-5"
              />
              <div className="servicecardtxt card-body col-md-5">
                <h4 className="card-head"> Dental</h4>
                <p className="card-text">
                  ENT doctors use various diagnostic tools and procedures, such
                  as endoscopy, imaging studies hearing tests , allergy testing
                  to assess , nose, throat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 servicecard2"  data-aos="flip-right"
              data-aos-duration="2000">
            <div className="cards row">
              <img
                src="./Images/arthritis.png"
                alt=""
                className="servicecardimg card-img-top col-md-5"
              />
              <div className="servicecardtxt card-body col-md-5">
                <h4 className="card-head">Orthopedic</h4>
                <p className="card-text">
                  Urologists are medical doctors who specialize in this field
                  and are trained to manage a wide range of conditions affecting
                  the kidneys.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 servicecard2" >
            <div
              className="cards row"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <img
                src="/Images/irritation.png"
                alt=""
                className="servicecardimg card-img-top col-md-5"
              />
              <div className="servicecardtxt card-body col-md-5 ">
                <h4 className="card-head">Dermatology</h4>
                <p className="card-text">
                  Cardiology is a branch of medicine that deals with the study,
                  diagnosis, and treatment of disorders related to the heart and
                  the cardiovascular system. and cures skin infections
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 servicecard2 "
            data-aos="flip-right"
              data-aos-duration="2000"
          >
            <div className="cards row">
              <img
                src="/Images/x-ray.png"
                alt=""
                className="servicecardimg card-img-top col-mdd-5"
              />
              <div className="servicecardtxt card-body col-md-5">
                <h4 className="card-head"> Radiology</h4>
                <p className="card-text">
                  Radiology is a medical specialty that involves the use of
                  medical imaging techniques to diagnose and treat various
                  diseases and medical conditions. Radiologists are who
                  specialize in this field
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 servicecard2"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="cards row ">
              <img
                src="/Images/pediatrics (1).png"
                alt=""
                className="servicecardimg card-img-top col-md-5"
              />
              <div className="servicecardtxt card-body col-md-5">
                <h4 className="card-head">Pediatrics</h4>
                <p className="card-text">
                  Pediatrics is a medical specialty that focuses on the
                  healthcare and medical treatment of infants, children, and
                  adolescents. Pediatricians are medical doctors who specialize
                  in this field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services1;
