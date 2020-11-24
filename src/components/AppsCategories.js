import {StyleSheet, Text, View} from "react-native";
import React from "react";

export const categories = [
    {
        id: 0,
        title: 'All'
    },
    {
        id: 1,
        title: 'Food',
    },
    {
        id: 2,
        title: 'Movies',
    },
    {
        id: 3,
        title: 'Info',
    },
    {
        id: 4,
        title: 'Maps',
    },
    {
        id: 5,
        title: 'Games',
    },
    {
        id: 6,
        title: 'Other',
    }
];

export const Category = ({ title }) => (
    <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        padding: 16,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 17,
        lineHeight: 30,
        color: 'gray',
    }
});