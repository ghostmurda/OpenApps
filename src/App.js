import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {selectorAuth} from "./store/auth/selectors";
import AuthScreen from "./screens/AuthScreen";
import AppsScreen from "./screens/TabNavigator/AppsScreen";
import HomeScreen from "./screens/TabNavigator/HomeScreen";
import ChatsScreen from "./screens/TabNavigator/ChatsScreen";
import {Icon} from "react-native-elements";
import PhoneAuthScreen from "./screens/PhoneAuthScreen";
import EmailSignUp from "./screens/EmailSignUp";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from "react-native";
import firebase from '../firebase';
import {setAuthCreator} from "./store/auth/actions";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    const dispatch = useDispatch();
    const auth = useSelector(state => selectorAuth(state));
    const ifLoggedIn = async () => {
        try {
            const email = await AsyncStorage.getItem('email');
            const password = await AsyncStorage.getItem('password');
            if (email._W !== null && password._W !== null){
                dispatch(setAuthCreator(true));
                const credential = firebase.auth.EmailAuthProvider.credential(
                    email,
                    password
                );
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then((result) => {

                    });
            }
        } catch (err){
            console.log(err);
            dispatch(setAuthCreator(false));
        }
    }

    useEffect(() => {
        ifLoggedIn();
    }, [])

    return (
        <NavigationContainer>
            {auth ? (
                <>
                    <Tab.Navigator
                        tabBarOptions={{
                            activeTintColor: '#2089DC',
                            inactiveTintColor: 'gray',
                            keyboardHidesTabBar: true,
                            labelStyle: {
                                fontSize: 14
                            },
                            tabStyle: {
                                padding: 3
                            }
                        }}
                        screenOptions={({route}) => ({
                            tabBarIcon: ({focused}) => {
                                switch (route.name){
                                    case 'Apps':{
                                        return (
                                            <Icon
                                                type='ionicon'
                                                name="ios-apps"
                                                color={focused ? '#2089DC' : 'gray'}
                                                size={27}
                                            />
                                        );
                                    }
                                    case 'Home':{
                                        return (
                                            <Icon
                                                name="home"
                                                color={focused ? '#2089DC' : 'gray'}
                                                size={27}
                                            />
                                        );
                                    }
                                    case 'Chats':{
                                        return (
                                            <Icon
                                                name='md-chatboxes'
                                                type='ionicon'
                                                color={focused ? '#2089DC' : 'gray'}
                                                size={27}
                                            />
                                        );
                                    }
                                }
                            }
                        })}
                    >
                        <Tab.Screen name="Apps" component={AppsScreen}/>
                        <Tab.Screen name="Home" component={HomeScreen}/>
                        <Tab.Screen name="Chats" component={ChatsScreen}/>
                    </Tab.Navigator>
                </>
            ) : (
                <>
                    <Stack.Navigator>
                        <Stack.Screen name="Authorization" component={AuthScreen}/>
                        <Stack.Screen name="Phone authentication" component={PhoneAuthScreen}/>
                        <Stack.Screen name="Sign up" component={EmailSignUp}/>
                    </Stack.Navigator>
                </>
            )}
        </NavigationContainer>
    );
}
