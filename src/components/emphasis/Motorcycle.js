import React, { Component } from "react";
import MotorcycleFatalities from "../charts/MotorcycleFatalities";

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgba(255,99,132,0.2)",
//       borderColor: "rgba(255,99,132,1)",
//       borderWidth: 1,
//       hoverBackgroundColor: "rgba(255,99,132,0.4)",
//       hoverBorderColor: "rgba(255,99,132,1)",
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

class Motorcycle extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-12 mb-4 mx-auto">
            <h2 className="text-center">
              Motorcycle Driving
              <span className="text-danger"> Emphasis Area</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 mx-auto">
            <h5 className="font-weight-bold">CHALLENGE</h5>
            <p>
              As a result of more individuals looking to motorcycles as an
              alternative transportation mode, motorcycle–related fatalities have
              increased 29 percent in the last five years. Motorcyclists accounted
              for 2 percent of crashes and 14 percent of deaths. Utah’s current
              helmet law only applies to persons under the age of 18 who are
              required to wear a USDOT approved helmet while operating or riding
              a motorcycle.
            </p>
            <h5 className="font-weight-bold">DIRECTION</h5>
            <p className="mb-5">
              Efforts must be made to reduce motorcycle serious injury and
              fatal crashes.
            </p>
            <MotorcycleFatalities />
            <p className="text-center">Source: UDPS</p>
          </div>
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-danger">PRIORITY STRATEGIES</h5>
            <h6 className="font-weight-bold">Education</h6>
            <ul>
              <li>Increase public awareness of motorcyclist concerns through promotion of the “Heads Up.” campaign</li>
              <li>Evaluate motorcycle training courses</li>
              <li>Promote wearing proper protective gear for motorcyclists</li>
              <li>Utilize social media to expand messaging and information available to the public</li>
              <li>Increase rider awareness of the necessity to obtain and maintain safe riding skills</li>
              <li>Promote the availability of beginning and experienced rider training courses</li>
            </ul>
            <h6 className="font-weight-bold">Emergency Services</h6>
            <ul className="mb-4">
              <li>Engage local emergency service providers in the implementation of educational programs</li>
            </ul>
            <h5 className="font-weight-bold text-danger">LEADERS</h5>
            <ul>
              <li>Utah Department of Transportation</li>
              <li>UDPS, Highway Safety Office</li>
              <li>Zero Fatalities</li>
              <li>Statewide Local Law Enforcement Agencies</li>
              <li>Utah Highway Patrol</li>
              <li>Utah Chiefs of Police Association</li>
              <li>UDOH, Bureau of EMS and Preparedness</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Motorcycle;
