import React from 'react';
import { Row, Col } from 'antd';
import ProjectDisplay from './project-display';
import './index.css';

const Projects = () => {

    //add gifs of live version
    //add source code link and live version link

    return (
        <div className='projects'>
            <h1>Projects</h1>
            <Row gutter={[16, 16]}>
                <Col>
                    <ProjectDisplay cover='https://dummyimage.com/300' 
                        liveLink='https://dummyimage.com/300' 
                        sourceLink='https://dummyimage.com/300' 
                        title='Sample Project' 
                        previewText='Lorem ipsum' />
                </Col>
                <Col>
                    <ProjectDisplay cover='https://dummyimage.com/300' 
                        sourceLink='https://dummyimage.com/300'
                        title='Sample Project'
                        previewText='Lorem ipsum' />
                </Col>
                <Col>
                    <ProjectDisplay cover='https://dummyimage.com/300' 
                        liveLink='https://dummyimage.com/300' 
                        title='Sample Project' 
                        previewText='Lorem ipsum' />
                </Col>
                <Col>
                    <ProjectDisplay cover='https://dummyimage.com/300' 
                        title='Sample Project' 
                        previewText='Lorem ipsum' />
                </Col>
                <Col>
                    <ProjectDisplay cover='https://dummyimage.com/300' 
                        liveLink='https://dummyimage.com/300' 
                        title='Sample Project' 
                        previewText='Lorem ipsum' />
                </Col>
                <Col>
                    <ProjectDisplay cover='https://dummyimage.com/300' 
                        sourceLink='https://dummyimage.com/300' 
                        title='Sample Project' 
                        previewText='Lorem ipsum' />
                </Col>
            </Row>
        </div>
    )
}

export default Projects;