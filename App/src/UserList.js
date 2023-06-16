import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const UserList = ({ users, deleteUser }) => {
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Button title="Excluir" onPress={() => deleteUser(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default UserList;