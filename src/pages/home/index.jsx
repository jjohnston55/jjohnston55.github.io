import React from 'react';
import { Row, Col, Button, Tooltip } from 'antd';
import { GithubOutlined,
	LinkedinOutlined,
	MailOutlined,
	PaperClipOutlined,
	PartitionOutlined
} from '@ant-design/icons'
import './index.css';
import resume from '../../resources/test.pdf';

const Home = (props) => {

	const path = 'm 26 3 h 14 v 29 a -1 -1 0 0 1 -32 0 v -4 h 12 v 3 a 1 1 0 0 0 8 0 v -22 h 6 v 23 a 1 1 0 0 1 -20 0';

	const handleDown = () => {
		document.getElementById('content').scrollIntoView({behavior: 'smooth'});
	}

	const projectClick = () => {
		document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
	}
	
	return (
		<>
			<Row className='jumbotron' justify='center' align='middle'>
				<Col span={6}>
					<h1>Jeff Johnston</h1>
					<h3>Full Stack Developer</h3>
					<Row justify='space-around'>
						<Col>
							<Tooltip title='View Resume' placement='bottom'>
								<a href={resume} target='_blank' rel='noreferrer noopener'>
									<Button type='primary' icon={<PaperClipOutlined />} />
								</a>
							</Tooltip>
						</Col>
						<Col>
							<Tooltip title='View Projects' placement='bottom'>
								<Button type='primary' icon={<PartitionOutlined />} onClick={projectClick} />
							</Tooltip>
						</Col>
						<Col>
							<Tooltip title='View LinkedIn' placement='bottom'>
								<a href='https://linkedin.com/in/jeff-johnston-software-developer' target='_blank' rel='noreferrer noopener'>
									<Button type='primary' icon={<LinkedinOutlined />} />
								</a>
							</Tooltip>
						</Col>
						<Col>
							<Tooltip title='View Github' placement='bottom'>
								<a href='https://github.com/jjohnston55' target='_blank' rel='noreferrer noopener'>
									<Button type='primary' icon={<GithubOutlined />} />
								</a>
							</Tooltip>
						</Col>
						<Col>
							<Tooltip title='jeffjohnst98@gmail.com' placement='bottom'>
								<a href='mailto:jeffjohnst98@gmail.com'>
									<Button type='primary' icon={<MailOutlined />} />
								</a>
							</Tooltip>
						</Col>
					</Row>
				</Col>
				<Col span={6}>
					<svg className='logo' viewBox='0 0 50 50'>
						<path className='path' d={path} />
					</svg>
				</Col>
			</Row>
			<div className='go-down' onClick={handleDown}>
				<svg viewBox="0 0 100 100">
					<path d="m 10 10 l 40 40 l 40 -40 l 0 40 l -40 40 l -40 -40"/>
				</svg>
			</div>
		</>
	)
}

export default Home;