import React, { Component } from "react";
import ImpairedDrivingFatalities from "../charts/ImpairedDrivingFatalities";

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

class Impaired extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-12 mb-4 mx-auto">
            <h2 className="text-center">
              Impaired Driving
              <span className="text-danger"> Emphasis Area</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 mx-auto">
            <h5 className="font-weight-bold">CHALLENGE</h5>
            <p>
              While the fact that impaired driving is recognized as being an
              incredibly dangerous behavior, fatal crashes due to alcohol and
              drugs continue to occur. To add to the problem, the number of
              fatalities where drivers have tested positive for drugs is showing
              an increasing trend.
            </p>
            <h5 className="font-weight-bold">DIRECTION</h5>
            <p className="mb-5">
              Continue to reduce alcohol and drug-related serious injury and
              fatal crashes.
            </p>
            <ImpairedDrivingFatalities />
            <p className="text-center">Source: UDPS</p>
          </div>
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-danger">PRIORITY STRATEGIES</h5>
            <h6 className="font-weight-bold">Education</h6>
            <ul>
              <li>Support program to reduce DUIs in the 21 – 34 age group</li>
              <li>Support for impaired prevention programs at colleges and universities</li>
              <li>Provide DUI awareness materials</li>
              <li>Enhance DUI court participation with training and resources</li>
              <li>Increase education and outreach for the growing Hispanic population</li>
              <li>Increase education to teen drivers</li>
            </ul>
            <h6 className="font-weight-bold">Enforcement</h6>
            <ul>
              <li>Conduct high visibility multi-agency enforcement campaigns</li>
              <li>Continue support for DUI legislation</li>
              <li>Encourage BAC testing on all fatal crashes</li>
              <li>Support data driven enforcement efforts including: saturation patrols, checkpoints, etc. </li>
              <li>Increase the number of agencies involved in the Eliminating Alcohol Sales to Youth program</li>
            </ul>
            <h5 className="font-weight-bold text-danger">LEADERS</h5>
            <ul>
              <li>Utah Highway Patrol</li>
              <li>UDPS, Highway Safety Office</li>
              <li>Utah Department of Alcoholic Beverage Control</li>
              <li>Utah Division of Substance Abuse & Mental Health</li>
              <li>Utah Substance Abuse Advisory Council DUI Committee</li>
              <li>Utah Mothers Against Drunk Driving</li>
              <li>Statewide Local Law Enforcement Agencies</li>
              <li>Utah Chiefs of Police Association</li>
              <li>Zero Fatalities</li>
              <li>UDPS, Driver License Division</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Impaired;
