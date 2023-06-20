import { StyleSheet, TouchableOpacity, View, Image, useWindowDimensions, Text, TextInput } from "react-native";
import React, { useState, useContext } from 'react';
import Logo from '../assets/images/logo.jpeg';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api/index'
import { Context } from '../context/dataContext';
import swal from 'sweetalert';
 

const Login = ({ navigation }) => {
    const { dispatch } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPressed = async () => {
        try {
            const authData = await api.post('/login', {
                email: email,
                password: password
            })
            if(authData.status === 200){
                await AsyncStorage.setItem('token', authData.data.token)
                dispatch({type:'logIn', payload: true})
            } else {
                swal({
                    title: "Erro!",
                    text: "Email ou Senha Inválidos.",
                    icon: "error",
                    button: "OK",
                  });
                setPassword('')
            }
        } catch (error) {
            swal({
                title: "Erro!",
                text: "Email ou Senha Inválidos.",
                icon: "error",
                button: "OK",
              });
            setPassword('')
        }
    }

    const { height } = useWindowDimensions();

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <View style={styles.loginBorda}> 
            <Text style={styles.boasVindas}>
                Seja bem-vindo(a)!
            </Text>
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomButton text="Login" onPress={onLoginPressed} style={styles.Logintext}/>

            <TouchableOpacity
                onPress={() => navigation.navigate("RegisterUser")}
            >
                <Text>
                    Não tem uma conta?{" "}
                    <Text style={styles.createAccountText}>
                        Cadastre-se
                    </Text>
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF'
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    boasVindas:{
        fontSize: 15,
        fontWeight: 700,
        margin: 30
    },
    createAccountText: {
        fontWeight: "bold",
        color: "#042624",
    },
    loginBorda:{
        border: '3px solid #4d9b97',
        width: 350,
        bottom: 15,
        alignItems: 'center',
        height: 292,
        bottom: 20,
        gap: 6,
        borderRadius: 8,
        backgroundColor: '#7ed6d2'
    },
    loginText: {
        fontWeight: "bold",
        color: "#042624",
    }

});

export default Login;