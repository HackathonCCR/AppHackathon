import React, { Component } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Footer from './src/pages/components/Footer';
import PlanejarViagem from './src/pages/PlanejarViagem';
import TracarRota from './src/pages/TracarRota';
import IniciarViagem from './src/pages/IniciarViagem';
import PontosProximos from './src/pages/PontosProximos';
import PontoParada from './src/pages/PontoParada';

const Stack = createStackNavigator();

export default class App extends Component {
render() {
  return(
<>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Footer" component={Footer} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PlanejarViagem" component={PlanejarViagem} />
        <Stack.Screen name="TracarRota" component={TracarRota} />
        <Stack.Screen name="IniciarViagem" component={IniciarViagem} />
        <Stack.Screen name="PontosProximos" component={PontosProximos} />
        <Stack.Screen name="PontoParada" component={PontoParada} />
      </Stack.Navigator>
    </NavigationContainer>

</>
  );
}
}

// export default Routes;