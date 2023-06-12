import React from "react";
import "./Css/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        class="section-head col-sm-12"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="1500"
      >
        <h4>
          <span>Contact Us</span>
        </h4>
      </div>

      <div className="contain">
        <div className="right" />
        <div className="left">
          <div className="header">
            <h2
              className="animation a1"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              READY FOR UNFORGATABLE TRAVEL. REMEMBER US!
            </h2>
          </div>
          <form className="form">
            <input
              type="text"
              className="form-field animation a3"
              placeholder="Your Name"
              required
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1500"
            />
            <input
              type="email"
              className="form-field animation a3"
              placeholder="Email Address"
              required
              data-aos="fade-right"
              data-aos-duration="1900"
              data-aos-delay="1500"
            />
            <input
              type="number"
              className="form-field animation a3"
              placeholder="Mobile Number"
              required
              data-aos="fade-right"
              data-aos-duration="2200"
              data-aos-delay="1500"
            />
            <textarea
              className="form-field animation a3"
              placeholder="Enter your message"
              style={{ padding: "10px 15px", height: 100 }}
              data-aos="fade-right"
              data-aos-duration="2500"
              data-aos-delay="1500"
            ></textarea>
            <button className="animation a6" type="submit">
              CONTACT US!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
