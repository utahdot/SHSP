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
		'BicycleSafety': {
			title: 'Bicycle Safety',
			challenge: 'Bicycle travel is continuing to increase in popularity. With more bicyclists on the road, more safety education is needed for both bicyclists and drivers. Bicycle safety presents an opportunity for a partnership with many organizations to improve this mode of travel. Important components of this area are promoting helmet use and education directed to both motorists and bicyclists.',
			direction: 'Continue addressing bicycle user needs on transportation facilities. Increase efforts for bicyclist and motorist education.'
		},
		'CommercialMotorVehicleSafety': {
			title: 'Commercial Motor Vehicle Safety',
			challenge: 'Each year, an average of 29 people die on Utah’s roads in commercial motor vehicle-related crashes. These collisions involving CMVs and passenger vehicles are more likely to be severe due to the size differences between the two vehicles. While the perception is that the truckers are causing these crashes, in actuality, 3 out of 4 times, the crashes are the result of the passenger vehicle drivers.',
			direction: 'Sustain efforts to reduce commercial vehicle serious injuries and fatal crashes. The Federal Motor Carriers Safety Administration, UDOT’s Motor Carrier Division and the Utah Highway Patrol oversee all safety issues in Utah.'
		},
		'HighwayRailroadCrossingSafety': {
			title: 'Highway Railroad Crossing Safety',
			challenge: 'While highway railroad crossing crashes represent only a small number of the total crashes in Utah, they are some of the most severe. According to the Federal Railroad Administration, there were 66 crashes at railroad crossings in Utah from 2011 to 2015. Those crashes resulted in 15 fatalities and 23 injuries. As the number of trains in Utah increase with expanded transit, commuter and freight services, the probability of railroad crossing crashes may also increase. ',
			direction: 'Continue efforts to reduce crashes at highway railroad crossings through education, engineering, and enforcement.'
		},
		'RuralRoadSafety': {
			title: 'Rural Road Safety',
			challenge: 'Many roadway departure fatalities occur on rural roads. Special attention must be given to the safety of rural roadways on and off the State system. To effectively reduce statewide fatalities, specific safety projects focused on rural roads must be completed. In addition, the availability of well trained and equipped emergency service providers is limited in rural areas.',
			direction: 'Special consideration must be given to improving the rural roadway system. Special consideration should also be given to improving the emergency service provider resources and capabilities to provide appropriate patient care. <br> The federal High Risk Rural Roads special rule places additional emphasis on rural road safety. In Utah, a High Risk Rural Road is identified as a rural major or minor collector or a rural local road that exhibits significant safety risk based on: <br>  (1) A concentration of crashes at a spot location or on a corridor that can be mitigated by proven safety countermeasures; <br> (2) Roadway attributes (as identified in a road safety audit, engineering study, field review, or similar) that present a risk to drivers, pedestrians, or bicyclists that can be mitigated by proven safety countermeasures; and/or <br> (3) A quantitative safety model, such as usRAP/ViDA.'
		},
		'TransitSystemSafety': {
			title: 'Transit System Safety',
			challenge: 'As the transit system grows, more conflicts will arise between motor vehicles, transit vehicles and pedestrians. The potential for large catastrophic events must be considered when advancing safety improvements to the system. In addition to large events, day-to-day operations need to be addressed, such as transit buses making frequent stops and merges in and out of traffic along roads and highways.',
			direction: 'Special consideration must be given to improving the safety of the transit system including rail and bus travel.'
		},
		'WorkZoneSafety': {
			title: 'Work Zone Safety',
			challenge: 'Utah work zone related crashes and fatalities occur in two areas: encroachments into the work zone and crashes outside the work zone but influenced by the area. Most of the injuries and fatalities that occur in work zones are drivers and passengers — not construction workers.',
			direction: 'Efforts must be made to reduce the possibility and/or severity of crashes. Practices in traffic control or work zone management that lead to reduced work zone safety must be identified and limited.'
		},
		'ConnectedandAutonomousVehicles': {
			title: 'Connected and Autonomous Vehicles',
			challenge: 'In order to keep up with the progress being made in this area, it’s important that we understand how these new technologies will change the approach to designing, managing and operating existing and planned transportation infrastructure in addition to the following: <ul><li>Impacts to design and infrastructure decisions</li><li>Real-time data usage</li><li>Impacts to existing infrastructure</li><li>Impacts to workforce training needs</li><li>Impacts to driver licensing</li><li>Communication infrastructure investments</li><li>Impacts to freight flow</li><li>Impacts to laws, policies & procedures</li><li>Determining liability & fault in a crash</li></ul>',
			direction: 'Connected and autonomous vehicle technologies have the potential to significantly change surface transportation as we know it today. Externalities associated with driving including crashes,traffic congestion, air pollution, greenhouse gas emissions and  energy consumptions may significantly diminish as connected and autonomous vehicle technologies are introduced. The adoption of these technologies will help us reach our goal of Zero Fatalities.'
		},
		'EmergencyServices': {
			title: 'Emergency Services',
			challenge: 'Timely emergency response, appropriate treatment and rapid transport to a healthcare facility are all major components to survivability in motor vehicle collisions. Efforts must be made to promote the coordination and involvement of emergency services into transportation safety and injury prevention efforts. Ensure appropriately trained and equipped emergency service providers are readily available within a coordinated and inclusive trauma system to meet the needs of all patients, including special populations.',
			direction: 'Sustain commitment to, and cooperation with, the Incident Management System. Strengthen partnerships that assist law enforcement and emergency services efforts. Coordinate prevention efforts with existing emergency services programs.'
		},
		'TrafficIncidentManagement': {
			title: 'Traffic Incident Management',
			challenge: 'The Federal Highway Administration estimates that approximately 20% of all highway crashes are secondary incidents and that 18% of these result in fatalities. Reducing the time to clear an incident— be it a crash, road debris or disabled vehicle—and improving the advance warning for incidents are the keys to minimizing secondary crashes',
			direction: 'Commit to Traffic Incident Management (TIM) throughout Utah, and improve quick clearance and queue protection efforts. Coordinate with all first responders to ensure that quick clearance and queue protection are primary concerns.'
		},
		'TrafficData': {
			title: 'Traffic Data',
			challenge: 'A key to reducing the number of serious injuries and fatalities on Utah roadways is data-driven, science-based decision making that relies on the highest quality traffic records data. This is supported by the creation and management of integrated traffic records data and standards.',
			direction: 'Through the Utah Traffic Records Advisory Committee (UTRAC), we can maximize the overall quality of safety data and analysis based on State traffic records across all six core systems: crash, vehicle, driver, roadway, citation & adjudication and injury. Working together helps to effectively utilize existing data resources while identifying data collection and analysis opportunities.'
		},
		'JudicialSystem': {
			title: 'Judicial System',
			challenge: 'Justice and District Courts do not place a high priority on nonmoving traffic violations, such as occupant restraint and safety equipment, because of the focus on more grievous violations. Other challenges include assuring accurate adjudication history to facilitate charging second and subsequent offenders appropriately, and the lack of real-time access to traffic violation history.',
			direction: 'Promote a more active role from judicial partners, making stronger efforts to ensure a violator is correctly charged in cases of second or subsequent offenses and exploring real-time access to traffic violation history for court purposes. Furthermore, continue enforcement of approved programs to educate traffic violators on the dangers of aggressive, impaired and distracted driving while discontinuing the practice of dismissing lesser traffic charges and continuing to pursue mechanisms for adequate ignition interlock monitoring. '
		},

	};
	
	const area = this.props.area;
	
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4">
            <h3 className="text-center">
              {areas[area].title}{" "}
              <span className="text-danger">Continuing Safety Areas</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6>CHALLENGE</h6>
            <p dangerouslySetInnerHTML={{__html: areas[area].challenge}} />
            <h6>DIRECTION</h6>
            <p dangerouslySetInnerHTML={{__html: areas[area].direction}} />
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
