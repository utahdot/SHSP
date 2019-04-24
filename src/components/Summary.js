import React, { Component } from "react";

class Summary extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Executive Summary</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3 text-center">
            <img src="img/mvw.jpg" alt="Mountain View Corridor" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              In 2003, several Utah agencies came together to form the Utah
              Safety Leadership Executive Committee (USLEC). This united effort
              began years before there existed a federal requirement to form
              such a team. The group began meeting on a regular basis to address
              the growing number of traffic-related fatalities. The goal was to
              create a comprehensive, integrated plan aimed at reducing serious
              injuries and fatalities, with the ultimate goal of Zero Fatalities
              on Utah’s roads. To maximize heir efforts, additional safety
              advocates were asked to join the Team. This new, expanded group is
              called the Utah Safety Leadership Committee, which continues to
              row as our program develops. This united approach is working.
              Traffic fatalities in Utah have continued on a declining trend for
              the past decade.
            </p>
            <p>
              Utah’s ultimate goal is Zero Fatalities. The loss of even one life
              is too many. Think about it this way: When you ask someone how
              many of their loved ones they cant to lose on the road this year,
              everyone has the same answer: zero. In order to reach that goal,
              USLEC identified five behaviors that contribute to fatalities on
              Utah’s roads— drowsy driving, distracted driving, impaired
              driving, aggressive driving and not buckling up. The Zero
              Fatalities goal is the foundation of the Utah trategic Highway
              Safety Plan (SHSP). All of the focus areas of the SHSP are
              designed to help Utah reach its ultimate goal – Zero Fatalities.
              The SHSP is the culmination of the joint efforts of all traffic
              safety organizations in Utah and sets the direction for our future
              collective safety efforts. It cannot be focused on one
              organization or one specific area of concern. The Plan recognizes
              the importance each discipline plays in improving safety. Each
              organization has developed their own safety plan and
              implementation efforts in their specific area. As the various
              groups coordinate their safety plans, it leverages our limited
              resources, obtaining maximum impact.
            </p>
            <p>
              Utah’s goal of Zero Fatalities supports larger goals nationwide
              and globally. The national strategy on highway safety, Toward Zero
              Deaths, sets the vision for traffic fatalities in the United
              States. The global Decade of Action strives to prevent five
              million road traffic deaths globally by 2020. For more
              information, visit
              <a href="decadeOfAction.org"> DecadeOfAction.org</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
