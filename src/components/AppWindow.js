import {ActivityIndicator, View} from "react-native";
import {WebView} from 'react-native-webview';
import React from "react";

const LoadingIndicator = () => {
    return (
        <View style={{
            flex: 1,
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
        }}>
            <ActivityIndicator size="large" color="#2089DC"/>
        </View>
    );
}

const AppWindow = ({route}) => {
    return (
        <View style={{flex: 1}}>
            <WebView
                renderLoading={LoadingIndicator}
                originWhitelist={['*']}
                source={{uri: route.params.url}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
        </View>
    );
}

export default AppWindow;