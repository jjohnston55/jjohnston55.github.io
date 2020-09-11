import React from 'react';
import { Row, Col } from 'antd';
import Skills from '../skills';
import './index.css';

const About = () => {
    return (
        <div id='about'>
            <h1>About</h1>
            <Row justify='space-around' align='middle'>
                <Col span={8}>
                    <span>
                        My name is Jeff Johnston and I am a Full Stack Developer based in Edmonton, Alberta.
                        I am passionate about learning new technologies and strive to continue expanding my skillset.
                        When I am not developing, I spend my time with friends and family, snowboarding, and camping.
                    </span>
                </Col>
                <Col span={12}>
                    <Skills />
                </Col>
            </Row>
        </div>
    )
}

export default About;