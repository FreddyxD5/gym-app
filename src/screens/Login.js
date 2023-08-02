import React,{useState} from "react";
import { SafeAreaView,ToastAndroid, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import Styles from '../config/Styles';
import { TextInput,Button } from "react-native-paper";

const Login = (props) => {
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')

    const onChangeScreen = (screen) =>{
        props.navigation.navigate(screen)
    }

    const Login = ()=>{
        if (email !== undefined && email.length>0 && password !== undefined && password.length>0 ){
            return (console.log('siuu' + email+'/'+password))
        }else{
            return (ToastAndroid.show('Por favor rellene los campos', ToastAndroid.SHORT))
        }
            
    }

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center'}}>
            <Image 
                source={require('../../assets/gym.png')}
                resizeMode={"contain"}
                style={Styles.AuthLogo}/>
            <View style={Styles.AuthContent}>
                <TextInput label={"Email"} onChangeText={text=>setEmail(text.trim())} mode="flat" style={Styles.AuthInput}/>
                <TextInput label={"password"} onChangeText={text=>setPassword(text.trim())} mode="flat" secureTextEntry={true} style={Styles.AuthInput}/>
                <TouchableOpacity activeOpacity={0.9} onPress={()=>onChangeScreen('forgot')}>
                    <Text style={Styles.ForgotPass}>Olvidaste tu contraseña ?</Text>
                </TouchableOpacity>
                <Button 
                    mode="contained"
                    onPress={()=>Login()}
                    dark={true}
                    buttonColor='#0f6ebb'>
                        Iniciar session
                </Button>
                <View style={{ marginTop:20, justifyContent:'center'}}>
                    <TouchableOpacity activeOpacity={0.9} onPress={()=>onChangeScreen('register')}>
                        <Text style={{fontSize:14}}>
                            Aun no tienes una cuenta? 
                            <Text style={{fontWeight:'bold'}}> Registrate</Text>
                        </Text>
                    </TouchableOpacity>
                </View>                                 
            </View>                      
        </SafeAreaView>
    )
}

export default Login;