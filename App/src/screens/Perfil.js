import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSaveProfile = () => {
    // Aqui você pode implementar a lógica para salvar as alterações do perfil do usuário
    // Por exemplo, fazer uma chamada para uma API ou atualizar os dados no armazenamento local

    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Número de telefone:', phoneNumber);

    // Restaurar os campos para o estado inicial
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Número de telefone"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button
        title="Salvar"
        onPress={handleSaveProfile}
      />
    </View>
  );
};

export default EditProfileScreen;