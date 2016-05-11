import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Instructions from '../components/Instructions'
import TakePictureButton from '../components/TakePictureButton'

export default class Main extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.instructions}>
          <Instructions />
        </View>
        <View style={styles.viewFinder}></View>
        <View style={styles.takePictureButton}>
          <TakePictureButton />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  instructions: {
    flex: 1.589,
    justifyContent: 'flex-end'
  },
  viewFinder: {
    flex: 2.188
  },
  takePictureButton: {
    flex: 3.778,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})
