import React, { Component } from "react";
import BarChart from "./charts/BarChart";

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgba(255,99,132,0.2)",
//       borderColor: "rgba(255,99,132,1)",
//       borderWidth: 1,
//       hoverBackgroundColor: "rgba(255,99,132,0.4)",
//       hoverBorderColor: "rgba(255,99,132,1)",
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };


class EmphasisComponents extends Component {
  render() {
	const areas = {
		'AggreasiveDriving': {
			title: 'Aggreasive Driving',
			challenge: 'Aggressive driving includes deliberate behaviors such as speeding, tailgating, weaving in and out of lanes, failure to yield, running red lights/stop signs and road rage continue to plague our roads. As congestion and travel delays increase, so does aggressive driving.',
			direction: 'Continue or increase efforts to fund aggressive driving enforcement and educational campaigns.'
		},
		'DistractedDriving': {
			title: 'Distracted Driving',
			challenge: 'Fatalities related to distracted driving are a growing problem in the State. Distracted driving violations and crashes are under-reported due to deficiencies in crash reporting and the difficulty of attributing crashes to distractions. Unfortunately, drivers are increasingly engaged in other activities while driving, especially using interactive electronic devices.',
			direction: 'Reduce the number of serious injury and fatal crashes related to driver distraction.'
		},
		'DrowsyDriving': {
			title: 'Drowsy Driving',
			challenge: 'Serious injuries and fatalities related to drowsy driving are a top concern in Utah. Unfortunately, drowsy driving violations and crashes are under-reported due to deficiencies in crash reporting and the difficulty of attributing crashes to sleepiness.',
			direction: 'Maintain efforts to reduce drowsy driving-related serious injury and fatal crashes.'
		},
		'ImpairedDriving': {
			title: 'Impaired Driving',
			challenge: 'While the fact that impaired driving is recognized as being an incredibly dangerous behavior, fatal crashes due to alcohol and drugs continue to occur. To add to the problem, the number of fatalities where drivers have tested positive for drugs is showing an increasing trend.',
			direction: 'Continue to reduce alcohol and drug-related serious injury and fatal crashes.'
		},
		'IntersectionSafety': {
			title: 'Intersection Safety',
			challenge: 'Intersection crashes are the most common crash type in urban areas. These crashes range from numerous rear-end crashes to severe right-angle crashes. Other causes for crashes are: improper lookout by drivers and vulnerable users, running red lights, running stop signs, sight distance issues, speed and following too closely. Intersection safety can be measured in two different ways. One is to identify intersection locations that have a high number of crashes. The other is to identify locations where serious injuries and fatalities occur.',
			direction: 'Efforts must be made to reduce the frequency and/or severity of crashes within intersections.'
		},
		'MotorcycleSafety': {
			title: 'Motorcycle Safety',
			challenge: 'As a result of more individuals looking to motorcycles as an alternative transportation mode, motorcycle–related fatalities have increased 29 percent in the last five years. Motorcyclists accounted for 2 percent of crashes and 14 percent of deaths. Utah’s current helmet law only applies to persons under the age of 18 who are required to wear a USDOT approved helmet while operating or riding a motorcycle.',
			direction: 'Efforts must be made to reduce motorcycle serious injury and fatal crashes.'
		},
		'PedestrianSafety': {
			title: 'Pedestrian Safety',
			challenge: 'While pedestrian crashes account for just one percent of all crashes, pedestrian fatalities have increased 47 percent over the past five years and they account for 15 percent of all traffic related fatalities. More attention to education and infrastructure must be given to this area in order to continue reducing pedestrian fatalities.',
			direction: 'Efforts must be made to prevent pedestrian related crashes by implementing a comprehensive plan to provide safer pedestrian travel.'
		},
		'PublicOutreachandEducation': {
			title: 'Public Outreach and Education',
			challenge: 'More than 90 percent of all crashes in Utah are behavior related. While novice drivers are involved in nearly a quarter of these crashes, even experienced drivers can get too comfortable behind the wheel and take risks that put them and others on the road in danger. Studies show that the top driving behaviors that are killing people on Utah’s roads include: drowsy driving, distracted driving, aggressive driving, impaired driving and not buckling up.',
			direction: 'Partnering efforts must continue to spread the message to Utah drivers about their role in eliminating these preventable crashes. Through communication, education and community outreach we can get everyone to bring the safe driving message home.'
		},
		'RoadwayDepartureCrashes': {
			title: 'Roadway Departure Crashes',
			challenge: 'In Utah, more than 40 percent of all fatalities are associated with roadway departures. In contrast, the total number of roadway departure crashes is only 15 percent. These crashes typically result from drowsy, distracted, impaired and aggressive driving, though there are many other contributing factors.',
			direction: 'Work should continue to keep vehicles on the roadway and in their proper lanes. When vehicles do leave the roadway, efforts should be made to reduce the possibility and/or severity of crashes.'
		},
		'SpeedManagement': {
			title: 'Speed Management',
			challenge: 'Speeding has become a major concern to the overall traffic safety environment and continues to be one of the leading contributing factors for serious injury and fatal crashes in Utah. With aggressive enforcement and public education efforts, serious injuries and fatalities can be reduced.',
			direction: 'Efforts must be focused on reducing speeding on the roads and the associated elements of reckless and careless attitudes that often accompany such driver behavior'
		},
		'TeenDrivingSafety': {
			title: 'Teen Driving Safety',
			challenge: 'Teen drivers (ages 15–19) account for a disproportionate number of serious injuries and fatal crashes. This fact has been associated with young drivers’ inexperience, distractions, and driving behaviors. Only about seven percent of all licensed drivers in Utah fall into the  younger driver category, yet they account for 20 percent of all motor vehicle crashes.',
			direction: 'Focus efforts on innovative education methods to improve teen driver capabilities.'
		},
		'UseofSafetyRestraints': {
			title: 'Use of Safety Restraints',
			challenge: 'In 2015, the use of safety restraints in the state reached 87 percent. However, nearly half of motor vehicle occupants killed were not wearing safety restraints. Occupants in rural crashes are over three times more likely to be unrestrained than occupants in urban crashes.',
			direction: 'On May 12, 2015 the primary seat belt law went into effect. UDOT, the Utah Department of Public Safety and their partners have been dedicated to increasing education and enforcement to help save lives. Efforts must continue to secure a permanent primary seat belt law for those who continue to ride unbuckled.'
		},
	};
	
	const area = this.props.area;
	
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4">
            <h3 className="text-center">
              {areas[area].title}{" "}
              <span className="text-danger">Emphasis Area</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6>CHALLENGE</h6>
            <p>
			{areas[area].challenge}
            </p>
            <h6>DIRECTION</h6>
            <p>
              {areas[area].challenge}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EmphasisComponents;
