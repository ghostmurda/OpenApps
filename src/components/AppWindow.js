import {View} from "react-native";
import {WebView} from 'react-native-webview';
import React from "react";

const HTML = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Hello world</h1>
<button id="btn">Check</button>
<script type="text/javascript">
let a = '1';
document.querySelector('#btn').addEventListener('click', () => {
    alert(a);
})
</script>
</body>
</html>
`;

const AppWindow = ({route}) => {
    return (
        <View style={{flex: 1}}>
            <WebView
                originWhitelist={['*']}
                source={{html: HTML}}
                javaScriptEnabled={true}
                injectedJavaScript={`a = '2'`}
            />
        </View>
    );
}

export default AppWindow;