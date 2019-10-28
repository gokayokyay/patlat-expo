import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

var Parse;
if (Platform.OS === 'web') {
  Parse = require('parse/node');
} else {
  Parse = require('parse/react-native');
  
  Parse.setAsyncStorage(AsyncStorage);
}

Parse.initialize("jTYbiFTUrvs2AsjkAc2vY3ycgyAxizdX", "MJU1zSv0CWZGV7iZddALP9njdlr8gNF7");
//javascriptKey is required only if you have it on server.

Parse.serverURL = 'https://whispering-spire-93426.herokuapp.com/parse'


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
    initialRouteName: 'Home',
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