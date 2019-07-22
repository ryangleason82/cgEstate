import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
	return (
		<Navbar bg="light">
			<Row>
				<Col className="text-center">
					<h3>Connie Gleason</h3>
					<p>
						gleason@kw.com
						<br />
						267-307-9821
					</p>
				</Col>
				<Col className="text-center">
					Copyright &copy; {new Date().getFullYear()} Gleason Group Inc.
				</Col>
				<Col className="text-center">
					<h3>Keller Williams</h3>
					<p>
						2003 South Easton Road
						<br />
						Suite 108
						<br />
						Doylestown, PA 18902
						<br />
						Office: 215-340-5700
					</p>
				</Col>
			</Row>
		</Navbar>
	);
};

export default Footer;

{
	/* <a href="mailto:cgleason@kw.com"> cgleason@kw.com</a>
<p>267-307-9821</p> */
}
