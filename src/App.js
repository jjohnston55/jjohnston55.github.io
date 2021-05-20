import React from "react";
import { BackTop } from "antd";
import "antd/dist/antd.css";
import "./App.css";

import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";

const App = () => {
	const date = new Date();

	return (
		<>
			<div className="banner">
				<BackTop visibilityHeight={0} />
				<Home />
			</div>
			<div id="content" className="content">
				<About />
				<Projects />
				<footer>Jeff Johnston - {date.getFullYear()}</footer>
			</div>
		</>
	);
};

export default App;
