import {Text, View} from "react-native";
import React from "react";
import {useSelector} from "react-redux";
import {selectorUserInfo} from "../../store/auth/selectors";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const Profile = ({navigator}) => {
    const userInfo = useSelector(state => selectorUserInfo(state));

    return (
        <View>
            <Text>
                {userInfo.email}
            </Text>
            <Text>
                {userInfo.phoneNumber}
            </Text>
            <Text>
                {userInfo.uid}
            </Text>
        </View>
    );
}

export default function HomeScreen(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Profile}/>
        </Stack.Navigator>
    );
}