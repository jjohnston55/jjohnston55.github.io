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
import './index.css';


import Home from '../home';

const PageLayout = () => {

	const [collapsed, setCollapsed] = useState(false);

	const { Header, Content, Footer, Sider } = Layout;
	const { SubMenu } = Menu;

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} breakpoint='md'>
				<div className="logo" />
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
					<Menu.Item key="1">
						<HomeOutlined />
						<span>Home</span>
					</Menu.Item>
					<Menu.Item key="2">
						<PieChartOutlined />
						<span>Projects</span>
					</Menu.Item>
					<Menu.Item key="3">
						<UserOutlined />
						<span>About</span>
					</Menu.Item>
					<Menu.Item key="4">
						<PaperClipOutlined />
						<span>Resume</span>
					</Menu.Item>
					<SubMenu key="5" title={ 
						<>
							<ContactsOutlined />
							<span>Contact</span>
						</>
              		}>
						<Menu.Item key="6">
							<MailOutlined />
							<a href='mailto:jeffjohnst98@gmail.com'>Email</a>
						</Menu.Item>
						<Menu.Item key="7">
							<GithubOutlined />
							<a href='https://github.com/jjohnston55' target='_blank' rel='noreferrer noopener'>Github</a>
						</Menu.Item>
						<Menu.Item key='8'>
							<LinkedinOutlined />
							<a href='https://linkedin.com/in/jeff-johnston-software-developer' target='_blank' rel='noreferrer noopener'>LinkedIn</a>
						</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }} />
				<Content style={{ margin: '0 16px' }}>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
						<Home />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Jeff Johnston</Footer>
			</Layout>
		</Layout>
	);
}

export default PageLayout;
