import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'

import Home from './src/pages/Home';
import Contato from './src/pages/Contato';

import CustomDrawer from './src/pages/components/CustomDrawer'
import { Ionicons} from '@expo/vector-icons';

const Routes = createAppContainer(
  createDrawerNavigator({
    Home:{
      screen: Home,
      navigationOptions: {
        drawerIcon: (
          <Ionicons name="md-home" size={24} />
        )
      }
    },
    Contato: {
      screen: Contato,
      navigationOptions: {
        drawerIcon: (
          <Ionicons name="md-call" size={24} />
        )
      }
    }
  }, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawer,
    drawerWidth: 280,
    drawerPosition: "right",
  })
)

export default Routes;