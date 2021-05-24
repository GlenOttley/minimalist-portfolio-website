import React from 'react';
import projectData from "../projectData.js";
import ProjectPreview from "./ProjectPreview.jsx";

function Portfolio({ breakPoints }) {
	
	return (
		<div className="portfolio container">
			
			{projectData.map((project) => 
				<ProjectPreview 
				key={project.heading}
  			project={project}
  			breakPoints={breakPoints} />
				)
			}

		</div>
	)
}

export default Portfolio;