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
                <Col span={8}>
                    {/* <Card title='Sample Project' hoverable actions={[
                        <>
                            <CloudOutlined key="live" />
                            <span>View Live Version</span>
                        </>,
                        <>
                            <CodeOutlined key="code" />
                            <span>View Source Code</span>
                        </>,
                    ]}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus voluptates, soluta quisquam, porro facere qui quibusdam molestiae unde vel magni explicabo minus mollitia, temporibus quo sit accusantium possimus eveniet.
                    </Card> */}
                    <ProjectDisplay title='Sample Project' previewText='Lorem ipsum' />
                </Col>
            </Row>
        </>
    )
}

export default Projects;