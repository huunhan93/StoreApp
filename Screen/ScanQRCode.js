import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class ScanQRCode extends Component {
  static navigationOptions = {
    title: 'ScanQRCode'
  }
  render() {
    return (
      <View>
        <Text>Scan QRCode</Text>
      </View>
    )
  }
}
