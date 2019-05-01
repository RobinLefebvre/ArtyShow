import React, {Component} from 'react';
import {View} from 'react-native';

import LoginNav from './controllers/LoginNav';

class App extends Component
{
    render()
    {
      let view =
      <View style={{flex:1,marginTop : 20}}>
          <LoginNav/>
      </View>
      return view;
    }
}

export default App;
