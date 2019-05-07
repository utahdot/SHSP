import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import ScrollUpButton from "./components/ScrollUpButton";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Summary from "./components/Summary";
import Content2 from "./components/Content2";
import Emphasis from "./components/Emphasis";
import Aggressive from "./components/emphasis/Aggresive";
import Distracted from "./components/emphasis/Distracted";
import Impaired from "./components/emphasis/Impaired";
import Motorcycle from "./components/emphasis/Motorcycle";
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
                <Route exact path="/emphasis/aggressive" component={Aggressive} />
                <Route exact path="/emphasis/distracted" component={Distracted} />
                <Route exact path="/emphasis/impaired" component={Impaired} />
                <Route exact path="/emphasis/motorcycle" component={Motorcycle} />
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
