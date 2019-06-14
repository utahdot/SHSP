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
		'ChildSafety': {
			title: 'Child Safety',
			challenge: 'More than 2,000 children in Utah are injured or killed each year while walking, biking or riding in motor vehicles. As children age, they are less likely to ride in an appropriate car seat or booster seat. Improper use of these devices remain high causing unnecessary injuries or death.',
			direction: 'Efforts must be made to educate children and their parents about safety in and around cars and to reduce the possibility and/or severity of crashes involving children.'
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
		'SeniorMobilityandSafety': {
			title: 'Senior Mobility and Safety',
			challenge: 'The number of seniors using our transportation system is increasing. Medical conditions, medication usage and reduced physical function can increase the risk of crashes and injury among older adults. Efforts must be made to ensure the mobility, accessibility and safety for this age group. ',
			direction: 'Special consideration must be given to improving the highway system to accommodate older drivers and their needs.'
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
            <p>
			{areas[area].challenge}
            </p>
            <h6>DIRECTION</h6>
            <p>
              {
				areas[area].direction.split('<br>').map((item, i) =>{
					return(<p>{item}</p>)
				})
			  }
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
