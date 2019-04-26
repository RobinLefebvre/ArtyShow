/** ?? COMMENTS ?? */
import { createStackNavigator, createAppContainer } from 'react-navigation';

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

export default createAppContainer(WelcomeScreenNav);
