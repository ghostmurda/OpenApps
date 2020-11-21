import {Text, View} from "react-native";
import {WebView} from 'react-native-webview';
import React from "react";

const AppWindow = ({route}) => {
    return (
        <View style={{ flex: 1}}>
            <WebView
                originWhitelist={['*']}
                source={{ html: '<h1>Hello world</h1>' }}
                style={{ marginTop: 20 }}
            />
        </View>
    );
}

export default AppWindow;