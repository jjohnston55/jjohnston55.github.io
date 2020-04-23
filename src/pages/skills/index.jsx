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

    return (        
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
    )
};

export default Skills;