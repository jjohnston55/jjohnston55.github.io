import React, { useState } from "react";
import { Card, List, Modal, Tooltip, Row, Col } from "antd";
import { CloudFilled, CloudTwoTone, CodeFilled, CodeTwoTone } from "@ant-design/icons";
import "./index.css";

const ProjectDisplay = ({
	title,
	cover,
	clip,
	liveLink,
	sourceLink,
	previewText,
	definition,
	learned,
	tech,
}) => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<>
			<Card
				className="projectCard"
				hoverable
				bordered={false}
				cover={<img className="cardCover" onClick={handleShow} alt={title} src={cover} />}
				actions={[
					<>
						{liveLink ? (
							<Tooltip title="View Live Version" placement="bottom">
								<a href={liveLink} target="_blank" rel="noopener noreferrer">
									<CloudTwoTone twoToneColor="#33a7f4" key="live" />
								</a>
							</Tooltip>
						) : (
							<Tooltip title="No Live Version Available" placement="bottom">
								<CloudFilled key="notLive" />
							</Tooltip>
						)}
					</>,
					<>
						{sourceLink ? (
							<Tooltip title="View Source Code" placement="bottom">
								<a href={sourceLink} target="_blank" rel="noopener noreferrer">
									<CodeTwoTone twoToneColor="#33a7f4" key="code" />
								</a>
							</Tooltip>
						) : (
							<Tooltip title="Source Code Is Private" placement="bottom">
								<CodeFilled key="noSourceCode" />
							</Tooltip>
						)}
					</>,
				]}>
				<Card.Meta onClick={handleShow} title={title} description={previewText} />
			</Card>

			<Modal
				className="projectModal"
				title={title}
				visible={show}
				onCancel={handleClose}
				footer={null}>
				<Row justify="center">
					{clip ? (
						<Col className="cover">
							<video poster={cover} controls loop preload="true">
								<source src={clip} type="video/webm" />
							</video>
						</Col>
					) : (
						<Col className="cover">
							<img src={cover} alt="Cover" />
						</Col>
					)}
				</Row>
				<Row className="modalContent">
					<Col xs={24} sm={16} md={14} lg={14} xl={14}>
						<h1>What It Is</h1>
						<p>{definition}</p>
					</Col>
					<Col md={{ span: 8, offset: 2 }}>
						<h1>Tech Used</h1>
						<List
							dataSource={tech}
							renderItem={(item) => (
								<List.Item style={{ textAlign: "center" }}>{item}</List.Item>
							)}
						/>
					</Col>
				</Row>
				{learned && (
					<Row className="modalContent">
						<Col>
							<h1>What I Learned</h1>
							<p>{learned}</p>
						</Col>
					</Row>
				)}
			</Modal>
		</>
	);
};

export default ProjectDisplay;
