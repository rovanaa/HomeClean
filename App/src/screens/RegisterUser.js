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
            <CustomInput
                placeholder="Name"
                value={name}
                setValue={setName}
                style={styles.cadastroInput}
            />
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
                style={styles.cadastroInput}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
                style={styles.cadastroInput}
            />
            <CustomInput
                placeholder="Admin"
                value={admin}
                setValue={setAdmin}
                style={styles.cadastroInput}
            />
            <CustomButton text="Register" onPress={onRegisterPressed} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >
                <Text>
                    Já tem uma conta?{" "}
                    <Text style={styles.loginText}>Faça o login</Text>
                </Text>
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
        backgroundColor: '#7ed6d2'
    },
    logo: {
        width: '80%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#3b8183",
    },
    cadastroBorda:{
        border: '3px solid #deb0be',
        width: 350,
        top: 29,
        alignItems: 'center',
        height: 300,
        gap: 6,
        borderRadius: 8,
        backgroundColor: '#deb0be'
    },
    cadastroInput:{
       margin: 20,
       width: 110,
       left: -9
    },
    subContainer:{
        top: 26
        
    }
});

export default RegisterUser;