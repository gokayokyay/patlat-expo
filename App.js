import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Main: {
      screen: MainScreen
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);