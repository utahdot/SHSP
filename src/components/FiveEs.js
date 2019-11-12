  import React, { Component } from "react";
  import { NavLink } from "react-router-dom";

  class FiveEs extends Component {
    render() {
      return (
        <div className="highlight-bar-top">
          <div className="page-header">
            <h1 className="text-center text-uppercase">The Five E's</h1>
          </div>
        <div className="main-content wide">
          <div className="row mb-3">
            <div className="col-12">
              <p>
                The Utah Strategic Highway Safety Plan strategies are focused on engineering,
                education, emergency response and enforcement efforts. Each discipline has
                a unique direction to improve safety while being strongly connected to the
                others. However, while these are the main elements to improving traffic safety
                on our roads, there is one key element that is missing. It’s what we’ll call the
                fifth E: Everyone.
              </p>
            </div>
          </div>
          <br/>
          <div className="row d-flex justify-content-center text-center">
            <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
              <div className="card h-100 highlight-bar-top">
              <div className="card-top">
                <img
                  className="card-img-top"
                  src="img/engineering.jpg"
                  alt="Engineering"
                />
                </div>
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">Engineering</h4>
                  <p className="card-text">
                  </p>
                </div>
                <div className="card-footer">
                  <NavLink className="btn btn-outline-primary" to="/fivees/engineering">
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
              <div className="card h-100 highlight-bar-top">
              <div class="card-top">
                <img
                  className="card-img-top"
                  src="img/enforcement.jpg"
                  alt="Enforcement"
                />
                </div>
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">Enforcement</h4>
                  <p className="card-text">
                  </p>
                </div>
                <div className="card-footer">
                  <NavLink className="btn btn-outline-primary" to="/fivees/enforcement">
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
              <div className="card h-100 highlight-bar-top">
              <div class="card-top">
                <img
                  className="card-img-top"
                  src="img/education.jpg"
                  alt="Education"
                />
                </div>
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">Education</h4>
                  <p className="card-text">
                  </p>
                </div>
                <div className="card-footer">
                  <NavLink className="btn btn-outline-primary" to="/fivees/education">
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center text-center">
            <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
              <div className="card h-100 highlight-bar-top">
              <div class="card-top">
                <img
                  className="card-img-top"
                  src="img/emergency-response.jpg"
                  alt="Emergency Response"
                />
                </div>
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">Emergency Medical Services</h4>
                  <p className="card-text">
                  </p>
                </div>
                <div className="card-footer">
                  <NavLink className="btn btn-outline-primary" to="/fivees/emergencyresponse">
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
              <div className="card h-100 highlight-bar-top">
                <div class="card-top">
                  <img
                    className="card-img-top"
                    src="img/everyone.jpg"
                    alt="Everyone"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">Everyone</h4>
                  <p className="card-text">
                  </p>
                </div>
                <div className="card-footer">
                  <NavLink className="btn btn-outline-primary" to="/fivees/everyone">
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
  }

  export default FiveEs;
