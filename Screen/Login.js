import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native'
// import * as actionCreatetors from '../redux/reducer/actionCreators';
// import { connect } from 'react-redux';

const background = require('../images/background.png');
const lockIcon = require('../images/ic_lock.png');
const userIcon = require('../images/ic_user.png');
const vnptIcon = require('../images/logo-vnpt.png');

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName : '',
      password : ''
    }
  }
  _onPressLogin() {
    const {userName, password} = this.state;
    // di chuyen sang HOME
    //this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.backgroundContainer}
          source={background} resizeMode="cover">
        </Image>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.welcome}>HỆ THỐNG THÔNG TIN TÀI SẢN BỆNH VIỆN (HAIS)</Text>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={userIcon} resizeMode="contain" style={styles.icon} />
              </View>
              <TextInput style={styles.input} placeholder="Username" onChangeText={(userName) => this.setState({ userName })} underlineColorAndroid="transparent" />
            </View>
            <View style={styles.inputWrap}>

              <View style={styles.iconWrap}>
                <Image source={lockIcon} resizeMode="contain" style={styles.icon} />
              </View>


              <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(password) => this.setState({ password })} underlineColorAndroid="transparent" />
            </View>
            <TouchableOpacity activeOpacity={.5} onPress={this._onPressLogin.bind(this)} keyboardShouldPersistTaps={true}>
              <View style={styles.button}>
                <Text style={styles.buttonText}> Login</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.5} onPress={() => navigate('ForgotPassPage')}>
              <View >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </View>
            </TouchableOpacity>


            {/* <TouchableOpacity activeOpacity={.5} onPress={() => navigate('SignUpPage')} keyboardShouldPersistTaps={true}>
              <View style={styles.button}>
                <Text style={styles.buttonText}> Sign Up</Text>
              </View>

            </TouchableOpacity> */}
          </View>
        </View>
      </View>



    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'stretch',
    top: 0,
    right: 0,
    left: 0,
    bottom: 100,
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    //backgroundColor: '#889DAD',
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 5,
    height: 36,
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: '#FFF',
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#005DA5"
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#005DA5",
    paddingVertical: 8,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',

  },
  forgotPasswordText: {
    color: '#FFFFFF',
    backgroundColor: "transparent",
    textAlign: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
    backgroundColor: "transparent",

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// export default connect(null, actionCreatetors)(Login)
