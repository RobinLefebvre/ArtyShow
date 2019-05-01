

import React, {Component} from 'react';
import { View, Text , Button} from 'react-native';

class WelcomeScreen extends Component
{
    render()
    {
        let view =
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('LoginAction')}
          />
          <Button title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')} />

        
        </View>

        return view;
    }
}



import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
{
    templateContainer :
    {
        fontSize : 20,
    }
});



export default WelcomeScreen
