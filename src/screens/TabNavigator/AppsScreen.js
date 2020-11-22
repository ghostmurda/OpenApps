import React, {useEffect} from "react";
import {ScrollView} from "react-native";
import AppCard from "../../components/AppCard";
import {selectorApps, selectorIsLoaded} from "../../store/appsList/selectors";
import {connect} from 'react-redux';
import {createStackNavigator} from "@react-navigation/stack";
import AppWindow from "../../components/AppWindow";
import {getAppsThunk} from "../../store/appsList/actions";

const mapStateToProps = (state) => (
    {
        apps: selectorApps(state),
        isLoaded: selectorIsLoaded(state)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        getApps: () => dispatch(getAppsThunk())
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
    useEffect(() => {
        props.getApps();
    }, [])

    return (
        <>
            {props.isLoaded && <Stack.Navigator>
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
                    options={({route}) => ({title: route.params.headerTitle})}
                />
            </Stack.Navigator>}
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppsScreen);