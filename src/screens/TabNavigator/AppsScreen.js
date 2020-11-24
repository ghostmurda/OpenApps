import React, {useEffect} from "react";
import {ActivityIndicator, FlatList, ScrollView, View} from "react-native";
import AppCard from "../../components/AppCard";
import {selectorApps, selectorIsLoaded} from "../../store/appsList/selectors";
import {connect} from 'react-redux';
import {createStackNavigator} from "@react-navigation/stack";
import AppWindow from "../../components/AppWindow";
import {getAppsThunk} from "../../store/appsList/actions";
import {categories, Category} from "../../components/AppsCategories";

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
    const renderCategory = ({ item }) => (
        <Category title={item.title} />
    );

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                horizontal={true}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.2
                }}
            />
            <ScrollView>
                {route.params.apps.map((item, i) => <AppCard nav={navigation} key={i} {...item} />)}
                <View style={{height: 80}}/>
            </ScrollView>
        </View>
    );
}

function AppsScreen(props) {
    useEffect(() => {
        props.getApps();
    }, [])

    return (
        <>
            {props.isLoaded ?
                <Stack.Navigator>
                    <Stack.Screen
                        name="AppsList"
                        component={AppsList}
                        initialParams={{apps: props.apps}}
                        options={{
                            title: 'OpenApps',
                            headerStyle: {
                                elevation: 0,
                                shadowOpacity: 0
                            }
                        }}
                    />
                    <Stack.Screen
                        name="App"
                        component={AppWindow}
                        options={({route}) => ({title: route.params.headerTitle})}
                    />
                </Stack.Navigator>
                :
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="#2089DC" />
                </View>
            }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppsScreen);