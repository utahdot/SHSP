import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ScrollUpButton from "./components/ScrollUpButton";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Summary from "./components/Summary";
import Content2 from "./components/Content2";
import Emphasis from "./components/Emphasis";
import Emphasis_Aggresive from "./components/emphasis/Aggresive";
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
      <BrowserRouter>
        <ScrollUpButton />
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/summary" component={Summary} />
                <Route path="/content2" component={Content2} />
                <Route path="/emphasis" component={Emphasis} />
                <Route path="/aggresive" component={Emphasis_Aggresive} />
                <Route path="/safetyleadership" component={SafetyLeadership} />
                <Route path="/evaluation" component={Evaluation} />
                <Route path="/fivees" component={FiveEs} />
                <Route path="/engineering" component={Engineering} />
                <Route path="/enforcement" component={Enforcement} />
                <Route path="/education" component={Education} />
                <Route path="/emergencyresponse" component={EmergencyResponse} />
                <Route path="/everyone" component={Everyone} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
