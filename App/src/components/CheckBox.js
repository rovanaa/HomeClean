import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect } from 'react';

const Checkbox = ({options = [], onChange, multiple = false}) => {
  const [selected, setSelected] = useState([]);

  function toogle(id){
    let index = selected.findIndex((i)=> i == id);
    let arrSelecteds = [...selected]
    if(index !== -1){
       arrSelecteds.splice(index, 1)
    }else{
     multiple ? arrSelecteds.push(id) : arrSelecteds = [id]
    }
    setSelected(arrSelecteds);
  }

  useEffect(()=> onChange(selected), [selected]);

  return (
    <View style={styles.container}>
      {options.map((op, index) => (
        <View style={styles.optionscontainer} key={op?.id}>
          <TouchableOpacity  style={styles.touchable} onPress={()=>toogle(op?.text)}>
            {
              selected.findIndex(i=> i == op.text) !== -1 ? <Ionicons name='checkmark-sharp' color={'black'} size={15} />:null
            } 
          </TouchableOpacity>
          <Text style={styles.optionstext}>{op?.text}</Text>
      </View>
      ))}

    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    margin: 15,
    gap: 8
  },
  optionscontainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionstext:{
    paddingLeft: 10,
    color: '#555',
    fontSize: 16,
    fontWeight: '600'
  },
  touchable:{
    height: 20,
    width: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
  },
  title: {
    color: '#333',
    size: 16,
    fontWeight: '700',
    textTransform:'uppercase',
    marginVertical: 10,
    marginLeft: 12
  }

})

export default Checkbox;