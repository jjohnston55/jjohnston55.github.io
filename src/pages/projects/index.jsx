import React from 'react';
import { Row, Col } from 'antd';
import ProjectDisplay from './project-display';
import './index.css';

import { SPOTIFY, POVERTY_SIMULATOR } from '../../util/projects';
import povertySimLogo from '../../resources/poverty_sim.png';
import spotifyLogo from '../../resources/spotify.png';

const Projects = () => {

    //add gifs of live version
    //add source code link and live version link

    return (
        <div id='projects' className='projects'>
            <h1>Projects</h1>
            <Row gutter={[16, 16]} justify='center'>
                <Col>
                    <ProjectDisplay cover={povertySimLogo}
                        liveLink='https://dummyimage.com/300' 
                        title='Poverty Simulator' 
                        previewText='A content management system designed for the United Way.' />
                </Col>
                <Col>
                    <ProjectDisplay cover={spotifyLogo} 
                        liveLink='https://dummyimage.com/300' 
                        sourceLink={SPOTIFY.CODE}
                        title='Spotify Clone' 
                        previewText='A clone of the spotify web player built with React.' />
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