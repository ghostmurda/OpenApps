import React, {useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {Avatar} from "react-native-elements";
import {FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha";
import firebase from '../../firebase';

export default function PhoneAuthScreen(){
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerificationId);
    };
    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase
            .auth()
            .signInWithCredential(credential)
            .then((result) => {
                console.log(result);
            });
    };

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

            <TextInput
                placeholder="Phone Number"
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                autoCompleteType="tel"
            />
            <TouchableOpacity onPress={sendVerification}>
                <Text>Send Verification</Text>
            </TouchableOpacity>
            <TextInput
                placeholder="Confirmation Code"
                onChangeText={setCode}
                keyboardType="number-pad"
            />
            <TouchableOpacity onPress={confirmCode}>
                <Text>Send Verification</Text>
            </TouchableOpacity>

            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebase.app().options}
            />
        </View>
    );
}