import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import Swal from "sweetalert2";
function Contact() {
  const form = useRef();
  const sucess = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a6i9rdn",
        "template_r4fcuct",
        form.current,
        "9gp63uOgs5b5UhWcD"
      )
      .then(
        (result) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Mail sent sucessfully",
          });
          console.log(result.text);
          console.log("sucess message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="row contactus ">
        <div className="col-md-3 contactuscoltxt">
          <h2
            className="text-light"
            style={{
              textDecoration: "underline",
            }}
          >
            Contact us
          </h2>
          <p className="h3 text-white ml-3"> Phone number </p>
          <p className="contacttxt">91+ 00000 00000 </p>
          <p className="contacttxt">91+ 00000 00000 </p>
          <p className="h3 text-white">E-mail</p>
          <p className="contacttxt">XXX000@gmail.com</p>
          <p className="contacttxt">XXX000@gmail.com</p>
          <p className="h3 text-white">Address</p>
          <p className="contacttxt">
            1234 Elm Street, <br />
            Anytown, State, <br /> 12345, <br /> Country.{" "}
          </p>
        </div>

        <div className="mapdiv text-center col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.69967376579!2d80.10476531083982!3d12.942232700000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525faaeda04253%3A0x9f1e48112dd407b6!2sSudar%20Hospital!5e0!3m2!1sen!2sin!4v1690181519985!5m2!1sen!2sin"
            width="775"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
        </div>
      </div>

      <div className="enquirefrom container border p-5 ">
        <h3>Enquire form</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-floating enquire1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="user_name"
              required
            />
            <label htmlFor="Name" className="">
              Name
            </label>
          </div>

          <div className="form-floating enquire1">
            <input
              type="email"
              className="form-control"
              name="user_email"
              placeholder="Enter Name"
              required
            />
            <label htmlFor="Name" className="">
              Enter E-mail address
            </label>
          </div>
          <div className="form-floating enquire1">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Name"
            />
            <label htmlFor="Name" className="">
              Phone number
            </label>
          </div>
          <div className="form-floating enquire1">
            <textarea
              name="message"
              className="form-control"
              id=""
              cols="30"
              rows="10"
              style={{ height: "150px" }}
            ></textarea>
            <label htmlFor="subject" className="">
              Subject
            </label>
          </div>

          <input type="submit" value="Send" className="btn  enquirebtn" />
        </form>
      </div>
    </>
  );
}

export default Contact;
