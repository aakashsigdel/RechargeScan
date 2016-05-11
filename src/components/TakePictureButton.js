import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default class TakePictureButton extends Component {
  render () {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.container}
      >
        <View style={styles.innerCircle} />
      </TouchableOpacity>
    )
  }
}

TakePictureButton.propTypes = {
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    width:118,
    height: 118,
    borderRadius: 59,
    borderWidth: 8,
    borderColor: '#FAF9F9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerCircle: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: '#FAF9F9'
  }
})
