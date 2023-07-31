import React,{useState} from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Styles from '../config/Styles';
import { TextInput,Button } from "react-native-paper";

const Login = (props) => {
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')

    const onChangeScreen = (screen) =>{
        props.navigation.navigate(screen)
    }

    const Login = ()=>{
        return (console.log('siuu'))
    }

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center'}}>
            <View style={Styles.AuthContent}>
                <TextInput label={"Email"} onChangeText={text=>setEmail(text.trim())} mode="flat"/>
                <TextInput label={"password"} onChangeText={text=>setPassword(text.trim())} mode="flat" secureTextEntry={true} style={Styles.AuthInput}/>
                <TouchableOpacity activeOpacity={0.9} onPress={()=>onChangeScreen('forgot')}>
                    <Text style={Styles.ForgotPass}>Olvidaste tu contraseña ?</Text>
                </TouchableOpacity>
                <Button 
                    mode="contained"
                    onPress={()=>Login()}
                    dark={'dark'}>
                        Iniciar session 
                    </Button>
            </View>       
        </SafeAreaView>
    )
}

export default Login;