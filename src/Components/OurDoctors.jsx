import React, { useState } from "react";
import "./OurDoctors.css";

function Ourdoctors() {
  const [buttontext, setButtonText] = useState("Readmore");
  const [buttontext2, setButtonText2] = useState("Readmore");
  const [buttontext3, setButtonText3] = useState("Readmore");
  function changetext() {
    console.log("buttonclicked");

    setButtonText("Showless");
    if (buttontext === "Showless") {
      setButtonText("Readmore");
    }
  }
  function changetext2() {
    console.log("buttonclicked");

    setButtonText2("Showless");
    if (buttontext2 === "Showless") {
      setButtonText2("Readmore");
    }
  }
  function changetext3() {
    console.log("buttonclicked");

    setButtonText3("Showless");
    if (buttontext3 === "Showless") {
      setButtonText3("Readmore");
    }
  }
  return (
    <>
      <div className="ourdoctorbanner">
        <p className="h3 text-center textdoc">Our Specialists</p>
      </div>

      <div
        className="row container border"
        style={{
          borderRadius: "25px",
          backgroundColor: "lightblue",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}data-aos="fade-up" data-aos-duration="1000"
      >
        <div className="col-md-4" > 
          <img
            src="/Images/doctor1.png"
            alt=""
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              height: "250px",
              width: "250px",
            }}
          />
        </div>
        <div className="col-md-6">
          <p
            style={{
              backgroundColor: "white ",
              marginTop: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
              borderRadius: "10px",
            }}
            >
            <p className="h3">About Dr. Subramani: </p>
            <br /> Dr. Subramani is a dedicated and compassionate internal
            medicine specialist with 5 years of experience in providing
            comprehensive healthcare to adult patients.Dr.Full Name <br />{" "}
            <b>About:</b> A brief introduction to the doctor and their
            experience. Mention their commitment to providing quality dental
            care and any special areas of expertise. <br /> <b>Education:</b>{" "}
            Degree and Specialty, University/Institution, Year Additional
            Degrees or Certifications{" "}
            <p id="Readmore1" className="collapse">
              <b>Professional Memberships: </b> list any relevant dental
              associations or organizations the doctor is affiliated with.{" "}
              <br /> <b> Experience:</b> Number of years practicing dentistry
              List previous positions, if applicable <br /> Services Offered:
              List the dental services the doctor provides, such as general
              dentistry, cosmetic dentistry, orthodontics, etc.
            </p>
            <br />
            <button
              className=" btn btn-sm btncollapse"
              data-bs-toggle="collapse"
              data-bs-target="#Readmore1"
              onClick={changetext}
            >
              {buttontext}
            </button>
          </p>
        </div>
      </div>
      <div
        className="row container border"
        style={{
          borderRadius: "25px",
          backgroundColor: "lightblue",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}data-aos="fade-up" data-aos-duration="1000"
      >
        <div className="col-md-4">
          <img
            src="/Images/doctor1.png"
            alt=""
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              height: "250px",
              width: "250px",
            }}
          />
        </div>
        <div className="col-md-6">
          <p
            style={{
              backgroundColor: "white ",
              marginTop: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
              borderRadius: "10px",
            }}
          >
            <p className="h3">About Dr. Subramani: </p>
            <br /> Dr. Subramani is a dedicated and compassionate internal
            medicine specialist with 5 years of experience in providing
            comprehensive healthcare to adult patients.Dr.Full Name <br />{" "}
            <b>About:</b> A brief introduction to the doctor and their
            experience. Mention their commitment to providing quality dental
            care and any special areas of expertise. <br /> <b>Education:</b>{" "}
            Degree and Specialty, University/Institution, Year Additional
            Degrees or Certifications <br />
            <p id="Readmore2" className="collapse">
              <b>Professional Memberships: </b> list any relevant dental
              associations or organizations the doctor is affiliated with.{" "}
              <br /> <b> Experience:</b> Number of years practicing dentistry
              List previous positions, if applicable <br /> Services Offered:
              List the dental services the doctor provides, such as general
              dentistry, cosmetic dentistry, orthodontics, etc.
            </p>
            <button
              className=" btn btn-sm btncollapse"
              data-bs-toggle="collapse"
              data-bs-target="#Readmore2"
              onClick={changetext2}
            >
              {buttontext2}
            </button>
          </p>
        </div>
      </div>
      <div
        className="row container border"
        style={{
          borderRadius: "25px",
          backgroundColor: "lightblue",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}data-aos="fade-up" data-aos-duration="1000"
      >
        <div className="col-md-4">
          <img
            src="/Images/doctor1.png"
            alt=""
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              height: "250px",
              width: "250px",
            }}
          />
        </div>
        <div className="col-md-6">
          <p
            style={{
              backgroundColor: "white ",
              marginTop: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
              borderRadius: "10px",
            }}
          >
            <p className="h3">About Dr. Subramani: </p>
            <br /> Dr. Subramani is a dedicated and compassionate internal
            medicine specialist with 5 years of experience in providing
            comprehensive healthcare to adult patients.Dr.Full Name <br />{" "}
            <b>About:</b> A brief introduction to the doctor and their
            experience. Mention their commitment to providing quality dental
            care and any special areas of expertise. <br /> <b>Education:</b>{" "}
            Degree and Specialty, University/Institution, Year Additional
            Degrees or Certifications <br />
            <p id="Readmore3" className="collapse">
              <b>Professional Memberships: </b> list any relevant dental
              associations or organizations the doctor is affiliated with.{" "}
              <br /> <b> Experience:</b> Number of years practicing dentistry
              List previous positions, if applicable <br /> Services Offered:
              List the dental services the doctor provides, such as general
              dentistry, cosmetic dentistry, orthodontics, etc.
            </p>
            <button
              className=" btn btn-sm btncollapse"
              data-bs-toggle="collapse"
              data-bs-target="#Readmore3"
              onClick={changetext3}
            >
              {buttontext3}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Ourdoctors;
