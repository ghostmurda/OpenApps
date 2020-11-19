import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {selectorAuth} from "./store/auth/selectors";
import AuthScreen from "./screens/AuthScreen";
import AppsScreen from "./screens/TabNavigator/AppsScreen";
import HomeScreen from "./screens/TabNavigator/HomeScreen";
import ChatsScreen from "./screens/TabNavigator/ChatsScreen";
import {Icon} from "react-native-elements";

const mapStateToProps = (state) => (
    {
        auth: selectorAuth(state)
    }
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App(props) {
    return (
        <NavigationContainer>
            {props.auth ? (
                <>
                    <Tab.Navigator
                        tabBarOptions={{
                            activeTintColor: '#2089DC',
                            inactiveTintColor: 'gray',
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
                                            />
                                        );
                                    }
                                    case 'Home':{
                                        return (
                                            <Icon
                                                name="home"
                                                color={focused ? '#2089DC' : 'gray'}
                                            />
                                        );
                                    }
                                    case 'Chats':{
                                        return (
                                            <Icon
                                                name='md-chatboxes'
                                                type='ionicon'
                                                color={focused ? '#2089DC' : 'gray'}
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
                        <Stack.Screen
                            name="Authorization"
                            component={AuthScreen}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#2089DC'
                                },
                                headerTintColor: 'white'
                            }}
                        />
                    </Stack.Navigator>
                </>
            )}
        </NavigationContainer>
    );
}

export default connect(mapStateToProps)(App);
