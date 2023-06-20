import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/dataContext';
import api from '../../api';

const AgendamentoServicos = ({ navigation }) => {

    const { state } = useContext(Context)

    const [servicos, setServicos] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/servicos/findByAgendamento', {
                params: {
                    idAgendamento: state.idAgendamento,
                },
            }).then((res) => setServicos(res.data.servicos))
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
                            <View style={styles.text}>

                                <Text style={styles.item}>{item.agendamento.optServ}</Text>
                                <Text style={styles.item}>{item.agendamento.optLocal}</Text>
                                <Text style={styles.item}>{item.agendamento.optAdic}</Text>
                                <Text style={styles.item}>{item.agendamento.setOptData}</Text>
                                <Text style={styles.title}>{item.agendamento.text}</Text>

                                <Text style={styles.item}>Agendado por: {item.user.name}</Text>
                            </View>
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>


    )
}

export default AgendamentoServicos;

const styles = StyleSheet.create({
/*     view: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    text: {
        height: 120,
        width: '100%',
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        margin: 10,
        textAlign: 'center'
    }, */
/*     item: {
        margin: 10,
        fontSize: 15
    }, */
    icon: {
        margin: 10
    }
});