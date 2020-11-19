import {Button, Platform, Text, View} from "react-native";
import React from "react";
import {connect} from 'react-redux';
import {selectorAuth, selectorUserInfo} from "../store/auth/selectors";
import {setAuthCreator, setUserInfoCreator} from "../store/auth/actions";
import * as Google from "expo-google-app-auth";
import {androidOAuthKey} from '../../config'

const mapStateToProps = (state) => (
    {
        auth: selectorAuth(state),
        userInfo: selectorUserInfo(state)
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        setAuth: (payload) => dispatch(setAuthCreator(payload)),
        setUserInfo: (payload) => dispatch(setUserInfoCreator(payload))
    }
);

function AuthScreen(props) {
    const googleSignIn = async () => {
        if (Platform.OS === 'android'){
            const { type, accessToken, user } = await Google.logInAsync({
                androidClientId: androidOAuthKey,
            });

            if (type === 'success') {
                props.setAuth(true);
                props.setUserInfo({
                    name: user.name,
                    photoUrl: user.photoUrl,
                    accessToken,
                    email: user.email
                });
            }
        } else {
            props.setAuth(true);
            props.setUserInfo({
                name: 'Test name',
                photoUrl: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png',
                accessToken: '123sagd',
                email: 'test@gmail.com'
            });
        }
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Auth Screen</Text>
            <Button title="Sign in"
                    onPress={() => googleSignIn()}
            />
        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);