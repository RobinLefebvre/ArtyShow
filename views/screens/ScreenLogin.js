import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Utility from '../../Utility'

class ScreenLogin extends Component 
{
    static navigationOptions =
    {
        title: 'LoginActivity',
    };

    constructor(props) 
    {
        super(props)

        this.state = 
        {
            user : 
            {
                name : "",
                mail : "",
                pass : ""
            }
        }
    }

    UserLoginFunction = () => 
    {
        const { user } = this.state;
        let requestAdress = 'users/login'
        fetch(`${Utility.DATABASE_URL}${requestAdress}`, 
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail: user.mail,
                pass: user.pass
            })
        })
        .then((response) => response.json())
        .then((responseJson) => 
        {
            if (responseJson.error === undefined)
            {
                this.setState({user : responseJson})
                this.props.navigation.navigate('Dashboard', { name: responseJson.name, mail : responseJson.mail, imageURL : 'user_template.png' });
            }
            else 
            {
                Alert.alert(responseJson.error);
            }

        })
        .catch((error) => { console.error(error) })
    }

    render() 
    {
        let view =
        <View style={styles.MainContainer}>
            <Text style={styles.TextComponentStyle}>User Login Form</Text>
            <TextInput
                placeholder="Enter User Email"
                onChangeText={text => this.setState({ user : {mail : text, pass : this.state.user.pass} })}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
            />

            <TextInput
                placeholder="Enter User Password"
                onChangeText={text => this.setState({ user : {mail : this.state.user.mail, pass : text} })}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                secureTextEntry={true}
            />

            <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
            <Text></Text>
            <Button title="Return" onPress={() => this.props.navigation.navigate('Welcome')} color="#2196F3" />

        </View>

        return view;
    }
}
export default ScreenLogin;

const styles = StyleSheet.create(
{
    MainContainer: 
    {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
    },

    TextInputStyleClass: 
    {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5,
    },
    
    TextComponentStyle: 
    {
        fontSize: 20,
        color: "#000",
        textAlign: 'center',
        marginBottom: 15
    }
});
