import React from "react";
import gal1 from "../images/image-7.jpg";
import gal4 from "../images/image-21.jpg";
import gal5 from "../images/image-16.jpg";
import gal6 from "../images/image-20.jpg";
import gal7 from "../images/image-19.jpg";
import gal2 from "../images/image-12.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <div
        class="section-head col-sm-12"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <h4>
          <span>Gallery</span>
        </h4>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={gal1}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={gal7}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={gal4}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={gal2}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={gal5}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={gal6}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
