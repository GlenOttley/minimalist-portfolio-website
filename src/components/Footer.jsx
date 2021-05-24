import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import githubIcon from "../images/icons/github.svg";
import twitterIcon from "../images/icons/twitter.svg";
import linkedinIcon from "../images/icons/linkedin.svg";

function Footer({ active, setActive }) {

	return (
		
		<div className="footer">
			<div className="footer__main container">
  			<img
  			className="footer__icon footer__logo"
  			alt="logo"
  			src={logo} />
  			
  			<ul className="footer__list">
	    		<Link 
	    		className="nav__item nav__item--footer" 
	    		to="/"
	    		onClick={
		    		() => { setActive("home") }
		    	}>
	    			<li>HOME</li>
	    		</Link>

	    		<Link 
	    		className="nav__item nav__item--footer" 
	    		to="/portfolio"
	    		onClick={
		    		() => { setActive("portfolio") }
		    	}>
	    			<li>PORTFOLIO</li>
	    		</Link>

	    		<Link 
	    		className="nav__item nav__item--footer" 
	    		to="/contact"
	    		onClick={
		    		() => { setActive("contact") }
		    	}>
	    			<li>CONTACT ME</li>
	    		</Link>
	    	</ul> 

	    	<div className="row footer__icons">
	    		<img
	    		className="footer__icon"
	    		alt="github logo"
	    		src={githubIcon} />
	    		<img
	    		className="footer__icon"
	    		alt="twitter logo"
	    		src={twitterIcon} />
	    		<img
	    		className="footer__icon"
	    		alt="linkedin logo"
	    		src={linkedinIcon} />
	    	</div>
	    </div>

		</div>	
	)
}

export default Footer