'use strict';

import { StyleSheet, Dimensions } from "react-native";
import ColorsApp from './ColorsApp'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const PrimaryColor = ColorsApp.PRIMARY;

module.exports = StyleSheet.create({
    //Login/Signup styles
    AuthLogo:{
        width:'100%',
        height:screenHeight/9,
        maxHeight:'100%',
        marginBottom:50
    },
    AuthTitle:{
        width: '100%',
        maxHeight: '100%',
        marginBottom: 20,
        alignSelf: 'center', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center' 
    },
    AuthContent:{
        marginHorizontal: 50
    },
    AuthInput:{
        marginBottom: 10,        
        borderCurve: 'round',
        backgroundColor: "transparent",
    },        
    AuthButton:{
        marginTop: 15,
        borderRadius: 6,
        elevation: 0
    },
    ForgotPass:{
        fontSize:16,
        marginVertical:10,
        alignSelf:'flex-end',
        marginHorizontal:4
    },
    PageLogo:{
        width: '100%',
        height: screenHeight/10,
        maxHeight: '100%',
        marginTop:70,
        marginBottom: 50,
    },
        
})