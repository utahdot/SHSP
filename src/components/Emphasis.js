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
        <div className="row d-flex justify-content-center text-center">
          <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/aggresive-driving.png"
                alt="Aggresive Driving"
              />
              <div className="card-body">
                <h5 className="card-title">Aggresive Driving</h5>
                <p className="card-text">
                  Continue or increase efforts to fund aggressive driving enforcement and educational campaigns.
                </p>
                <NavLink className="btn btn-outline-primary" to="/emphasis/aggresive">
                  Aggresive Driving
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/distracted-driving.png"
                alt="Distracted driving"
              />
              <div className="card-body">
                <h5 className="card-title">Distracted Driving</h5>
                <p className="card-text">
                  Reduce the number of serious injury and fatal crashes related to driver distraction.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Distracted Driving
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/drowsy-driving.png"
                alt="Driving drowsy"
              />
              <div className="card-body">
                <h5 className="card-title">Drowsy Driving</h5>
                <p className="card-text">
                  Maintain efforts to reduce drowsy driving-related serious injury and fatal crashes
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Drowsy Driving
                </NavLink>
              </div>
            </div>
          </div>
		  
          <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/impaired-driving.png"
                alt="Check point for impared driving"
              />
              <div className="card-body">
                <h5 className="card-title">Impared Driving</h5>
                <p className="card-text">
                  Continue to reduce alcohol and drug-related serious injury and fatal crashes.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Impared Driving
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
                src="img/intersection-safety.png"
                alt="Intersection Safety"
              />
              <div className="card-body">
                <h5 className="card-title">Intersection Safety</h5>
                <p className="card-text">
                  Efforts must be made to reduce the frequency and/or severity of crashes within intersections.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Intersection Safety
                </NavLink>
              </div>
            </div>          
		  </div>
		  <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/motorcycle-safety.png"
                alt="Motorcylce safety"
              />
              <div className="card-body">
                <h5 className="card-title">Motorcycle Safety</h5>
                <p className="card-text">
                  Efforts must be made to reduce motorcycle serisous injury and fatal crashes.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Motorcycle Safety
                </NavLink>
              </div>
            </div>
          </div>
		  <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/pedestrian-safety.png"
                alt="Pedestrian safety"
              />
              <div className="card-body">
                <h5 className="card-title">Pedestrian Safety</h5>
                <p className="card-text">
                  Efforts must be made to prevent pedestrian related crashes by implementing a comprehensive plan to provide safer pedestrian travel. 
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Pedestrian Safety
                </NavLink>
              </div>
            </div>
          </div>
		  <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/public-outreach.png"
                alt="Public Outreach and Education"
              />
              <div className="card-body">
                <h5 className="card-title">Public Outreach and Education</h5>
                <p className="card-text">
                  Partnering efforts must continue to spread the message to Utah drivers about their role in eliminating these preventable crashes. 
				  Through communication, education and community outreach we can get everyone to bring the safe driving message home. 
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Public Outreach and Education
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
                src="img/roadway-departure.png"
                alt="Roadway Departure Crashes"
              />
              <div className="card-body">
                <h5 className="card-title">Roadway Departure Crashes</h5>
                <p className="card-text">
                  Work should continue to keep vehicles on the roadway and in their proper lanes. When vehicles do leave the roadway, efforts should be made to reduce the possibility and/or severity of crashes.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Roadway Departure Crashes
                </NavLink>
              </div>
            </div>          
		  </div>
		  <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/speed-management.png"
                alt="Speed Management"
              />
              <div className="card-body">
                <h5 className="card-title">Speed Management</h5>
                <p className="card-text">
                  Efforts must be focused on reducing speeding on the roads and the associated elements of reckless and careless attitudes that often accompany such driver behavior. 
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Speed Management
                </NavLink>
              </div>
            </div>
          </div>
		  <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/teen-driving-safety.png"
                alt="Teen Driving Safety"
              />
              <div className="card-body">
                <h5 className="card-title">Teen Driving Safety</h5>
                <p className="card-text">
                  Focus efforts on innovative education methods to improve teen driver capabilities.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Teen Driving Safety
                </NavLink>
              </div>
            </div>
          </div>
		  <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="img/use-of-safety-restraints.png"
                alt="Use of Safety Restraints"
              />
              <div className="card-body">
                <h5 className="card-title">Use of Safety Restraints</h5>
                <p className="card-text">
                  On May 12, 2015 the primary seat belt law went into effect. UDOT, the Utah Department of Public Safety and their partners have been
				  dedicated to increasing education and enforcement to help save lives. Efforts must continue to secure a permanent primary seat belt
				  law for those who continue to ride unbuckled.
                </p>
                <NavLink className="btn btn-outline-primary" to="/test">
                  Use of Safety Restraints
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
