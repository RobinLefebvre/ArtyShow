import React, {Component} from 'react';
import {  createSwitchNavigator, createAppContainer } from 'react-navigation';

/** Import requiered  Screen */
import WelcomeScreen from '../views/screens/ScreenWelcome'
import ScreenLogin from '../views/screens/ScreenLogin';
import ScreenRegister from '../views/screens/ScreenRegister';

/**  AppDrawerNavigator - Drawer navigation  allows access to Account Screens and the Bottom Nav */
import  AppDrawerNavigator from '../controllers/DrawerNav';

const AppSwitchNavigator = createSwitchNavigator(
{
    Welcome: { screen: WelcomeScreen },
    SignUp : {screen: ScreenRegister},
    LoginAction:  { screen: ScreenLogin  },
    Dashboard: { screen: AppDrawerNavigator },
});
const AppContainer = createAppContainer(AppSwitchNavigator);


// export default createAppContainer(LoginNav);
class  LoginNav extends Component
{
    render() 
    {
        return <AppContainer />;
    }
}

export default  LoginNav;
