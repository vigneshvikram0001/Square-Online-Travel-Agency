import React from "react";
import "./Css/Package.css";
import Pac1 from "../images/image-15.jpg";
import Pac3 from "../images/image-11.jpg";
import Pac2 from "../images/image-17.jpg";

function Pacakage() {
  return (
    <div className="package">
      <div
        class="section-head col-sm-12"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <h4>
          <span>Packages</span>
        </h4>
      </div>

      {/* most popular tours */}
      <section className="section popular">
        <div className="container">
          <h2
            className="h2 section-title"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Most Popular Tours
          </h2>
          <ul className="popular-list">
            <li>
              <div
                className="popular-card"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={Pac1}
                      width={740}
                      height={518}
                      loading="lazy"
                      alt="Kuala Lumpur, Malaysia"
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline" />
                    <time dateTime="P12D">12 Days</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">From $60.00</div>
                    <div className="card-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <data value={2}>(87)</data>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="/">
                      The most populous city in the United Arab Emirates (UAE)
                    </a>
                  </h3>
                  <address className="card-location">Dubai, UAE</address>
                </div>
              </div>
            </li>
            <li>
              <div
                className="popular-card"
                data-aos="flip-right"
                data-aos-duration="1500"
              >
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={Pac2}
                      width={740}
                      height={518}
                      loading="lazy"
                      alt="Kuala Lumpur, Malaysia"
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline" />
                    <time dateTime="P12D">24 Days</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">From $90.00</div>
                    <div className="card-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star-outline" />
                      <data value={2}>(116)</data>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="/">
                      It’s a place where travelers can time-hop through the city
                    </a>
                  </h3>
                  <address className="card-location">
                    Kuala Lumpur, Malaysia
                  </address>
                </div>
              </div>
            </li>
            <li>
              <div
                className="popular-card"
                data-aos="flip-right"
                data-aos-duration="1500"
              >
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={Pac3}
                      width={740}
                      height={518}
                      loading="lazy"
                      alt="Kuala Lumpur, Malaysia"
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline" />
                    <time dateTime="P12D">50 Days</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">From $140.0</div>
                    <div className="card-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <data value={2}>(167)</data>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="/">
                      Plan your holiday to Norway with our Square. Discover the northenlights
                    </a>
                  </h3>
                  <address className="card-location">
                    Prestvannet Lake, Norway
                  </address>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Pacakage;
