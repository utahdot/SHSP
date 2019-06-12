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

class Intersections extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4">
            <h3 className="text-center">
              Intersection Safety{" "}
              <span className="text-danger">Emphasis Area</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6>CHALLENGE</h6>
            <p>
			Intersection crashes are the most common crash type in urban
			areas. These crashes range from numerous rear-end crashes to
			severe right-angle crashes. Other causes for crashes are: improper
			lookout by drivers and vulnerable users, running red lights, running
			stop signs, sight distance issues, speed and following too closely.
			Intersection safety can be measured in two different ways. One is
			to identify intersection locations that have a high number of crashes.
			The other is to identify locations where serious injuries and
			fatalities occur.
            </p>
            <h6>DIRECTION</h6>
            <p>
			Efforts must be made to reduce the frequency and/or severity of
			crashes within intersections.
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
export default Intersections;
