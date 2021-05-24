import React from "react";
import { Link } from "react-router-dom";

function ProjectPreview({ project, breakPoints }) {

	return (
		<div className="project">

			<div className="project__image">
				<img
				alt="manage project example"
				src={ breakPoints.mobileSm ? project.portfolioMobileSm
  				: breakPoints.mobileLg ? project.portfolioMobileLg
  				: breakPoints.tabletSm ? project.portfolioMobileLg
  				: breakPoints.tabletLg ? project.portfolioTabletLg
  				: breakPoints.desktopSm ? project.portfolioDesktopSm
  				: project.portfolioDesktopLg } 
  			/>
			</div>

			<div className="project__message">

				<h2 className="project__heading">{project.heading}</h2>
				<p className="project__text">{project.description}</p>
			  <Link 
			  to={project.path}
			  className="link">
				  <button className="btn btn-secondary">
				  	<p className="btn__text btn-secondary__text">VIEW PROJECT</p>
				  </button>
			  </Link>

			</div>

		</div>
	)
}

export default ProjectPreview