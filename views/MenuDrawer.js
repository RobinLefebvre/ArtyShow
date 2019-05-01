import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

class DrawerMenu extends Component
{
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

    render() 
    {
        let imageUser = `http://riad.ovh:6660/${this.props.navigation.state.params.imageURL}`;

        let view =
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground source={{uri : imageUser}} style={{flex: 1, width: 280, justifyContent: 'center'}} >
                    <Text style={styles.headerText}> { this.props.navigation.state.params.name }</Text>
                    <Text style={styles.headerText}> { this.props.navigation.state.params.mail } </Text>
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
            <View style={styles.screenStyle}>
                <Text onPress={this.navigateToScreen('Feed')}>Dashboard</Text>
            </View>

            </View>
        </View>

        return view;

    }
}
export default DrawerMenu;

const styles = StyleSheet.create(
{
    // Side navigation
      container: {
          alignItems: 'center',
              flex: 1,
      },
      headerContainer: {
          height: 200,
      },
      headerText: {
          color: '#fff8f8',
          marginLeft:10
      },
      screenContainer: {
          paddingTop: 20
      },
      screenStyle: {
          height:50,
          marginTop: 2,
          flexDirection: 'row',
          alignItems: 'center'
      },
      screenTextStyle:{
          fontSize: 25,
          marginLeft: 20
      },
});
