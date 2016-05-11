import React, { Component } from 'react'
import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import Main from './containers/Main'

export default class Application extends Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#555B6E'}}>
        <StatusBar hidden />
        <Main />
      </View>
    )
  }
}
