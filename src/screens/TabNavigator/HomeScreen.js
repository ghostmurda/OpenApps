import {Text, View} from "react-native";
import React from "react";
import DefaultHeader from "../../components/DefaultHeader";

export default function HomeScreen(){
    return (
        <View>
            <DefaultHeader title="OpenApps pre-alpha"/>
            <Text>HomeTab</Text>
        </View>
    );
}