import {
    StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity
} from "react-native";
import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from "../api";

const RegisterUser = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState('');
    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        
        try {
            const data = await api.post('/user/register',{
                name: name,
                email: email,
                password: password,
                admin: admin
            });
            if (data.status === 200) {
                console.log(data)
                alert(data.data.message)
                navigation.navigate('Login')
            } else {
                console.log(data)
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />
            <View style={styles.cadastroBorda}> 
            <View style={styles.subContainer}>
            <View  style={styles.inputName}>
            <CustomInput
                placeholder="Name"
                value={name}
                setValue={setName}
                style={styles.cadastroInput}
            />
            </View>
            <View  style={styles.inputName}>
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
                style={styles.cadastroInput}
            />
            </View>
            <View  style={styles.inputName}>
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
                style={styles.cadastroInput}
            />
              </View>
            <View  style={styles.inputName}>
            <CustomInput
                placeholder="Admin"
                value={admin}
                setValue={setAdmin}
                style={styles.cadastroInput}
            />
            </View>
            <View  style={styles.bottom}>
            <CustomButton text="Register" onPress={onRegisterPressed} />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >   
                <View style={styles.containerText}>
                <Text>
                    Já tem uma conta?{" "}
                    <Text style={styles.loginText}>Faça o login</Text>
                </Text>
                </View>
            </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#086863'
    },
    logo: {
        width: '80%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#042624",
    },
    cadastroBorda:{
        border: '3px solid #4d9b97',
        width: 350,
        top: 29,
        alignItems: 'center',
        height: 300,
        gap: 6,
        borderRadius: 8,
        backgroundColor: '#4d9b97'
    },
    cadastroInput:{
       margin: 20,
       width: 110,
       left: -9
    },
    subContainer:{
        top: 26,
        right: 44
    },
    inputName: {
        width: '180%'
    },
    containerText:{
        left: 45,
        top: 8
    },
    bottom: {
        width: '180%',
        top: 4
    }
});

export default RegisterUser;