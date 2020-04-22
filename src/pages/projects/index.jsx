import React from 'react';
import { Row, Col } from 'antd';
import ProjectDisplay from './project-display';

const Projects = () => {

    //add gifs of live version
    //add source code link and live version link

    return (
        <>
            <h1>Projects</h1>
            <Row gutter={16}>
                <Col >
                    <ProjectDisplay cover='https://dummyimage.com/300' title='Sample Project' previewText='Lorem ipsum' />
                </Col>
                <Col >
                    <ProjectDisplay cover='https://dummyimage.com/300' title='Sample Project' previewText='Lorem ipsum' />
                </Col>
                <Col >
                    <ProjectDisplay cover='https://dummyimage.com/300' title='Sample Project' previewText='Lorem ipsum' />
                </Col>
                <Col >
                    <ProjectDisplay cover='https://dummyimage.com/300' title='Sample Project' previewText='Lorem ipsum' />
                </Col>
                <Col >
                    <ProjectDisplay cover='https://dummyimage.com/300' title='Sample Project' previewText='Lorem ipsum' />
                </Col>
                <Col >
                    <ProjectDisplay cover='https://dummyimage.com/300' title='Sample Project' previewText='Lorem ipsum' />
                </Col>
                <Col >
                    <ProjectDisplay cover='https://dummyimage.com/300' title='Sample Project' previewText='Lorem ipsum' />
                </Col>
            </Row>
        </>
    )
}

export default Projects;