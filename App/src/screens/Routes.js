import { StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { Context } from '../context/dataContext'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import UserRoutes from './user/UserRoutes'
import Home from './Home'
import AgendamentoRoutes from './agendamento/AgendamentoRoutes'
import ServicosRoutes from './servicos/ServicosRoutes'

const Tab = createBottomTabNavigator();

const Routes = () => {
    const { state, dispatch } = useContext(Context)
  return (
    <Tab.Navigator screenOptions={{
        headerRight: () => (
            <AntDesign
                name='logout'
                size={20}
                style={{margin: 10}}
                color="black"
                onPress={() => dispatch({type: 'logOut'})}
             />
        )
    }}>

    <Tab.Screen
        name='Home'
        component={Home}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="home" size={30} color="black" />
            )
        }}
    />
    
    <Tab.Screen
        name='Agendamento'
        component={AgendamentoRoutes}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="calendar-clock" size={30} color="black"/>
            )
        }}
    />

    <Tab.Screen
        name='Serviços'
        component={ServicosRoutes}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="broom" size={30} color="black"/>
            )
        }}
    />

    <Tab.Screen
        name='Perfil'
        component={UserRoutes}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="account" size={30} color="black" />
            )
        }}
    /> 

    </Tab.Navigator>
  )
}

export default Routes

const styles = StyleSheet.create({})