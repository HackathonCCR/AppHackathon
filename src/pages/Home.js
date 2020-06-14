import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons, Fontisto } from '@expo/vector-icons';

export default class Home extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     texto: "Texto 1"
  //   };

  //   this.trocaTexto.bind(this)
  // }

  // trocaTexto() {
  //   this.setState({
  //     texto: "Texto 2"
  //   })
  // }

render() {

  return (
<>
    <View style={styles.container}>
      <FontAwesome5 name="user-alt" size={150} color="black" />

      <Text style={styles.mainText}>Bom dia Zé!</Text>

      <Text style={styles.subText}>O que vamos fazer hoje?</Text>
    </View>

  <View style={styles.bottomMenu}>

  <TouchableHighlight style={styles.containerMenu} onPress={() => this.props.navigation.navigate('PlanejarViagem')}>
      <>
      <Fontisto name="map" size={40} color="#333399" />
      <Text style={styles.iconText}>TRAÇAR ROTA</Text>
      </>
  </TouchableHighlight>

  <TouchableHighlight style={styles.containerMenu}>
      <>
      <Ionicons name="md-pin" size={40} color="#333399"></Ionicons>
      <Text style={styles.iconText}>ENCONTRAR PONTOS PRÓXIMOS</Text>
      </>
  </TouchableHighlight>

  <TouchableHighlight style={styles.containerMenu}>
      <>
      <FontAwesome5 name="robot" size={35} color="#333399" />
      <Text style={styles.iconText}>CONVERSAR COM JOCA</Text>
      </>
  </TouchableHighlight>

  <TouchableHighlight style={styles.containerMenu}>
      <>
      <FontAwesome5 name="truck" size={35} color="#333399" />
      <Text style={styles.iconText}>MINHA PONTUAÇÃO</Text>
      </>
  </TouchableHighlight>
  </View>
  </>
    );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  mainText: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  subText: {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  bottomMenu: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",

    position: "absolute",
    bottom: 10,
    paddingTop: 10,
    paddingBottom: 10,

    width: Dimensions.get('window').width,

    // backgroundColor: '#555',
  },
  containerMenu: {
    //   backgroundColor: '#999',
    maxWidth: (Dimensions.get('window').width) / 5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    height: 60,
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    width: 90,
    fontWeight: "bold",
    
    textAlignVertical: "center",
}
});
