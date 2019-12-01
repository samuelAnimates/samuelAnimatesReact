import React from "react";
import "./WritingItem.css";
import InlineA from "../InlineA";
import LinkContainerWithGenericIcon from "../LinkContainerWithGenericIcon";

const WritingItem = props => (

	<div>
		{ props.year }. { props.authors }.&nbsp;
		<LinkContainerWithGenericIcon
			materialIconFill={ props.materialIconFill }
		>
			<InlineA 
				colorSchemeSuffix={ props.colorSchemeSuffix }
				isInternalLink={ false }
				text={ props.title }
				urlPath={ props.link } 
			/>
		</LinkContainerWithGenericIcon>
		. 
		&nbsp;{ props.publisher }.
	</div>

);

export default WritingItem;