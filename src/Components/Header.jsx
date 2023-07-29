import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

function Header() {
  const elementref = useRef();
  const elementref2 = useRef();
  const elementref3 = useRef();
  const elementref4 = useRef();
  const elementref5 = useRef();
  let homeclass = "h1";
  function handleclick(ref) {
    elementref.current.classList.remove("h1");
    elementref2.current.classList.remove("h1");
    elementref3.current.classList.remove("h1");
    elementref4.current.classList.remove("h1");
    elementref5.current.classList.remove("h1");

    ref.current.classList.add("h1");
  }

  return (
    <>
      <header className="navbar navbar-expand-xl navbar-light bg-light  ">
        <ul className="navbar-nav" >
          <li className="nav-item">
            <a href=" "className="navbar-brand"><img
              src="/Images/Untitled design (4).png"
           height='75px'
           width='75px'
            /></a>
          </li>
        </ul>
        <ul className="navbar-nav" style={{marginLeft:'15px'}}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link  "

              ref={elementref}
              onClick={() => handleclick(elementref)}
            >
              Home
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
    className="nav-link"
              to="./Services"
              onClick={() => handleclick(elementref2)}
              ref={elementref2}
            >
              Service
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
                className="nav-link"
              to="./visionandmission"
              ref={elementref3}
              onClick={() => handleclick(elementref3)}
            >
              Vision and Mission
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
            className="nav-link"
              to="/DoctorProfile"
              ref={elementref4}
              onClick={() => handleclick(elementref4)}
            >
              Doctor's Profile
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
            className="nav-link"
              to="/Contact"
              onClick={() => handleclick(elementref5)}
              ref={elementref5}
            >
              Contact Us
            </Link>{" "}
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
