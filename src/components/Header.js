import React, { Component } from 'react'
import {
  Image,
  PropTypes,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { HEADERBAR_HEIGHT } from '../constants'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            source={require('../../assets/images/iconSmall.png')}
          />
        </View>
        <View style={styles.mid}>
          <Text style={styles.midText}>
            {'RECHARGE SCAN'}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.right}
        >
          <Text style={styles.rightText}>
            {'• • •'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEADERBAR_HEIGHT,
    backgroundColor: '#FAF9F9',
    paddingLeft: 10
  },
  left: {
    height: HEADERBAR_HEIGHT,
    width: HEADERBAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  },
  midText: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Regular'
  },
  right: {
    height: HEADERBAR_HEIGHT,
    width: HEADERBAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightText: {
    fontSize: 14,
    fontFamily: 'SFUIDisplay-Regular'
  }
})
