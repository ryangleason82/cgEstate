import React from "react";
import NavBar from "./layout/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import "./App.css";
import About from "./about/About";

const App = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Landing />
				<About />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
