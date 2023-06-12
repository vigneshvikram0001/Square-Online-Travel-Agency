import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { FiPhoneOutgoing } from "react-icons/fi";
import HomeCards from "./HomeCards";
import Himg1 from "../images/image-3.jpg"
import Himg2 from "../images/image-10.jpg"
import Himg3 from "../images/image-11.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  AOS.init();
  return (
    <div className="Home">
      {/* Home image */}
      <div className="main-image">
        <h2 data-aos="fade-down" data-aos-duration="1000">
          Take Your Next Trip with <br />
          SQUARE
        </h2>
        <h4 data-aos="fade-down" data-aos-duration="1000">
          Your Dream Vacation Awaits
        </h4>
        <MDBBtn
          href="/"
          className="mx-3 nav-button"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <FiPhoneOutgoing className="nav-button-icons" />
          Book Now!
        </MDBBtn>
        <div className="box">
          <img
            src={Himg1}
            data-aos="fade"
            data-aos-duration="1200"
            alt="home"
            className="box-img img1"
          />
          <img
            src={Himg3}
            data-aos="fade"
            data-aos-duration="1200"
            alt="home"
            className="box-img img2"
          />
          <img
            src={Himg2}
            data-aos="fade"
            data-aos-duration="1200"
            alt="home"
            className="box-img img3"
          />
        </div>
      </div>

      {/* Home Cards */}
      <HomeCards />
    </div>
  );
}
