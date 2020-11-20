import React from "react";
import {ScrollView} from "react-native";
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

const AppsList = ({route}) => {
    return (
        <ScrollView>
            {route.params.apps.map((item, i) => <AppCard key={i} {...item} />)}
        </ScrollView>
    );
}

function AppsScreen(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OpenApps" component={AppsList} initialParams={{apps: props.apps}} />
        </Stack.Navigator>
    );
}

export default connect(mapStateToProps)(AppsScreen);