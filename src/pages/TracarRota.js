import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Dimensions } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, Octicons, MaterialIcons } from '@expo/vector-icons';

export default class TracarRota extends Component {

render() {

  return (
  <View style={styles.container}>

    <View style={styles.header}>
      <FontAwesome5 name="user-alt" size={50} color="black" />
      <View style={{maxWidth: 300, marginLeft: 30}}>
          <Text style={styles.mainText}>Sua viagem será de 4.133 km Você levará 58 horas</Text>
      </View>
    </View>

    <Image 
    source={require("../../assets/mapa_1.png")} 
    style={styles.imagem}
    resizeMode="contain"
    />

    <View style={styles.grid}>
    <View style={styles.item}>
        <MaterialCommunityIcons name="food-fork-drink" size={30} color="black" />
        <Text style={styles.iconText}>COMER</Text>
      </View>

      <View style={styles.item}>
        <MaterialCommunityIcons name="fuel" size={30} color="black" />
        <Text style={styles.iconText}>ABASTECER</Text>
      </View>

      <View style={styles.item}>
        <Octicons name="stop" size={30} color="black" />
        <Text style={styles.iconText}>PARAR</Text>
      </View>

      <View style={styles.item}>
        <FontAwesome5 name="bath" size={30} color="black" />
        <Text style={styles.iconText}>BANHO</Text>
      </View>
    </View>

    <View style={styles.grid}>
      <View style={styles.item}>
        <Image 
        source={require("../../assets/icons8-chave-inglesa-24.png")}
        />
        <Text style={styles.iconText}>MANUTENÇÃO</Text>
      </View>

      <View style={styles.item}>
        <MaterialIcons name="report-problem" size={30} color="black" />
        <Text style={styles.iconText}>PROBLEMAS NA PISTA</Text>
      </View>

      <View style={styles.item}>
        <FontAwesome5 name="exclamation" size={30} color="black" />
        <Text style={styles.iconText}>TRECHOS PERIGOSOS</Text>
      </View>

      <View style={styles.item}>
        <MaterialCommunityIcons name="map-marker" size={30} color="black" />
        <Text style={styles.iconText}>TODAS AS OPÇÕES</Text>
      </View>
    </View>

    <TouchableHighlight style={styles.btnIniciarViagem} onPress={() => this.props.navigation.navigate('IniciarViagem')}>
      <>
      <FontAwesome5 name="truck" size={20} color="white" />
      <Text style={styles.textoBotao}>Iniciar Viagem</Text>
      </>
  </TouchableHighlight>
      

  </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  mainText: {
    marginTop: 10,
    fontSize: 20,
  },
  subText: {
    fontSize: 15,
  },
  btnIniciarViagem: {
    padding: 15,
    backgroundColor: "#333399",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  textoBotao: {
    color: "white",
    marginLeft: 8,
  },
  imagem: {
    marginTop: -40,
    marginBottom: -40,
    width: Dimensions.get('window').width - 20,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.get('window').width,
    marginBottom: 40,
  },
  iconText: {
    width: 70,
    fontSize: 11,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  item: {
    alignItems: "center",
  }
});
