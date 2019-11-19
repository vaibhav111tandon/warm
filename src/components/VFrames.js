import React, { Component } from 'react';
class VFrames extends Component{
    render()
    {
        return (
                <div>
                <iframe style={{marginLeft: '10px'}} src={this.props.urlSource} height={this.props.height} width={this.props.width}/>    
                </div>
        )
    }
}

export default VFrames;
