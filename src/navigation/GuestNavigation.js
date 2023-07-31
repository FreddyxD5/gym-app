import React from "react";
import { I18nManager } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";




//Screens - Pantallas
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPass from "../screens/ForgotPass";

const RootStack = createNativeStackNavigator();

export default function GuestNavigation(props){

    const navigation = useNavigation();
    

    const buttonBack = () =>{
        return(
            <IconButton 
                icon={I18nManager.isRTL ? "arrow-right":"arrow-left"}
                style={{marginLeft:16}} 
                size={24}
                onPress={()=>navigation.goBack()} />
        );
    }

    

    const navigatorOptions = {
        headerStyle :{
            shadowColor: 'transparent',
            elevation:0,
            shadowOpacity: 0
        },
        presentation:'modal',
        headerTitleStyle :{
            fontWeight: 'bold',
            fontSize: 18,
        },
        // headerTintColor: theme === "dark" ? "white" : "black",
        headerTintColor:"dark",
        headerBackTitleVisible: false,
        headerTitleAlign:'center',
        gestureEnabled: true
    }

    return (
        <RootStack.Navigator>
            <RootStack.Screen name='login' component={Login} options={{title:'Login', headerTransparent:true}}/>
            <RootStack.Screen name='register' component={Register} options={{title:'Register', headerTransparent:true, headerLeft: ()=>buttonBack()}}/>
            <RootStack.Screen name='forgot' component={ForgotPass} options={{title:'Forgot Password', headerTransparent:true}}/>
            
        </RootStack.Navigator>
    )
}



