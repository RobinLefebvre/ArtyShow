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
            onPress={() => this.props.navigation.navigate('Dashboard')}
          />
          <Button title="Sign Up"
          onPress={() => alert('button pressed')} />
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

export default WelcomeScreen;
