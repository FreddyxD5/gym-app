import React from "react";
import { View, Image, TouchableOpacity, I18nManager } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { List } from "react-native-paper";



export default function DrawerContent(props){
    const {navigation} = props;
    const rightIcon = I18nManager.isRTL ? 'chevron-left' :'chevron-right';

    const onChangeScreen = (screen) => {
        navigation.navigate(screen)

    }

    return (
        <DrawerContent>
            
        </DrawerContent>
        )
}