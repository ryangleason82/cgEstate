import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Bio = () => {
	return (
		<Container>
			<h1 className="mt-3 ml-3">About Connie Gleason</h1>
			<Row>
				<Col sm={4}>
					<Image src={require("../img/connie.jpg")} />
				</Col>
				<Col sm={8}>
					Connie Gleason grew up and has raised her children in Bucks County.
					She has a deep appreciation for the area’s architecture, history, and
					beauty. With numerous years in the business of helping her clients buy
					and sell homes and properties in Bucks and Montgomery counties, she is
					well recognized as one of the top realtors in the area. Connie always
					keeps her clients’ best interests in mind and her reputation has grown
					as being an exceptional realtor with the highest ethical standards.
					<br /> <br /> No one is more savvy or more connected or can match her
					depth of experience in every kind of market condition. Her exceptional
					marketing approach and responsiveness create an environment in which
					both buyers and sellers can have a rewarding experience. <br /> <br />
					When working with clients, Connie goes above and beyond the expected.
					She is results driven and well regarded for her thorough
					follow-through. Her professional accomplishments, including extensive
					industry knowledge and market guidance, set her apart: Marketing
					degree, Procurement Agent for GE, Fluor Daniel, and Mobil Oil. <br />{" "}
					<br /> Every sale for Connie is a unique opportunity to create a
					one-of-a-kind marketing strategy that optimizes the value and assets
					of your home with enticing photography and concise descriptions that
					bring in highly-qualified buyers. Above all, her commitment to selling
					your house for the best possible price is her top priority.
				</Col>
			</Row>
		</Container>
	);
};

export default Bio;
