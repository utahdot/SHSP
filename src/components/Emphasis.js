import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Emphasis extends Component {
  render() {
	  
	const data = [
    	{
			title: 'Aggresive Driving',
			desc: 'Continue or increase efforts to fund aggressive driving enforcement and educational campaigns.',
			fig_url: 'img/aggresive-driving.png',
			url: 'AggreasiveDriving'
		},    	
		{
			title:'Distracted driving',
			desc:'Reduce the number of serious injury and fatal crashes related to driver distraction.',
			fig_url: 'img/distracted-driving.png',
			url: 'DistractedDriving'
		},    	
		{
			title:'Driving drowsy',
			desc:'Maintain efforts to reduce drowsy driving-related serious injury and fatal crashes.',
			fig_url: 'img/drowsy-driving.png',
			url: 'DrowsyDriving'
		},    	
		{
			title:'Impared Driving',
			desc:'Continue to reduce alcohol and drug-related serious injury and fatal crashes.',
			fig_url: 'img/impaired-driving.png',
			url: 'ImpairedDriving'
		},
		{
			title:'Intersection Safety',
			desc:'Efforts must be made to reduce the frequency and/or severity of crashes within intersections.',
			fig_url: 'img/intersection-safety.png',
			url: 'IntersectionSafety'
		},
		{
			title:'Motorcylce Safety',
			desc:'Efforts must be made to reduce motorcycle serisous injury and fatal crashes.',
			fig_url: 'img/motorcycle-safety.png',
			url: 'MotorcycleSafety'
		},
		{
			title:'Pedestrian Safety',
			desc:'Efforts must be made to prevent pedestrian related crashes by implementing a comprehensive plan to provide safer pedestrian travel.',
			fig_url: 'img/pedestrian-safety.png',
			url: 'PedestrianSafety'
		},
		{
			title:'Public Outreach and Education',
			desc:'Partnering efforts must continue to spread the message to Utah drivers about their role in eliminating these preventable crashes.  Through communication, education and community outreach we can get everyone to bring the safe driving message home. ',
			fig_url: 'img/public-outreach.png',
			url: 'PublicOutreachandEducation'
		},
		{
			title:'Roadway Departure Crashes',
			desc:'Work should continue to keep vehicles on the roadway and in their proper lanes. When vehicles do leave the roadway, efforts should be made to reduce the possibility and/or severity of crashes.',
			fig_url: 'img/roadway-departure.png',
			url: 'RoadwayDepartureCrashes'
		},
		{
			title:'Speed Management',
			desc:'Efforts must be focused on reducing speeding on the roads and the associated elements of reckless and careless attitudes that often accompany such driver behavior. ',
			fig_url: 'img/speed-management.png',
			url: 'SpeedManagement'
		},
		{
			title:'Teen Driving Safety',
			desc:'Focus efforts on innovative education methods to improve teen driver capabilities.',
			fig_url: 'img/teen-driving-safety.png',
			url: 'TeenDrivingSafety'
		},
		{
			title:'Use of Safety Restraints',
			desc:'On May 12, 2015 the primary seat belt law went into effect. UDOT, the Utah Department of Public Safety and their partners have been dedicated to increasing education and enforcement to help save lives. Efforts must continue to secure a permanent primary seat belt law for those who continue to ride unbuckled.',
			fig_url: 'img/use-of-safety-restraints.png',
			url: 'UseofSafetyRestraints'
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
				<h5 className="card-title">{p.title}</h5>
				<p className="card-text">
				  {p.desc}
				</p>
				<NavLink className="btn btn-outline-primary" to={"/emphasis/" + p.url}>
				  {p.title}
				</NavLink>
			  </div>
			</div>
		  </div>
		);
		if (i % 4 === 3) {
			acc.push(<div className="row d-flex justify-content-center text-center">{rowContents}</div>);
			rowContents = [];
		}
		return acc;
	},[])
	contents.push(<div className="row d-flex justify-content-center text-center">{rowContents}</div>);
	
	
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-4">
            <h3 className="text-center">Empahsis Safety Areas</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-4 text-center">
            <p>
              Emphasis safety areas consist of 12 programs that will be given
              added attention and emphasis by the safety organizations for the
              next five years
            </p>
          </div>
        </div>
		
		{contents}		
        
      </div>
    );
  }
}
export default Emphasis;
