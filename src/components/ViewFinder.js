import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Camera from 'react-native-camera'

export default class ViewFinder extends Component {
  render () {
    return (
      <Camera
        ref={(cam) => this.camera}
        aspect={Camera.constants.Aspect.fill}
        orientation={Camera.constants.Orientation.portrait}
        style={styles.camera}
      />
    )
  }
}

const styles = StyleSheet.create({})
