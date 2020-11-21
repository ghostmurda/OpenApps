import React from "react";
import {ScrollView} from "react-native";
import AppCard from "../../components/AppCard";
import {selectorApps} from "../../store/appsList/selectors";
import {connect} from 'react-redux';
import {createStackNavigator} from "@react-navigation/stack";
import AppWindow from "../../components/AppWindow";

const mapStateToProps = (state) => (
    {
        apps: selectorApps(state)
    }
)

const Stack = createStackNavigator();

const AppsList = ({route, navigation}) => {
    return (
        <ScrollView>
            {route.params.apps.map((item, i) => <AppCard nav={navigation} key={i} {...item} />)}
        </ScrollView>
    );
}

function AppsScreen(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AppsList"
                component={AppsList}
                initialParams={{apps: props.apps}}
                options={{
                    title: 'OpenApps'
                }}
            />
            <Stack.Screen
                name="App"
                component={AppWindow}
                options={({ route }) => ({ title: route.params.headerTitle })}
            />
        </Stack.Navigator>
    );
}

export default connect(mapStateToProps)(AppsScreen);