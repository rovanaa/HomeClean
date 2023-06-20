import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Servicos from './Servicos';

const Stack = createNativeStackNavigator();

const ServicosRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="ServicosMain" component={Servicos} />
            </Stack.Navigator>
    )
}

export default ServicosRoutes;