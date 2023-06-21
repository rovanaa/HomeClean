import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react';
import LogoTwo from '../assets/images/LogoTwo.png';
import ImagemPadrao from '../assets/images/ImagemPadrao.jpeg';
import ImagemPesada from '../assets/images/ImagemPesada.jpeg';
import ImagemBeneficio from '../assets/images/ImagemBeneficio.jpg';
import LogoThree from '../assets/images/logoThree.jpg';
import LogoWhatsapp from '../assets/images/LogoWhatsapp.jpeg';
import CustomButton from "../components/CustomButton.js";
import Agendamento from './agendamento/RegisterAgendamento';
import * as Animatable from 'react-native-animatable'
import { Linking } from 'react-native';


const padrao = [
  { id: '1', text: '▶ Arrumação e organização' },
  { id: '2', text: '▶ Cozinha e banheiro completo' },
  { id: '3', text: '▶ Limpeza de móveis e eletrônicos.' },
  { id: '4', text: '▶ Varrer e passar pano' },
];

const pesada = [
  { id: '1', text: '▶ Arrumação e organização;' },
  { id: '2', text: '▶ Inclui todos os itens da limpeza padrão.' },
  { id: '4', text: '▶ Janelas e interior dos móveis;' },
  { id: '5', text: '▶ Paredes, portas e rodapés;' },
];

const beneficios = [
  { id: '1', text: '▶ Atendimento humanizado;' },
  { id: '2', text: '▶ Horários disponíveis diferenciados;' },
  { id: '3', text: '▶ Pagamento facilitado;' },
  { id: '4', text: '▶ Praticidade na contratação;' },
  { id: '5', text: '▶ Profissional qualificado;' },
  { id: '6', text: '▶ Segurança garantida;' },
];

const materias = [
  { id: '1', text: '▶ Água sanitária e limpa vidros.' },
  { id: '2', text: '▶ Detergentes, desinfetantes;' },
  { id: '3', text: '▶ Escovas e esponjas;' },
  { id: '4', text: '▶ Panos de chão e limpeza;' },
  { id: '5', text: '▶ Vassoura, rodo, pá e balde;' },
];

const renderItem = ({ item }) => {
  return (
    <Text style={styles.TextItems}>{item.text}</Text>
  );
};

const Home = ({navigation}) => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}> 
      <ScrollView style={styles.scrollView}>
      <View style={styles.headLine}>
        <Animatable.View delay={500} animation="bounceInDown">
          <Text style={styles.headLineText}>Home Clean</Text>
        </Animatable.View>
        </View>

        <View style={styles.containerImageOficial}>
        <Image
        source={LogoTwo}
        style={[styles.logoTwo, { height: height * 0.3 }]}
        resizeMode="contain"
            />
      </View>

       <View style={styles.containersubheadlineOne}>
       <Text style={styles.subheadlineOne}> O jeito mais fácil e confiável de cuidar do seu lar</Text>
      </View>

      <View style={styles.containersubheadlineTwo}>
       <Text style={styles.subheadlineTwo}> Conheça todos os serviços de limpeza oferecidos pela Home Clean!</Text>
      </View>
     <View style={styles.containerServicos}>
          <View tyle={styles.containerPadraoPesado}>
            <View style={styles.subcontainerItemsBordaPadrao}>
            <Image
              source={ImagemPadrao}
              style={styles.logoImage}
              resizeMode="contain"
                />
            <Text style={styles.TextHeadlinePadrao}>Limpeza Padrão</Text>
               <View  style={styles.TextItems}>
                <FlatList
                  data={padrao}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>

          <View style={styles.containerPadraoPesado}>
            <View style={styles.subcontainerItemsBordaPesado}>
            <View style={styles.ImagemPesada}>
            <Image
              source={ImagemPesada}
              style={styles.logoImage}
              resizeMode="contain"
                />
            </View>
            <Text style={styles.TextHeadlinePesada}>Limpeza Pesada</Text>
             <View  style={styles.containerListPesado}>
                <FlatList
                  data={pesada}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  style={styles.TextItems}
                  />
              </View>
            </View>
          </View>

          <View style={styles.containersubheadlineThree}>
             <Text style={styles.subheadlineThree}> Benefícios de contratar pela Home Clean! </Text>
          </View>

          <View style={styles.containerBeneficiosMateriais}>
           <View style={styles.subcontainerItemsBordaBeneficios}>

           <Image
              source={ImagemBeneficio}
              style={styles.logoImage}
              resizeMode="contain"
                />

            <View style={styles.containerListBeneficiosMateriais}>
              <View>
              <FlatList
                  data={beneficios}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  style={styles.TextItems}
                  />
                </View>
              </View>

            </View>
          </View>

          <View style={styles.containersubheadlineFour}>
             <Text style={styles.subheadlineFour}> Materiais de limpeza essenciais que você precisa ter para uma limpeza adequada </Text>
          </View>

          <View style={styles.containerBeneficiosMateriais}>
            <View style={styles.subcontainerItemsBordaMateriais}>

            <Image
              source={LogoThree}
              style={styles.logoImage}
              resizeMode="contain"
                />

          <View  style={styles.containerListBeneficiosMateriais}>
                <FlatList
                  data={materias}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  style={styles.TextItems}
                  />
              </View>

            </View>
            
          </View>
            
            <View style= {styles.Button}>
              <CustomButton 
              text="CONTRATAR AGORA"
              onPress={() => navigation.navigate("Agendamento")}/>
            </View>

          <View style={styles.containerWhatsappTexto}>
              <TouchableOpacity >
                  <Image
                  source={LogoWhatsapp}
                  style={[styles.whatsappIcon, { height: height * 0.3 }]}
                  resizeMode="contain"
                  />

              <View style={styles.containerWhatsapp}>
              
                <Text
                  style={styles.whatsappText}
                  onPress={() => {
                    Linking.openURL('https://api.whatsapp.com/send?phone=5548992095395');
                  }}>
                  Tire suas dúvidas por whatsapp
                </Text>
            </View>
                </TouchableOpacity>
        </View>

      </View>

      </ScrollView>
    </View>
    
  )
}

export default Home
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#7ed6d2'
  },
  headLine: {
    alignItems:'center'
  },
  headLineText: {
    fontSize: 40,
    fontFamily: 'system-ui',
    width: 260,
    textAlign: 'center',
  },
  containersubheadlineOne: {
    alignItems:'center',
    top: 12,
    border: '2px solid #3b8183',
    width: 320,
    left: 29,
    backgroundColor: 'white',
    height: 25,
    justifyContent: 'center'
  },
  subheadlineOne:{
    textAlign: 'center',
    fontFamily: 'system-ui',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000'
  },
  containersubheadlineTwo: {
    alignItems:'center',
    top: 35
  },
  subheadlineTwo: {
    width: 360,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
    fontFamily:'system-ui'
  },
  containerServicos: {
    maxWidth: 767,
    gap: 40,
    display: 'flex',
    margin: -33,
    top: 60
  },
  subcontainerItemsBordaPadrao:{
    border: '2px solid #3b8183',
    borderRadius: 15,
    width: 330,
    height: 370,
    left: 58,
    top: 40,
    backgroundColor: '#FFFFFF'
  },
  subcontainerItemsBordaPesado: {
    border: '2px solid #3b8183',
    borderRadius: 15,
    width: 330,
    height: 380,
    left: 58,
    top: 25,
    backgroundColor: '#FFFFFF'
  },
  subcontainerItemsBordaBeneficios: {
    border: '2px solid #3b8183',
    borderRadius: 15,
    width: 330,
    height: 380,
    left: 58,
    backgroundColor: '#FFFFFF'
  },
  subcontainerItemsBordaMateriais: {
    border: '2px solid #3b8183',
    borderRadius: 15,
    width: 330,
    height: 370,
    left: 58,
    top: -12,
    backgroundColor: '#FFFFFF'
  },
  logoImage: {
    maxWidth: 150,
    maxHeight: 300,
    left: 84,
    height: 200,
    position:'relative'
  },
  ImagemPesada:{
    height: 180
  },
  TextHeadlinePadrao: {
    color: '#2C2C2C',
    fontFamily:'system-ui',
    marginBottom: 21,
    fontSize: 18,
    fontWeight: 900,
    textAlign:'center'
  },
  TextHeadlinePesada:{
    color: '#2C2C2C',
    fontFamily:'system-ui',
    marginTop: 26,
    marginBottom: -10,
    fontSize: 18,
    fontWeight: 800,
    textAlign:'center'
  },
  TextItems: {
    color: '#000000',
    fontFamily:'system-ui',
    fontSize: 15,
    fontWeight: 600,
    left: 26,
    gap: 15
  },
  containersubheadlineThree:{
    alignItems:'center',
    top: 15
  },
  subheadlineThree:{
    fontSize: 18,
    fontFamily:'system-ui',
    fontWeight: 500
  },
  containersubheadlineFour: {
    alignItems:'center',
    top: -6
  },
  subheadlineFour: {
    fontSize: 18,
    fontFamily:'system-ui',
    fontWeight: 500,
    width: 375,
    textAlign: 'center'
  },
  containerListBeneficiosMateriais:{
    marginTop: 4
  },
  containerListPesado: {
    marginTop: 30
  },
  whatsappIcon:{
    maxHeight: 50,
    maxWidth: 50,
    top: -18,
    left: 58,
    borderRadius: 56
  },
  containerWhatsapp:{
    alignItems: 'center',
    top: -55,
    left: 24
  },
  whatsappText: {
    fontSize: 16,
    fontWeight: 800,
    color: '#000000'
  },
  containerWhatsappTexto:{
    display: 'flex',
    alignItems: 'initial',
    top: 14
  },
  Button:{
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    left: 76,
    height: 18
  }

})