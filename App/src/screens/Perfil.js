import React, { useState } from 'react';
import { View,  StyleSheet,Text } from 'react-native';
import UserList from '../UserList';
import AddUser from '../AddUser';
import User from '../User';

const perfil = () => {
    const [users, setUsers] = useState([
/*     new User(1, 'John Doe', 'johndoe@example.com'),
    new User(2, 'Jane Smith', 'janesmith@example.com'), */
  
  ]);

  const addUser = (name, email) => {
    const newUser = new User(users.length + 1, name, email);
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };


  return (
    <View style={styles.container}>
      <UserList users={users} deleteUser={deleteUser} />
      <AddUser addUser={addUser} />
    </View>
  );
};

export default perfil;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7ed6d2'
    }
})