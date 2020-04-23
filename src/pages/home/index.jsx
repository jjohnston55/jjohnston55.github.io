import React from 'react';
import { Row, Col, Button, Select } from 'antd';
import './index.css';

const Home = (props) => {

	const path = 'm 26 3 h 14 v 29 a -1 -1 0 0 1 -32 0 v -4 h 12 v 3 a 1 1 0 0 0 8 0 v -22 h 6 v 23 a 1 1 0 0 1 -20 0';
	
	return (
		<>
			<Select placeholder='Hey'>
				<Select.Option>Hey</Select.Option>
			</Select>
			<Row className='jumbotron' align='middle'>
				<Col span={24}>
					<h1>Jeff Johnston</h1>
					<h3>Full Stack Developer</h3>
					<Row className='buttons'>
						<Col offset={10} span={2}>
							<Button type='primary'>View Resume</Button>
						</Col>
						<Col offset={1} span={2}>
							<Button type='primary'>View Projects</Button>
						</Col>
					</Row>
				</Col>
				{/* <Col className='logo' offset={10} span={12}> */}
				{/* </Col> */}
				<div className='logo'>

					<svg viewBox='0 0 50 50'>
						<path className='path' d={path} />
					</svg>
				</div>
			</Row>
			<div className='go-down'>
				V
			</div>
		</>
	)
}

export default Home;