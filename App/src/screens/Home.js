import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react';
import LogoOficial from '../assets/images/logoOficial.jpeg';
import LogoTwo from '../assets/images/LogoTwo.png';
import ImagemPadrao from '../assets/images/ImagemPadrao.jpeg';
import ImagemPesada from '../assets/images/ImagemPesada.jpeg';
import ImagemBeneficio from '../assets/images/ImagemBeneficio.jpg';
import LogoThree from '../assets/images/logoThree.jpg';
import LogoWhatsapp from '../assets/images/LogoWhatsapp.jpeg';

const Home = ({navigation}) => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}> 
      <ScrollView style={styles.scrollView}>
 <View style={styles.headLine}>
        <Text style={styles.headLineText}>HomeClean</Text>
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
       <Text style={styles.subheadlineTwo}> Conheça todos os serviços de limpeza oferecidos pela <b style={styles.homeCleanNegrito}>HomeClean!</b></Text>
      </View>
     <View style={styles.containerServicos}>
          <View tyle={styles.containerPadraoPesado}>
            <View style={styles.subcontainerItemsBordaPadrao}>
            <Image
              source={ImagemPadrao}
              style={styles.logoImage}
              resizeMode="contain"
                />
            <Text style={styles.TextHeadlineServicos}>Limpeza Padrão</Text>
            <ul style={styles.containerList}>
              <li style={styles.TextItems}>Varrer e passar pano;</li>
              <li style={styles.TextItems}>Cozinha e banheiro completo;</li>
              <li style={styles.TextItems}>Arrumação e organização;</li>
              <li style={styles.TextItems}>Limpeza de móveis e eletrônicos.</li>
            </ul>
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
            <Text style={styles.TextHeadlineServicos}>Limpeza Pesada</Text>
            <ul style={styles.containerListPesado}>
              <li style={styles.TextItems}>Inclui todos os itens da limpeza padrão;</li>
              <li style={styles.TextItems}>Paredes, portas e rodapés;</li>
              <li style={styles.TextItems}>Arrumação e organização;</li>
              <li style={styles.TextItems}>Janelas e interior dos móveis.</li>
            </ul>
            </View>
          </View>

          <View style={styles.containersubheadlineThree}>
             <Text style={styles.subheadlineThree}> Benefícios de contratar pela <b style={styles.homeCleanNegrito}>HomeClean!</b> </Text>
          </View>

          <View style={styles.containerBeneficiosMateriais}>
           <View style={styles.subcontainerItemsBordaBeneficios}>

           <Image
              source={ImagemBeneficio}
              style={styles.logoImage}
              resizeMode="contain"
                />

            <ul style={styles.containerListBeneficiosMateriais}>
              <li style={styles.TextItems}>Praticidade na contratação;</li>
              <li style={styles.TextItems}>Pagamento facilitado;</li>
              <li style={styles.TextItems}>Horários disponíveis diferenciados;</li>
              <li style={styles.TextItems}>Segurança garantida;</li>
              <li style={styles.TextItems}>Profissional qualificado;</li>
              <li style={styles.TextItems}>Atendimento humanizado.</li>
            </ul>
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

            <ul style={styles.containerListBeneficiosMateriais}>
              <li style={styles.TextItems}>Vassoura, rodo, pá e balde;</li>
              <li style={styles.TextItems}>Escovas e esponjas;</li>
              <li style={styles.TextItems}>Panos de chão e limpeza;</li>
              <li style={styles.TextItems}>Detergentes, desinfetantes;</li>
              <li style={styles.TextItems}>Água sanitária e limpa vidros.</li>
            </ul>
            </View>
          </View>
          <View style={styles.containerWhatsappTexto}>
          <View style={styles.containerWhatsapp}>
             <Text style={styles.whatsappText}> Tire suas dúvidas por whatsapp </Text>
          </View>
          <View>
          <TouchableOpacity onPress={() => Linking.openURL('web.whatsapp.com')}>
              <a href="https://web.whatsapp.com/" target="_blank">
          <Image
              source={LogoWhatsapp}
              style={[styles.whatsappIcon, { height: height * 0.3 }]}
              resizeMode="contain"/>
              </a>
          </TouchableOpacity>
          </View>
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
    fontWeight: 900,
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
  homeCleanNegrito:{
    color: '#3b8183'
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
    width: 300,
    height: 360,
    left: 70,
    top: 40,
    backgroundColor: '#FFFFFF'
  },
  subcontainerItemsBordaPesado: {
    border: '2px solid #3b8183',
    borderRadius: 15,
    width: 300,
    height: 380,
    left: 70,
    top: 25,
    backgroundColor: '#FFFFFF'
  },
  subcontainerItemsBordaBeneficios: {
    border: '2px solid #3b8183',
    borderRadius: 15,
    width: 300,
    height: 360,
    left: 70,
    backgroundColor: '#FFFFFF'
  },
  subcontainerItemsBordaMateriais: {
    border: '2px solid #3b8183',
    borderRadius: 15,
    width: 300,
    height: 340,
    left: 70,
    top: -12,
    backgroundColor: '#FFFFFF'
  },
  logoImage: {
    maxWidth: 150,
    maxHeight: 300,
    left: 68,
    height: 200
  },
  ImagemPesada:{
    height: 180
  },
  TextHeadlineServicos: {
    color: '#2C2C2C',
    fontFamily:'system-ui',
    lineHeight: 35,
    fontSize: 18,
    fontWeight: 800,
    textAlign:'center'
  },
  TextItems: {
    color: '#3b8183',
    fontFamily:'system-ui',
    fontSize: 15,
    alignSelf: 'center',
    listStyleType:'disclosure-closed',
    fontWeight: 600
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
    top: 18,
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
    top: -8
  }

})