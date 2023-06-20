import { StyleSheet, View, useWindowDimensions } from "react-native";
import React, { useContext, useState } from 'react';
import api from '../../api';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Context } from "../../context/dataContext";

const RegisterServicos = ({ navigation }) => {

    const { state, dispatch } = useContext(Context);

    const [idUser, setidUser] = useState(state.idUser);
    const [idAgendamento, setidAgendamento] = useState(state.idAgendamento);

    const [text, setText] = useState('');
    const [optServ, setOptServ] = useState('');
    const [optLocal, setOptLocal] = useState('');
    const [optAdic, setOptAdic] = useState([]);
    const [optData, setOptData] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/servicos/register", {
                idUser: idUser,
                idAgendamento:  idAgendamento,
                text: text,
                optServ: optServ,
                optLocal: optLocal,
                optAdic: optAdic,
                optData: optData,
            });
            if (authData.status === 200) {
                alert(authData.data.message)
                setText("")
                setOptServ("")
                setOptLocal("")
                setOptAdic("")
                setOptData("")
                dispatch({ type: "update", payload: true })
            }
            else {
                console.log(authData.data.message)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.view}>

            <CustomInput
                value={state.nameAgendamento}
                editable={false}
            />

            <CustomInput
                value={state.optServ}
                editable={false}
            />

            <CustomInput
                value={state.optLocal}
                editable={false}
            />

            <CustomInput
                value={state.optAdic}
                editable={false}
            />

            <CustomInput
                value={state.setOptData}
                editable={false}
            />

            <CustomInput
                placeholder="Escreva aqui"
                value={text}
                setValue={setText}
            />

            <CustomButton text="Register" onPress={onRegisterPressed} />
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#6200ee",
    }
});

export default RegisterServicos;