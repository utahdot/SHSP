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
import SafetyLeadership from "./components/SafetyLeadership";
import Evaluation from "./components/Evaluation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ScrollUpButton />
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div>
              <div className="content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/summary" component={Summary} />
                  <Route exact path="/content2" component={Content2} />
                  <Route exact path="/emphasis" component={Emphasis} />
                  <Route
                    exact
                    path="/aggresive"
                    component={Emphasis_Aggresive}
                  />
                  <Route
                    path="/safetyleadership"
                    component={SafetyLeadership}
                  />
                  <Route path="/evaluation" component={Evaluation} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
