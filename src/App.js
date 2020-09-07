import React from 'react';
import { BackTop } from 'antd';
// import { ContactsOutlined,
// 	GithubOutlined,
// 	HomeOutlined,
// 	LinkedinOutlined,
// 	MailOutlined,
// 	PaperClipOutlined,
// 	PieChartOutlined,
// 	UserOutlined
// } from '@ant-design/icons'
import 'antd/dist/antd.css';
import './App.css';

import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';

const App = () => {
	const date = new Date();

	return (
		// 		<Menu theme='dark' defaultSelectedKeys='0' selectedKeys={pageContent} mode='horizontal' onClick={(evt) => setPageContent(evt['key'])}>
		// 			<Menu.Item key='0'>
		// 				<HomeOutlined />
		// 				<span>Home</span>
		// 			</Menu.Item>
		// 			<Menu.Item key='1'>
		// 				<PieChartOutlined />
		// 				<span>Projects</span>
		// 			</Menu.Item>
		// 			<Menu.Item key='2'>
		// 				<UserOutlined />
		// 				<span>About</span>
		// 			</Menu.Item>
		// 			<Menu.Item key='3'>
		// 				<PaperClipOutlined />
		// 				<span>Resume</span>
		// 			</Menu.Item>
		// 			<SubMenu key='sub1' title={ 
		// 				<>
		// 					<ContactsOutlined />
		// 					<span>Contact</span>
		// 				</>
        //       		}>
		// 				<Menu.Item key='4'>
		// 					<MailOutlined />
		// 					<a href='mailto:jeffjohnst98@gmail.com'>Email</a>
		// 				</Menu.Item>
		// 				<Menu.Item key='5'>
		// 					<GithubOutlined />
		// 					<a href='https://github.com/jjohnston55' target='_blank' rel='noreferrer noopener'>Github</a>
		// 				</Menu.Item>
		// 				<Menu.Item key='6'>
		// 					<LinkedinOutlined />
		// 					<a href='https://linkedin.com/in/jeff-johnston-software-developer' target='_blank' rel='noreferrer noopener'>LinkedIn</a>
		// 				</Menu.Item>
		// 			</SubMenu>
		// 		</Menu>
		<>
		 	<div className='banner'>
				<BackTop visibilityHeight='900' />
				<Home />
			</div>
			<div id='content' className='content'>
				<About />
				<Projects />
				<Resume />
				<footer>Jeff Johnston - {date.getFullYear()}<br/>https://coolors.co/ee6352-59cd90-23c9ff-d8d27b-ffffff</footer>
			</div>
		</>
	);
}

export default App;