import React from 'react';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';

const App = () => {
	const date = new Date();

	return (
		<>
		 	<div className='banner'>
				<BackTop visibilityHeight={document.documentElement.clientHeight - 1} />
				<Home />
			</div>
			<div id='content' className='content'>
				<About />
				<Projects />
				<Resume />
				<footer>Jeff Johnston - {date.getFullYear()}
				{/* <br/>https://coolors.co/ee6352-59cd90-23c9ff-d8d27b-ffffff */}
				</footer>
			</div>
		</>
	);
}

export default App;