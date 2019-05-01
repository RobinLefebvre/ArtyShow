import React, {Component} from 'react';
import {View} from 'react-native';


// Importing nav between Login and  register
import WelcomeScreenNav from './controllers/WelcomeScreenNav';


class App extends Component
{
    render()
    {


      let view =
      <View style={{flex:1,marginTop : 20}}>
          <WelcomeScreenNav/>
      </View>
      return view;


}}

export default App;
