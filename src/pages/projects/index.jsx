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
        <div id='projects'>
            <h1>Projects</h1>
            <Row gutter={[16, 16]} justify='center'>
                <Col>
                    <ProjectDisplay cover={povertySimLogo}
                        title='Poverty Simulator' 
                        previewText='A content management system designed for the United Way.'
                        definition='The Poverty Simulator is an online content management system developed for the United Way as a way to teach the community about poverty through a "Choose Your Own Adventure" style online game. 
                                    The United Way is able to distribute and licence this software to other chapters of the organization as well as create, update, and delete regions and experiences.'
                        tech={['React', 'DotNetCore', 'Azure']}
                        learned='This project got me more familiar with React, and introduced me to creating a WebAPI back-end'
                        />
                </Col>
                <Col>
                    <ProjectDisplay cover={spotifyLogo} 
                        liveLink='https://dummyimage.com/300' 
                        sourceLink={SPOTIFY.CODE}
                        title='Spotify Clone' 
                        previewText='A clone of the spotify web player built with React.' 
                        definition=''
                        tech={['React', 'Redux', 'SpotifyAPI']}
                        />
                </Col>
            </Row>
        </div>
    )
}

export default Projects;