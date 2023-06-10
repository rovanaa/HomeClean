import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native'

const contratar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

      <View style={styles.Servicos}>

        <Text style={styles.headLine}>Qual é o serviço?</Text>

        <View style={styles.opcaoServico} >

          <View style={styles.lineOption} >
           <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza padrão"/> <Text style={styles.inputText}>Limpeza padrão</Text> 
          </View> 

         <View style={styles.lineOption}>
          <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza pesada"/> <Text style={styles.inputText}>Limpeza pesada</Text>  
         </View>

        </View>

      </View>
    
      <View style={styles.localServico}>

          <Text style={styles.headLine}>Qual é o local do serviço?</Text>

          <View style={styles.opcaolocalServico} >

            <View style={styles.lineOption} >
              <input style={styles.radiosIcon} type="radio" name="lar" value="Casa"/> <Text style={styles.inputText}>Apartamento</Text> 
            </View> 
            
            <View style={styles.lineOption}>
              <input style={styles.radiosIcon} type="radio" name="lar" value="Apartamento"/> <Text style={styles.inputText}>Casa</Text>  
            </View>

            <View style={styles.lineOption}>
              <input style={styles.radiosIcon} type="radio" name="lar" value="Sala comercial"/> <Text style={styles.inputText}>Comercial/Esritório</Text>  
            </View>

            <View style={styles.lineOption}>
              <input style={styles.radiosIcon} type="radio" name="lar" value="Sala comercial"/> <Text style={styles.inputText}>Condomínio</Text>  
            </View>

          </View>
        </View>

        <View style={styles.osComodos}> 
            <View style={styles.ComodosItens}>
              <View style={styles.comodosOne}>
                <input style={styles.radiosIcon} type="number" min="0" max="100"/> <Text style={styles.inputTextquarto}>Quarto</Text> 
              </View>
              <View style={styles.comodosOne}>
                <input style={styles.radiosIcon} type="number" min="0" max="100"/> <Text style={styles.inputText}>Banheiro</Text> 
              </View>
           </View>
           <View style={styles.subheadlineComodos}>
              <Text style={styles.subheadline}>Cozinha e sala já estão inclusos. Para mais cômodos adicione mais quartos.</Text>
           </View>
        </View>

        <View style={styles.servicosAdicionais} >

        <Text style={styles.headLine}>Você precisa de serviços adicionais?</Text>
        
          <View style={styles.lineOption} >
           <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza padrão"/> <Text style={styles.inputText}>Áreas externas</Text> 
          </View> 
          <View style={styles.lineOption}>
            <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza pesada"/> <Text style={styles.inputText}>Armários (limpeza interna)</Text>  
          </View>
          <View style={styles.lineOption} >
           <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza padrão"/> <Text style={styles.inputText}>Cozinhar</Text> 
          </View> 
          <View style={styles.lineOption}>
            <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza pesada"/> <Text style={styles.inputText}>Cuidar de crianças</Text>  
          </View>
          <View style={styles.lineOption}>
            <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza pesada"/> <Text style={styles.inputText}>Janelas</Text>  
          </View>
          <View style={styles.lineOption}>
            <input style={styles.radiosIcon} type="radio" name="servico"/> <textarea rows="1" cols="20"></textarea>
          </View>
        </View>

        <View style={styles.servicoData} >

          <Text style={styles.headLine}>Para quando você precisa deste serviço?</Text>

        <View style={styles.lineOption} >
          <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza padrão"/> <Text style={styles.inputText}>O quanto antes possível</Text> 
        </View> 
        <View style={styles.lineOption} >
          <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza padrão"/> <Text style={styles.inputText}>Nos próximos 3 meses</Text> 
        </View> 
        <View style={styles.lineOption}>
          <input style={styles.radiosIcon} type="radio" name="servico" value="Limpeza pesada"/> <Text style={styles.inputText}>Nos próximos 15 dias</Text>  
        </View>
      </View>

      <View style={styles.servicoData}>
        <Text style={styles.headLine}>Explique o que você precisa?</Text>
        <Text style={styles.inputText}>Informações Adicionais:</Text>
          <View style={styles.lineOption}>
           <textarea rows="5" cols="20"></textarea>
          </View>
        <Text style={styles.inputSugestao}>👆 Conte para nós sobre sua necessidade: detalhes, preferências, etc.</Text>
      </View>

      <View style={styles.containerBottom}>
        <Button
          title="FINALIZAR PEDIDO"
          onPress={contratar}
          style={styles.bottom}
        />
      </View>

      </ScrollView>
    </View>

  )
}

export default contratar

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: '#ffeaf1'
  },
  headLine: {
    color: '#000000',
    lineHeight: 50,
    fontWeight: 'bold',
    fontFamily: 'system-ui',
    fontSize: 16,
    textAlign: 'center'
  }, 
  inputText:{
    color: '#000000',
    fontFamily: 'system-ui',
  },
  Servicos:{
    display: 'flex',
    gap: 8
  },
  localServico: {
    display: 'flex',
    gap: 6,
    bottom: 6
  },
  opcaoServico: {
    display:'flex',
    left: 13,
    flexDirection:'column',
    gap: 10
  },
  opcaolocalServico:{
    left: 14,
    rowGap: 10
  },
  lineOption: {
    flexDirection:'row',
  },
  subheadlineComodos:{
    top: 28,
    left: 19
  },
  subheadline:{
    color: 'rgb(59, 129, 131)',
    fontWeight: 'bold'
  },
  osComodos:{
    flexDirection:'colum',
    flexWrap:'wrap',
    gap: 6,
    top: -16
  },
  ComodosItens:{
    right: 233,
    gap: 8
  },
  comodosOne: {
    flexDirection:'row-reverse',
    bottom: -28,
    gap: 12
  },
  inputTextquarto:{
    paddingRight: 11
  },
  servicosAdicionais:{
    left: 18,
    gap: 8,
    top: 14
  },
  servicoData: {
    left: 18,
    gap: 8,
    top: 14
  },
  inputSugestao:{
    color: 'rgb(59, 129, 131)',
    fontWeight: 'bold'
  },
  containerBottom:{
    alignItems: 'center',
    margin: 40
  },
  bottom:{
    width: 300,
    alignitems: 'center',
    backgroundColor: 'rgb(59, 129, 131)',
    borderRadius: 25,

  }

})