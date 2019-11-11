import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Continuing extends Component {
  render() {
	
	const data = [
    	{
			title: 'Bicycle Safety',
			desc: 'Continue addressing bicycle user needs on transportation facilities. Increase efforts for bicyclist and motorist education.',
			fig_url: 'img/Continuing safety areas/bicycle-safety.jpg',
			url: 'BicycleSafety'
		},  
		{
			title:'Commercial Motor Vehicle Safety',
			desc:'Sustain efforts to reduce commercial vehicle serious injuries and fatal crashes. The Federal Motor Carriers Safety Administration, UDOT’s Motor Carrier Division and the Utah Highway Patrol oversee all safety issues in Utah.',
			fig_url: 'img/Continuing safety areas/commercial-motor-vehicle-safety.jpg',
			url: 'CommercialMotorVehicleSafety'
		},		
		{
			title:'Highway Railroad Crossing Safety',
			desc:'Continue efforts to reduce crashes at highway railroad crossings through education, engineering, and enforcement.',
			fig_url: 'img/Continuing safety areas/highway-roadway-crossing-safety.jpg',
			url: 'HighwayRailroadCrossingSafety'
		},
		{
			title:'Rural Road Safety',
			desc:'Special consideration must be given to improving the rural roadway system. Special consideration should also be given to improving the emergency service provider resources and capabilities to provide appropriate patient care.',
			fig_url: 'img/Continuing safety areas/rural-road-safety.jpg',
			url: 'RuralRoadSafety'
		},
		{
			title:'Transit System Safety',
			desc:'Special consideration must be given to improving the safety of the transit system including rail and bus travel.',
			fig_url: 'img/Continuing safety areas/transit-system-safety.jpg',
			url: 'TransitSystemSafety'
		},
		{
			title:'Work Zone Safety',
			desc:'Efforts must be made to reduce the possibility and/or severity of crashes. Practices in traffic control or work zone management that lead to reduced work zone safety must be identified and limited.',
			fig_url: 'img/Continuing safety areas/work-zone-safety.jpg',
			url: 'WorkZoneSafety'
		},
		{
			title:'Connected and Autonomous Vehicles',
			desc:'Connected and autonomous vehicle technologies have the potential to significantly change surface transportation as we know it today. Externalities associated with driving including crashes, traffic congestion, air pollution, greenhouse gas emissions and energy consumptions may significantly diminish as connected and autonomous vehicle technologies are introduced. The adoption of these technologies will help us reach our goal of Zero Fatalities.',
			fig_url: 'img/Continuing safety areas/autonomous-vehicles.jpg',
			url: 'ConnectedandAutonomousVehicles'
		},
		{
			title:'Emergency Services',
			desc:'Sustain commitment to, and cooperation with, the Incident Management System. Strengthen partnerships that assist law enforcement and emergency services efforts. Coordinate prevention efforts with existing emergency services programs.',
			fig_url: 'img/Continuing safety areas/EMERGENCY-SERVICES.jpg',
			url: 'EmergencyServices'
		},
		{
			title:'Traffic Incident Management',
			desc:'Promote a more active role from judicial partners, making stronger efforts to ensure a violator is correctly charged in cases of second or subsequent offenses and exploring real-time access to traffic violation history for court purposes. Furthermore, continue enforcement of approved programs to educate traffic violators on the dangers of aggressive, impaired and distracted driving while discontinuing the practice of dismissing lesser traffic charges and continuing to pursue mechanisms for adequate ignition interlock monitoring. ',
			fig_url: 'img/Continuing safety areas/judicial-system.jpg',
			url: 'TrafficIncidentManagement'
		},
		{
			title:'Traffic Data',
			desc:'Through the Utah Traffic Records Advisory Committee (UTRAC), we can maximize the overall quality of safety data and analysis based on State traffic records across all six core systems: crash,vehicle, driver, roadway, citation & adjudication and injury. Working together helps to effectively utilize existing data resources while identifying data collection and analysis opportunities.',
			fig_url: 'img/Continuing safety areas/traffic-data.jpg',
			url: 'TrafficData'
		},
		{
			title:'Judicial System',
			desc:'Commit to Traffic Incident Management (TIM) throughout Utah, and improve quick clearance and queue protection efforts. Coordinate with all first responders to ensure that quick clearance and queueprotection are primary concerns.',
			fig_url: 'img/Continuing safety areas/traffic-incident-management.jpg',
			url: 'JudicialSystem'
		},
		{
			title:'Drowsy Driving',
			desc:'Maintain efforts to reduce drowsy driving-related serious injury and fatal crashes.',
			fig_url: 'img/drowsy-driving.png',
			url: 'DrowsyDriving'
		},
    ];
	
	let rowContents = [];
	const contents = data.reduce((acc, p, i) => {
		rowContents.push(
		  <div className="col-xxl-3 mb-xxl-5 col-xl-6 mb-xl-5 col-12 mb-4 border-0">
			<div className="card h-100">
			  <img
				className="card-img-top"
				src={p.fig_url}
				alt={p.title}
			  />
			  <div className="card-body">
				<h5 className="card-title font-weight-bold">{p.title}</h5>
				<p className="card-text">
				  {p.desc}
				</p>
			  </div>
			  <div className="card-footer">
				<NavLink className="btn btn-outline-danger" to={"/continuing/" + p.url}>
				  Learn more
				</NavLink>
			  </div>
			</div>
		  </div>
		);
		if (i % 3 === 2) {
			acc.push(<div className="row d-flex justify-content-center text-center">{rowContents}</div>);
			rowContents = [];
		}
		return acc;
	},[])
	contents.push(<div className="row d-flex justify-content-center text-center">{rowContents}</div>);
	
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4 my-4">
            <h1 className="text-center text-danger text-uppercase">Continuing Safety Areas</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-4 text-center justify-content">
            <p>
              Continuing safety areas address programs or processes currently underway within the safety agencies. These programs will continue to be supported and enhanced.
            </p>
          </div>
        </div>
		
		{contents}

      </div>
    );
  }
}
export default Continuing;
