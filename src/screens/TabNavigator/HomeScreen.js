import {Text, View} from "react-native";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectorUserInfo} from "../../store/auth/selectors";
import {createStackNavigator} from "@react-navigation/stack";
import {Avatar, Badge, Button, Icon, Input, ListItem, Overlay} from "react-native-elements";
import firebase from '../../../firebase';
import {setUserInfoCreator} from "../../store/auth/actions";

const Stack = createStackNavigator();

const Profile = ({navigator}) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const [newName, setNewName] = useState(null);
    const userInfo = useSelector(state => selectorUserInfo(state));

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    const updateName = async () => {
        const user = firebase.auth().currentUser;
        try{
            await user.updateProfile({
                displayName: newName
            })
            dispatch(setUserInfoCreator({...userInfo, displayName: newName}));
            toggleOverlay();
        } catch (err) {
            alert(err);
            toggleOverlay();
        }
    }

    return (
        <View>
            <ListItem containerStyle={{marginTop: 16}}>
                <View>
                    <Avatar
                        size='large'
                        rounded
                        source={userInfo.photoUrl && {uri: userInfo.photoUrl}}
                        title={!userInfo.photoUrl && '?'}
                        overlayContainerStyle={{backgroundColor: '#2089DC'}}
                    />
                    <Badge
                        containerStyle={{
                            position: 'absolute',
                            top: 55,
                            right: -4,
                        }}
                        Component={() => <Icon type='font-awesome' name="camera"/>}
                    />
                </View>
                <ListItem.Content>
                    <ListItem.Title>
                        {userInfo.displayName ? userInfo.displayName : 'No name'}
                    </ListItem.Title>
                </ListItem.Content>
                <Button
                    title='Change name'
                    buttonStyle={{borderRadius: 10, backgroundColor: 'black'}}
                    raised
                    onPress={toggleOverlay}
                />
            </ListItem>
            <Text>
                {userInfo.email}
            </Text>
            <Text>
                {userInfo.phoneNumber}
            </Text>
            <Text>
                {userInfo.uid}
            </Text>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{borderRadius: 10}}>
                <View>
                    <Input
                        label='New name'
                        labelStyle={{color: 'black'}}
                        containerStyle={{width: 300}}
                        placeholder='Jon Snow'
                        leftIcon={{type: 'font-awesome', name: 'user'}}
                        onChangeText={setNewName}
                    />
                    <Button
                        title='Set name'
                        raised
                        buttonStyle={{backgroundColor: 'black', borderRadius: 10}}
                        onPress={updateName}
                    />
                </View>
            </Overlay>
        </View>
    );
}

export default function HomeScreen(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Profile}/>
        </Stack.Navigator>
    );
}