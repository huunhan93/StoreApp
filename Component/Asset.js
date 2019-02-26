import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'


export default class Asset extends Component {
    render() {
        const { assetm, Future } = this.props
        return (
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <Image style={styles.img} source={require('../images/history.png')} />
                    {/* <View style={styles.viewimg}>
                        
                    </View> */}
                    <View style={styles.info}>
                        <Text style={styles.name}>{Future.title}</Text>
                        <View style={styles.priceShow}>
                            <Text style={styles.price}>Price</Text>
                            <TouchableOpacity >
                                <Text style={styles.cartText}>Mua +</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    shadow: { 
        shadowColor: '#000' ,
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0,height: 0}
    },
    container: {
        marginBottom: 8,
        borderRadius: 4,
        backgroundColor: '#fff',
        overflow: 'hidden',
       // flexDirection: 'row',
    },
    viewimg: {
        padding: 8
    },
    info : {
        padding: 8
    },
    img: {
         height: 100,
         width: 100,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceShow:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
})