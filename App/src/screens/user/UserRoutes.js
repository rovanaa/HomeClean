import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from './Users'
import UpdateUser from './UpdateUser';
const Stack = createNativeStackNavigator();

const UserRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainUser" component={Users} /> 
                <Stack.Screen name="UpdadeUser" component={UpdateUser} />
            </Stack.Navigator>
    )
}

export default UserRoutes;