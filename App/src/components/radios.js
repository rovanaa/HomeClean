import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const radios = ({options=[], horizontal=false, onChangeSelect, selected}) => {
  return (
    <View>
      { options.map((opt, radios) => (

            <TouchableOpacity onPress={()=> onChangeSelect(opt, radios)} style={styles.optContainer}>
                <View style={styles.outlineCircule}>
                 {selected === radios && <View style={styles.innerCircle}/>} 
                </View>
                <Text>{opt}</Text> 
            </TouchableOpacity>
       
       ))}
    </View>
  )
}

export default radios

const styles = StyleSheet.create({
    optContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    outlineCircule:{
        width:10,
        height: 10,
        borderRadius: 5,
        borderColor: '#777',
        borderWidth: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    innerCircle:{
        width:5,
        height: 5,
        borderRadius: 3,
        backgroundColor: '#444',
    }
})