import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icons/hamburger.svg";
import closeIcon from "../images/icons/close.svg";

function Nav({ breakPoints, active, setActive }, ref) {

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		showMenu ? setShowMenu(false) : setShowMenu(true);
	}

	const menuRef = useRef();

	useEffect(() => {
		let handler = (event) =>  {
			if (!menuRef.current.contains(event.target)
				&& event.target !== document.querySelector(".nav__hamburger")) {
				setShowMenu(false);
			}
		}
		document.addEventListener("mousedown", handler);
		return() => {
			document.removeEventListener("mousedown", handler);
		}
	});

  return (	
  	<>
	    <nav className="nav">
		    <div className="container row spaced">	
		    	<img
		    	className="nav__logo"
		    	alt="logo" 
		    	src={logo} />

		    	{ breakPoints.mobileSm || breakPoints.mobileLg ?
		    	
		    	<img
		    	className="nav__hamburger"
		    	alt="menu"
		    	src={showMenu ? closeIcon : hamburgerIcon}
		    	onClick={toggleMenu} />

		  		:
		    	<ul className="row">

		    		<Link 
		    		className="nav__item" 
		    		to="/"
		    		onClick={
		    			() => { setActive("home") }
		    		}>
		    			<li className={active === "home" ? "item--active" : null}>
		    				HOME</li>
		    		</Link>

		    		<Link 
		    		className="nav__item" 
		    		to="/portfolio"
		    		onClick={
		    			() => { setActive("portfolio") }
		    		}>
		    			<li className={active === "portfolio" ? "item--active" : null}>
		    				PORTFOLIO</li>
		    		</Link>

		    		<Link 
		    		className="nav__item" 
		    		to="/contact"
		    		onClick={
		    			() => { setActive("contact") }
		    		}>
		    			<li className={active === "contact" ? "item--active" : null}>
		    				CONTACT ME</li>
		    		</Link>
		    	
		    	</ul> 
		    	}
	    	</div>
	    </nav>

	    
	    <div 
	    ref={menuRef}
	    className="container">
	    	{showMenu &&
	    	<ul className="mobile-menu mobile-menu--hidden">

	    		<Link 
	    		className="nav__item nav__item--mobile" 
	    		to="/"
	    		onClick={toggleMenu}>
	    			<li>HOME</li>
	    		</Link>

	    		<Link 
	    		className="nav__item nav__item--mobile" 
	    		to="/portfolio"
	    		onClick={toggleMenu}>
	    			<li>PORTFOLIO</li>
	    		</Link>

	    		<Link 
	    		className="nav__item nav__item--mobile" 
	    		to="/contact"
	    		onClick={toggleMenu}>
	    			<li>CONTACT ME</li>
	    		</Link>
	    	
	    	</ul> 
	    	}
	    </div>

    </>
  );
}

export default Nav;
