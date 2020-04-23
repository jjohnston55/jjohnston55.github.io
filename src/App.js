import React, { useState } from 'react';
import { Layout, Menu, Row, Col, BackTop } from 'antd';
import { ContactsOutlined,
	GithubOutlined,
	HomeOutlined,
	LinkedinOutlined,
	MailOutlined,
	PaperClipOutlined,
	PieChartOutlined,
	UserOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css';
import './App.css';
import logo from './resources/logo.png';

import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';

const App = () => {

	const [collapsed, setCollapsed] = useState(true);
	const [pageContent, setPageContent] = useState('0');

	const { Header, Content, Footer, Sider } = Layout;
	const { SubMenu } = Menu;

	const date = new Date();

	const changeView = (evt) => {
		setPageContent(evt);
	};

	return (
		<Layout >
			<Layout className='site-layout'>
				<Header>
				<Menu theme='dark' defaultSelectedKeys='0' selectedKeys={pageContent} mode='horizontal' onClick={(evt) => setPageContent(evt['key'])}>
					<Menu.Item key='0'>
						<HomeOutlined />
						<span>Home</span>
					</Menu.Item>
					<Menu.Item key='1'>
						<PieChartOutlined />
						<span>Projects</span>
					</Menu.Item>
					<Menu.Item key='2'>
						<UserOutlined />
						<span>About</span>
					</Menu.Item>
					<Menu.Item key='3'>
						<PaperClipOutlined />
						<span>Resume</span>
					</Menu.Item>
					<SubMenu key='sub1' title={ 
						<>
							<ContactsOutlined />
							<span>Contact</span>
						</>
              		}>
						<Menu.Item key='4'>
							<MailOutlined />
							<a href='mailto:jeffjohnst98@gmail.com'>Email</a>
						</Menu.Item>
						<Menu.Item key='5'>
							<GithubOutlined />
							<a href='https://github.com/jjohnston55' target='_blank' rel='noreferrer noopener'>Github</a>
						</Menu.Item>
						<Menu.Item key='6'>
							<LinkedinOutlined />
							<a href='https://linkedin.com/in/jeff-johnston-software-developer' target='_blank' rel='noreferrer noopener'>LinkedIn</a>
						</Menu.Item>
					</SubMenu>
				</Menu>
				</Header>
				<Content style={{ margin: '16px', minHeight: '80vh' }}>
					<div className='site-layout-content' style={{ padding: 24 }}>
						<BackTop />
						<Home view={changeView} />
						<Projects />
						<About />
						<Resume />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Jeff Johnston - {date.getFullYear()}</Footer>
			</Layout>
		</Layout>
	);
}

export default App;