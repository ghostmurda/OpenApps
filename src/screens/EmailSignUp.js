import React, {useEffect, useState} from "react";
import {ActivityIndicator, View} from "react-native";
import {Button, Input} from "react-native-elements";
import firebase from '../../firebase';
import {useDispatch} from "react-redux";
import {setAuthCreator} from "../store/auth/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EmailSignUp(){
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [confirmed, setConfirmed] = useState(true);

    useEffect(() => {
        if (password !== confirmPassword){
            setConfirmed(false);
        } else {
            setConfirmed(true);
        }
    }, [confirmPassword])

    const signUp = async () => {
        if (email && password && confirmPassword && confirmed){
            setLoading(true);
            const user = firebase.auth().currentUser;
            try {
                await user.updateEmail(email);
                await user.updatePassword(password);
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('password', password);
                dispatch(setAuthCreator(true));
                setLoading(false);
            } catch (err){
                alert(err);
                setLoading(false);
            }
        }
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Input
                placeholder="example@example.com"
                label="Email"
                leftIcon={{type: 'font-awesome', name: 'envelope-o'}}
                onChangeText={setEmail}
            />
            <Input
                placeholder="Password"
                label="Password"
                leftIcon={{type: 'font-awesome', name: 'lock'}}
                leftIconContainerStyle={{marginRight: 8}}
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <Input
                placeholder="Password"
                label="Confirm password"
                leftIcon={{type: 'font-awesome', name: 'lock'}}
                leftIconContainerStyle={{marginRight: 8}}
                secureTextEntry={true}
                onChangeText={setConfirmPassword}
                errorMessage={confirmed ? null : 'Passwords not match'}
            />
            {!loading && <Button
                title="Sign up"
                raised
                buttonStyle={{width: 180, height: 50, borderRadius: 30, backgroundColor: 'black'}}
                titleStyle={{fontSize: 16}}
                containerStyle={{marginTop: 16}}
                onPress={signUp}
            />}
            {loading && <ActivityIndicator size="large" color="black" style={{marginTop: 16}}/>}
        </View>
    );
}