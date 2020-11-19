import React from 'react';
import {Header} from "react-native-elements";

export default function DefaultHeader(props){
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 20 } }}
            rightComponent={{ icon: 'search', color: '#fff' }}
        />
    );
}