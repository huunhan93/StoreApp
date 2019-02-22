import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Future from '../Component/Future'

const ListFutures = [
    { id: 'a1', title: 'Quét QR Code', screen: 'ScanQRCode', image: require('../images/photo-camera.png') },
    { id: 'a2', title: 'Tra cứu thông tin tài sản', screen: 'LookupAsset', image: require('../images/magnifier-tool.png') },
    { id: 'a3', title: 'Xem tồn kho', screen: 'ViewInventory', image: require('../images/storage.png') },
    { id: 'a4', title: 'Xem lịch sử sử dụng', screen: 'SeeHistory', image: require('../images/history.png') },
]

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    }
    constructor(props) {
        super(props)
        this.state = {
            ListFutures: ListFutures
        }
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                {this.state.ListFutures.map(x => <Future Future={x} key={x.id} navigation={navigation} />)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //display: flex,
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#ddd',
        justifyContent: 'center',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16
    }

});