import React, { Component } from "react";
import DistractedDrivingFatalities from "../charts/DistractedDrivingFatalities";

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

class Distracted extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-12 mb-4 mx-auto">
            <h2 className="text-center">
              Distracted Driving
              <span className="text-danger"> Emphasis Area</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 mx-auto">
            <h5 className="font-weight-bold">CHALLENGE</h5>
            <p>
              Fatalities related to distracted driving are a growing problem in the
              State. Distracted driving violations and crashes are under-reported
              due to deficiencies in crash reporting and the difficulty of attributing
              crashes to distractions. Unfortunately, drivers are increasingly
              engaged in other activities while driving, especially using interactive
              electronic devices
            </p>
            <h5 className="font-weight-bold">DIRECTION</h5>
            <p className="mb-5">
              Reduce the number of serious injury and fatal crashes related to
              driver distraction.
            </p>
            <DistractedDrivingFatalities />
            <p className="text-center">Source: UDPS</p>
          </div>
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-danger">PRIORITY STRATEGIES</h5>
            <h6 className="font-weight-bold">Education</h6>
            <ul>
              <li>Educate the public on all distracted driving laws, including that it is illegal to manipulate a handheld wireless device while operating a moving motor vehicle</li>
              <li>Develop educational programs focusing on driver distractions</li>
              <li>Partner with various traffic safety entities to hold educational events and activities at high schools, workplace settings, local communities and special events</li>
            </ul>
            <h6 className="font-weight-bold">Enforcement</h6>
            <ul>
              <li>Work with law enforcement agencies to promote enforcement of Utah’s texting law and other distracted driving laws</li>
            </ul>
            <h6 className="font-weight-bold">Emergency Services</h6>
            <ul className="mb-4">
              <li>Engage local emergency service providers in the implementation of educational programs and community events</li>
            </ul>
            <h5 className="font-weight-bold text-danger">LEADERS</h5>
            <ul>
              <li>Zero Fatalities</li>
              <li>Utah Highway Patrol</li>
              <li>UDPS, Highway Safety Office</li>
              <li>UDOH, Violence and Injury Prevention Program</li>
              <li>UDOH, Bureau of EMS and Preparedness</li>
              <li>Statewide Local Law Enforcement Agencies</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Distracted;
