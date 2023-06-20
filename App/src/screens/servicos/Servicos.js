import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/dataContext'
import api from '../../api'
import * as Animatable from 'react-native-animatable'

const ServicosAgendamento = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [servicos, setServicos] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/agendamento/findByUser', {
                params: {
                    idUser: state.idUser,
                  }
            });
            console.log(list);
            setServicos(list.data.agendamentos)
            dispatch({type: "update", payload: false})
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <View style={styles.view}>
            <FlatList
                data={servicos}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Animatable.View delay={500} animation="bounceInRight">
                            <View style={styles.text}>
                                <Text style={styles.item}>{item.optServ}</Text>
                                <Text style={styles.item}>{item.optLocal}</Text>
                                <Text style={styles.item}>{item.optAdic}</Text>
                                <Text style={styles.item}>{item.setOptData}</Text>
                                <Text style={styles.item}>{item.text}</Text>
                            </View>
                            </Animatable.View>
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>


    )
}

export default ServicosAgendamento;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#7ed6d2'
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 6,
        backgroundColor: '#3b8183'
    },
    item: {
        margin: 5,
        fontSize: 16,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    }
});