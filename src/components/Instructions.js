import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Instructions extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.headerText]}>
          {'Please take the photo of the pin'}
        </Text>
        <Text style={[styles.text, styles.footerText]}>
          {'Adjust the camera such that it only takes photo of the pin'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'SFUIDisplay-Semibold',
    marginBottom: 10
  },
  footerText: {
    fontSize: 18,
    fontFamily: 'SFUIDisplay-Regular',
    marginLeft: 15,
    marginRight: 15 
  },
  text: {
    color: '#FAF9F9',
    textAlign: 'center'
  }
})
