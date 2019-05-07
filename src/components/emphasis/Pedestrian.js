import React, { Component } from "react";
import PedestrianFatalities from "../charts/PedestrianFatalities";

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

class Pedestrian extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-12 mb-4 mx-auto">
            <h2 className="text-center">
              Pedestrian Driving
              <span className="text-danger"> Emphasis Area</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 mx-auto">
            <h5 className="font-weight-bold">CHALLENGE</h5>
            <p>
              While pedestrian crashes account for just one percent of all crashes,
              pedestrian fatalities have increased 47 percent over the past five
              years and they account for 15 percent of all traffic related fatalities.
              More attention to education and infrastructure must be given to this
              area in order to continue reducing pedestrian fatalities.
            </p>
            <h5 className="font-weight-bold">DIRECTION</h5>
            <p className="mb-5">
              Efforts must be made to prevent pedestrian related crashes
              by implementing a comprehensive plan to provide safer
              pedestrian travel.
            </p>
            <PedestrianFatalities />
            <p className="text-center">Source: UDPS</p>
          </div>
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-danger">PRIORITY STRATEGIES</h5>
              <h6 className="font-weight-bold">Engineering</h6>
              <ul>
                <li>Evaluate locations having significant crash trends involving pedestrians</li>
                <li>Develop and implement improvement projects including signage, lighting, crosswalk and roadway design features</li>
                <li>Continue to support the Safe Sidewalk Program</li>
              </ul>
            <h6 className="font-weight-bold">Education</h6>
            <ul>
              <li>Continue to support and implement the Heads Up and other education programs aimed at all age groups</li>
            </ul>
            <h6 className="font-weight-bold">Enforcement</h6>
            <ul className="mb-4">
              <li>Support aggressive enforcement of pedestrian laws</li>
              <li>Promote crosswalk enforcement/public information campaigns when funding is available</li>
            </ul>
            <h6 className="font-weight-bold">Emergency Services</h6>
            <ul className="mb-4">
              <li>Encourage participation of local emergency service providers to participate in local education programs</li>
            </ul>
            <h5 className="font-weight-bold text-danger">LEADERS</h5>
            <ul>
              <li>Utah Department of Transportation</li>
              <li>UDPS, Highway Safety Office</li>
              <li>Utah Highway Patrol</li>
              <li>Statewide Local Law Enforcement Agencies</li>
              <li>Utah Chiefs of Police Association</li>
              <li>UDOH, Bureau of Health Promotion</li>
              <li>UDOH, Bureau of EMS and Preparedness</li>
              <li>Safe Kids Utah</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Pedestrian;
