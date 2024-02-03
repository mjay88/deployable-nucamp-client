import "./App.css";
// import CampsiteCard from "./features/campsites/CampsiteCard.js";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { Route, Routes } from "react-router-dom";
import CampsiteDetailPage from "./pages/CampsiteDetailPage.jsx";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="directory" element={<CampsitesDirectoryPage />} />
				<Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
