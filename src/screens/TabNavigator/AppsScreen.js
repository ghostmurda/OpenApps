import React from "react";
import {ScrollView} from "react-native";
import DefaultHeader from "../../components/DefaultHeader";
import AppCard from "../../components/AppCard";
import {selectorApps} from "../../store/appsList/selectors";
import {connect} from 'react-redux';

const mapStateToProps = (state) => (
    {
        apps: selectorApps(state)
    }
)

function AppsScreen(props){
    return (
        <ScrollView>
            <DefaultHeader title="OpenApps pre-alpha"/>
            {props.apps.map((item, i) => <AppCard key={i} {...item}/>)}
        </ScrollView>
    );
}

export default connect(mapStateToProps)(AppsScreen);