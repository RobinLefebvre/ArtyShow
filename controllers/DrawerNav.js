/** Drawer menu is the left drawer, which contains the User information and navigation  */
import { createDrawerNavigator } from 'react-navigation';

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
