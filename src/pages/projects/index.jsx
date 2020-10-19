import React from 'react';
import { Row, Col } from 'antd';
import ProjectDisplay from './project-display';
import './index.css';

import { CHATROOM, SPOTIFY } from '../../util/projects';
import povertySimLogo from '../../resources/poverty_sim.png';
import spotifyLogo from '../../resources/spotify.png';
import chatroomLogo from '../../resources/chatroom.png';
import chatroomClip from '../../resources/chatroom.webm';

const Projects = () => {

    //add gifs of live version
    //add source code link and live version link

    return (
        <div id='projects'>
            <Row justify='center'>
                <h1>Projects</h1>
            </Row>
            <Row gutter={[16, 16]} justify='center'>
                <Col>
                    <ProjectDisplay cover={povertySimLogo}
                        title='Poverty Simulator' 
                        previewText='A content management system designed for the United Way.'
                        definition='The Poverty Simulator is an online content management system developed for the United Way as a way to teach the community about poverty through a "Choose Your Own Adventure" style online game. 
                            The United Way is able to distribute and licence this software to other chapters of the organization as well as create, update, and delete regions and experiences.'
                        tech={['Azure', 'DotNetCore', 'React' ]}
                        learned='This project got me more familiar with React, and introduced me to creating a WebAPI back-end. 
                            My contribution to the project was mostly to develop the administrator pages where they will manage the software that the viewer will see as well develop custom API endpoints. 
                            I developed a Region Dashboard that can edit region information, create sponsors for a region, manage experiences within a region, and upload images to the server. 
                            At the time, I was the most familiar with React in my team so I would help everyone on the team if they had questions or needed help programming. 
                            I found that this leadership position allowed me to become more knowledgeable in the subject and become a better developer.'
                        />
                </Col>
                <Col>
                    <ProjectDisplay cover={spotifyLogo} 
                        sourceLink={SPOTIFY.CODE}
                        title='Spotify Clone' 
                        previewText='A Spotify web player clone built with React.' 
                        definition=''
                        tech={['Public APIs', 'React', 'Redux']}
                        learned='Creating this project taught me about Redux. I am now able to create '
                        />
                </Col>
                <Col>
                    <ProjectDisplay cover={chatroomLogo}
                        liveLink={CHATROOM.LIVE}
                        sourceLink={CHATROOM.CODE}
                        clip={chatroomClip}
                        title='GoReact Chatroom' 
                        previewText='A chatroom built with React and Go.' 
                        definition='This project is a chatroom web app that allows users to join either a random room or a specific room via a custom developed room code to communicate with multiple people at once.'
                        tech={['Docker', 'Go', 'React', 'Websockets']}
                        learned='This project taught me a lot about the Go language and its concurrency capabilities. I learned how to implement websockets in both the browser and the server of a project. 
                            I decided that I should run the backend on a Docker container. This taught me about containers, creating a Dockerfile, and some of the different commands associated with Docker. 
                            The Docker repository is located at jeffjohnst/goreact-chatroom.,'
                        />
                </Col>
            </Row>
        </div>
    )
}

export default Projects;