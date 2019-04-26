import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Button } from 'react-native';



import { AppRegistry, StyleSheet,  Alert, } from 'react-native';



const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10
},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',

 // Set border Radius.
 borderRadius: 5 ,

// Set border Radius.
 //borderRadius: 10 ,
}

});



class ScreenRegister extends Component {

constructor(props) {

    super(props)

    this.state = {

        UserName : '',
        UserMail : '',
        UserPassword : '',
 }
  }



   UserRegistrationFunction = () =>{


   const { UserName  }  = this.state ;
   const { UserMail  }  = this.state ;
   const { UserPassword  }  = this.state ;



  fetch('http://infinity-demo.ovh/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      // return jsondata  to user_registration.php
      name:UserName ,

      email: UserMail ,

      password: UserPassword

    })

  }).then((response) => response.json())
        .then((responseJson) => {

  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);

        }).catch((error) => {
          console.error(error);
        });


    }


// Setting up profile activity title.
   static navigationOptions =
   {
      title: 'Register',

   };

    render()
    {
         const {goBack} = this.props.navigation;


        let view =
        <View style={styles.MainContainer}>

        <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>

  <TextInput

    // Adding hint in Text Input using Place holder.
    placeholder="Enter User Name"
    onChangeText={UserName => this.setState({UserName})}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    style={styles.TextInputStyleClass}
  />

  <TextInput
    // Adding hint in Text Input using Place holder.
    placeholder="Enter User Email"
    onChangeText={UserMail => this.setState({UserMail})}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    style={styles.TextInputStyleClass}
  />

  <TextInput
    // Adding hint in Text Input using Place holder.
    placeholder="Enter User Password"
    onChangeText={UserPassword => this.setState({UserPassword})}
    // Making the Under line Transparent.
    underlineColorAndroid='transparent'
    style={styles.TextInputStyleClass}
    secureTextEntry={true}
  />

  <Button title="Click Here To Register"    onPress={() => this.UserRegistrationFunction()}    color="#2196F3" />

<Text> </Text>

  <Button
    title="Click Here To Login"
    onPress={() => this.props.navigation.navigate('LoginAction')}
  />
      </View>

        return view;
    }



}




AppRegistry.registerComponent('CreateUser', () => CreateUser);




export default ScreenRegister;
