//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, ActivityIndicator } from 'react-native';
import { getPostsHot, getPostsNew, getPostsPopular, getPostsTop } from '../api/posts';
import ButtonGroup from '../components/ButtonGroup';
import HeaderApp from '../components/HeaderApp';
import Post from '../components/Post';

// create a component
const Publications = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            await loadPost();
        })();
    }, []);

    const calculateTimeDiff = (date) => {
        let today = new Date();
        const diffTime = Math.abs(today - date);
        const diffSeconds = (diffTime / 1000).toFixed(0);
        const diffMinutes = (diffTime / (1000 * 60)).toFixed(0);
        const diffHours = (diffTime / (1000 * 60 * 60)).toFixed(0);
        const diffDays = (diffTime / (1000 * 60 * 60 * 24)).toFixed(0);
        const diffWeeks = (diffDays / 7).toFixed(0);
        const diffMonths = (diffDays / 30).toFixed(0);
        const diffYears = (diffDays / 365).toFixed(0);

        if (diffYears >= 1) return diffYears + " years ago";
        if (diffMonths >= 1) return diffMonths + " months ago";
        if (diffWeeks >= 1) return diffWeeks + " weeks ago";
        if (diffDays >= 1) return diffDays + " days ago";
        if (diffHours >= 1) return diffHours + " hours ago";
        if (diffMinutes >= 1) return diffMinutes + " minutes ago";
        else return (diffSeconds) + " seconds ago";
    }

    const loadPost = async () => {
        setIsLoading(true);
        setPosts([]);
        try {
            const response = await getPostsNew();
            let current = new Date();
            const postsArray = [];
            for await (const postItem of response.data.children) {
                postsArray.push({
                    id: postItem.data.id,
                    title: postItem.data.title,
                    image: postItem.data.thumbnail,
                    autor: postItem.data.author,
                    votes: postItem.data.score,
                    comments: postItem.data.num_comments,
                    link: postItem.data.url,
                    time: calculateTimeDiff(new Date(postItem.data.created_utc * 1000)),
                })
            }
            setPosts(postsArray);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    }
    const changeType = async (type) => {
        setIsLoading(true);
        setPosts([]);
        try {
            const response = (type === "new" ? await getPostsNew() :
                (type === "top" ? await getPostsTop() :
                    (type === "popular" ? await getPostsPopular() : await getPostsHot())));
            let current = new Date();
            const postsArray = [];
            const dataArr = new Set(response.data.children);
            let result = [...dataArr];
            for await (const postItem of result) {
                postsArray.push({
                    id: postItem.data.id,
                    title: postItem.data.title,
                    image: postItem.data.thumbnail,
                    autor: postItem.data.author,
                    votes: postItem.data.score,
                    comments: postItem.data.num_comments,
                    link: postItem.data.url,
                    time: calculateTimeDiff(new Date(postItem.data.created_utc * 1000)),
                })
            }
            setPosts(postsArray);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    }
    const handlePost = (item) => {
        Linking.canOpenURL(item.link).then(supported => {
            if (supported) {
                Linking.openURL(item.link);
            } else {
                console.log("Don't know how to open URI: " + item.link);
            }
        });
    };

    return (
        <View style={styles.container}>
            <HeaderApp />
            <ButtonGroup changeType={(type) => changeType(type)} />
            {isLoading && <ActivityIndicator size="large" color="orange" />}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 12 }}
                contentContainerStyle={{ flexWrap: "wrap" }}
            >
                {posts?.map((item, index) => (
                    <Post
                        post={item}
                        key={item.id}
                        onPress={() => handlePost(item)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Publications;
