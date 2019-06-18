import React, { Component } from "react";

class safetyareas extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Safety Areas</h1>
			<p> &nbsp;</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-4">
            <h2 className="text-center">Part 1 - Emphasis Safety Areas </h2>
			<p>
				In Part 1, there are 12 programs listed that will be
				given added attention and emphasis in the safety
				organizations for the next five years:
				<ul>
					<li>Aggressive Driving</li>
					<li>Distracted Driving</li>
					<li>Impaired Driving</li>
					<li>Motorcycle Safety</li>
					<li>Pedestrian Safety</li>
					<li>Roadway Departure Crashes</li>
					<li>Intersection Safety</li>
					<li>Speed Management</li>
					<li>Teen Driving Safety</li>
					<li>Use of Safety Restraints</li>
					<li>Senior Mobility and Safety</li>
				</ul>
			</p>
          </div>
          <div className="col-6 mb-4">
            <h2 className="text-center">Part 2 - Continuing Safety Areas </h2>
			<p>
				The programs contained in Part 3 represent
				opportunities for the safety community to enhance
				the programs used to support the goal to reduce
				fatalities or injuries:
				<ul>
					<li>Bicycle Safety</li>
					<li>Commercial Motor Vehicle Safety</li>
					<li>Highway Railroad Crossing Safety</li>
					<li>Rural Road Safety</li>
					<li>Transit System Safety</li>
					<li>Work Zone Safety</li>
					<li>Connected and Autonomous Vehicles</li>
					<li>Emergency Services</li>
					<li>Traffic Incident Management</li>
					<li>Traffic Data</li>
					<li>Judicial System</li>
				</ul>
			</p>
          </div>
        </div>
      </div>
    );
  }
}

export default safetyareas;
