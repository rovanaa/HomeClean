import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/dataContext'
import api from '../../api/index'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';

const Users = ({ navigation }) => {
    const { state, dispatch } = useContext (Context)

    const [users, setUsers] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/user/findByUser', {
                params: {
                    idUser: state.idUser,
                }
            });
            console.log(list);
            setUsers(list.data.users)
            dispatch({ type: "update", payload: false })
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <View style={styles.view}>
            <Ionicons name="settings-outline" size={30} color="black"  style={styles.iconSettings}/>

            <View style={styles.count}>
                <MaterialCommunityIcons name="account-settings" size={60} color="black" />
            </View>

            <CustomInput
                value={state.name}
                editable={true}
            />

            <CustomInput
                value={state.email}
                editable={true}
            />

            <CustomInput
                value={state.password}
                editable={true}
            />

            <CustomButton text="Atualizar Perfil" onPress={() => navigation.navigate ("")} />

            <View style={styles.editar}>
                <AntDesign name="delete" size={30} color="black" style={styles.iconDelete} onPress={() => deleteUser(item.id)}/>
            </View>
        </View>

    )
}

export default Users

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#7ed6d2',
        alignItems: 'center',
        padding: 20
    },
    count: {
        alignItems: 'center',
        padding: 10
    },
    editar: {
        flex: 2,
        alignItems: 'flex-end',
        paddingTop: 20
    },
    iconSettings:{
        marginRight: 300
    },
    iconDelete:{
        marginLeft: 300,
        marginTop: 16
    }
})