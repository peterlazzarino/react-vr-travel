import React, { PropTypes } from "react";
import { Text, View } from 'react-vr';

class Tour extends React.Component{
    constructor(props){
        super(props); 
        this.gazeTour = this.gazeTour.bind(this);
        this.state = {
            backgroundColor:'red'
        }
    }
    gazeTour(){
        this.setState({
            backgroundColor:'green'
        })
    }
    render(){
        return (
            <View onGazeEnter={this.gazeTour} onGazeExit  style={{}} enableGazeCollision>
                <Text
                    style={{
                        backgroundColor:this.state.backgroundColor,
                        padding: 0.02,
                        textAlign:'center',
                        textAlignVertical:'center',
                        fontSize: 0.8,
                        layoutOrigin: [0.5, 0.5],
                        transform: [{translate: [0, -1, -5]}],
                    }}>
                    {this.props.name}
                </Text>
            </View>
        )
    }
}

Tour.PropTypes = {
    name: PropTypes.string.required
}

export default Tour;