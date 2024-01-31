import React from "react";
import "./App.css";
// import CampsiteCard from "./features/campsites/CampsiteCard.js";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	return (
		<div className="App">
			<Header />
			<CampsitesDirectoryPage />
			<Footer />
		</div>
	);
}

export default App;
