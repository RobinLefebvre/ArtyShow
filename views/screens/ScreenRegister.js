import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Utility from '../../Utility';

class ScreenRegister extends Component 
{
    static navigationOptions =
    {
        title: 'Register',
    };

    constructor(props) 
    {
        super(props)

        this.state = 
        {
            UserName: '',
            UserMail: '',
            UserPassword: '',
        }
    }

    UserRegistrationFunction = () => 
    {
        const { UserName } = this.state;
        const { UserMail } = this.state;
        const { UserPassword } = this.state;
        
        let requestAdress = 'users/register'
        fetch(`${Utility.DATABASE_URL}${requestAdress}`, 
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: UserName,
                mail: UserMail,
                pass: UserPassword
            })
        })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }

    render() 
    {
        const { goBack } = this.props.navigation;
        let view =
        <View style={styles.MainContainer}>

            <Text style={{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>

            <TextInput
                placeholder="Enter User Name"
                onChangeText={UserName => this.setState({ UserName })}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
            />

            <TextInput
                placeholder="Enter User Email"
                onChangeText={UserMail => this.setState({ UserMail })}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
            />

            <TextInput
                placeholder="Enter User Password"
                onChangeText={UserPassword => this.setState({ UserPassword })}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                secureTextEntry={true}
            />

            <Button 
                title="Click Here To Register" 
                onPress={() => this.UserRegistrationFunction()} 
                color="#2196F3" 
            />

            <Text> </Text>

            <Button
                title="Click Here To Login"
                onPress={() => this.props.navigation.navigate('LoginAction')}
            />
        </View>

        return view;
    }
}

export default ScreenRegister;

const styles = StyleSheet.create(
{
    MainContainer: 
    {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },

    TextInputStyleClass: 
    {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',

        borderRadius: 5,
        //borderRadius: 10 ,
    }
});
    