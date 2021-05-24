import React, { useRef } from 'react';
import { Link } from "react-router-dom";

import heroMobileSm from "../images/homepage/mobile/image-homepage-hero.jpg";
import heroMobileLg from "../images/homepage/mobile/image-homepage-hero@2x.jpg";
import heroTabletSm from "../images/homepage/tablet/image-homepage-hero.jpg";
import heroTabletLg from "../images/homepage/tablet/image-homepage-hero@2x.jpg";
import heroDesktopSm from "../images/homepage/desktop/image-homepage-hero.jpg";
import heroDesktopLg from "../images/homepage/desktop/image-homepage-hero@2x.jpg";

import profileMobileSm from "../images/homepage/mobile/image-homepage-profile.jpg";
import profileMobileLg from "../images/homepage/mobile/image-homepage-profile@2x.jpg";
// import profileTabletSm from "../images/homepage/tablet/image-homepage-profile.jpg";
import profileTabletLg from "../images/homepage/tablet/image-homepage-profile@2x.jpg";
import profileDesktopSm from "../images/homepage/desktop/image-homepage-profile.jpg";
import profileDesktopLg from "../images/homepage/desktop/image-homepage-profile@2x.jpg";

import downArrows from "../images/icons/down-arrows.svg";

function Home({ breakPoints }) {

	const aboutRef = useRef();

  return (
  	<div className="home container">
  		<div className="hero">
  			
  			<img
  			className="hero__image"
  			alt="computer monitor showing example website"
  			src={ breakPoints.mobileSm ? heroMobileSm
  				: breakPoints.mobileLg ? heroMobileLg
  				: breakPoints.tabletSm ? heroTabletSm
  				: breakPoints.tabletLg ? heroTabletLg
  				: breakPoints.desktopSm ? heroDesktopSm
  				: heroDesktopLg } 
  			/>

  			<div className="hero__message">

	  			{ breakPoints.desktopLg ?
	  			<h1>Hey, I'm Alex Spencer and I love building beautiful websites</h1>
	  			: <h2>Hey, I'm Alex Spencer and I love building beautiful websites</h2> 
	  			}

	  			<button 
	  			className="btn btn-primary"
	  			onClick={() => {
	  				aboutRef.current.scrollIntoView()
	  			}}>
	  				<div className="btn-primary__arrows">
		  				<object type="image/svg+xml" data={downArrows}>button image</object>
	  				</div>
	  				<p className="btn__text btn-primary__text">ABOUT ME</p>
	  			</button>

  			</div>

  		</div>

  		<div className="about">

  			<div className="about__image">
	  			<img
	  			alt="site creators professional portrait"
	  			src={ breakPoints.mobileSm ? profileMobileSm
	  				: breakPoints.mobileLg ? profileMobileLg
	  				: breakPoints.tabletSm ? profileMobileLg
	  				: breakPoints.tabletLg ? profileTabletLg
	  				: breakPoints.desktopSm ? profileDesktopSm
	  				: profileDesktopLg }
	  			/>
	  		</div>

  			<div 
  			className="about__message"
  			ref={aboutRef}>

  				<h2 className="about__heading">About Me</h2>
  				<p className="about__text">I’m a junior front-end developer looking for a new role in an exciting company. 
				  I focus on writing accessible HTML, using modern CSS practices and writing clean 
				  JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
				  whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
				  and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
				  I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
				  you to check out my work.</p>
				  <Link
				  to="/portfolio"
				  className="link">
					  <button className="btn btn-secondary">
					  	<p className="btn__text btn-secondary__text">GO TO PORTFOLIO</p>
					  </button>
				  </Link>

  			</div>
  		</div>

  	</div>
  );
}

export default Home;
