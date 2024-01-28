import React from "react";
import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsiteCard from "./CampsiteCard";
import { Col, Row } from "reactstrap";

const CampsiteLists = () => {
	return (
		<>
			<Row className="ms-auto">
				{CAMPSITES?.map((campsite) => (
					<Col key={campsite.id} md="5" className="m-4">
						<CampsiteCard campsite={campsite} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default CampsiteLists;
