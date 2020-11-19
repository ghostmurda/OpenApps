import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {selectorAuth} from "./store/auth/selectors";
import AuthScreen from "./screens/AuthScreen";
import AppsScreen from "./screens/AppsScreen";
import HomeScreen from "./screens/HomeScreen";
import ChatsScreen from "./screens/ChatsScreen";

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
                    <Tab.Navigator>
                        <Tab.Screen name="Apps" component={AppsScreen}/>
                        <Tab.Screen name="Home" component={HomeScreen}/>
                        <Tab.Screen name="Chats" component={ChatsScreen}/>
                    </Tab.Navigator>
                </>
            ) : (
                <>
                    <Stack.Navigator>
                        <Stack.Screen name="Authorization" component={AuthScreen}/>
                    </Stack.Navigator>
                </>
            )}
        </NavigationContainer>
    );
}

export default connect(mapStateToProps)(App);
