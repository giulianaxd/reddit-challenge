//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Button, Pressable } from "react-native";

// create a component
const Home = (props) => {
    const { navigation } = props;
    const goToPage = () => {
        navigation.navigate('Publications');
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                opacity={0.13}
                source={require("../../assets/home-bg3.png")}
                resizeMode="cover"
                style={styles.image}>
                <Image
                    style={styles.tinyLogo}
                    source={require("../../assets/reddit-logo2.png")} />
                <Text style={styles.text}>
                    Welcome to reddit, start to enjoy this app!!
                </Text>
                <Pressable style={styles.button} onPress={goToPage}>
                    <Text style={styles.textButton}>Start</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tinyLogo: {
        width: 300,
        height: 102,
        alignItems: "center",
    },
    text: {
        margin: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        elevation: 8,
        backgroundColor: '#ec6000',
        margin: 50,
    },
    textButton: {
        fontSize: 17,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.4,
        color: 'white',
    }
});

//make this component available to the app
export default Home;
