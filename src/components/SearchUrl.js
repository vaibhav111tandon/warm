import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class SearchUrl extends Component{

state = {
    url : ''
}

handleUrlChange(e){
    this.setState({
        url: e.target.value
    })
    this.props.sendData(e.target.value);
}


render(){
    return (
        <TextField
          value={this.url}
          style={{ backgroundColor: '#efefef', width: '80%' }}  
          label="Enter website"
          margin="normal"
          variant="outlined"
          color="primary"
          onChange={(event) => this.handleUrlChange(event)}
        />
    )
}    
}

export default SearchUrl;