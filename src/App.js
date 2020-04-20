import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
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


import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';

const App = () => {

	const [collapsed, setCollapsed] = useState(false);
	const [pageContent, setPageContent] = useState(<Home />);

	const { Header, Content, Footer, Sider } = Layout;
	const { SubMenu } = Menu;

	const handleMenuClick = (evt) => {
		console.log(evt);
		switch (evt['key']) {
			case '0':
				console.log('Home');
				setPageContent(<Home />);
				break;
			case '1':
				console.log('Projects');
				setPageContent(<Projects />);
				break;
			case '2':
				console.log('About');
				setPageContent(<About />);
				break;
			case '3':
				console.log('Resume');
				setPageContent(<Resume />);
				break;
			default:
				break;
		}
	}

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} breakpoint='md'>
				<div className='logo' />
				<Menu theme='dark' defaultSelectedKeys={['0']} mode='inline' onClick={handleMenuClick}>
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
			</Sider>
			<Layout className='site-layout'>
				<Header className='site-layout-header' style={{ padding: 0 }} />
				<Content style={{ margin: '16px', height: '80vh' }}>
					<div className='site-layout-content' style={{ padding: 24 }}>
						{pageContent}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Jeff Johnston</Footer>
			</Layout>
		</Layout>
	);
}

export default App;