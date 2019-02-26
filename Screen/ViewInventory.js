import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class ViewInventory extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  }
  render() {
    return (
      <View>
        <Text>ViewInventory</Text>
      </View>
    )
  }
}
