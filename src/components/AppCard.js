import React from "react";
import {Avatar, Button, Card, ListItem} from "react-native-elements";
import {Text} from "react-native";

export default function AppCard(props){
    return (
        <Card containerStyle={{borderRadius: 10}}>
            <ListItem containerStyle={{padding: 0, marginBottom: 12}}>
                <Avatar size="medium" title="A" overlayContainerStyle={{backgroundColor: '#2089DC', borderRadius: 10}}/>
                <ListItem.Content>
                    <ListItem.Title style={{fontWeight: 'bold', fontSize: 17}}>
                        {props.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {props.genre}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <Card.Divider/>
            <Card.Image
                style={{borderRadius: 10, minHeight: 300}}
                source={{uri: props.img}}
            />
            <Text style={{marginBottom: 10, marginTop: 10, fontSize: 17}}>
                {props.description}
            </Text>
            <Button
                buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title="Open"
                onPress={() => props.nav.navigate('App')}
            />
        </Card>
    );
}