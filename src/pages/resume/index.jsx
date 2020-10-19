import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons'
import './index.css';
import resume from '../../resources/Jeff Johnston Resume.pdf';

const Resume = () => {
    return (
        <div id='resume'>
            <h1>Resume</h1>
            <Button icon={<DownloadOutlined />} shape='round' size='large' type='primary'>
                <a href={resume} download="jeff-johnston-resume"> Download Resume</a>
            </Button>
            <Button icon={<EyeOutlined />} shape='round' size='large' type='primary'>
                <a href={resume} target='_blank' rel='noopener noreferrer'> View Resume</a>
            </Button>
        </div>
    )
}

export default Resume;