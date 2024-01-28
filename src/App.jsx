import React from "react";
import "./App.css";
// import CampsiteCard from "./features/campsites/CampsiteCard.js";
import CampsiteLists from "./features/campsites/CampsiteLists.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	return (
		<div className="App">
			<Header />
			<CampsiteLists />
			<Footer />
		</div>
	);
}

export default App;
