import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Css/Home.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import logo from "../../src/images/logos.png";
import "./Css/Header.css";
import { FiHome, FiGrid, FiMessageCircle } from "react-icons/fi";

import { LuBarChart, LuBookOpenCheck, LuClipboardCheck } from "react-icons/lu";

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <div className="header">
      <MDBNavbar
        fixed="top"
        expand="lg"
        light
        bgColor="light"
        className="header-nav"
      >
        <MDBContainer
          fluid
          className="d-flex align-items-center justify-contant-around px-7"
        >
          <div className="logo">
            <img src={logo} alt="Square Travel logo" />
            Square
          </div>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav
              right
              fullWidth={false}
              className="mb-2 mb-lg-0 d-flex align-items-center justify-content-end nav-bar"
            >
              <Link
                className="nav-links"
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <FiHome className="nav-icons" />
                Home
              </Link>
              <Link
                className="nav-links"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                <LuBarChart className="nav-icons" />
                Services
              </Link>
              <Link
                className="nav-links"
                activeClass="active"
                to="package"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <LuClipboardCheck className="nav-icons" />
                Package
              </Link>
              <Link
                className="nav-links"
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                <FiGrid className="nav-icons" />
                Gallery
              </Link>
              <Link
                className="nav-links"
                activeClass="active"
                to="review"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <LuBookOpenCheck className="nav-icons" />
                Review
              </Link>
              <Link
                className="nav-links"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                <FiMessageCircle className="nav-icons" />
                Contact
              </Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
