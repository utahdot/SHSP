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

class Aggresive extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4">
            <h3 className="text-center">
              Use of Safety Restraints{" "}
              <span className="text-danger">Emphasis Area</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6>CHALLENGE</h6>
            <p>
				In 2015, the use of safety restraints in the state reached 87 percent.
				However, nearly half of motor vehicle occupants killed were not
				wearing safety restraints. Occupants in rural crashes are over
				three times more likely to be unrestrained than occupants in urban
				crashes.
            </p>
            <h6>DIRECTION</h6>
            <p>
				On May 12, 2015 the primary seat belt law went into effect. UDOT,
				the Utah Department of Public Safety and their partners have been
				dedicated to increasing education and enforcement to help save
				lives. Efforts must continue to secure a permanent primary seat belt
				law for those who continue to ride unbuckled.
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
export default Aggresive;
