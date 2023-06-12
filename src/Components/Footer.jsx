import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <footer
          className="text-center text-white"
        >
          <div className="container foot-container">
            <section>
              <div className="row foot-row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/" className="text-white">
                      About us
                    </a>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/" className="text-white">
                      Packages
                    </a>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/" className="text-white">
                      Review
                    </a>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/" className="text-white">
                      Help
                    </a>
                  </h6>
                </div>
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">
                      Contact
                    </a>
                  </h6>
                </div>
              </div>
            </section>
            <hr className="my-3" />
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt distinctio earum repellat quaerat voluptatibus placeat
                    nam, commodi optio pariatur est quia magnam eum harum
                    corrupti dicta, aliquam sequi voluptate quas.
                  </p>
                </div>
              </div>
            </section>
            <section className="text-center mb-5">
              <a href className="text-white me-4">
                <i className="fab fa-facebook-f" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-twitter" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-google" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-instagram" />
              </a>
            </section>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="/">
              Square Travels
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
