import { StyleSheet, Text, TextInput, View, useWindowDimensions, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import CheckBox from "../../components/CheckBox";
import CustomInput from "../../components/CustomInput.js";
import CustomButton from "../../components/CustomButton.js";
import api from '../../api';
import { Context } from '../../context/dataContext'
import { DatePickerInput } from 'react-native-paper-dates';

const Agendamento = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  const [text, setText] = useState('');
  const [optServ, setOptServ] = useState('');
  const [optLocal, setOptLocal] = useState('');
  const [optAdic, setOptAdic] = useState([]);
  const [optData, setOptData] = useState('');


  const optionservico = [
    {text: 'Padrão', id: 1}, 
    {text: 'Pesada', id: 2}
  ];

  const optionslocal = [
    {text: 'Casa', id: 1},
    {text: 'Apartamento', id: 2}, 
    {text: 'Comercial/escritório', id: 3},
    {text: 'Condomínio (área comum)', id: 4}, 
  ];

  const optionsadicional = [
    {text: 'Janelas', id: 1},
    {text: 'Cozinhar', id: 2}, 
    {text: 'Passar roupas', id: 3},
    {text: 'Armários (limpeza interna)', id: 4}, 
    {text: 'Geladeira (limpeza interna)', id: 5}, 
  
  ];

  // const optionsdata = [
  //   {text: 'O quanto antes possível', id: 1},
  //   {text: 'Nos próximos 15 dias', id: 2},   
  //   {text: 'Nos próximos 30 dias', id: 3}, 
  //   {text: 'Nos próximos 3 meses', id: 4}
  // ];

  const { height } = useWindowDimensions();

  const onRegisterPressed = async () => {
    let adic = optAdic.toString();
    try {
        const authData = await api.post("/agendamento/register", {
          optServ: optServ,
          optLocal: optLocal,
          optAdic: adic,
          optData: optData,
          text: text,
          idUser: state.idUser
        });
        if (authData.status === 200) {
            alert(authData.data.message)
            setOptServ("")
            setOptLocal("")
            setOptAdic("")
            setOptData("")
            setOptData("")
            setText("")
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
    <View style= {styles.container}>
      
      <ScrollView style={styles.scrollView}>
      <Text style= {styles.title}> Qual é o serviço?</Text>
      <CheckBox options={optionservico} onChange={op=> setOptServ(op[0])}/>

      <Text style= {styles.title}> Qual é o local do serviço?</Text>
      <CheckBox options={optionslocal} onChange={op=> setOptLocal(op[0])}/>

      <Text style= {styles.title}> Você precisa de serviços adicionais? </Text>
      <CheckBox options={optionsadicional} onChange={op=> setOptAdic(op)} multiple/>

      <Text style= {styles.title}> Para quando você precisa deste serviço? </Text>
      {/* <CheckBox options={optionsdata} onChange={op=> setOptData(op[0])} /> */}
      <View style= {styles.calendar}>
      <DatePickerInput
                locale="pt"
                label="Agendamento"
                value={optData}
                onChange={(d) => setOptData(d)}
                inputMode="start"
            />
      </View>
      
      <Text style= {styles.title}> Nos informe o seu endereço! </Text>
      <View style= {styles.input}>
        <CustomInput
          placeholder="Escreva aqui"
          value={text}
          setValue={setText}
          style= {styles.textArea}
            />
      </View>
      <Text style= {styles.contepranos} >👆 Insira a sua rua, número, bairro e o cep.</Text>

      <View style= {styles.Button}>

      <CustomButton 
        text="FINALIZAR PEDIDO"
        onPress={onRegisterPressed}
      />
    
      </View>

      </ScrollView>
    </View>
  )
}

export default Agendamento

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#7ed6d2'
  },
  title: {
    color: '#333',
    size: 16,
    fontWeight: '700',
    textTransform:'uppercase',
    marginVertical: 10,
    marginLeft: 12,
    marginBottom: -2
  },
  input:{
    left: 12,
    margin: 5
  },
  textArea:{
    height: 101,
    color: '#555555'
  },
  Button:{
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    left: 18,
    margin: 20
  },
  contepranos:{
    paddingLeft: 13,
    fontSize: 14,
    fontWeight: 500
  },
  calendar:{
    margin: 20,
    right: 5,
    border: '4px solid #3b8183',
    borderRadius: 8
  }
})