import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Emphasis extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4">
            <h3 className="text-center">Empahsis Safety Areas</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-4 text-center">
            <p>
              Emphasis safety areas consist of 12 programs that will be given
              added attention and emphasis by the safety organizations for the
              next five years
            </p>
          </div>
        </div>
        <div className="row mx-auto text-center">
          <div className="col-md-3 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/aggresive-driving.png"
                alt="Aggresive Driving"
              />
              <div className="card-body">
                <h5 className="card-title">Aggresive Driving</h5>
                <p className="card-text">
                  Aggresive driving includes deliberate behaviors such as
                  spedding, tailgating, weaving in and out of lanes, failure to
                  yield, runing red lights/stop signs and road rage.
                </p>
                <NavLink className="btn btn-outline-primary" to="/aggresive">
                  Aggresive Driving
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-3 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/distracted-driving.png"
                alt="Distracted driving"
              />
              <div className="card-body">
                <h5 className="card-title">Distracted Driving</h5>
                <p className="card-text">
                  Fatalties related to ditracted driving are a growing problem
                  in the State.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Distracted Driving
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-3 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/drowsy-driving.png"
                alt="Driving drowsy"
              />
              <div className="card-body">
                <h5 className="card-title">Drowsy Driving</h5>
                <p className="card-text">
                  Serious injuries and fatalities related to drowsy driving are
                  a top concern.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Drowsy Driving
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-3 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/impaired-driving.png"
                alt="Check point for impared driving"
              />
              <div className="card-body">
                <h5 className="card-title">Impared Driving</h5>
                <p className="card-text">
                  Impared driving is recognized as being an incredible dangerous
                  behavior.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Impared Driving
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Emphasis;
