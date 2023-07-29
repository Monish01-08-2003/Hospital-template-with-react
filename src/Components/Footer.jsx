import React from "react";
import "react-icons/";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faYenSign,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import {
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className="footerbackground">
        <footer className="row footer  h6">
          <div className="col-md-2 footer-col">
            <h4>About us</h4>
            <p>
              First and foremost, we take immense pride in providing
              high-quality medical care.
              <FontAwesomeIcon
                icon={faYoutube}
                size="xl"
                style={{
                  marginTop: "25px",
                }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                size="xl"
                style={{
                  marginLeft: "10px",
                }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                style={{
                  marginLeft: "10px",
                }}
              />
            </p>
          </div>

          <div className="col-md-2 footer-col">
            <p className="h4">Contact Details</p>

            <div>
              <FontAwesomeIcon icon={faPhone} />

              <span
                style={{
                  marginTop: "25px",
                  marginLeft: "0px",
                }}
              >
                {" "}
                +91 0000000000
              </span>
            </div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span
              style={{
                marginLeft: "10px",
              }}
            >
              chennai,India
            </span>
            <br />
            <FontAwesomeIcon icon={faEnvelope} />
            <span
              style={{
                marginLeft: "10px",
              }}
            >
              XXX@gmail.com
            </span>
          </div>
          <div className="col-md-2 footer-col">
            <p className="h4">Terms and conditions</p>
            <p>
              FAQ's? contact-Us <br />
              Terms and usage
            </p>
          </div>
          <div className="col-md-2 footer-col ">
            <p className="h4">Opening timings</p>
            <p>
              <br /> Mon To Sat: 10 am – 2 pm. 5 pm -9pm <br />
              Sun: 11 am – 2 pm. 6 pm – 9 pm
            </p>
          </div>
        </footer>
        <p
          style={{
            color: "white",
            backgroundColor: "gray",
            textAlign: "center",
          }}
        >
          Copyright @ 2022. Aniheal Hospitals. All Right Reserved.</p>
      </div>
      <Outlet />
    </>
  );
}

export default Footer;
