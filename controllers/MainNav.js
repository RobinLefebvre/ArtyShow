/** MainNav is the Drawer navigation that allows to access Account Screens and the Bottom Nav */
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

// Import the Screen or Navigation Wrapper for each Tab
import BottomNav from '../controllers/BottomNav';
import DrawerMenu from '../views/MenuDrawer';

const MainNav = createDrawerNavigator(
{
    Home: 
    { 
        screen: BottomNav 
    }
},
{
    contentComponent: DrawerMenu
});

export default createAppContainer(MainNav);
