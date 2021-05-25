import React, { Fragment, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./functions/ScrollToTop.js";
import projectData from "./projectData.js";

import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";


function App() {

	const [active, setActive] = useState("home");

	const breakPoints = {
		mobileSm: useMediaQuery("(max-width: 360px)"),
		mobileLg: useMediaQuery("(min-width: 361px) and (max-width: 480px)"),
		tabletSm: useMediaQuery("(min-width: 480px) and (max-width: 639px)"),
		tabletLg: useMediaQuery("(min-width: 640px) and (max-width: 768px)"),
		desktopSm: useMediaQuery("(min-width: 769px) and (max-width: 1023px)"),
		desktopLg: useMediaQuery("(min-width: 1024px)")
	}

	return (
		<Router basename={process.env.PUBLIC_URL}>

    	<Nav 
    	breakPoints={breakPoints}
    	active={active}
    	setActive={setActive} />
    	
    	<Fragment>
    		<ScrollToTop />
	    	<Switch>

		    	<Route 
		    	exact path="/" 
		    	render={() => (
		    		<Home breakPoints={breakPoints} />
		    		)}
		    	/>

		    	<Route 
		    	exact path="/portfolio" 
		    	render={() => (
		    		<Portfolio breakPoints={breakPoints} />
		    		)}
		    	/>

		    	{projectData.map((project) => 
		    		<Route
		    		key={project.heading}
		    		exact path={project.path}
		    		render={() => (

		    			<ProjectDetail
		    			key={project.heading}
		    			project={project}
		    			breakPoints={breakPoints} />
		    			)}

		    		/>
		    	)}

		    	<Route 
		    	path="/contact" 
		    	render={() => (
		    		<Contact breakPoints={breakPoints} />
		    		)}
		    	/>

	    	</Switch>
    	</Fragment>

    	<Route 
    	exact path={["/", "/portfolio", "/manage", "/bookmark", "/insure", "/fylo"]}
    	render={() => (
    		<CTA 
	    	active={active}
	    	setActive={setActive} />
	    	)}
    	/>

    	<Footer
    	active={active}
    	setActive={setActive} />

    </Router>
	)
}

export default App


