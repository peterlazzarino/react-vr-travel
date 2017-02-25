import React from "react";
import GazeButton from "./GazeButton";
import { View } from 'react-vr';

class DestinationChooser extends React.Component{
    constructor(props){
        super(props);
        this.style = {
            height:1,
            width:15,
            padding:.75,
            position:'relative',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -1]}]
        }
        this.buttonWidth = 5;
        this.offSet = 1;
    }
    render(){
        return(
            <View style={this.style}>
                {this.props.destinations.map((destination, idx) => {
                    const offSet = (this.buttonWidth + this.offSet) * idx;
                    return <GazeButton width={this.buttonWidth} key={idx} offSet={offSet} text={destination} />
                })}
            </View>
        )       
    }
}

export default DestinationChooser;