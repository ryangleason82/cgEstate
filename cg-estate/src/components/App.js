import React from "react";
import NavBar from "./layout/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import "./App.css";
import About from "./about/About";
import Bio from "./bio/Bio";
import Search from "./search/Search";

const App = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Route exact path="/" component={Landing} />
				<Route exact path="/" component={About} />
				<div className="Container">
					<Route exact path="/about" component={Bio} />
					<Route exact path="/search" component={Search} />
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
