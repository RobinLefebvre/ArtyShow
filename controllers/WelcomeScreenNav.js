
import { createStackNavigator, createAppContainer } from 'react-navigation';

import React, {Component} from 'react';
import { View, Text , Button} from 'react-native';


import ScreenLogin from '../views/ScreenLogin';
import ScreenRegister from '../views/ScreenRegister';


import WelcomeScreenContent from '../views/ScreenWelcome';




const WelcomeScreenNav = createStackNavigator(
{
    Login :
    {
        screen : ScreenLogin,
        navigationOptions: ({ navigation }) => ({
            title: `Login`,
        }),
    },
    Register:
    {
        screen: ScreenRegister,
        navigationOptions: ({ navigation }) => ({
            title: `Register`,
        }),
    }
},
{
    contentComponent:  WelcomeScreenContent
});





import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        templateContainer :
        {
            fontSize : 20,
        }
    }
);



export default createAppContainer(WelcomeScreenNav);
