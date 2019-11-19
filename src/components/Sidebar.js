import React, { Component } from 'react';
import ListCat from './ListCat';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import SearchUrl from './SearchUrl';
class Sidebar extends Component {

    state = {
        url: ''
    }

    temp = "";

    devices = [...this.props.devices]
    getData = async (val) => {
        await this.setState({
            url: val
        });

        await this.props.sendMoreData(this.state.url);

    }

    getCheckedData(checkedValue, width, height){
        console.log(checkedValue);
    }

    render() {
        return(
            <Paper style={{backgroundColor: '#212121'}}>
                <Paper style={{ backgroundColor: '#dedede', textAlign: 'center'}}>
                    <SearchUrl sendData={this.getData}/>
                </Paper>
                <Paper>
                    <List style={{ backgroundColor: '#212121', color: 'whitesmoke', height: '500px', overflowY: 'scroll' }}>
                        {
                        this.devices.map((device, index) => {
                            return <ListCat sendCheckedData={this.getCheckedData} key={index} deviceName={device.deviceName} width={device.width} height={device.height} checkedVal={device.checkedVal}/>
                        })
                        }
                    </List>
                </Paper>
                </Paper>
        );
    }

}

export default Sidebar;



