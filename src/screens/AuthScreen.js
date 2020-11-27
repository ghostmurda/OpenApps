import {Text, View} from "react-native";
import React from "react";
import {useSelector} from 'react-redux';
import {Avatar, Button} from "react-native-elements";
import {selectorIsLoading} from "../store/auth/selectors";

export default function AuthScreen({navigation}) {
    const isLoading = useSelector(state => selectorIsLoading(state));

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
            {!isLoading && <Button
                title="Sign in with phone"
                onPress={() => navigation.navigate('Phone authentication')}
                raised
                containerStyle={{marginTop: 32}}
                buttonStyle={{width: 200, height: 50, borderRadius: 30, backgroundColor: 'black'}}
                titleStyle={{marginLeft: 10, fontSize: 14}}
                icon={{
                    type: 'font-awesome',
                    name: 'mobile',
                    size: 35,
                    color: 'white'
                }}
            />}
        </View>
    );
}