import React from "react";
import { Text, View, StyleSheet } from 'react-vr';
import { absoluteCenter } from '../style/style-mixins'; 

class GazeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gazeOverLayWidth:0
        };
        this.gazeTimeout;
        this.increaseOverlayWidth = this.increaseOverlayWidth.bind(this);
        this.gazeEnter = this.gazeEnter.bind(this);
        this.gazeLeave = this.gazeLeave.bind(this);
        this.gazeComplete = this.gazeComplete.bind(this);
    }
    gazeEnter(){
        console.log("HEY")
        this.gazeTimeout = setInterval(() => this.increaseOverlayWidth(), 5);
    }
    gazeLeave(){
        console.log("HEY")
        clearInterval(this.gazeTimeout); 
        this.setState({
            gazeOverLayWidth: 0
        });
    }
    gazeComplete(){
        clearInterval(this.gazeTimeout); 
    }
    increaseOverlayWidth(){
        const newOverlayWidth = this.state.gazeOverLayWidth + (this.props.width / 100);
        if(newOverlayWidth > this.props.width){
            this.gazeComplete();
        }
        this.setState({
            gazeOverLayWidth: Math.min(5, newOverlayWidth)
        });
    }
    render(){
        return(
            <View onEnter={this.gazeEnter} onExit={this.gazeLeave} style={{
                    height:1,
                    width: this.props.width,
                    padding:.75,
                    position:'absolute',
                    transform: [{translate: [this.props.offSet, 3, -10]}],
                    backgroundColor:'#333',
                    layoutOrigin: [0.5, 0.5],
                }}>
                <View style={{ 
                    height: 1.5, 
                    backgroundColor: 'blue', 
                    position:'absolute',
                    top:0,
                    opacity:.2,
                    bottom:0,
                    width: this.state.gazeOverLayWidth,
                    left:0,
                }}>
                </View>
                <Text style={{                     
                    fontSize: 1,
                    position:'absolute',
                    top:0,
                    bottom:0,
                    color:'white',
                }} >{this.props.text}</Text> 
            </View>
        )
       
    }
}

export default GazeButton;