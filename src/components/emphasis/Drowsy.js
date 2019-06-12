import React, { Component } from "react";
import BarChart from "../charts/BarChart";

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

class Drowsy extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4">
            <h3 className="text-center">
              Drowsy Driving{" "}
              <span className="text-danger">Emphasis Area</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6>CHALLENGE</h6>
            <p>
              Serious injuries and fatalities related to drowsy driving are a top
			  concern in Utah. Unfortunately, drowsy driving violations and
			  crashes are under-reported due to deficiencies in crash reporting
			  and the difficulty of attributing crashes to sleepiness.
            </p>
            <h6>DIRECTION</h6>
            <p>
  			  Maintain efforts to reduce drowsy driving-related serious injury and
			  fatal crashes.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Drowsy;
