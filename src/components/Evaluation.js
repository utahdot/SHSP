import React, { Component } from "react";
import SeriousInjuryCrashes from "./charts/SeriousInjuryCrashes";
import FatalCrashes from "./charts/FatalCrashes";

class Evaluation extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="text-center">Evaluation</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              Periodic evaluation is a critical element of
              an effective SHSP. But how do we determine
              success? Do we have Zero Fatalities on our
              roads today? Obviously not, but we are making
              progress. Progress in terms of raising awareness,
              changing behavior and saving lives.
            </p>
            <p>
              Independent surveys show that overall awareness
              of the Zero Fatalities program has steadily grown
              from 35 percent in 2006 to 88 percent in 2015.
              Of these people, more than half (56 percent)
              say the Zero Fatalities message has “definitely”
              or “probably” influenced them to avoid the top
              behaviors killing people on the roads. However,
              the ultimate measure of success is saving lives.
            </p>
            <p>
              In order to track the progress of the safety
              areas in the SHSP, most areas are represented
              by a committee, task force or group in which
              members are comprised of experts in their
              area and advocates for safety. Chairs from each
              of these groups meet with the Zero Fatalities
              Executive Committee (which includes members
              of the SHSP Executive Committee from UDOT,
              DPS, and UDOH) at least annually to report on
              current and past activities, accomplishments
              and goals for the future. This allows the Zero
              Fatalities Executive Committee to keep up to date
              on the progress and accomplishments of each
              safety area.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-5 mx-auto">
            <div>
              <SeriousInjuryCrashes />
            </div>
          </div>
          <div className="col-5 mx-auto">
            <div>
              <FatalCrashes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Evaluation;
