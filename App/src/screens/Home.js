import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react';
import LogoOficial from '../assets/images/logoOficial.png';

const Home = ({navigation}) => {
  const { height } = useWindowDimensions();
  return (
    <View>

      <View>
        <Image
        source={LogoOficial}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
            />
      </View>

      <View>
        <Text>Serviços domésticos com praticidade e qualidade</Text>
      </View>

      <View>
        <Text>Home</Text>
      </View>

      <View>
        <Text>Home</Text>
      </View>

    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({})