import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import Likes from '../views/screens/Heart/ScreenLikes';
import Discover from '../views/screens/Heart/ScreenDiscover';
import Posts from '../views/screens/Heart/ScreenPosts';

const HeartNav = createMaterialTopTabNavigator(
{
    Likes:
    {
        screen: Likes
    },
    Discover :
    {
        screen : Discover
    },
    Posts :
    {
        screen : Posts
    }
});

export default createAppContainer(HeartNav);
