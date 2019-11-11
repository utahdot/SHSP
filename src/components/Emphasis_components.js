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
		'AggressiveDriving': {
			title: 'Aggressive Driving',
			challenge: 'Aggressive driving includes deliberate behaviors such as speeding, tailgating, weaving in and out of lanes, failure to yield, running red lights/stop signs and road rage continue to plague our roads. As congestion and travel delays increase, so does aggressive driving.',
			direction: 'Continue or increase efforts to fund aggressive driving enforcement and educational campaigns.',
			education: 'Educating novice and experienced drivers about the dangers of aggressive driving. Support aggressive driving programs at high schools, businesses and community outreach events.',
			enforcement: 'Continue to support aggressive driving mitigation programs. Continue to conduct aggressive driving enforcement campaigns.',
			engineering: 'Use variable message signs to show anti-aggressive driving messages. Improve signal coordination to produce efficient and increased traffic flow on roadway corridors.',
			emergencyMedicalServices: 'Increase involvement of emergency medical service providers in aggressive driving programs and community events.',
			leaders: 'Utah Highway Patrol UDPS, Highway Safety Office Utah Department of Transportation, Statewide Local Law Enforcement Agencies, Zero Fatalities'
		},
		'DistractedDriving': {
			title: 'Distracted Driving',
			challenge: 'Fatalities related to distracted driving are a growing problem in the State. Distracted driving violations and crashes are under-reported due to deficiencies in crash reporting and the difficulty of attributing crashes to distractions. Unfortunately, drivers are increasingly engaged in other activities while driving, especially using interactive electronic devices.',
			direction: 'Reduce the number of serious injury and fatal crashes related to driver distraction.',
			education: 'Educate roadway users on all distracted driving laws, including that it is illegal to manipulate a handheld wireless device while operating a moving motor vehicle. Develop educational campaigns focusing on the dangers of distracted driving through various media platforms, including social media, broadcast media, press events, new partnerships, and print media. Zero Fatalities continue educational efforts with novice drivers and driver’s ed, focusing on distracted driving.',
			enforcement: 'Work with law enforcement agencies to promote enforcement of Utah’s texting law and other distracted driving laws. Partner with various agencies to work toward a hands free distracted driving law in Utah.',
			engineering: '',
			emergencyMedicalServices: '',
			leaders: 'Zero Fatalities Utah Highway Patrol UDPS, Highway Safety Office UDOH, Utah State Board of Education, Violence and Injury Prevention Program UDOH, Bureau of EMS and Preparedness Statewide Local Law Enforcement Agencies'		
		},
		'ImpairedDriving': {
			title: 'Impaired Driving',
			challenge: 'While the fact that impaired driving is recognized as being an incredibly dangerous behavior, fatal crashes due to alcohol and drugs continue to occur. To add to the problem, the number of fatalities where drivers have tested positive for drugs is showing an increasing trend.',
			direction: 'Continue to reduce alcohol and drug-related serious injury and fatal crashes.',
			education: 'Support program to reduce DUIs in the 21 – 39 age group. Support for impaired prevention programs at colleges and universities. Provide DUI awareness materials. Enhance DUI court participation with training and resources. Continue support of the 24/7 Sobriety Pilot Program in Weber County. Increase education and outreach for the growing Hispanic population.',
			enforcement: 'Conduct high visibility multi-agency enforcement in conjunction with media campaigns. Continue support for DUI legislation. Encourage BAC testing on all fatal crashes. Support partnership with Toxicology lab to help improve efficiency of DUI tox results. Support data driven enforcement efforts including: saturation patrols, checkpoints, etc. Increase the number of agencies involved in the Eliminating Alcohol Sales to Youth program.',
			engineering: '',
			emergencyMedicalServices: '',
			leaders: 'Utah Highway Patrol UDPS, Highway Safety Office Utah Department of Alcoholic Beverage Control Utah Division of Substance Abuse & Mental Health Utah Substance Abuse Advisory Council DUI Committee Utah Mothers Against Drunk Driving Statewide Local Law Enforcement Agencies Utah Chiefs of Police Association Zero Fatalities UDPS, Driver License Division'	
		},
		'IntersectionSafety': {
			title: 'Intersection Safety',
			challenge: 'Intersection crashes are the most common crash type in urban areas. These crashes range from numerous rear-end crashes to severe right-angle crashes. Other causes for crashes are: improper lookout by drivers and vulnerable users, running red lights, running stop signs, sight distance issues, speed and following too closely. Intersection safety can be measured in two different ways. One is to identify intersection locations that have a high number of crashes. The other is to identify locations where serious injuries and fatalities occur.',
			direction: 'Efforts must be made to reduce the frequency and/or severity of crashes within intersections.',
			education: 'Develop education programs about using innovative intersections types and features. Promote education campaigns that reduce red-light running. Increase involvement of emergency medical services providers in educational programs and community events.',
			enforcement: 'Improve the ability to enforce violations at high-crash intersections.',
			engineering: 'Improve visibility and signing, sight distance, signal timing and enhance intersection lighting. Evaluate the effectiveness and safety of traffic signal systems as well as intersection types. Collaborate with EMS to identify locations for signal preemption.',
			emergencyMedicalServices: 'Engage local emergency medical service providers in the implementation of education programs.',
			leaders: 'Utah Department of Transportation UDOH, Bureau of EMS and Preparedness Federal Highway Administration Utah Highway Patrol Metropolitan Planning Organizations Statewide Local Law Enforcement Agencies Utah Chiefs of Police Association'	
		},
		'MotorcycleSafety': {
			title: 'Motorcycle Safety',
			challenge: 'As a result of more individuals looking to motorcycles as an alternative transportation mode, motorcycle–related fatalities have increased 29 percent in the last five years. Motorcyclists accounted for 2 percent of crashes and 14 percent of deaths. Utah’s current helmet law only applies to persons under the age of 18 who are required to wear a USDOT approved helmet while operating or riding a motorcycle.',
			direction: 'Efforts must be made to reduce motorcycle serious injury and fatal crashes.',
			education: 'Increase public awareness of motorcyclist concerns through promotion of the “Heads Up” and “Ride to Live” campaigns. Incentives and promotions for increased motorcycle training courses. Promote wearing proper protective gear for motorcyclists. Utilize social media to expand messaging and information available to the public. Increase rider awareness of the necessity to obtain and continue BRC2 returning rider classes. Focus efforts on lane filtering law education to motorcyclists and drivers. Educating the public on watching for motorcyclists.',
			enforcement: '',
			engineering: '',
			emergencyMedicalServices: 'Engage local emergency medical service providers in the implementation of educational programs.',
			leaders: 'UDPS, Highway Safety Office, Utah Department of Transportation, Zero Fatalities UDPS, Driver License Division Statewide Local Law Enforcement Agencies Utah Highway Patrol Utah Chiefs of Police Association UDOH, Bureau of EMS and Preparedness'	
		},
		'PedestrianSafety': {
			title: 'Pedestrian Safety',
			challenge: 'Pedestrian fatalities have increased 18 percent over the past five years and they account for 15 percent of all traffic related fatalities. More attention to planning, design, education and enforcement must be given to this area in order to continue reducing pedestrian fatalities. Education efforts are underway to teach the public that everyone is responsible, especially making drivers aware of pedestrians and to drive focused. Our challenge is to increase safety and the appeal of walking resulting in an increase in more people walking. More than X children in Utah are injured or killed each year while walking.',			
			direction: 'Efforts must be made to prevent pedestrian related crashes by changing Utah’s culture to provide safer pedestrian travel. Efforts must also be made to educate children and their parents about safety around cars and to reduce the possibility and/or severity of crashes involving children.',
			education: 'Continue to support and implement the Heads Up and other education programs aimed at all age groups. Proactively planning to elevate pedestrian safety compared to capacity. Shifting culture toward moving people, not cars, through community engagement across Utah. Encourage walking to school and using the Safe Routes Utah tools and resources. Research creating a Safety Garden in Utah.',
			enforcement: 'Meet twice a year with local law enforcement on pedestrian concerns and more pedestrian enforcement. Broaden reach of pedestrian enforcement funded shifts or blitzes. Promote crosswalk and school zone enforcement/public information campaigns when funding is available.',
			engineering: 'Evaluate top 10 locations having significant crash trends involving pedestrians. Develop and implement improvement projects including signage, lighting, crosswalk and roadway design features. Continue to support the Safe Sidewalk Program Increase data for active transportation and implement active transportation crash review meetings. Identify locations having significant crash trends involving school zones. Improving infrastructure for safe routes to school.',
			emergencyMedicalServices: 'Encourage participation of local emergency medical service providers to participate in local education programs. Increase involvement of EMS for Children Coordinators in the implementation of educational programs.',
			leaders: 'Utah Department of Transportation UDPS, Highway Safety Office Utah Highway Patrol Statewide Local Law Enforcement Agencies Utah Chiefs of Police Association UDOH, Bureau of Health Promotion UDOH, Bureau of EMS and Preparedness Safe Kids Utah'	
		},
		'SeniorMobilityandSafety': {
			title: 'Senior Mobility and Safety',
			challenge: 'The number of seniors using our transportation system is increasing as well as the number of crashes among senior drivers. Medical conditions, medication usage and reduced physical function can increase the risk of crashes and injury among older adults. Efforts must be made to educate the drivers and their families on resources, for driving courses and alternative transportation options. Identifying resources without taking away independence is essential.',
			direction: 'Providing drivers and their families with tools and resources necessary for maintaining independence for their lifetime.',
			education: 'Increase awareness of CarFit events in Utah and encouraging older drivers to attend. Increase awareness of driving courses at AARP and Utah Safety Council. Increase awareness of education and transportation resources for each community around the state.',
			enforcement: '',
			engineering: 'Continue to consider older roadway users when designing highway infrastructures. Implement FHWA guide on older driver mobility.',
			emergencyMedicalServices: 'Increase involvement of local emergency medical service providers in the implementation of educational programs and community events.',
			leaders: 'Utah Department of Transportation; Federal Highway Administration; UDPS, Highway Safety Office; AAA Utah; Utah Driver License Division; UDOH, Bureau of EMS and Preparedness; AARP; University of Utah'	
		},
		'RoadwayDepartureCrashes': {
			title: 'Roadway Departure Crashes',
			challenge: 'In Utah, more than 40 percent of all fatalities are associated with roadway departures. In contrast, the total number of roadway departure crashes is only 15 percent. These crashes typically result from drowsy, distracted, impaired and aggressive driving, though there are many other contributing factors.',
			direction: 'Work should continue to keep vehicles on the roadway and in their proper lanes. When vehicles do leave the roadway, efforts should be made to reduce the possibility and/or severity of crashes.',
			education: 'Continue to include roadway departure in education efforts.',
			enforcement: 'Continue to support enforcement activities that reduce roadway departures.',
			engineering: 'Continue installation of rumble strips where necessary. Enhance roadway delineation and warning signs. Continue installing barrier treatments along high crash corridors.',
			emergencyMedicalServices: '',
			leaders: 'Utah Department of Transportation Utah Highway Patrol Federal Highway Administration Statewide Local Law Enforcement Agencies'	
		},
		'SpeedManagement': {
			title: 'Speed Management',
			challenge: 'Speeding has become a major concern to the overall traffic safety environment and continues to be one of the leading contributing factors for serious injury and fatal crashes in Utah. With aggressive enforcement and public education efforts, serious injuries and fatalities can be reduced.',
			direction: 'Efforts must be focused on reducing speeding on the roads and the associated elements of reckless and careless attitudes that often accompany such driver behavior',
			education: 'Continue public information and educational outreach activities.',
			enforcement: 'Continue to participate in speed management efforts. Continue funding for special speed enforcement campaigns. Promote public awareness and voluntary compliance with motorists obeying posted speed limits.',
			engineering: 'Continue the use of driver feedback signs to inform drivers of travel speeds. Continue the use of traffic calming and road diet devices. Use variable message signs to show anti-speeding driving messages.',
			emergencyMedicalServices: '',
			leaders: 'Utah Highway Patrol UDPS, Highway Safety Office Statewide Local Law Enforcement Agencies Utah Department of Transportation'	
		},
		'TeenDrivingSafety': {
			title: 'Teen Driving Safety',
			challenge: 'Teen drivers (ages 15–19) account for a disproportionate number of serious injuries and fatal crashes. This fact has been associated with young drivers’ inexperience, distractions, and driving behaviors. Only about seven percent of all licensed drivers in Utah fall into the  younger driver category, yet they account for 20 percent of all motor vehicle crashes.',
			direction: 'Focus collaborative efforts utilizing innovative methods to decrease teen fatalities on Utah roads by:',
			education: 'Support overall teen driver education. Support continued innovation in driver education methods. Explore partnering with private driver ed or to involve teens and parents in local Parent Nights.Reach the goal of 100% of public High Schools receiving Parent Night presentation. Provide peer leader training, education and outreach to high schools. Educating parents and teen drivers on the enforcing of Utah’s Graduated Driver License laws. Educate teens on how to drive safely around big trucks through the Truck Smart program. Promote the “Alive at 25” program. Educate on Utah’s “Not a Drop” law, which prohibits anyone under the age of 21 from drinking alcohol. Begin efforts for a Teen Education Safety Summit.',
			enforcement: 'Support and enforce the Graduated Driver License laws. Encourage enforcement of distracted teen driver laws.',
			engineering: '',
			emergencyMedicalServices: 'Engage local emergency medical service providers and Hospitals in local educational programs.',
			leaders: 'UDPS, Highway Safety Office Utah Highway Patrol UDPS, Driver License Division UDOH, Violence and Injury Prevention Program AAA Utah Utah Driver and Traffic Safety Education Association UDOH, Bureau of EMS and Preparedness Utah Safety Council Zero Fatalities Utah Department of Transportation UDOT, Motor Carriers Division Utah Department of Education Safe Kids Utah Local Health Departments Primary Children’s Hospital'	
		},
		'UseofSafetyRestraints': {
			title: 'Use of Safety Restraints',
			challenge: 'In 2015, the use of safety restraints in the state reached 90.2 percent. However, nearly half of motor vehicle occupants killed were not wearing safety restraints. Occupants in rural crashes are over three times more likely to be unrestrained than occupants in urban crashes. Another challenge is educating a diverse population on the importance of buckling up. As children age, they are less likely to ride in an appropriate car seat or booster seat. Improper use of these devices remain high causing unnecessary injuries or death.',
			direction: 'On May 12, 2015 the primary seat belt law went into effect. UDOT, the Utah Department of Public Safety and their partners have been dedicated to increasing education and enforcement to help save lives. Partnerships must continue to be built between key stakeholders to promote seat belt safety. Continue to educate children and their parents about safety in cars and to reduce the possibility and/or severity of crashes involving children.',
			education: 'Continue to work with Safe Kids Utah, State and local health departments, hospitals, and the state board of education to provide child passenger safety training. Support outreach efforts to high-risk motorists, such as: educational campaigns, health provider education, and school based programs. Promote laws and policies that increase seat belt use. Educate lawmakers on the importance of an increased fine. Support Child Safety Seat Inspection Stations and events. Promote proper booster seat use. Support state agencies in their efforts to provide service to the under-served and at risk populations. Continue to implement a program that reaches the hard core non-user and part-time user of safety belts. Continue programs that increase safety belt use among motorists in rural communities. Implement programs to address the transportation needs of children with special health care needs',
			enforcement: 'Enforce the primary safety belt law for all ages. Continue multi-agency statewide law enforcement/ public information campaigns. Participate in the national “Click It or Ticket” campaign and border to border seat belt enforcement effort. Promote increased enforcement of child safety laws including:booster seat use and the primary seat belt law.',
			engineering: '',
			emergencyMedicalServices: '',
			leaders: 'UDPS, Highway Safety Office Utah Department of Transportation Utah Chiefs of Police Association Utah Highway Patrol Safe Kids Utah Primary Children’s Hospital Utah Safety Council UDOH, Violence and Injury Prevention Program UDOH, Bureau of EMS and Preparedness Local Health Departments Zero Fatalities. Utah State Office of Education, University of Utah Healthcare, Intermountain Healthcare, Utah Occupational Safety and Health, Shriners, Local Law Enforcement'	
		},
	};
	
	const area = this.props.area;
	
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-auto my-4">
            <h2 className="text-center text-danger text-uppercase">
              {areas[area].title}{" "}
              <span className="font-weight-bold">Emphasis Area</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6 className="font-weight-bold">CHALLENGE</h6>
            <p>
			{areas[area].challenge}
            </p>
            <h6 className="font-weight-bold">DIRECTION</h6>
            <p>
              {areas[area].direction}
            </p>
          </div>
        </div>
		<div className="row">
          <div className="col-12 mx-auto my-2">
            <h4 className="text-center">
              <span className="text-danger">PRIORITY STRATEGIES</span>
            </h4>
          </div>
        </div>
		<div className="row">
          <div className="col-md-8 mx-auto">
            <h6 className="font-weight-bold">Education</h6>
            <p>
			  {areas[area].education}
            </p>
            <h6 className="font-weight-bold">Enforcement</h6>
            <p>
              {areas[area].enforcement}
            </p>
			<h6 className="font-weight-bold">Engineering</h6>
            <p>
              {areas[area].engineering}
            </p>
			<h6 className="font-weight-bold">Emergency Medical Services</h6>
            <p>
              {areas[area].emergencyMedicalServices}
            </p>
			<h6 className="font-weight-bold">LEADERS</h6>
            <p>
              {areas[area].leaders}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto my-3">
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
