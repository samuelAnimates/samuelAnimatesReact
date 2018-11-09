import React from "react";
import { Link } from "react-router-dom";
import "./InlineA.css";

const InlineA = props => (
	<span>
		{props.isInternalLink === true &&
			<Link className={ "color-inherit a-color-scheme-" + props.colorSchemeSuffix } to={ props.urlPath }>{ props.text }</Link>
		} 
		{props.isInternalLink === false &&
			<a className={ "color-inherit a-color-scheme-" + props.colorSchemeSuffix } target="_blank" rel="noopener noreferrer" href={ props.urlPath }>{ props.text }</a>
		}
	</span>
);

export default InlineA;