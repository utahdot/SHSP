import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FiveEs extends Component {
  render() {
    return (
      <div className="mx-4">
        <div className="row">
          <div className="col-12 my-4">
            <h1 className="text-center text-danger text-uppercase">Five E's </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-auto text-center">
            <p>
              This is the Five E's homepage.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center text-center">
          <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/engineering.jpg"
                alt="Engineering"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Engineering</h4>
                <p className="card-text">
                  The focus on safety within engineering begins
                  with designing and building safe roadways.
                  Transportation engineers use design principles
                  that have been proven to be safe and reliable.
                  National standards are used for signs and traffic
                  markings to provide consistency for the traveling
                  public. However, engineers continue to look for
                  new and innovative ways to make roads safer.
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
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/enforcement.jpg"
                alt="Enforcement"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Enforcement</h4>
                <p className="card-text">
                  Unfortunately, despite the best safety education
                  programs and safely designed and built
                  roadways, enforcement is needed to remind
                  people of the laws associated with the use of our
                  roadway network. State, county, and municipal
                  law enforcement agencies statewide work
                  alongside highway safety partnering agencies to
                  enforce Utah’s traffic laws during regular patrols,
                  as well as specialized mobilization efforts.
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
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/education.jpg"
                alt="Education"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Education</h4>
                <p className="card-text">
                  Education plays a key role in helping the public
                  understand what they should and should not
                  do when driving. Increased education leads to
                  a change in habits and, ultimately, a decline in
                  fatalities on our roads. Education efforts are
                  directed toward all age groups and numerous
                  safety issues.
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
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/emergency-response.jpg"
                alt="Emergency Response"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Emergency Response</h4>
                <p className="card-text">
                  Swift response from emergency teams can
                  save lives. Trained dispatchers ensure the right
                  resources arrive to provide care and address
                  safety at the scene. Emergency medical response
                  teams provide life saving health care and ensure
                  the patients are transported to the facility that
                  best meets the needs of the patients. Public
                  safety responders clear roadways, thereby
                  reducing the risk of more crashes happening as
                  a result of unusual traffic flow. Keeping roadways
                  clear is vital to traffic safety and essential for
                  preventing further problems due to unsafe road
                  conditions.
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
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/everyone.jpg"
                alt="Everyone"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Everyone</h4>
                <p className="card-text">
                  No matter how hard we try to engineer the roads
                  so people can get to their destinations safely,
                  no matter how hard we try to educate drivers
                  about safe driving, no matter how hard we try to
                  enforce the laws or respond in an emergency, the
                  ultimate responsibility rests upon everyone who
                  gets in a car. We all need to work together if we
                  are going to reach Zero Fatalities. Everyone is the
                  most important “E” in traffic safety.
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
    );
  }
}

export default FiveEs;
