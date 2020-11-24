import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {selectorCategory} from "../store/appsCategories/selectors";
import {setPageCreator} from "../store/appsCategories/actions";
import {useDispatch, useSelector} from "react-redux";

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

export const Category = ({title}) => {
    const [selected, setSelected] = useState(false);
    const selectedTitle = useSelector(state => selectorCategory(state));
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedTitle === title){
            setSelected(true);
        } else {
            setSelected(false);
        }
    })

    return (
        <View style={styles.wrapper}>
            <Text
                style={selected ? styles.selectedTitle : styles.title}
                onPress={() => dispatch(setPageCreator(title))}
            >
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 16,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 17,
        lineHeight: 30,
        color: 'gray'
    },
    selectedTitle: {
        fontSize: 17,
        lineHeight: 30,
        color: '#2089DC'
    }
});