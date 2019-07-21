import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Landing = () => {
	return (
		<div id="landing" className="landing">
			<div className="dark-overlay">
				<Container>
					<div className="text-light mt-5">
						<Row>
							<Col sm={2} />
							<Col sm={8}>
								<h1 className="font-weight-bold text-center mt-4">
									Find Your Next Dream Home!
								</h1>
							</Col>
							<Col sm={2} />
						</Row>
						<Row>
							<Col sm={2} />
							<Col sm={8}>
								<h4 className="text-center mt-4">
									Use my powerful search engine to find your next house
								</h4>
							</Col>
							<Col sm={2} />
						</Row>
						<Row className="mt-4">
							<Col sm={2} />
							<Col sm={8}>
								<Form>
									<Form.Group>
										<FormControl
											type="text"
											placeholder="Enter an address, neighborhood,
											city, or zipcode..."
											className="mb-3"
										/>
									</Form.Group>
								</Form>
							</Col>
							<Col sm={2} />
						</Row>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Landing;
