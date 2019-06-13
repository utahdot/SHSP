import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import ScrollUpButton from "./components/ScrollUpButton";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Summary from "./components/Summary";
import Content2 from "./components/Content2";

import Continuing from "./components/Continuing";
import Continuing_components from "./components/Continuing_components";

import Emphasis from "./components/Emphasis";
import Emphasis_components from "./components/Emphasis_components";

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
				
				<Route exact path="/continuing" component={Continuing} />
				<Route exact path="/continuing/BicycleSafety" render={(props) => <Continuing_components {...props} area='BicycleSafety' />} />
				<Route exact path="/continuing/ChildSafety" render={(props) => <Continuing_components {...props} area='ChildSafety' />} />
				<Route exact path="/continuing/CommercialMotorVehicleSafety" render={(props) => <Continuing_components {...props} area='CommercialMotorVehicleSafety' />} />
				<Route exact path="/continuing/HighwayRailroadCrossingSafety" render={(props) => <Continuing_components {...props} area='HighwayRailroadCrossingSafety' />} />
				<Route exact path="/continuing/RuralRoadSafety" render={(props) => <Continuing_components {...props} area='RuralRoadSafety' />} />
				<Route exact path="/continuing/SeniorMobilityandSafety" render={(props) => <Continuing_components {...props} area='SeniorMobilityandSafety' />} />
				<Route exact path="/continuing/TransitSystemSafety" render={(props) => <Continuing_components {...props} area='TransitSystemSafety' />} />
				<Route exact path="/continuing/WorkZoneSafety" render={(props) => <Continuing_components {...props} area='WorkZoneSafety' />} />
				
                <Route exact path="/emphasis" component={Emphasis} />
				<Route exact path="/emphasis/AggreasiveDriving" render={(props) => <Emphasis_components {...props} area='AggreasiveDriving' />} />
				<Route exact path="/emphasis/DistractedDriving" render={(props) => <Emphasis_components {...props} area='DistractedDriving' />} />
				<Route exact path="/emphasis/DrowsyDriving" render={(props) => <Emphasis_components {...props} area='DrowsyDriving' />} />
				<Route exact path="/emphasis/ImpairedDriving" render={(props) => <Emphasis_components {...props} area='ImpairedDriving' />} />
				<Route exact path="/emphasis/IntersectionSafety" render={(props) => <Emphasis_components {...props} area='IntersectionSafety' />} />
				<Route exact path="/emphasis/MotorcycleSafety" render={(props) => <Emphasis_components {...props} area='MotorcycleSafety' />} />
				<Route exact path="/emphasis/PedestrianSafety" render={(props) => <Emphasis_components {...props} area='PedestrianSafety' />} />
				<Route exact path="/emphasis/PublicOutreachandEducation" render={(props) => <Emphasis_components {...props} area='PublicOutreachandEducation' />} />
				<Route exact path="/emphasis/RoadwayDepartureCrashes" render={(props) => <Emphasis_components {...props} area='RoadwayDepartureCrashes' />} />
				<Route exact path="/emphasis/SpeedManagement" render={(props) => <Emphasis_components {...props} area='SpeedManagement' />} />
				<Route exact path="/emphasis/TeenDrivingSafety" render={(props) => <Emphasis_components {...props} area='TeenDrivingSafety' />} />
				<Route exact path="/emphasis/UseofSafetyRestraints" render={(props) => <Emphasis_components {...props} area='UseofSafetyRestraints' />} />

				
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
