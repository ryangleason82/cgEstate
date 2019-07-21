import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
	return (
		<Container>
			<Row className="mt-4">
				<Col className="text-center">
					<i className="search huge icon" />
					<h5>Buying a House?</h5>
					<p>
						<small>
							I have the expertise to find just the right property for you. My
							knowledge of the market and neighborhoods will work to your
							advantage! Let’s get started.
						</small>
					</p>
				</Col>

				<Col className="text-center">
					<i className="dollar sign huge icon" />
					<h5>Thinking of Selling Your Home?</h5>
					<p>
						<small>
							I am committed to selling your home for the best possible price.
							Ask for a free Home Market Analysis and a strategic marketing plan
							specifically designed for you.
						</small>
					</p>
				</Col>
				<Col className="text-center">
					<i className="home huge icon" />
					<h5>Looking for the Perfect Rental?</h5>
					<p>
						<small>
							Are you being relocated and not ready to buy? There are
							extraordinary properties available for rental.
						</small>
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
