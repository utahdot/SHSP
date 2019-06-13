import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Continuing extends Component {
  render() {
	
	const data = [
    	{
			title: 'Bicycle Safety',
			desc: 'Continue addressing bicycle user needs on transportation facilities. Increase efforts for bicyclist and motorist education.',
			fig_url: '/img/Continuing safety areas/bicycle-safety.jpg',
			url: 'BicycleSafety'
		},    	
		{
			title:'Child Safety',
			desc:'Efforts must be made to educate children and their parents about safety in and around cars and to reduce the possibility and/or severity of crashes involving children.',
			fig_url: '/img/Continuing safety areas/child-safety.jpg',
			url: 'ChildSafety'
		},    	
		{
			title:'Commercial Motor Vehicle Safety',
			desc:'Sustain efforts to reduce commercial vehicle serious injuries and fatal crashes. The Federal Motor Carriers Safety Administration, UDOT’s Motor Carrier Division and the Utah Highway Patrol oversee all safety issues in Utah.',
			fig_url: '/img/Continuing safety areas/commercial-motor-vehicle-safety.jpg',
			url: 'CommercialMotorVehicleSafety'
		},    	
		{
			title:'Highway Railroad Crossing Safety',
			desc:'Continue efforts to reduce crashes at highway railroad crossings through education, engineering, and enforcement.',
			fig_url: '/img/Continuing safety areas/bicycle-safety.jpg',
			url: 'HighwayRailroadCrossingSafety'
		},
		{
			title:'Rural Road Safety',
			desc:'Special consideration must be given to improving the rural roadway system. Special consideration should also be given to improving the emergency service provider resources and capabilities to provide appropriate patient care.',
			fig_url: '/img/Continuing safety areas/rural-road-safety.jpg',
			url: 'RuralRoadSafety'
		},
		{
			title:'Senior Mobility and Safety',
			desc:'Special consideration must be given to improving the highway system to accommodate older drivers and their needs.',
			fig_url: '/img/Continuing safety areas/senior-mobility-and-safety.jpg',
			url: 'SeniorMobilityandSafety'
		},
		{
			title:'Transit System Safety',
			desc:'Special consideration must be given to improving the safety of the transit system including rail and bus travel.',
			fig_url: '/img/Continuing safety areas/transit-system-safety.jpg',
			url: 'TransitSystemSafety'
		},
		{
			title:'Work Zone Safety',
			desc:'Efforts must be made to reduce the possibility and/or severity of crashes. Practices in traffic control or work zone management that lead to reduced work zone safety must be identified and limited.',
			fig_url: '/img/Continuing safety areas/work-zone-safety.jpg',
			url: 'WorkZoneSafety'
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
				<NavLink className="btn btn-outline-primary" to={"/continuing/" + p.url}>
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
            <h3 className="text-center">Continuing Safety Areas</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-4 text-center">
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
