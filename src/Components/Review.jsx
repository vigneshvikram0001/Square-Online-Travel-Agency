import React from "react";
import rew1 from "../images/rew1.jpg";
import rew2 from "../images/rew2.jpg";
import rew3 from "../images/rew3.jpg";

function Review() {
  return (
    <div className="review">
      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <div
              class="section-head col-sm-12"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="1500"
            >
              <h4>
                <span>Review</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div
            className="col-md-4 mb-5 mb-md-0 review-card"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="1500"
          >
            <div className="d-flex justify-content-center mb-4">
              <img
                src={rew3}
                alt="Square travel agencies review"
                className="rounded-circle shadow-1-strong"
                width={150}
                height={150}
              />
            </div>
            <h5 className="mb-3">Dwinshy</h5>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2" />
              Our family trip to India was amazing. All thanks to the wonderful
              team. It was a memorable first trip to India.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning" />
              </li>
            </ul>
          </div>
          <div
            className="col-md-4 mb-5 mb-md-0 review-card"
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="1500"
          >
            <div className="d-flex justify-content-center mb-4">
              <img
                src={rew1}
                alt="Square travel agencies review"
                className="rounded-circle shadow-1-strong"
                width={150}
                height={150}
              />
            </div>
            <h5 className="mb-3">John Smith</h5>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2" />
              We had a great time!! This tour exceeded all our expectations.
              Everything was perfect on the tour.Highly recommended.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
            </ul>
          </div>
          <div
            className="col-md-4 mb-0 review-card"
            data-aos="flip-left"
            data-aos-duration="1500"
            data-aos-delay="1500"
          >
            <div className="d-flex justify-content-center mb-4">
              <img
                alt="Square travel agencies review"
                src={rew2}
                className="rounded-circle shadow-1-strong"
                width={150}
                height={150}
              />
            </div>
            <h5 className="mb-3">Lilly Rossy</h5>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2" />
              Everything about this trip was amazing. Saw great sights and
              experienced the true culture of Paris.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="far fa-star fa-sm text-warning" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
