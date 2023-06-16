import { StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { Context } from '../context/dataContext'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Home from './Home'
import AgendamentoRoutes from './agendamento/AgendamentoRoutes'
/* import Perfil from './Perfil' */
import Servicos from './Servicos'


const Tab = createBottomTabNavigator();

const Routes = () => {
    const { state, dispatch } = useContext(Context)
  return (
    <Tab.Navigator screenOptions={{
        headerRight: () => (
            <Entypo
                name='log-out'
                size={20}
                style={{margin: 10}}
                color='#000'
                onPress={() => dispatch({type: 'logOut'})}
             />
        )
    }}>

    <Tab.Screen
        name='Home'
        component={Home}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="home" size={26} color="black" />
            )
        }}
    />
    
    <Tab.Screen
        name='Agendamento'
        component={AgendamentoRoutes}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="calendar-clock" size={26} color="black"/>
            )
        }}
    />

    <Tab.Screen
        name='Serviços'
        component={Servicos}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="broom" size={26} color="black"/>
            )
        }}
    />

{/*     <Tab.Screen
        name='Perfil'
        component={Perfil}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="account" size={26} color="black" />
            )
        }}
    /> */}


    </Tab.Navigator>
  )
}

export default Routes

const styles = StyleSheet.create({})