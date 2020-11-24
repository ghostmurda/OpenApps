import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Icon} from "react-native-elements";

export default function SearchForm(){
    return (
        <View style={styles.wrapper}>
            <Icon
                name="search"
                containerStyle={{padding: 10}}
            />
            <TextInput
                placeholder="Search"
                style={styles.form}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 0.4,
        borderRadius: 10,
        marginTop: 16,
        marginRight: 16
    },
    form: {
        height: 40,
        width: 200,
        fontSize: 17,
        lineHeight: 25,
        color: 'gray'
    }
});