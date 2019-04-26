// npm install --save react-native-tab-view
// npm i github:react-navigation/react-native-tab-view

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


// Import les vues needed for tab
import LikeView from './TabHeart/FirstTab'
import FavoriteArtistPosts from './TabHeart/SecondTab'
import Discover from './TabHeart/ThirdTab'


//  ================================
// Create a const to create the route and what each route return
//     Style define bellow, dont  move the backgroundColor cause the function .scene retrieve the size and present in this page
//  ================================

// First view LIKE
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#33b456' }]} >
        <LikeView />
  </View>
);

// Second view Like
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} >
      <FavoriteArtistPosts />
  </View>
);

// Second view Discover
const ThirddRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#b43391' }]} >
      <Discover />
  </View>
);



//  ================================
//      Exportation route and display
//  ================================



export default class TabViewHeart extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Like' },
      { key: 'second', title: 'Posts' },
      { key: 'third', title: 'Discover' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirddRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
      />
    );
  }
}


//  ================================
//       Styles
//  ================================

const styles = StyleSheet.create({
  container: {

  },
  scene: {
    flex: 1,
  },
});