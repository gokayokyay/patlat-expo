import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from 'react-redux';
import store from './store';

import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import PostScreen from './screens/PostScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Main: {
      screen: MainScreen
    },
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}