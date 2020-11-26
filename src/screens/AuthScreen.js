import {ActivityIndicator, Text, View} from "react-native";
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {setAuthCreator, setUserInfoCreator} from "../store/auth/actions";
import * as Google from "expo-google-app-auth";
import {androidOAuthKey} from '../../config'
import {Avatar, SocialIcon} from "react-native-elements";

export default function AuthScreen({navigation}) {
    const [googleLoading, setGoogleLoading] = useState(false);
    const dispatch = useDispatch();

    const googleSignIn = async () => {
        setGoogleLoading(true);

        const {type, accessToken, user} = await Google.logInAsync({
            androidClientId: androidOAuthKey,
        });

        if (type === 'success') {
            dispatch(setAuthCreator(true));
            dispatch(setUserInfoCreator({
                name: user.name,
                photoUrl: user.photoUrl,
                accessToken,
                email: user.email
            }));
        }
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Avatar
                size="xlarge"
                rounded
                icon={{name: 'dashboard', color: 'white', type: 'material'}}
                overlayContainerStyle={{backgroundColor: '#2089DC'}}
            />
            <Text style={{fontSize: 20, color: '#0d66b5'}}>OpenApps</Text>
            <Text>Pre-alpha build</Text>
            {googleLoading ?
                <ActivityIndicator size="large" color="#DD4B39" style={{marginTop: 34, marginBottom: 20}}/>
                :
                <SocialIcon
                    button
                    title="Sign in with Google"
                    type='google'
                    onPress={() => googleSignIn()}
                    style={{minWidth: 200, marginTop: 32}}
                />
            }
            <SocialIcon
                button
                type="envelope"
                title="Sign in with phone"
                onPress={() => navigation.navigate('Phone authentication')}
                style={{minWidth: 200}}
            />
        </View>
    );
}