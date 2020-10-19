import React from 'react';
import { Row, Col } from 'antd';
import Skills from '../skills';
import './index.css';

const About = () => {
    return (
        <div id='about'>
            <Row className='title' justify='center'>
                <h1>My name is Jeff Johnston</h1>
            </Row>
            <Row className='description' justify='center'>
                <Col span={12}>
                    <span>
                        I am a Full Stack Developer based in Edmonton, Alberta.
                        I am currently in the <a href='https://www.nait.ca/programs/baist-information-systems' target='_blank' rel='noopener noreferrer'>Bachelor of Applied Information Systems Technology</a> program at the 
                        Northern Alberta Institute of Technology and have a Diploma in <a href='https://www.nait.ca/programs/dmit-computer-software-development' target='_blank' rel='noopener noreferrer'>Digital Media and IT</a> from the same institute.
                        I am passionate about learning new technologies and strive to continue expanding my skillset.
                        When I am not developing, I like to spend my time with friends and family, snowboarding, and camping.
                    </span>
                </Col>
            </Row>
            <Row justify='space-around' align='middle'>                
                <Col>
                    <Skills />
                </Col>
            </Row>
        </div>
    )
}

export default About;