import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class LookupAsset extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  }
  render() {
    return (
      <View>
        <Text>LookupAsset</Text>
      </View>
    )
  }
}


