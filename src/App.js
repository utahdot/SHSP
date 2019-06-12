import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import ScrollUpButton from "./components/ScrollUpButton";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Summary from "./components/Summary";
import Content2 from "./components/Content2";

import Emphasis from "./components/Emphasis";
import Emphasis_Aggresive from "./components/emphasis/Aggresive";
import Emphasis_Distracted from "./components/emphasis/Distracted";
import Emphasis_Drowsy from "./components/emphasis/Drowsy";
import Emphasis_Impared from "./components/emphasis/impared";
import Emphasis_intersection from "./components/emphasis/intersection";
import Emphasis_motorcycle from "./components/emphasis/motorcycle";
import Emphasis_pedesterian from "./components/emphasis/pedesterian";
import Emphasis_public_outreach from "./components/emphasis/public_outreach";
import Emphasis_roadway_departure from "./components/emphasis/roadway_departure";
import Emphasis_speed_management from "./components/emphasis/speed_management";
import Emphasis_teen_driving from "./components/emphasis/teen_driving";
import Emphasis_use_of_safety_restraints from "./components/emphasis/use_of_safety_restraints";

import SafetyLeadership from "./components/SafetyLeadership";
import Evaluation from "./components/Evaluation";
import FiveEs from "./components/FiveEs";
import Engineering from "./components/five_es/Engineering";
import Enforcement from "./components/five_es/Enforcement";
import Education from "./components/five_es/Education";
import EmergencyResponse from "./components/five_es/EmergencyResponse";
import Everyone from "./components/five_es/Everyone";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ScrollUpButton />
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div>
            <Topbar />
          </div>
          <div>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/summary" component={Summary} />
                <Route exact path="/content2" component={Content2} />
				
                <Route exact path="/emphasis" component={Emphasis} />
                <Route exact path="/emphasis/aggresive" component={Emphasis_Aggresive} />
				<Route exact path="/emphasis/distracted" component={Emphasis_Distracted} />
				<Route exact path="/emphasis/drowsy" component={Emphasis_Drowsy} />
				<Route exact path="/emphasis/impared" component={Emphasis_Impared} />
				<Route exact path="/emphasis/intersection" component={Emphasis_intersection} />
				<Route exact path="/emphasis/motorcycle" component={Emphasis_motorcycle} />
				<Route exact path="/emphasis/pedesterian" component={Emphasis_pedesterian} />
				<Route exact path="/emphasis/publicoutreach" component={Emphasis_public_outreach} />
				<Route exact path="/emphasis/roadwaydeparture" component={Emphasis_roadway_departure} />
				<Route exact path="/emphasis/speedmanagement" component={Emphasis_speed_management} />
				<Route exact path="/emphasis/teendriving" component={Emphasis_teen_driving} />
				<Route exact path="/emphasis/use_of_safety_restraints" component={Emphasis_use_of_safety_restraints} />
				
                <Route exact path="/safetyleadership" component={SafetyLeadership} />
                <Route exact path="/evaluation" component={Evaluation} />
                <Route exact path="/fivees" component={FiveEs} />
                <Route exact path="/fivees/engineering" component={Engineering} />
                <Route exact path="/fivees/enforcement" component={Enforcement} />
                <Route exact path="/fivees/education" component={Education} />
                <Route exact path="/fivees/emergencyresponse" component={EmergencyResponse} />
                <Route exact path="/fivees/everyone" component={Everyone} />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
