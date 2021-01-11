import React from "react";
import { Row, Col, Card, List, Avatar } from "antd";
import {
	LaptopOutlined,
	DatabaseOutlined,
	RocketOutlined,
} from "@ant-design/icons";
import "./index.css";

const Skills = () => {
	const frontEndData = [
		{
			title: "HTML | CSS",
		},
		{
			title: "Javascript",
		},
		{
			title: "React | Redux",
		},
	];
	const backEndData = [
		{
			title: "C#",
		},
		{
			title: "DotNet Core",
		},
		{
			title: "Go",
		},
		{
			title: "SQL",
		},
	];
	const toolsData = [
		{
			title: "Docker",
		},
		{
			title: "Git",
		},
	];

	return (
		<Row gutter={[32, 32]} justify="center">
			<Col>
				<Card
					title={
						<>
							<LaptopOutlined /> <>Front End</>
						</>
					}>
					<List
						className="skill-list"
						dataSource={frontEndData}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									avatar={
										<Avatar size="small" shape="square">
											{item.title[0]}
										</Avatar>
									}
									title={item.title}
								/>
							</List.Item>
						)}
					/>
				</Card>
			</Col>
			<Col>
				<Card
					title={
						<>
							<DatabaseOutlined /> <>Back End</>
						</>
					}>
					<List
						className="skill-list"
						dataSource={backEndData}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									avatar={
										<Avatar size="small" shape="square">
											{item.title[0]}
										</Avatar>
									}
									title={item.title}
								/>
							</List.Item>
						)}
					/>
				</Card>
			</Col>
			<Col>
				<Card
					title={
						<>
							<RocketOutlined /> <>Dev Tools</>
						</>
					}>
					<List
						className="skill-list"
						dataSource={toolsData}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									avatar={
										<Avatar size="small" shape="square">
											{item.title[0]}
										</Avatar>
									}
									title={item.title}
								/>
							</List.Item>
						)}
					/>
				</Card>
			</Col>
		</Row>
	);
};

export default Skills;
