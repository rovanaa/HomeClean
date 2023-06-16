import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Servicos = () => {
  return (
    <View style={styles.container}>
      <Text>Serviços</Text>
    </View>
  )
}

export default Servicos

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7ed6d2'
    }
})