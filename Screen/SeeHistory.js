import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class SeeHistory extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  }
  render() {
    return (
      <View>
        <Text>SeeHistory</Text>
      </View>
    )
  }
}
