import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import DestinationChooser from "./components/DestinationChooser";
import { Provider } from "react-redux";
import { gazeButtonReducer } from './reducers/gazeButtonReducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const reducers = {
    gazeButtonReducer: gazeButtonReducer
}

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(combineReducers(reducers));   

class GATVR extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}; 

AppRegistry.registerComponent('GATVR', () => GATVR);
