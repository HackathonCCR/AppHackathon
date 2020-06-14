import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default class PlanejarViagem extends Component {

render() {

  return (
  <View style={styles.container}>

    <View style={{alignItems: "center"}}>
      <FontAwesome5 name="user-alt" size={100} color="black" />
      <Text style={styles.mainText}>Para onde estamos indo?</Text>
    </View>

    <View>
      <View style={styles.linha}>
        <MaterialIcons name="gps-fixed" size={24} color="black" style={{marginTop: 20, marginRight: 10}}/>
        <View style={styles.input}>
            <TextInput defaultValue="Rua Ondina Senger Moreira, Sorocaba, SP" editable={false} style={styles.txtInput} />
        </View>
      </View>

      <View style={styles.linha}>
      <MaterialCommunityIcons name="map-marker" size={24} color="black" style={{marginTop: 20, marginRight: 10}}/>
        <View style={styles.input}>
            <TextInput defaultValue="Rua Rio Grande do Norte, 1090, AC" editable={false} style={styles.txtInput} />
        </View>
      </View>

      <View style={styles.linha}>
        <MaterialIcons name="date-range" size={24} color="black" style={{marginTop: 20, marginRight: 10}}/>
        <View style={styles.input}>
            <TextInput defaultValue="20/06/2020" editable={false} style={styles.txtInput} />
        </View>
      </View>

      <View style={styles.linha}>
        <MaterialIcons name="watch-later" size={24} color="black" style={{marginTop: 20, marginRight: 10}}/>
        <View style={styles.input}>
            <TextInput defaultValue="06:00" editable={false} style={styles.txtInput} />
        </View>
      </View>
    </View>

    <TouchableHighlight style={styles.btnTracarRota} onPress={() => this.props.navigation.navigate('TracarRota')}>
      <>
      <FontAwesome5 name="truck" size={20} color="white" />
      <Text style={styles.iconText}>Traçar Rota</Text>
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
    justifyContent: "space-evenly",
  },
  mainText: {
    marginTop: 10,
    fontSize: 20,
  },
  input: {
    backgroundColor: '#E0E0E0',
    marginTop: 20,
  },
  linha: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  txtInput: {
    width: Dimensions.get('window').width -100,
    height: 40,
    paddingLeft: 20
  },
  btnTracarRota: {
    padding: 15,
    backgroundColor: "#333399",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  iconText: {
    color: "white",
    marginLeft: 8,
  }
});
