import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/dataContext';
import api from '../../api';
import CustomButton from '../../components/CustomButton';

const Agendamento = ({ navigation }) => {
    const { state, dispatch } = useContext(Context);

    const [agendamento, setAgendamento] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/agendamento/find');
            setAgendamento(list.data.agendamento);
            dispatch({ type: "update", payload: false });
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <View style={styles.view}>
            {state.isAdmin ? (
                <CustomButton text="Novo agendamento" onPress={() => navigation.navigate("Agendamento")} />
            ) : (
                <></>
            )}
            <FlatList
                data={agendamento}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                                <Text style={styles.title}>{item.optServ}</Text>
                                <Text style={styles.item}>{item.optLocal}</Text>
                                <Text style={styles.item}>{item.optAdic}</Text>
                                <Text style={styles.item}>{item.optData}</Text>
                                <Text style={styles.item}>{item.text}</Text>
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Agendamento;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
    },
    button: {
        marginBottom: 20
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
/*     text: {
        height: 120,
        width: '80%',
        justifyContent: "center",
    }, */
    title: {
        fontSize: 30
    },
    item: {
        fontSize: 15
    },
    icon: {
        margin: 0
    }
});