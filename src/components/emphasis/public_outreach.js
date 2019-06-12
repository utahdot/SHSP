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

class PublicOutreach extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4">
            <h3 className="text-center">
              Public Outreach and Education{" "}
              <span className="text-danger">Emphasis Area</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6>CHALLENGE</h6>
            <p>
				More than 90 percent of all crashes in Utah are behavior related.
				While novice drivers are involved in nearly a quarter of these
				crashes, even experienced drivers can get too comfortable
				behind the wheel and take risks that put them and others on
				the road in danger. Studies show that the top driving behaviors
				that are killing people on Utah’s roads include: drowsy driving,
				distracted driving, aggressive driving, impaired driving and not
				buckling up.
            </p>
            <h6>DIRECTION</h6>
            <p>
				Partnering efforts must continue to spread the message to Utah
				drivers about their role in eliminating these preventable crashes.
				Through communication, education and community outreach we
				can get everyone to bring the safe driving message home. 
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
export default PublicOutreach;
