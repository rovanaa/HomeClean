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
        <View>
        <Text>HomeClean </Text>
        </View>
     
      <View>
        <Image
        source={LogoTwo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
            />
      </View>

      <View>
       <h1>O jeito mais fácil e confiável de cuidar do seu lar</h1>
      </View>

      <View>
       <h2>Conheça todos os serviços de limpeza oferecidos pela HomeClean</h2>
      </View>

      <View>
        <Image
        source={LogoOficial}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
            />
      </View>

      <View>
        <Text>Limpeza Padrão</Text>
        <Text>Varrer e passar pano;</Text>
        <Text>Cozinha e banheiro completo;</Text>
        <Text>Arrumação e organização;</Text>
        <Text>Limpeza de móveis e eletrônicos.</Text>
      </View>

      <View>
        <Image
        source={LogoThree}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
            />
      </View>

      <View>
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
    backgroundColor: '#f2f2'
  }

})