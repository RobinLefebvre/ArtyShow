import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import HomeFeed from '../views/Home/ScreenFeed';
import HomeFeedFilter from '../views/Home/ScreenFeedFilter';


const HomeFeeNav = createMaterialTopTabNavigator(
{
    Home:
    {
        screen: HomeFeed,
        // Hiding tabar
        navigationOptions: {
        title: '',
        gesturesEnabled: false,
        tabBarVisible: false,
    },

    },
    Filter:
    {
        screen : HomeFeedFilter,
        // Hiding tabar
        navigationOptions: {
        title: '',
        gesturesEnabled: false,
        tabBarVisible: false,
    },
    },

});

export default createAppContainer(HomeFeeNav);
