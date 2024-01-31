import { Container, Row, Col, Button } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail.jsx";
import CampsitesList from "../features/campsites/CampsitesList.jsx";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";

import React from "react";

const CampsitesDirectoryPage = () => {
	let selectedCampsite = selectRandomCampsite();

	const toggleCampsite = () => {
		selectedCampsite = selectRandomCampsite();
	};

	return (
		<Container>
			<Button onClick={() => toggleCampsite()}>Select Random Campsite</Button>
			<Row>
				<Col sm="5" md="7">
					<CampsitesList />
				</Col>
				<Col sm="7" md="5">
					<CampsiteDetail campsite={selectedCampsite} />
				</Col>
			</Row>
		</Container>
	);
};

export default CampsitesDirectoryPage;
