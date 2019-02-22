import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default class Future extends Component {
    render() {
        const { Future } = this.props
        //const img = require( + "");
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() =>
                this.props.navigation.navigate(Future.screen)
            }>
                <View style={styles.container}>
                    <Text style={styles.title}>{Future.title}</Text>
                    <Image style={styles.categoryImage} source={Future.image} />
                </View>
            </TouchableOpacity>


        )
    }
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        borderRadius: 5,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    title: {
        //textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    categoryImage: {
        width: 64,
        height: 64
    },
})