import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddUser = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    addUser(name, email);
    setName('');
    setEmail('');
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Adicionar Usuário" onPress={handleAddUser} />
    </View>
  );
};

export default AddUser;