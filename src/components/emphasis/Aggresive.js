import React, { Component } from "react";
import AggressiveDrivingFatalities from "../charts/AggressiveDrivingFatalities";

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

class Aggresive extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-12 mb-4 mx-auto">
            <h2 className="text-center">
              Aggressive Driving
              <span className="text-danger"> Emphasis Area</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 mx-auto">
            <h5 className="font-weight-bold">CHALLENGE</h5>
            <p>
              Aggressive driving includes deliberate behaviors such as speeding,
              tailgating, weaving in and out of lanes, failure to yield, running
              red lights/stop signs and road rage continue to plague our roads.
              As congestion and travel delays increase, so does aggressive
              driving.
            </p>
            <h5 className="font-weight-bold">DIRECTION</h5>
            <p className="mb-5">
              Continue or increase efforts to fund aggressive driving
              enforcement and educational campaigns
            </p>
            <AggressiveDrivingFatalities />
          </div>
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-danger">PRIORITY STRATEGIES</h5>
            <h6 className="font-weight-bold">Education</h6>
            <ul>
              <li>Educating novice and experienced drivers about the dangers of aggressive driving</li>
              <li>Support aggressive driving programs at high schools, businesses and community outreach events</li>
            </ul>
            <h6 className="font-weight-bold">Enforcement</h6>
            <ul>
              <li>Continue to support aggressive driving mitigation programs</li>
              <li>Continue to conduct aggressive driving enforcement campaigns</li>
            </ul>
            <h6 className="font-weight-bold">Engineering</h6>
            <ul>
              <li>Use variable message signs to inform drivers of current road conditions</li>
              <li>Improve signal coordination to produce efficient and increased traffic flow on roadway corridors</li>
            </ul>
            <h6 className="font-weight-bold">Emergency Services</h6>
            <ul className="mb-4">
              <li>Increase involvement of emergency service providers in aggressive driving programs and community events</li>
            </ul>
            <h5 className="font-weight-bold text-danger">LEADERS</h5>
            <ul>
              <li>Utah Highway Patrol</li>
              <li>UDPS, Highway Safety Office</li>
              <li>Utah Department of Transportation</li>
              <li>Statewide Local Law Enforcement Agencies</li>
              <li>Utah Chiefs of Police Association</li>
              <li>Zero Fatalities</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Aggresive;
