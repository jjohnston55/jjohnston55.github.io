import React from 'react';
import { Row, Col, Card, List, Avatar } from 'antd';
import { LaptopOutlined, ShareAltOutlined, RocketOutlined } from '@ant-design/icons';
import './index.css';

const Home = () => {

	const path = 'm 26 3 h 14 v 29 a -1 -1 0 0 1 -32 0 v -4 h 12 v 3 a 1 1 0 0 0 8 0 v -22 h 6 v 23 a 1 1 0 0 1 -20 0';
	const data = [
		{
			icon: <LaptopOutlined />,
			title: 'Front End',
			items: [
				{
					title: 'HTML',
				},
				{
					title: 'CSS',
				},
				{
					title: 'Javascript',
				},
				{
					title: 'React',
				},
			]
		},
		{
			icon: <ShareAltOutlined />,
			title: 'Server',
			items: [
				{
					title: 'C#',
				},
				{
					title: 'ASP.Net',
				},
			]
		},
		{
			icon: <RocketOutlined />,
			title: 'Technologies',
			items: [
				{
					title: 'Content',
				},
			]
		},
	];

	return (
		<>
			<Row className='jumbotron' align='middle' gutter={16}>
				<Col flex={2}>
					<h1>Jeff Johnston</h1>
					<h3>Full Stack Developer</h3>
				</Col>
				<Col flex={3}>
					<svg viewBox='0 0 50 50'>
						<path className='path' d={path} />
					</svg>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
				<List grid={{ gutter: 16, column: 3}} dataSource={data} 
					renderItem={focus => (
						<List.Item>
							<Card title={<Row><Col span={4}>{focus.icon}</Col> <Col span={20}>{focus.title}</Col></Row>}>
								<List itemLayout='horizontal' dataSource={focus.items} renderItem={item => (
									<List.Item>
										<List.Item.Meta avatar={<Avatar size='small' shape='square'>J</Avatar>} title={item.title}/>
									</List.Item>
								)}/>
							</Card>
						</List.Item>
					)}
				/>
				</Col>
			</Row>
		</>
	)
}

export default Home;