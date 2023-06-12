import React from "react";
import "./Css/Services.css";
import About from "./About";


function Services() {
  return (
    <section className="services">
      <div
        class="section-head col-sm-12"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h4>
          <span>Our Services</span>
        </h4>
      </div>
      <div className="container">
        <a
          className="services-card"
          href="/"
          data-aos="zoom-in"
          data-aos-duration="400"
        >
          <h3>Housing</h3>
          <p className="small">
            You can get hotels, motels, inns, camps, condominiums, timeshares
          </p>
          <div className="go-corner" href="/">
            <div className="go-arrow">→</div>
          </div>
        </a>
        <a
          className="services-card"
          href="/"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <h3>Food</h3>
          <p className="small">Food may be included in the accommodation</p>
          <div className="go-corner" href="/">
            <div className="go-arrow">→</div>
          </div>
        </a>
        <a
          className="services-card"
          href="/"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h3>Transport</h3>
          <p className="small">
            Square can provide all types of transport, whether sea, air, rail,
            or land.
          </p>
          <div className="go-corner" href="/">
            <div className="go-arrow">→</div>
          </div>
        </a>
        <a
          className="services-card"
          href="/"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h3>Travel Insurance</h3>
          <p className="small">
            Take out Travel Insurance to cover for any unforeseen circumstances.
          </p>
          <div className="go-corner" href="/">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
      {/* about */}
      <About />
    </section>
  );
}

export default Services;
