import React from 'react';

import {View, StyleSheet, TouchableOpacity, TextInput, Text} from 'react-native';
import Radios from '../components/radios'



import { Context } from '../context/dataContext';

const  contratar = () => {
  const [text, onChangeText] = React.useState('');


  return (
    <View>
      <Text>Qual é o serviço?</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Escolha padrão ou pesada"
        value={text}
      />

    <Text>Qual é o local do serviço?</Text>
    
    <Radios 
   
    options={['CPF', 'CNPJ']}  
    horizontal={true} 
    onChangeSelect={(opt, radios)=> alert(opt)} 
    
    />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default contratar;