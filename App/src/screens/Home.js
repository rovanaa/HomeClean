import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react';
import LogoOficial from '../assets/images/logoOficial.jpeg';
import LogoTwo from '../assets/images/LogoTwo.png';
import LogoThree from '../assets/images/LogoThree.jpg';

const Home = ({navigation}) => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}> 
      <ScrollView style={styles.scrollView}>
        <View style={styles.headLine}>
        <Text style={styles.headLineText}>HomeClean</Text>
        </View>
     
      <View>
        <Image
        source={LogoTwo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
            />
      </View>

       <View style={styles.containersubheadlineOne}>
       <Text style={styles.subheadlineOne}> O jeito mais fácil e confiável de cuidar do seu lar</Text>
      </View>

      <View style={styles.containersubheadlineTwo}>
       <Text style={styles.subheadlineTwo}> Conheça todos os serviços de limpeza oferecidos pela HomeClean</Text>
      </View>

      <View style={styles.containerPadrao}>
        <Text>Limpeza Padrão</Text>
        <Text>Varrer e passar pano;</Text>
        <Text>Cozinha e banheiro completo;</Text>
        <Text>Arrumação e organização;</Text>
        <Text>Limpeza de móveis e eletrônicos.</Text>
      </View>

      <View style={styles.containerPesada}>
        <Text>Limpeza Pesada</Text>
        <Text>Inclui todos os itens da limpeza padrão</Text>
        <Text>Paredes, portas e rodapés;</Text>
        <Text>Arrumação e organização;</Text>
        <Text>Janelas e interior dos móveis.</Text>
      </View>

      </ScrollView>
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  scrollView: {
    backgroundColor: '#fff'
  },
  headLine: {
    alignItems:'center'
  },
  headLineText: {
    fontSize:40,
    fontWeight: 900,
    fontFamily: 'sans-serif'
  },
  containersubheadlineOne: {
    alignItems:'center'
  },
  subheadlineOne:{
    width: 388,
    textAlign: 'center',
    fontFamily: 'emoji',
    fontSize: 25,
    fontWeight: 400
  },
  containersubheadlineTwo: {
    alignItems:'center'
  },
  subheadlineTwo: {
    width: 388,
    textAlign: 'center',
    fontFamily: 'emoji',
    fontSize: 25,
    fontWeight: 400
  },
  containerPadrao: {
    margin: '0 auto',
    border: '1px solid #000',
    borderRadius: 7,
    height: 165,
    width: 280,
    left: 84
  },
  containerPesada:{
    margin: '0 auto',
    border: '1px solid #000',
    borderRadius: 7,
    height: 165,
    width: 280,
    left: 84,
    bottom: -26
  }

})