import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Connie Gleason</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/search">Search</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
