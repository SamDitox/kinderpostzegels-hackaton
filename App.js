import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/Home.js';
import ChildHomeScreen from './components/ChildHome.js'
import TeacherHomeScreen from './components/TeacherHome.js'
import BuyerHomeScreen from './components/BuyerHome.js'


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Child: {
      screen : ChildHomeScreen
    },
    Teacher : {
      screen : TeacherHomeScreen
    },
    Buyer : {
      screen : BuyerHomeScreen
    }

  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}