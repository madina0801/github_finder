import React from "react";

const Navbar = () => {
	return(
		<nav>
			<i className="fab fa-github" /><h1>GitHub finder</h1>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;