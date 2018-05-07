import React from "react";
import { Link } from "react-router-dom";
import "./HomepageProjectContainer.css";
import HomepageProjectIconContainer from "../HomepageProjectIconContainer";
import HomepageProjectLinksContainer from "../HomepageProjectLinksContainer";
import ResponsiveCtoLFloat from "../ResponsiveCtoLFloat";

const HomepageProjectContainer = props => (
    <div className="homepage-project-container bg-white border-color-rgba100-100-100-p9 border-style-solid border-width-2px-0-0-0 clear-both color-black font-Assistant padding-T-1p5em width-100pc">
		<div className="padding-bottom-1em">
			<ResponsiveCtoLFloat
				isMobile={ props.isMobile }
				width="20%"
			>
				<HomepageProjectIconContainer
					icon = { props.project.icon }
					iconAlt = { props.project.iconAlt }
				/>
			</ResponsiveCtoLFloat>
			<ResponsiveCtoLFloat
				isMobile={ props.isMobile }
				width="80%"
				>
				<h3>
					<Link to={ props.project.projectPagePath }>
					{ props.project.title }
					</Link>
				</h3>
				<p>{ props.project.description }</p>
			</ResponsiveCtoLFloat>
		</div>
		<div className="padding-bottom-p25em">
			<HomepageProjectLinksContainer
				links = { props.project.links }
			/>
		</div>
    </div>
);

export default HomepageProjectContainer;