import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
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
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
