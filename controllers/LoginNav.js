import React, {Component} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { TextInput, TouchableOpacity, Alert } from 'react-native';


import {  createSwitchNavigator, createAppContainer } from 'react-navigation';


//  ================================
//     Import requiered  Screen
//  ================================

import WelcomeScreen from '../views/screens/ScreenWelcome'
import ScreenLogin from '../views/screens/ScreenLogin';
import ScreenRegister from '../views/screens/ScreenRegister';




/**  AppDrawerNavigator - Drawer navigation  allows access to Account Screens and the Bottom Nav */


// Import Nav
import  AppDrawerNavigator from '../controllers/DrawerNav';




//  ================================
//      Switch Navigator
//  ================================
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  SignUp : {screen: ScreenRegister},
  LoginAction:  { screen: ScreenLogin  },
  Dashboard: { screen: AppDrawerNavigator },
});
const AppContainer = createAppContainer(AppSwitchNavigator);







//  ================================
//       Styles
//  ================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainNav: {flex: 1, justifyContent: 'center', alignItems: 'center',},



  // Icon bottom Nav
  icon: {color: '#d4af37',},
});




//  ================================
//      Exportation AppContainer
//  ================================

// export default createAppContainer(LoginNav);
class  LoginNav extends Component
{
  render() {
    return <AppContainer />;
  }
}

export default  LoginNav;
