import React from "react";
import NavBar from "./layout/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./layout/Footer";

const App = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
