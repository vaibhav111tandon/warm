import React from 'react';
import { Container } from '@material-ui/core';
import VFrames from './VFrames';

const FrameContainer = (props) => {
    const devices = [...props.devices]
    return (
        <Container style={{display: 'flex', height: '600px', overflowX: 'scroll', width: 'auto'}}>
                        {   
                        devices.map((device, index) => {
                            return <VFrames urlSource={props.urlValue} height={device.height+'px'} width={device.width+'px'}/>
                        })
                        }
            
        </Container>
    )
}

export default FrameContainer;
