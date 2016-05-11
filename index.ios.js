import React, { Component } from 'react';
import App from './src/root'
import { AppRegistry } from 'react-native';

class RechargeScan extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('RechargeScan', () => RechargeScan);
