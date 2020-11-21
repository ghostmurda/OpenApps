import React from "react";
import {ScrollView, Text, View} from "react-native";
import AppCard from "../../components/AppCard";
import {selectorApps} from "../../store/appsList/selectors";
import {connect} from 'react-redux';
import {createStackNavigator} from "@react-navigation/stack";

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

const App = () => {
    return (
        <View>
            <Text>App</Text>
        </View>
    );
}

function AppsScreen(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OpenApps" component={AppsList} initialParams={{apps: props.apps}} />
            <Stack.Screen name="App" component={App} />
        </Stack.Navigator>
    );
}

export default connect(mapStateToProps)(AppsScreen);