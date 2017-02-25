import React from "react";
import { Text, View, StyleSheet } from 'react-vr';
import { connect } from 'react-redux';
import { absoluteCenter } from '../style/style-mixins'; 


const mapStateToProps = (state, ownProps) => {
    return state["gazeButtonReducer"][ownProps.identifier];
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { }
}

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
        this.gazeTimeout = setInterval(() => this.increaseOverlayWidth(), 5);
    }
    gazeLeave(){
        clearInterval(this.gazeTimeout); 
        this.setState({
            gazeOverLayWidth: 0
        });
    }
    gazeComplete(){
        clearInterval(this.gazeTimeout); 
        console.log("DONE");
    }
    increaseOverlayWidth(){
        const newOverlayWidth = this.state.gazeOverLayWidth + (this.props.width / 100);
        console.log(newOverlayWidth);
        if(newOverlayWidth > this.props.width){
            this.gazeComplete();
        }
        this.setState({
            gazeOverLayWidth: Math.min(5, newOverlayWidth)
        });
    }
    render(){
        return(
            <View onGazeEnter={this.gazeEnter} onMouseEnter={this.gazeEnter} onMouseExit={this.gazeLeave} onGazeExit={this.gazeLeave} style={{
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


const GazeButtonConnect = connect(mapStateToProps, mapDispatchToProps)(GazeButton);

export default GazeButtonConnect;