import React, { Component } from 'react'
import { View, TouchableOpacity, Linking, StyleSheet, Text } from 'react-native'
//import QRCodeScanner from 'react-native-qrcode-scanner';


export default class ScanQRCode extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  }
  // onSuccess(e) {
  //   Linking
  //     .openURL(e.data)
  //     .catch(err => console.error('An error occured', err));
  // }
  render() {
    return (
      <View></View>
      // <QRCodeScanner
      //   onRead={this.onSuccess.bind(this)}
      //   topContent={
      //     <Text style={styles.centerText}>
      //       Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
      //   </Text>
      //   }
      //   bottomContent={
      //     <TouchableOpacity style={styles.buttonTouchable}>
      //       <Text style={styles.buttonText}>OK. Got it!</Text>
      //     </TouchableOpacity>
      //   }
      // />
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
