import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,useWindowDimensions } from 'react-native';
import LogoTwo from '../assets/images/LogoTwo.png';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={LogoTwo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />            
            </View>

            <Animatable.View delay={1500} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>O jeito mais fácil e confiável de cuidar do seu lar!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity
                 style={styles.button}
                 onPress={ () => navigation.navigate('Login')
                }
                 >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>


    );
}

const styles = StyleSheet.create({

    container: {
     flex:1,
     backgroundColor: '#7ed6d2'

    },
    containerLogo:{
     flex:2,
     backgroundColor: '#7ed6d2',
     justifyContent:'center',
                  
    },
    containerForm:{
     flex:1,
     backgroundColor: '#FFF',
     borderTopLeftRadius: 25,
     borderTopRightRadius: 25,
     paddingStart:'5%',
     paddingEnd: '5%'
    },
    title:{
     fontSize: 24,
     fontWeight: 'bold',
     marginTop: 28,
     marginBottom: 12,
   
    },
    text:{
     marginTop: 5,
     color: '#a1a1a1',
     fontSize: 16,
     marginLeft: 75,
     color: '#000',
     fontFamily:'system-ui'
        
    },
    button: {
     position: 'absolute',
     backgroundColor: '#7ed6d2',
     borderRadius: 50,
     paddingVertical: 8,
     width:'60%',
     alignSelf: 'center',
     bottom: '10%',
     alignItems: 'center',
     justifyContent: 'center'
    },
    buttonText: {
     fontWeight: "bold",
     color: "#FFF",
    
}    
})