/** BottomNav is the Bottom Tab navigation that allows to switch from Feed to Heart Menu and Search. */
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

/** Import the Screen or Navigation Wrapper for each Tab  */
import Heart from '../controllers/HeartNav';
import HomeFeeNav from '../controllers/HomeNav';
import Search from '../views/screens/ScreenSearch';
import Feed from '../views/screens/ScreenFeed';

import AddArtWork from '../views/ArtWork/ScreenAddArtWork';

const BottomNav = createBottomTabNavigator(
{
    Home: { screen: HomeFeeNav },
    Heart: { screen: Heart },
    Search : { screen : Search },
    Add : { screen : AddArtWork },
});

export default createAppContainer(BottomNav);
