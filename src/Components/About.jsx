import React from "react";
import "./Css/About.css"
import aboutImg from "../images/image-6.jpg"

function About() {
  return (
    <div className="about">
      <div class="we-are-block">
        <div id="about-us-section">
          <div class="about-us-image">
            <img src={aboutImg} width="808" height="458" alt="Square Travel" />
          </div>

          <div class="about-us-info">
            <h2 data-aos="fade-right" data-aos-duration="1000">
              Best Travel Agencies in India
            </h2>

            <p data-aos="fade-right" data-aos-duration="1000">
              Swastik India Journeys is a dedicated travel agency in India
              offering an array of high quality services with first-hand
              knowledge on India tours. We offer a spectacular range of India
              Tours including Rajasthan tours, Kerala tours, private north India
              tours. With our personalized approach we make the tours a real
              value for money. Our customized services and tailored tours
              promise for the best travel experience in Incredible India.
            </p>

            <a
              href="/"
              title="About Us Button"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              ABOUT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
