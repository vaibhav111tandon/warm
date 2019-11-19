import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';
import FrameContainer from './FrameContainer';

class Main extends Component {
    
    state = {
        url: ''
    }

    devices = [
        {
            id: 1,
            deviceName: 'Galaxy S5',
            width: '360',
            height: '640',
            checkedVal: true
        },
        {
            id: 2,
            deviceName: 'Pixel 2',
            width: '411',
            height: '731',
            checkedVal: true
        },
        {
            id: 3,
            deviceName: 'Pixel 2 XL',
            width: '411',
            height: '823',
            checkedVal: true
        },
        {
            id: 4,
            deviceName: 'iPhone 5/SE',
            width: '320',
            height: '568',
            checkedVal: true
        }
    ]

    getMoreData = (val) => {
        
        this.setState({
            url: val
        })
    }

    render(){
    return (
        <div>
            <Grid container>
                <Grid item xs={3}>
                    <Sidebar sendMoreData = {this.getMoreData} devices={this.devices}/>
                </Grid>
                <Grid item xs={9} style={{backgroundColor: '#212121'}}>
                    <FrameContainer urlValue={this.state.url} devices={this.devices}/>
                </Grid>
            </Grid>
        </div>
    )
    }
};

export default Main;