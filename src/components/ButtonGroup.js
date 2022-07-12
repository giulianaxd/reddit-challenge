//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// create a component
const ButtonGroup = (props) => {
    const { changeType } = props;
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => changeType("new")} >
                <Text style={styles.textButton}>
                    New
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => changeType("top")}>
                <Text style={styles.textButton}>
                    Top
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => changeType("popular")}>
                <Text style={styles.textButton}>
                    Popular
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => changeType("hot")}>
                <Text style={styles.textButton}>
                    Hot
                </Text>
            </Pressable>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 15,
    },
    button: {
        alignItems: 'center',
        padding: 70,
        paddingVertical: 5,
        paddingHorizontal: 17,
        borderRadius: 13,
        elevation: 8,
        backgroundColor: "#F0D290",
        margin: 5,
    },
    textButton: {
        fontSize: 13,
        lineHeight: 17,
        fontWeight: 'bold',
        letterSpacing: 0.4,
        color: 'black',
    }
});

//make this component available to the app
export default ButtonGroup;
