import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../images/icons/arrow-left.svg";
import arrowRight from "../images/icons/arrow-right.svg";

function ProjectDetail({ project, breakPoints }) {
	
	return (
		<div className="project--detail container">

			<div className="project__image--detail">
				<img
					alt="project hero"
					src={ breakPoints.mobileSm ? project.heroMobileSm
	  				: breakPoints.mobileLg ? project.heroMobileLg
	  				: breakPoints.tabletSm ? project.heroTabletSm
	  				: breakPoints.tabletLg ? project.heroTabletLg
	  				: breakPoints.desktopSm ? project.heroDesktopSm
	  				: project.heroDesktopLg} 
	  			/>
			</div>

			<div className="desktop-layout">

				<div className="project__message project__message--detail desktop__left">
					<div>
						<h2 className="project__heading">{project.heading}</h2>
						
						{breakPoints.mobileSm || breakPoints.mobileLg ||
							breakPoints.tabletSm || breakPoints.desktopLg ?
							<p className="project__text">{project.description}</p>
							: null
						}	

						<div className="project__skills">
							<p className="highlight">{project.skills}</p>
							<p className="highlight">{project.languages}</p>
						</div>

					  <button className="btn btn-secondary">
					  	<p className="btn__text btn-secondary__text">VISIT WEBSITE</p>
					  </button>
				  </div>

				  <div className="project__text">
				  {breakPoints.tabletLg || breakPoints.desktopSm ?
						<p>{project.description}</p>
						: null
					}	
				  </div>

				</div>

				<div className="desktop__right">
					<div className="project__background">
						<h3>Project Background</h3>
						<p className="project__text">{project.background}</p>
					</div>

					<div className="project__previews">
						<h3>Static Previews</h3>
						<div className="project__image--detail">
							<img
								alt="project preview"
								src={ breakPoints.mobileSm ? project.preview1MobileSm
				  				: breakPoints.mobileLg ? project.preview1MobileLg
				  				: breakPoints.tabletSm ? project.preview1TabletSm
				  				: breakPoints.tabletLg ? project.preview1TabletLg
				  				: breakPoints.desktopSm ? project.preview1DesktopSm
				  				: project.preview1DesktopLg } 
				  			/>
						</div>
						<div className="project__image--detail">
							<img
								alt="project preview"
								src={ breakPoints.mobileSm ? project.preview2MobileSm
				  				: breakPoints.mobileLg ? project.preview2MobileLg
				  				: breakPoints.tabletSm ? project.preview2TabletSm
				  				: breakPoints.tabletLg ? project.preview2TabletLg
				  				: breakPoints.desktopSm ? project.preview2DesktopSm
				  				: project.preview2DesktopLg } 
				  			/>
						</div>
					</div>
				</div>
			</div>

			<div className="project__nav">
				<Link 
				to={`/${project.prevProject}`} 
				className="nav__previous">
					<img 
					alt="previous project"
					src={arrowLeft} />
					<h3>{project.prevProject}</h3>
					<p>Previous Project</p>
				</Link>

				<Link 
				to={`/${project.nextProject}`}
				className="nav__next">
					<img 
						alt="next project"
						src={arrowRight} />
					<h3>{project.nextProject}</h3>
					<p>Next Project</p>
				</Link>
			</div>

		</div>
	)
}

export default ProjectDetail