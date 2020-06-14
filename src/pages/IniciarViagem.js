import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

export default class IniciarViagem extends Component {

render() {

  return (
  <View style={styles.container}>

    <View style={styles.header}>
      <FontAwesome5 name="user-alt" size={50} color="black" />
      <View style={styles.headerTexto}>
          <Text style={styles.mainText}>Em 50 metros vire à direita</Text>
      </View>
    </View>

    <Image 
    source={require("../../assets/mapa_2.png")} 
    style={styles.imagem}
    resizeMode="contain"
    />

    <View style={styles.grid}>

      <TouchableHighlight onPress={() => this.props.navigation.navigate('PontosProximos')}>
        <View style={styles.item}>
          <MaterialCommunityIcons name="map-marker" size={30} color="black" />
          <Text style={styles.iconText}>ENCONTRAR PONTOS PRÓXIMOS</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.item}>
      <FontAwesome5 name="robot" size={30} color="black" />
        <Text style={styles.iconText}>CONVERSAR COM JOCA</Text>
      </View>

      <View style={styles.item}>
      <FontAwesome5 name="truck" size={30} color="black" />
        <Text style={styles.iconText}>MINHA PONTUAÇÃO</Text>
      </View>

    </View>

  </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    marginTop: 60,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
  },
  headerTexto: {
      marginTop: 30,
      width: Dimensions.get('window').width,
      alignItems: "center",
      justifyContent: "center",
  },
  mainText: {
    marginTop: 10,
    fontSize: 20,
  },
  imagem: {
    marginTop: -80,
    marginBottom: -80,
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
