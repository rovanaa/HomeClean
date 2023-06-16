import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Agendamento from './RegisterAgendamento';

import Servicos from '../Servicos';

const Stack = createNativeStackNavigator();

const AgendamentoRoutes = ({ navigation }) => {
    
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Agendamento" component={Agendamento} />
               {/*  <Stack.Screen name="Agendamento" component={RegisterAgendamento} /> */}
            </Stack.Navigator>
    )
}

export default AgendamentoRoutes;