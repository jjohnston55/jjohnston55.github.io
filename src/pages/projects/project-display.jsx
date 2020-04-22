import React, { useState } from 'react';
import { Card, Modal, Tooltip, Row, Col } from 'antd';
import { CloudOutlined, CodeOutlined, EllipsisOutlined
} from '@ant-design/icons';

const ProjectDisplay = (props) => {
    const title = props.title;
    const liveLink = props.liveLink;
    const sourceLink = props.sourceLink;
    const previewText = props.previewText;

    const [show, setShow]= useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Card title={title} hoverable 
                actions={[
                    <Tooltip title='View Live Version' placement='bottomLeft'>
                        <a href={liveLink} target='_blank' rel="noopener noreferrer">
                            <CloudOutlined key="live" />
                        </a>
                    </Tooltip>,
                    <Tooltip title='View Source Code' placement='bottom'>
                        <a href={sourceLink} target='_blank' rel="noopener noreferrer">
                            <CodeOutlined key="code" />
                        </a>
                    </Tooltip>,
                    <Tooltip title='View Details' placement='bottomRight' onClick={handleShow}>
                        <EllipsisOutlined key='show' />
                    </Tooltip>,
                ]}
            >
                {previewText}
            </Card>

            <Modal title={title} visible={show} onCancel={handleClose} width='65vw' footer={null}>
                <Row>
                    <Col lg={12}>
                        <img src='' alt='Gif of project' />
                    </Col>
                    <Col lg={12}>
                        <Row>
                            <Col lg={12}>
                                blurb of what it is and how it works
                            </Col>
                            <Col lg={12}>
                                tech used
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={24}>
                                what I learned
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default ProjectDisplay;