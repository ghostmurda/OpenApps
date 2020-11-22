import {View} from "react-native";
import {WebView} from 'react-native-webview';
import React from "react";

const AppWindow = ({route}) => {
    return (
        <View style={{flex: 1}}>
            <WebView
                originWhitelist={['*']}
                source={{uri: route.params.url}}
                javaScriptEnabled={true}
            />
        </View>
    );
}

export default AppWindow;