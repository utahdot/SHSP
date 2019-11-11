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
			challenge: 'Bicycle travel is continuing to increase. With more bicyclists on the road there is a need for increased low-stressed bicycle infrastructure. Bicycle safety presents an opportunity for a partnership with many organizations to improve this mode of travel. Important components of this area are promoting helmet use and education/enforcement directed to both motorists and bicyclists. <br>Emerging modes of micromobility such as, e-bikes, scooter and bike sharing, electric powered skateboards and monowheels, etc pose unique opportunities and challenges for safety, infrastructure, education and enforcement.',
			direction: 'Continue addressing bicycle and micromobility user needs on transportation facilities. Increase efforts for bicyclist and motorist education.',
			engineering: 'Use the AASHTO Guide for the Development of Bicycle Facilities and other adopted guidance documents. <br>Develop a Bicycle Accomodations in Workzones Standards book. <br>Improve signage and infrastructure addressing safety for motorists and bicyclists along heavily used bicycle corridors where appropriate. <br>Determine heavy collision hotspots and implement mitigation measures. <br>Develop UDOT specific bicycle standards.',
			education: 'Develop UDOT specific bicycle standards. Continue Heads Up safety campaigns. <br>Develop safety messaging for micromobility users. <br>Increase the promotion of bicycle helmet use, with a special focus among school age children. <br>Continue partnership for educational programs targeting adults and children on bicycle safety. <br>Develop educational programs that teach drivers the importance of sharing the road, including the three-foot law. <br>Research creating a Safety Garden in Utah.',
			enforcement: 'Better inform law enforcement of traffic laws as they pertain to both motorists and bicyclists and encourage enforcement of the laws. <br>Meet twice a year with local law enforcement on bicycle concerns. <br>Continue to promote bike rodeos in local communities.',
			emergencyMedicalServices: 'Encourage involvement of local emergency medical service providers in the implementation of educational programs.',
			leaders: 'UDPS, Highway Safety Office Utah Department of Transportation Utah Highway Patrol Statewide Local Law Enforcement Agencies Metropolitan Planning Organizations Utah Chiefs of Police Association UDOH, Bureau of EMS and Preparedness UDOH, Violence and Injury Prevention Program Local Health Departments'
		},
		'CommercialMotorVehicleSafety': {
			title: 'Commercial Motor Vehicle Safety',
			challenge: 'Each year, an average of 29 people die on Utah’s roads in commercial motor vehicle-related crashes. These collisions involving CMVs and passenger vehicles are more likely to be severe due to the size differences between the two vehicles. While the perception is that the truckers are causing these crashes, in actuality, 3 out of 4 times, the crashes are the result of the passenger vehicle drivers.',
			direction: 'Sustain efforts to reduce commercial vehicle serious injuries and fatal crashes. The Federal Motor Carriers Safety Administration, UDOT’s Motor Carrier Division and the Utah Highway Patrol oversee all safety issues in Utah.',
			engineering: 'Continue efforts to mitigate high crash corridors for commercial vehicles. Continue efforts to utilize Weigh-in-Motion and Mainline Bypass Technologies to effectively facilitate commerce and minimize CMV back up on Utah’s main interstates.',
			education: 'Promote Truck Smart Campaign activities, which teach drivers of passenger vehicles to drive safely around commercial motor vehicles and commercial drivers to slow down, buckle up, and stay alert. Encourage commercial vehicle drivers to slow down, buckle up and stay alert. Partner with the Board of Education and private driving schools to educate young drivers about the nuances of driving safely around commercial motor vehicles.',
			enforcement: 'Continue the safety compliance reviews of high-risk carriers and educate new entrants into the commercial motor vehicle businesses. Continue to partner with law enforcement agencies to identify and cite safety violators.',
			emergencyMedicalServices: '',
			leaders: 'UDOT, Motor Carrier Division Utah Highway Patrol Federal Motor Carrier Safety Administration Utah Trucking Association Zero Fatalities Utah Transit Authority'
		},
		'HighwayRailroadCrossingSafety': {
			title: 'Highway Railroad Crossing Safety',
			challenge: 'While highway railroad crossing crashes represent only a small number of the total crashes in Utah, they are some of the most severe. As the number of trains in Utah increase with expanded transit, commuter and freight services, the probability of railroad crossing crashes may also increase.',
			direction: 'Continue efforts to reduce crashes at highway railroad crossings through education, engineering, and enforcement.',
			engineering: 'Support and encourage continued engineering research and innovation that improves railroad crossing safety. <br>Enhance railroad crossing inspection, evaluation and engineering upgrade. <br>Implement pedestrian and preemption standards.',
			education: 'Educate new drivers, school bus drivers, professional truck drivers and the public about railroad crossing safety. Continue to support railroad crossing safety and educational programs.',
			enforcement: 'Support enforcement of traffic laws at railroad crossings. Provide law enforcement with opportunities to participate in free Grade Crossing Collision Investigation Courses (GCCI) offered by Operation Lifesaver Utah.',
			emergencyMedicalServices: '',
			leaders: 'Federal Highway Administration Federal Railroad Administration Operation Lifesaver Utah Utah Department of Transportation Utah Highway Patrol Utah Transit Authority UDPS, Highway Safety Office'
		},
		'RuralRoadSafety': {
			title: 'Rural Road Safety',
			challenge: 'Many roadway departure fatalities occur on rural roads. Special attention must be given to the safety of rural roadways on and off the State system. To effectively reduce statewide fatalities, specific safety projects focused on rural roads must be completed. In addition, the availability of well trained and equipped emergency medical service providers is limited in rural areas.',
			direction: 'Special consideration must be given to improving the rural roadway system. Special consideration should also be given to improving the emergency service provider resources and capabilities to provide appropriate patient care. The federal High Risk Rural Roads special rule places additional emphasis on rural road safety. In Utah, a High Risk Rural Road is identified as a rural major or minor collector or a rural local road that exhibits significant safety risk based on: (1) A concentration of crashes at a spot location or on a corridor that can be mitigated by proven safety countermeasures; (2) Roadway attributes (as identified in a road safety audit, engineering study, field review, or similar) that present a risk to drivers, pedestrians, or bicyclists that can be mitigated by proven safety countermeasures; and/or (3) A quantitative safety model, such as usRAP/ViDA.',
			engineering: 'Continue Road Safety Audits. Continue installing systemic safety measures to reduce single vehicle roadway departure crashes.',
			education: 'Educate rural communities on the importance of seat belt use and other safe driving behaviors.',
			enforcement: 'Increase enforcement of The Primary Seat Belt Law and other traffic laws in rural areas.',
			emergencyMedicalServices: 'Train emergency medical service providers to appropriately triage, treat, transport and transfer injured patients. Implement a statewide trauma system. Provide pediatric trauma treatment education to rural pre-hospital care providers.',
			leaders: 'Utah Department of Transportation Federal Highway Administration Utah Rural County Governments Rural Planning Organizations UDOH, Bureau of EMS and Preparedness Utah Highway Patrol Statewide Local Law Enforcement Agencies UDPS, Highway Safety Office'
		},
		'TransitSystemSafety': {
			title: 'Transit System Safety',
			challenge: 'As the transit system grows, more conflicts will arise between motor vehicles, transit vehicles and pedestrians. The potential for large catastrophic events must be considered when advancing safety improvements to the system. In addition to large events, day-to-day operations need to be addressed, such as transit buses making frequent stops and merges in and out of traffic along roads and highways.',
			direction: 'Special consideration must be given to improving the safety of the transit system including rail and bus travel.',
			engineering: 'Enhance rail crossing inspection, evaluation and upgrades. <br>Install pedestrian safety treatments. <br>Expand transit vehicle signal prioritization projects. <br>Encourage in-lane bus stops such as curb or sidewalk extensions and bulb-outs.',
			education: 'Support transit crossing safety programs. <br>Support of rail safety education programs. <br>Educate drivers and pedestrians about safety at rail crossings and rail/bus stations including around the new Bus Rapid Transit Systems',
			enforcement: '',
			emergencyMedicalServices: 'Encourage development of written contingency plans for response to large scale transportation related emergencies. Participate in periodic emergency exercises.',
			leaders: 'Utah Department of Transportation Utah Transit Authority Operation Lifesaver Utah Federal Transit Administration UDOH, Bureau of EMS and Preparedness'
		},
		'WorkZoneSafety': {
			title: 'Work Zone Safety',
			challenge: 'Utah work zone related crashes and fatalities occur in two areas: encroachments into the work zone and crashes outside the work zone but influenced by the area. Most of the injuries and fatalities that occur in work zones are drivers and passengers —not construction workers.',
			direction: 'Efforts must be made to reduce the possibility and/or severity of crashes. Practices in traffic control or work zone management that lead to reduced work zone safety must be identified and limited.',
			engineering: 'Identify types of work zones having significant crash trends. Identify characteristics of projects where work zone crashes have occurred. Increase the number of work zone reviews and assessments. Develop traffic control standards for pedestrians and bicyclists within a work zone.',
			education: 'Continue to emphasize work zone safety training. Educate children and teens about the dangers of playing around work zones. Educate the public about the importance of driving safely through work zones.',
			enforcement: 'Continue the use of law enforcement within work zones.',
			emergencyMedicalServices: '',
			leaders: 'Utah Department of Transportation Utah Highway Patrol Federal Highway Administration American Traffic Safety Services Association Statewide Local Law Enforcement Agencies Association of General Contractors Utah Chiefs of Police Association'
		},
		'ConnectedandAutonomousVehicles': {
			title: 'Connected and Autonomous Vehicles',
			challenge: 'In order to keep up with the progress being made in this area, it’s important that we understand how these new technologies will change the approach to designing, managing and operating existing and planned transportation infrastructure in addition to the following: <br><ul><li>Impacts to design and infrastructure decisions</li> <li>Real-time data usage</li> <li>Impacts to existing infrastructure</li> <li>Impacts to workforce training needs</li> <li>Impacts to driver licensing</li> <li>Communication infrastructure investments</li> <li>Impacts to freight flow</li> <li>Impacts to laws, policies & procedures</li> <li>Determining liability & fault in a crash</li></ul>',
			direction: 'Connected and autonomous vehicle technologies have the potential to significantly change surface transportation as we know it today. Externalities associated with driving including crashes, traffic congestion, air pollution, greenhouse gas emissions and energy consumptions may significantly diminish as connected and autonomous vehicle technologies are introduced. The adoption of these technologies will help us reach our goal of Zero Fatalities.',
			engineering: 'Develop a working understanding of the technology. Learn how to accommodate and process increasing amounts of data in order to leverage information and make decisions. Understand near-term versus long-term implications (i.e. standards, mixed traffic, investment strategies, etc.)',
			education: 'Initiate a Connected and Autonomous Vehicle Technologies Campaign to highlight the technology and various implications.',
			enforcement: '',
			emergencyMedicalServices: 'Understand FHWA’s Response, Emergency Staging, Communications, Uniform Management, and Evacuation (R.E.S.C.U.M.E.) Concept of Operations.',
			leaders: 'Utah Department of Transportation Federal Highway Administration Utah Highway Patrol UDPS, Highway Safety Office Federal Motor Carrier Administration Utah Traffic Records Coordinating Committee Statewide Local Law Enforcement UDOH, Utah Bureau of EMS and Preparedness Utah Transit Authority UDPS, Driver License Division'
		},
		'EmergencyServices': {
			title: 'Emergency Services',
			challenge: 'Timely emergency response, appropriate treatment and rapid transport to a healthcare facility are all major components to survivability in motor vehicle collisions. Efforts must be made to promote the coordination and involvement of emergency medical services into transportation safety and injury prevention efforts. Ensure appropriately trained and equipped emergency medical service providers are readily available within a coordinated and inclusive trauma system to meet the needs of all patients, including special populations.',
			direction: 'Sustain commitment to, and cooperation with, the Incident Management System. Strengthen partnerships that assist law enforcement and emergency medical services efforts. Coordinate prevention efforts with existing emergency medical services programs.',
			engineering: 'Improve communication infrastructure for emergency response and dispatch.',
			education: 'Increase education and involvement of EMS in transportation safety. Develop and support integrated EMS and transportation safety programs. <br>Continue to provide pediatric trauma education enforcement. <br>Enhance communication interoperability in an effort to decrease incident response time.',
			enforcement: '',
			emergencyMedicalServices: 'Continue requirement for ambulance drivers to receive emergency vehicle operators training. <br>Promote EMS provider safety and emotional well-being through operational guidelines and peer support groups <br>Maintain efforts to facilitate rapid response, treatment and transport of vehicular crash victims. <br>Maintain efforts to ensure ambulances are appropriately staffed and equipped. <br>Utilize patient care data to make improvements in patient care. <br>Continue efforts to implement a statewide trauma system.',
			leaders: 'UDOH, Bureau of EMS and Preparedness Utah Chiefs of Police Association Utah Department of Transportation Utah Highway Patrol Statewide Local Law Enforcement Agencies Statewide Unified and Local Fire Departments'
		},
		'TrafficIncidentManagement': {
			title: 'Traffic Incident Management',
			challenge: 'The Federal Highway Administration estimates that approximately 20% of all highway crashes are secondary incidents and that 18% of these result in fatalities. Reducing the time to clear an incident— be it a crash, road debris or disabled vehicle—and improving the advance warning for incidents are the keys to minimizing secondary crashes.',
			direction: 'Commit to Traffic Incident Management (TIM) throughout Utah, and improve quick clearance and queue protection efforts. Coordinate with all first responders to ensure that quick clearance and queue protection are primary concerns.',
			engineering: 'Engineering Identify strategies for clearing highway incidents. Create a Traffic Incident Management plan for Utah. Build and maintain performance measures for Incident Management and Secondary Crashes.',
			education: '',
			enforcement: '',
			emergencyMedicalServices: 'Participate in Traffic Incident Management Coalitions within major geographic areas of Utah that include all responders, such as: Law Enforcement, Fire, Emergency Medical, Towing, Public Works, and UDOT. <br>Train responders in Traffic Incident Management using the FHWA or similar training materials.',
			leaders: 'Utah Department of Transportation Utah Highway Patrol UDOH, Bureau of EMS and Preparedness'
		},
		'TrafficData': {
			title: 'Traffic Data',
			challenge: 'A key to reducing the number of serious injuries and fatalities on Utah roadways is data-driven, science-based decision making that relies on the highest quality traffic records data. This is supported by the creation and management of integrated traffic records data and standards.',
			direction: 'Through the Utah Traffic Records Advisory Committee (UTRAC), we can maximize the overall quality of safety data and analysis based on State traffic records across all six core systems: crash, vehicle, driver, roadway, citation & adjudication and injury. Working together helps to effectively utilize existing data resources while identifying data collection and analysis opportunities.',
			engineering: 'Identify and implement advanced technologies to collect, manage, analyze and distribute crash data in a timely, accurate, complete and uniform manner to authorized users for analytical purposes. Enhance the ability to combine crash data with traffic volume and roadway features to perform network screening on all public roads.',
			education: '',
			enforcement: 'Develop multi-agency data quality control and quality assurance standards. Promote the use of an electronic submittal protocol from roadside investigators. Educate statewide law enforcement agencies on the importance and uses of complete, accurate and uniform crash data. Promote accountability in statewide law enforcement agencies for the timeliness and accuracy of crash reports and edited or amended reports.',
			emergencyMedicalServices: 'Continue collection of vehicular crash victim treatment and transportation data. Provide access to pre-hospital injury data for prevention data collection. Utilize patient care records to assess care provided at crashes and other highway safety related incidences.',
			leaders: 'Utah Department of Transportation Federal Highway Administration Utah Highway Patrol UDPS, Highway Safety Office Federal Motor Carrier Administration Utah Traffic Records Coordinating Committee Statewide Local Law Enforcement UDOH, Bureau of EMS and Preparedness'
		},
		'JudicialSystem': {
			title: 'Judicial System',
			challenge: 'Justice and District Courts do not place a high priority on nonmoving traffic violations, such as occupant restraint and safety equipment, because of the focus on more grievous violations. Other challenges include assuring accurate adjudication history to facilitate charging second and subsequent offenders appropriately, and the lack of real-time access to traffic violation history.',
			direction: 'Promote a more active role from judicial partners.  Increase the awareness of traffic safety issues, making stronger efforts to ensure a violator is correctly charged in cases of second or subsequent offenses.  Investigate real-time access to traffic violation history for court purposes.  Furthermore, continue enforcement of approved programs to educate traffic violators on the dangers of aggressive, impaired and distracted driving while discontinuing the practice of dismissing lesser traffic charges.  Also continue to pursue mechanisms to reduce recidivism in traffic offenses.',
			engineering: '',
			education: 'Utilize traffic safety programs to educate traffic violators on safe behavior. <br>Utilize judicial programs, such as 24/7 in Weber County, to educate DUI offenders on the importance of safe behaviors in order to reduce recidivism in impaired driving. <br>Promote a standard curriculum for plea-and-abeyance defensive driving courses. <br>Encourage drivers aged 18-25 attend the ‘Alive at 25’ safe driving course. <br>Coordinate with Utah’s Driver License Division to assess traffic violation history and apply appropriate penalties.',
			enforcement: 'Execute laws through the court system. <br>Continue with the 24/7 Pilot Project in Weber County, hoping to move this project statewide. <br>Streamline DUI-related driver license suspension/revocation hearings. <br>Promote DUI-related procedural rule changes that increase effectiveness and avoid redundancies. <br>Enhance efficiency of reporting DUI convictions.',
			emergencyMedicalServices: '',
			leaders: 'UDPS, Driver License Division Utah Highway Patrol Utah Safety Council Utah Chiefs of Police Association Administrative Office of the Courts UDPS, Highway Safety Office Utah Prosecution Council'
		},
		'DrowsyDriving': {
			title: 'Drowsy Driving',
			challenge: 'Serious injuries and fatalities related to drowsy driving are a top concern in Utah. Unfortunately, drowsy driving violations and crashes are under-reported due to deficiencies in crash reporting and the difficulty of attributing crashes to sleepiness.',
			direction: 'Maintain efforts to reduce drowsy driving-related serious injury and fatal crashes.',
			engineering: 'Install drowsy driving warning signs in high crash locations. Install rumble strips at high crash locations where possible.',
			education: 'Continue partnership with UDOT, UDPS, and Med One Capital as part of the “Sleep Smart. Drive Smart.” campaign. Support educational activities and media campaigns.',
			enforcement: 'Improve drowsy driving crash reporting with law enforcement. ',
			emergencyMedicalServices: 'Increase involvement of emergency medical service providers in drowsy driving programs and community events. ',
			leaders:'Utah Department of Transportation Utah Highway Patrol UDPS, Highway Safety Office Zero Fatalities Med One Capital UDOH, Bureau of EMS and Preparedness'
		},
	};
	
	const area = this.props.area;
	
    return (
      <div>
        <div className="row">
          <div className="col-12 mx-auto my-4">
            <h2 className="text-center text-danger text-uppercase">
              {areas[area].title}{" "}
              <span className="font-weight-bold">Continuing Safety Areas</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h6 className="font-weight-bold">CHALLENGE</h6>
            <p dangerouslySetInnerHTML={{__html: areas[area].challenge}} />
            <h6 className="font-weight-bold">DIRECTION</h6>
            <p dangerouslySetInnerHTML={{__html: areas[area].direction}} />
          </div>
        </div>
		<div className="row">
          <div className="col-12 mx-auto my-3">
            <h3 className="text-center">
              <span className="text-danger">PRIORITY STRATEGIES</span>
            </h3>
          </div>
        </div>
		<div className="row">
          <div className="col-md-8 mx-auto">
            <h6 className="font-weight-bold">ENGINEERING</h6>
            <p dangerouslySetInnerHTML={{__html: areas[area].engineering}} />
            <h6 className="font-weight-bold">EDUCATION</h6>
            <p dangerouslySetInnerHTML={{__html: areas[area].education}} />
			<h6 className="font-weight-bold">ENFORCEMENT</h6>
			<p dangerouslySetInnerHTML={{__html: areas[area].enforcement}} />
			<h6 className="font-weight-bold">EMERGENCY MEDICAL SERVICES</h6>
			<p dangerouslySetInnerHTML={{__html: areas[area].emergencyMedicalServices}} />
			<h6 className="font-weight-bold">LEADERS</h6>
			<p dangerouslySetInnerHTML={{__html: areas[area].leaders}} />
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
