import React,{useState} from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import Styles from '../config/Styles';
import { TextInput,Button } from "react-native-paper";

const Login = (props) => {
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')

    const onChangeScreen = (screen) =>{
        props.navigation.navigate(screen)
    }

    const Login = ()=>{
        return (console.log('siuu' + email+'/'+password))
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
                    dark={'dark'}>
                        Iniciar session 
                </Button>
                <View style={{ marginTop:20}}>
                    <TouchableOpacity activeOpacity={0.9} onPress={()=>onChangeScreen('register')}>
                        <Text style={{fontSize:16}}>
                            Aun no tienes una cuenta? 
                            <Text style={{fontWeight:'bold'}}> Registrate</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={()=>onChangeScreen('about')}>
                    <Text style={Styles.ForgotPass}>Acerca de nosotros</Text>
                </TouchableOpacity>
            </View>       
        </SafeAreaView>
    )
}

export default Login;