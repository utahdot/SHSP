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

class Impared extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4">
            <h3 className="text-center">
              Impared Driving{" "}
              <span className="text-danger">Emphasis Area</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6>CHALLENGE</h6>
            <p>
			  While the fact that impaired driving is recognized as being an
			  incredibly dangerous behavior, fatal crashes due to alcohol and
			  drugs continue to occur. To add to the problem, the number of
			  fatalities where drivers have tested positive for drugs is showing
			  an increasing trend.
            </p>
            <h6>DIRECTION</h6>
            <p>
              Continue to reduce alcohol and drug-related serious injury and
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
export default Impared;
