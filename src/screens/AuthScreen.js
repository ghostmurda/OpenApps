import {Button, Text, View} from "react-native";
import React from "react";
import {connect} from 'react-redux';
import {selectorAuth} from "../store/auth/selectors";
import {setAuthCreator} from "../store/auth/actions";

const mapStateToProps = (state) => (
    {
        auth: selectorAuth(state)
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        setAuth: (payload) => dispatch(setAuthCreator(payload))
    }
);

function AuthScreen(props) {
    const signIn = () => {
        props.setAuth(true);
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Auth Screen</Text>
            <Button title="Sign in"
                    onPress={() => signIn()}
            />
        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);