//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const HeaderApp = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require("../../assets/reddit-logo.png")} />
            <Text style={styles.textLogo}>PUBLICATIONS</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 45,
    },
    tinyLogo: {
        width: 40,
        height: 40,
        alignItems: "center",
    },
    textLogo: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
    },
});

//make this component available to the app
export default HeaderApp;
