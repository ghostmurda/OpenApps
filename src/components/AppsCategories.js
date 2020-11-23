import {Text, View} from "react-native";
import React from "react";

export const categories = [
    {
        id: '0',
        title: 'Food',
    },
    {
        id: '1',
        title: 'Movies',
    },
    {
        id: '2',
        title: 'Info',
    },
    {
        id: '3',
        title: 'Maps',
    }
];

export const Category = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);