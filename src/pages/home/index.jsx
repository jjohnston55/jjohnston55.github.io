import React from 'react';
import { Row, Col, Card, List, Avatar, Button } from 'antd';
import { LaptopOutlined, DatabaseOutlined, RocketOutlined } from '@ant-design/icons';
import './index.css';

const Home = (props) => {
	const view = props.view;

	const path = 'm 26 3 h 14 v 29 a -1 -1 0 0 1 -32 0 v -4 h 12 v 3 a 1 1 0 0 0 8 0 v -22 h 6 v 23 a 1 1 0 0 1 -20 0';
	const frontEndData = [
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
	];
	const backEndData = [
		{
			title: 'C#',
		},
		{
			title: 'ASP.Net Web API',
		},
	];
	const techData = [
		{
			title: 'Content',
		},
	];

	const handleResume = () => view('3');
	const handleProjects = () => view('1');

	return (
		<>
			<Row className='jumbotron' align='middle' gutter={16}>
				<Col flex={1}>
					<h1>Jeff Johnston</h1>
					<h3>Full Stack Developer</h3>
					<Row>
					<Col offset={4} span={4}>
						<Button shape='round' size='large' type='primary' onClick={handleResume}>View Resume</Button>
					</Col>
					<Col span={4}>
						<Button shape='round' size='large' type='primary' onClick={handleProjects}>View Projects</Button>
					</Col>
					</Row>
				</Col>
				<Col flex={1}>
					<svg viewBox='0 0 50 50'>
						<path className='path' d={path} />
					</svg>
				</Col>
			</Row>
			<Row>
				<Col span={4} offset={5}>
					<Card title={<><LaptopOutlined /> <>Front End</></>}>
						<List itemLayout='horizontal' dataSource={frontEndData} renderItem={item => (
							<List.Item>
								<List.Item.Meta avatar={<Avatar size='small' shape='square'>{item.title[0]}</Avatar>} title={item.title}/>
							</List.Item>
						)}/>
					</Card>
				</Col>
				<Col span={4} offset={1}>
					<Card title={<><DatabaseOutlined /> <>Back End</></>}>
						<List itemLayout='horizontal' dataSource={backEndData} renderItem={item => (
							<List.Item>
								<List.Item.Meta avatar={<Avatar size='small' shape='square'>{item.title[0]}</Avatar>} title={item.title}/>
							</List.Item>
						)}/>
					</Card>
				</Col>
				<Col span={4} offset={1}>
					<Card title={<><RocketOutlined /> <>Technologies</></>}>
						<List itemLayout='horizontal' dataSource={techData} renderItem={item => (
							<List.Item>
								<List.Item.Meta avatar={<Avatar size='small' shape='square'>{item.title[0]}</Avatar>} title={item.title}/>
							</List.Item>
						)}/>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Home;