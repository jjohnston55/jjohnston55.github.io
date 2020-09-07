import React from 'react';
import { Row, Col, Card, List, Avatar } from 'antd';
import { LaptopOutlined, DatabaseOutlined, RocketOutlined } from '@ant-design/icons';

const Skills = () => {

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
		{
			title: 'Bootstrap',
		},
		{
			title: 'Ant Design',
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
			title: 'Git',
		},
	];

    return (        
        <Row justify='space-between'>
            <Col>
                <Card title={<><LaptopOutlined /> <>Front End</></>}>
                    <List itemLayout='horizontal' dataSource={frontEndData} renderItem={item => (
                        <List.Item>
                            <List.Item.Meta avatar={<Avatar size='small' shape='square'>{item.title[0]}</Avatar>} title={item.title}/>
                        </List.Item>
                    )}/>
                </Card>
            </Col>
            <Col>
                <Card title={<><DatabaseOutlined /> <>Back End</></>}>
                    <List itemLayout='horizontal' dataSource={backEndData} renderItem={item => (
                        <List.Item>
                            <List.Item.Meta avatar={<Avatar size='small' shape='square'>{item.title[0]}</Avatar>} title={item.title}/>
                        </List.Item>
                    )}/>
                </Card>
            </Col>
            <Col>
                <Card title={<><RocketOutlined /> <>Technologies</></>}>
                    <List itemLayout='horizontal' dataSource={techData} renderItem={item => (
                        <List.Item>
                            <List.Item.Meta avatar={<Avatar size='small' shape='square'>{item.title[0]}</Avatar>} title={item.title}/>
                        </List.Item>
                    )}/>
                </Card>
            </Col>
        </Row>
    )
};

export default Skills;