import React, { Component } from 'react';
import "./ArtemisProject.css";
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import NewPageNavBar from '../../components/NewPageNavBar';
import NewPageNavBarMobile from '../../components/NewPageNavBarMobile';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import SheerWhiteContainer from "../../components/SheerWhiteContainer";
import ProjectPageMainSections from '../../components/ProjectPageMainSections';

class ArtemisProject extends Component {
	projectInfo = {
		title: "Artemis 1 Fundraiser Video",
		synopsis:{
			mediaType: "video",
			blurb: "A fundraiser video for South Side Hackerspace",
			embed: {
				url: "https://player.vimeo.com/video/223448852",
				title: "Artemis 1 fundraiser video Vimeo."
			},
			year: "2017",
			specs: [
				{
					id: "artemisSpecs01",
					lead: "Role",
					body: "Director, editor, main videographer."
				},
				{
					id: "artemisSpecs02",
					lead: "Length",
					body: "01 min. 27 sec."
				}
			]
		},
		highlights: [
			{
				id: "artemisHighlights01",
				lead: "Goal",
				body: "Produce a short video introduction to a fundraising campaign for a high altitude balloon flight documenting the August 2017 solar eclipse through live-stream video, photography, and 360 video."
			},
			{
				id: "artemisHighlights02",
				lead: "Outcome",
				body: "A promo video for a nonprofit fundraiser campaign that raised over $8,000."
			}
		],
		overview: [
			{
				id: "artemisOverview01",
				lead: "Motivation",
				body: "I did this volunteer project to help a local group of makers. The excitement they had for this project was contagious. Their resourcefulness in it was inspiring. I know how important it is to be in a community of creators. I was very happy to support this process in my own way."
			},
			{
				id: "artemisOverview02",
				lead: "Process",
				body: "I storyboarded a video based off of the group's needs. Then I edited itin cycles. I Shot footage on-location at the South Side Hackerspace (SSH). I also used SSH members' video recordings. I also used public domain footage courtesy of NASA. I did all the sound editing, animation, and video editing."
			}
		]
		
	}

	artemisNavbarLinks = [{title:"Synopsis", id:"artemisNavBarLinkSynopsis"},{title:"Highlights", id:"artemisNavBarLinkHighlights"},{title:"Overview", id:"artemisNavBarLinkOverview"}];
	artemisSynopsisSectionRef = React.createRef();
	artemisHighlightsSectionRef = React.createRef();
	artemisNavbarRef = React.createRef();
	artemisOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "Artemis 1 Fundraiser Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "artemisNavBarLinkSynopsis"){
			this.artemisSynopsisSectionRef.current.scrollIntoView();
			this.artemisSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "artemisNavBarLinkHighlights"){
			this.artemisHighlightsSectionRef.current.scrollIntoView();
			this.artemisHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "artemisNavBarLinkOverview"){
			this.artemisOverviewSectionRef.current.scrollIntoView();
			this.artemisOverviewSectionRef.current.focus();
		};
	}

	render() {
		return (
			<div className={ "clearfix " + this.props.colorSchemeNameRoot + this.props.colorSchemeSuffix }>
				{ this.props.isMobileView === false &&
					<div className="font-Overpass position-fixed left-0">
						<SamePageNavBar
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.artemisNavbarLinks }
						/>	
					</div>
				}
				<h1 className="padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center">Artemis 1 Fundraiser Video</h1>
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.artemisNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.artemisHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.artemisOverviewSectionRef }
					synopsisSectionRef={ this.artemisSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default ArtemisProject;