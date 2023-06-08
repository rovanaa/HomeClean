import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react';
import LogoOficial from '../assets/images/logoOficial.jpeg';
import LogoTwo from '../assets/images/LogoTwo.png';
import ImagemPadrao from '../assets/images/ImagemPadrao.png';
import ImagemPesada from '../assets/images/ImagemPesada.png';
import ImagemBeneficio from '../assets/images/ImagemBeneficio.jpg';
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
       <Text style={styles.subheadlineTwo}> Conheça todos os serviços de limpeza oferecidos pela <b style={styles.homeCleanNegrito}>HomeClean!</b></Text>
      </View>
     <View style={styles.containerServicos}>
          <View tyle={styles.containerPadraoPesado}>
            <View style={styles.subcontainerItemsBorda}>
            <Image
              source={ImagemPadrao}
              style={[styles.logo, { height: height * 0.3 }]}
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

            <Image
              source={ImagemPesada}
              style={[styles.logo, { height: height * 0.3 }]}
              resizeMode="contain"
                />

            <Text style={styles.TextHeadlineServicos}>Limpeza Pesada</Text>
            <ul>
              <li style={styles.TextItems}>Inclui todos os itens da limpeza padrão</li>
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
              style={[styles.logo, { height: height * 0.3 }]}
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
              style={[styles.logo, { height: height * 0.3 }]}
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

          <View style={styles.containerWhatsapp}>
             <Text style={styles.whatsappText}> Tire suas dúvidas por whatsapp </Text>
          </View>

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
    fontSize: 40,
    fontWeight: 900,
    fontFamily: 'system-ui',
    width: 260
  },
  containersubheadlineOne: {
    alignItems:'center',
    top: 7
  },
  subheadlineOne:{
    textAlign: 'center',
    fontFamily: 'system-ui',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(30, 190, 165)'
  },
  containersubheadlineTwo: {
    alignItems:'center',
    top: 35
  },
  subheadlineTwo: {
    width: 360,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 300,
    fontFamily:'system-ui'
  },
  homeCleanNegrito:{
    color: '#1EBEA5'
  },
  containerServicos: {
    maxWidth: 767,
    gap: 40,
    display: 'flex',
    margin: -33,
    top: 60
  },
  subcontainerItemsBorda:{
    border: '1px solid #000',
    width: 300,
    left: 70,
    top: 40
  },
  subcontainerItemsBordaPesado: {
    border: '1px solid #000',
    width: 300,
    left: 70,
    top: 40,
    height: 400
  },
  subcontainerItemsBordaBeneficios: {
    border: '1px solid #000',
    width: 300,
    left: 70,
    top: 40,
    height: 400
  },
  subcontainerItemsBordaMateriais: {
    border: '1px solid #000',
    width: 300,
    left: 70,
    top: 40,
    height: 400
  },

/*   containerPadraoPesado: {
    height: 400,
    width: 350,
    alignItems: 'center',
    left: 46,
    bottom: -25,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#1EBEA5',
    boxShadow: '15px 15px 20px 0px rgba(0, 0, 0, 0.20)',
    margin: 0
  }, */
/*   subcontainerItemsBorda:{
    alignItems: 'center',
    top: 180
  }, */
  TextHeadlineServicos: {
    color: '#2C2C2C',
    fontFamily:'system-ui',
    lineHeight: 35,
    fontSize: 18,
    fontWeight: 800,
    textAlign:'center'
  },
  TextItems: {
    color: 'rgb(30, 190, 165)',
    fontFamily:'system-ui',
    fontSize: 16,
    alignSelf: 'center',
    listStyleType:'square'
  },
/*   containerBeneficiosMateriais:{
    border: '1px solid #000',
    width: 300,
    left: 70,
    top: 40
  }, */
/*   containerBeneficiosMateriais:{
    height: 400,
    width: 350,
    left: 46,
    alignItems: 'center',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#1EBEA5',
    boxShadow: '15px 15px 20px 0px rgba(0, 0, 0, 0.20)',
    margin: 0
  }, */
  containersubheadlineThree:{
    alignItems:'center',
    top: 11
  },
  subheadlineThree:{
    fontSize: 18,
    fontFamily:'system-ui',
    fontWeight: 300
  },
  containersubheadlineFour: {
    alignItems:'center'
  },
  subheadlineFour: {
    fontSize: 18,
    fontFamily:'system-ui',
    fontWeight: 300,
    width: 375,
    textAlign: 'center'
  },
  containerWhatsapp:{
    alignItems: 'center',
    bottom: 20
  },
  whatsappText: {
    fontSize: 16,
    fontWeight: 800,
    color: '#000000'
  }

})