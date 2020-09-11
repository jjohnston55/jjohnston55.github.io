import React, { useState } from 'react';
import { Card, List, Modal, Tooltip, Row, Col } from 'antd';
import { CloudFilled, CloudTwoTone, CodeFilled, CodeTwoTone
} from '@ant-design/icons';

const ProjectDisplay = (props) => {
    const title = props.title;
    const cover = props.cover;
    const liveLink = props.liveLink;
    const sourceLink = props.sourceLink;
    const previewText = props.previewText;
    const definition = props.definition;
    const learned = props.learned;
    const tech = props.tech;

    const [show, setShow]= useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Card hoverable
                cover={<img onClick={handleShow} alt={title} height='300vmin' src={cover}/>} 
                actions={[
                    <>
                    {
                        liveLink 
                        ? <Tooltip title='View Live Version' placement='bottom'>
                            <a href={liveLink} target='_blank' rel="noopener noreferrer">
                                <CloudTwoTone twoToneColor='#33a7f4' key="live" />
                            </a>
                        </Tooltip>
                        : <Tooltip title='No Live Version Available' placement='bottom'>
                            <CloudFilled key='notLive'/>
                        </Tooltip>
                    }
                    </>,
                    <>
                        {
                            sourceLink
                            ? <Tooltip title='View Source Code' placement='bottom'>
                                <a href={sourceLink} target='_blank' rel="noopener noreferrer">
                                    <CodeTwoTone twoToneColor='#33a7f4' key="code" />
                                </a>
                            </Tooltip>
                            : <Tooltip title='Source Code Is Private' placement='bottom'>
                                <CodeFilled key='noSourceCode' />
                            </Tooltip>
                        }
                    </>
                ]}
            >
                <Card.Meta onClick={handleShow} title={title} description={previewText} />
            </Card>

            <Modal title={title} visible={show} onCancel={handleClose} width='65vw' footer={null}>
                <Row>
                    <Col lg={12}>
                        <img src={cover} alt='Gif of project' />
                    </Col>
                    <Col lg={12}>
                        <Row>
                            <Col lg={12}>
                                <h1>What It Is</h1>
                                {/* blurb of what it is and how it works */}
                                <p>{definition}</p>
                            </Col>
                            <Col lg={6}>
                                <h1>Tech Used</h1>
                                <List dataSource={tech} renderItem={item => <List.Item style={{textAlign: 'center'}}>{item}</List.Item>}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={24}>
                                <h1>What I Learned</h1>
                                <p>{learned}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default ProjectDisplay;