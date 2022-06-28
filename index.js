/**
 * @format
 */
// import { createStore } from 'redux'
import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import store from './Redux/Store/configureStore';

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);
