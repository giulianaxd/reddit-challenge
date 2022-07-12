//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

// create a component
const Post = (props) => {
    const { post, onPress } = props;
    return (

        <TouchableOpacity
            onPress={onPress}>
            <LinearGradient
                colors={["#DE834D", "#A3423C", "#781D42"]}
                style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{ uri: post?.image }}
                        style={styles.imgContainer}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.container2}>
                    <Text style={styles.time}>{post.time}</Text>
                    <Text style={styles.title}>{post.title}</Text>
                    <View style={styles.container3}>
                        <View style={styles.container4}>
                            <Text style={styles.data}>{post.autor}</Text>
                        </View>
                        <View style={styles.container4}>
                            <Text style={styles.data}>Score: {post.votes}</Text>
                        </View>
                        <View style={styles.container4}>
                            <Text style={styles.data}>{post.comments} comments</Text>
                        </View>
                    </View>
                </View>

            </LinearGradient>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: '#3b3b3b',
        borderRadius: 16,
        marginVertical: 8,
        marginHorizontal: 12,
        width: "100%",
        height: "auto",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    title: {
        color: "white",
        fontSize: 15,
        paddingBottom: 8,
        paddingLeft: 20,
        textAlign: 'left',
        fontWeight: "bold"
    },
    time: {
        color: "white",
        fontSize: 12,
        paddingBottom: 8,
        textAlign: "right",
    },
    imgContainer: {
        marginTop: 7,
        position: "relative",
        width: 110,
        height: 110,
        borderRadius: 18,
    },
    container2: {
        position: "relative",
        width: 220,
        height: "auto",
    },
    data: {
        color: "white",
        fontSize: 12,
        textAlign: "center",
        marginHorizontal: 10,
    },
    container3: {
        flexDirection: "row",
        width: 90,
        margin: 5,
    },
});

//make this component available to the app
export default Post;
