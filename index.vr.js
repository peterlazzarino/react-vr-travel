import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import DestinationChooser from "./components/DestinationChooser"
 
class GATVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('bg.jpg')}/>
        <Text
          style={{
            padding: 0.02,
            textAlign:'center',
            textAlignVertical:'center',
            fontSize: 1,
            color:'#46A032',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 4, -10]}],
          }}>
          Choose a destination
        </Text>
        <DestinationChooser destinations={["Europe", "Asia"]} />
      </View>
    );
  }
}; 

AppRegistry.registerComponent('GATVR', () => GATVR);
