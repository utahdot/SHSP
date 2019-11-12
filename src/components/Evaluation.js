import React, { Component } from "react";
import SeriousInjuryCrashes from "./charts/SeriousInjuryCrashes";
import FatalCrashes from "./charts/FatalCrashes";
import ReduceFatalities from "./charts/ReduceFatalities";

class Evaluation extends Component {
  render() {
    return (
      <div className="highlight-bar-top">
        <div className="page-header">
          <h1 className="text-center text-uppercase">Evaluation</h1>
        </div>
      <div className="main-content text-center">
        <div className="row mb-3">
          <div className="col-12">
            <p>
            Evaluation is a critical element of
            an effective SHSP. But how do we determine
            success? Do we have Zero Fatalities on our
            roads today? Obviously not, but we are making
            progress. Progress in terms of raising awareness,
            changing behavior and saving lives.
            </p>
            <p>
              The ultimate measure of success is saving lives.
              In order to track the progress of the safety
              areas in the SHSP, most areas are represented
              by a committee, task force or group in which
              members are comprised of experts in their
              area and advocates for safety. Within the emphasis areas, groups will be able to track their progress toward meeting the goals that they have set and evaluate opportunities for improvement based on the data or information that they see.
            </p>
            <p>
              Chairs from each
              of these groups meet with the Zero Fatalities
              Executive Committee (which includes members
              of the SHSP Executive Committee from UDOT,
              DPS, and UDOH) at least annually to discuss opportunities for collaboration.
            </p>
            <p>
              In 2017, the UDOT Executive Director, Carlos Braceras, challenged UDOT to reach 200 fatalities by the end of 2021, which is a 6.8 percent reduction in fatalities per year since 2017. The state of Utah has also taken on this goal. The following graph shows how we will reduce fatalities each year as we move towards our ultimate goal of Zero Fatalities. Another goal that we are working toward is reaching a fatality rate of .55% by 2024, leading the nation in safety. At the end of 2018, the fatality rate was .79%.
            </p>
            <p>
              The impact of a serious injury crash can be life changing for individuals in the crash and their families. According to the National Safety Council, the average cost of a serious injury in an automobile crash is: $208,500. On average, there are 1,476 people seriously injured in crashes in Utah every year, which means that Utahns are paying more than $300 million in comprehensive costs for serious injuries. This is why the state of Utah has set a goal of reducing serious injury crashes by 6.8% per year, with the ultimate goal of reaching zero serious injuries.
            </p>
            <p>
              The Utah Strategic Highway Safety Plan does not address every safety strategy currently being implemented in the state, but focuses primarily upon strategies with the greatest potential to reduce crashes and injuries. These strategies are implemented in locations identified using an evidence-based approach that takes into account crash history, system characteristics, environmental conditions and driver behaviors. The Plan acts as the guiding document that influences the development of specific goals, strategies and performance measures for the individual organizations. It does not replace the existing documents for each group, but it should reference and guide development of other internal documents as necessary. The process continues down through the organizations, resulting in detailed programs and plans that are implemented and finally evaluated to measure the success of reducing serious injury and fatal crashes.
            </p>
          </div>
        </div>
        <div className="row mb-5">
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
        <div className="row mb-3">
          <div className="col-12">
            <p>
              The American Association of State Highway
              and Transportation Officials’ (AASHTO) mission
              is to “enable the nation and member states to
              have a world-class highway network as part
              of a safe, efficient, and sustainable multimodal transportation system supporting the
              nation’s economy and quality of life.” One of
              their objectives to reach their goal is to reduce
              fatalities by 50% by 2030. That equates to a
              2.5 percent decrease in fatalities annually.
            </p>
            <p>
              In our quest to reach Zero Fatalities, the State of
              Utah has adopted the AASHTO goal of reducing
              fatalities by 2.5 percent per year. The following
              graph shows how we will reduce fatalities each
              year as we move towards our ultimate goal of
              Zero Fatalities.
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-8 mx-auto">
            <div>
              <ReduceFatalities />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Evaluation;
