import React, { Component } from "react";

class EmergencyResponse extends Component {
  render() {
    return (
      <div className="highlight-bar-top">
        <div className="page-header">
          <h1 className="text-center text-uppercase">Emergency Response</h1>
        </div>
        <div className="main-content">
          <div className="row">
            <div className="col-12">
              <p>
              Swift response from emergency teams can save lives. The emergency medical services system includes trained dispatchers that ensure the right resources arrive to provide care and address safety at the scene. Emergency medical personnel affiliated with fire, ambulance services and public safety provide seamless emergency health care and serve as the system's first responders. They ensure the patients are triaged, treated and transported to hospital who serve as the first receivers for definitive life saving care.
              </p>
              <p>
                Trained dispatchers ensure the right
                resources arrive to provide care and address
                safety at the scene. Emergency medical response
                teams provide life saving health care and ensure
                the patients are transported to the facility that
                best meets the needs of the patients. Public
                safety responders clear roadways, thereby
                reducing the risk of more crashes as
                a result of unexpected traffic conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmergencyResponse;
