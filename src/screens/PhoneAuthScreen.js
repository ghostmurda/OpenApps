import React, {useRef, useState} from 'react';
import {ActivityIndicator, View} from "react-native";
import {Button, Input, SocialIcon} from "react-native-elements";
import {FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha";
import firebase from '../../firebase';
import {useDispatch} from "react-redux";
import {setAuthCreator} from "../store/auth/actions";

export default function PhoneAuthScreen(){
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        if (phoneNumber !== '' && phoneNumber.length >= 12){
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            phoneProvider
                .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
                .then(setVerificationId);
        }
    };
    const confirmCode = () => {
        setLoading(true);
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase
            .auth()
            .signInWithCredential(credential)
            .then((result) => {
                dispatch(setAuthCreator(true));
                console.log(result);
            });
    };

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {!verificationId && <Input
                placeholder='+79990011222'
                leftIcon={{type: 'font-awesome', name: 'phone-square', size: 50}}
                label="Phone number"
                labelStyle={{color: 'black', fontSize: 20, textAlign: 'center'}}
                inputStyle={{fontSize: 45}}
                keyboardType="phone-pad"
                onChangeText={setPhoneNumber}
            />}
            {!verificationId && <SocialIcon
                type="envelope"
                button
                title="Send verification code"
                style={{width: 220}}
                onPress={sendVerification}
            />}
            {verificationId && <Input
                placeholder='0123456'
                label="Confirmation Code"
                labelStyle={{color: 'black', fontSize: 20, textAlign: 'center'}}
                inputStyle={{fontSize: 45, textAlign: 'center'}}
                keyboardType="number-pad"
                onChangeText={setCode}
            />}
            {verificationId && !loading && <Button
                title="Confirm code"
                onPress={confirmCode}
                raised
                containerStyle={{marginTop: 6}}
                buttonStyle={{width: 180, height: 50, borderRadius: 30, backgroundColor: 'black'}}
                titleStyle={{marginLeft: 8, fontSize: 16}}
                icon={{
                    type: 'font-awesome',
                    name: 'check-square-o',
                    size: 35,
                    color: 'white'
                }}
            />}
            {loading && <ActivityIndicator size="large" color="black" style={{marginTop: 6}}/>}

            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebase.app().options}
            />
        </View>
    );
}