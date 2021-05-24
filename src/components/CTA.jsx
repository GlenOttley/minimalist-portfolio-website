import React from "react";
import { Link } from "react-router-dom";

function CTA({ active, setActive }) {

	return (
		
		<div className="cta container">
			<h2 className="cta__heading">Interested in doing a project together?</h2>
			<hr className="divider cta__divider"></hr>

			<Link
		  to="/contact"
		  className="link"
		  onClick={
  			() => { setActive("contact") }
  		}>
			  <button className="btn btn-secondary btn--cta">
					<p className="btn__text btn-secondary__text">CONTACT ME</p>
				</button>
		  </Link>

			
		</div>
	)
}

export default CTA