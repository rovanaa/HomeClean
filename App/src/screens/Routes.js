import { StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { Context } from '../context/dataContext'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Home from './Home'
import Servicos from './Servicos'
import Perfil from './Perfil'


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
                <MaterialCommunityIcons name="home" size={24} color="black" />
            )
        }}
    />

    <Tab.Screen
        name='Servicos'
        component={Servicos}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="broom" size={24} color="black"/>
            )
        }}
    />

    <Tab.Screen
        name='Perfil'
        component={Perfil}
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="account" size={24} color="black" />
            )
        }}
    />


    </Tab.Navigator>
  )
}

export default Routes

const styles = StyleSheet.create({})