import React, {Component} from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import DrawerMenu from '../views/MenuDrawer'
import BottomNav from '../controllers/BottomNav'



const AppDrawerNavigator = createDrawerNavigator(
{
    Dashboard:
    {
        screen: BottomNav
    }
},
{
  contentComponent: DrawerMenu
});


  export default AppDrawerNavigator;
