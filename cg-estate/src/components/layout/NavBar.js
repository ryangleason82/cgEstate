import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Connie Gleason</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#search">Search</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
