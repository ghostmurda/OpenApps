import React from "react";
import {ScrollView} from "react-native";
import DefaultHeader from "../../components/DefaultHeader";
import AppCard from "../../components/AppCard";

const apps = [
    {
        name: "App",
        genre: "Test",
        img: "https://app2top.ru/wp-content/uploads/2019/05/PUBG-MOBILE-0.4.0-1024x725.jpg",
        description: "App description test text test text App description test text test text App description test text test text"
    }
]

export default function AppsScreen(){
    return (
        <ScrollView>
            <DefaultHeader title="OpenApps pre-alpha"/>
            {apps.map((item, i) => <AppCard key={i} {...item}/>)}
        </ScrollView>
    );
}