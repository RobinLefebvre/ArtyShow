import React, {Component} from 'react';
import {View} from 'react-native';

import MainNav from './controllers/MainNav';
import LoginNav from './controllers/LoginNav';


import WelcomeScreen from './views/screens/ScreenWelcome';


class App extends Component
{
    render()
    {


      let view =
      <View style={{flex:1,marginTop : 20}}>
          <LoginNav/>
      </View>
      return view;


}}

export default App;
