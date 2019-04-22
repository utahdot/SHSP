import React, { Component } from "react";

class SafetyLeadership extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Safety Leadership</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3 text-center">
            <img src="img/mvw.jpg" alt="Mountain View Corridor" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2 className="text-center">Utah Safety <br />Leadership <span className="text-danger">Executive Committee</span></h2>
          </div>
          <div className="col-6">
            <h2 className="text-center">Utah Safety <br />Leadership Committee</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-2 offset-2">
            <ul className="list-unstyled">
              <li>Utah Department of Transportation (UDOT)
                <ul className="list-unstyled">
                  <li>Motor Carrier Division</li>
                  <li>Traffic and Safety Division</li>
                </ul>
              </li>
              <li>Utah Deparment of Public Safety (UDPS)
                <ul className="list-unstyled">
                  <li>Utah Highway Patrol</li>
                  <li>Highway Safety Office</li>
                </ul>
              </li>
              <li>Utah Department of Health (UDOH)
                <ul className="list-unstyled">
                  <li>Violence and Injury Prevention Program</li>
                  <li>Bureau of EMS and Preparedness</li>
                </ul>
              </li>
              <li>U.S. Department of Tranportation
                <ul className="list-unstyled">
                  <li>Federal Highway Administration (FHWA)</li>
                  <li>Federal Motor Carrier Safety Administration (FMCSA)</li>
                  <li>National Highway Traffic Safety Administration (NHTSA)</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-2 offset-4">
            <ul className="list-unstyled">
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SafetyLeadership;
