import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons'
import './index.css';

const Resume = () => {
    return (
        <>
            <h1>Resume</h1>
            <Button icon={<DownloadOutlined />} shape='round' size='large' type='primary'>
                {/* <a href='' download="jeff-johnston-resume">Download Resume</a> */}
            </Button>
        </>
    )
}

export default Resume;