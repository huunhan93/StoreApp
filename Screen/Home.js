import React, { Component } from 'react'
import { View, StyleSheet, ScrollView ,FlatList} from 'react-native'
import Future from '../Component/Future'
import Asset from '../Component/Asset'
//import { ScrollView } from 'react-native-gesture-handler';

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
            <ScrollView>
                <View style={styles.container}>
                    {this.state.ListFutures.map(x => <Future Future={x} key={x.id} navigation={navigation} />)}
                </View>
            </ScrollView>
            // <FlatList 
            //     data={this.state.ListFutures} numColumns={3} 
            //     contentContainerStyle={styles.container}
            //     renderItem={({item}) => <View style={styles.wapper}><Asset Future={item} navigation={navigation}/></View>}
            //     keyExtractor={(item) => item.id}
            // />

        )
    }
}

const styles = StyleSheet.create({
    container: {
        //display: flex,
        // paddingTop: 8,
        // paddingHorizontal: 4
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#ddd',
        justifyContent: 'center',
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8
    },
    wapper : {
        flex: 1,
        paddingHorizontal: 4
    }
});