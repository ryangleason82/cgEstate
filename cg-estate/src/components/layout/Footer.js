import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
	return (
		<Navbar bg="light" fixed="bottom">
			Copyright &copy; {new Date().getFullYear()} Gleason Group Inc.
			<a href="mailto:cgleason@kw.com" className="ml-auto ">
				{" "}
				cgleason@kw.com
			</a>
		</Navbar>
	);
};

export default Footer;
