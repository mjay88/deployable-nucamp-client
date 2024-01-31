import React from "react";
import CampsiteCard from "./CampsiteCard";
import { Col, Row } from "reactstrap";
import { selectAllCampsites } from "./campsitesSlice";
const CampsitesLists = () => {
	const campsites = selectAllCampsites();
	return (
		<>
			<Row className="ms-auto">
				{campsites?.map((campsite) => (
					<Col key={campsite.id} md="5" className="m-4">
						<CampsiteCard campsite={campsite} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default CampsitesLists;
