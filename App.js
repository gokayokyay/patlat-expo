import React from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from 'react-redux';
import store from './store';

// import Parse from 'parse/node';
import Parse from 'parse/react-native';

Parse.setAsyncStorage(AsyncStorage);
Parse.User.enableUnsafeCurrentUser();

Parse.initialize("jTYbiFTUrvs2AsjkAc2vY3ycgyAxizdX", "MJU1zSv0CWZGV7iZddALP9njdlr8gNF7");
//javascriptKey is required only if you have it on server.

Parse.serverURL = 'https://whispering-spire-93426.herokuapp.com/parse'

import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import PostScreen from './screens/PostScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import actions from './actions';

const AuthStack = createStackNavigator({
  Home: HomeScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: null
  }
});
const AppStack = createStackNavigator({
  Main: MainScreen,
  Post: PostScreen
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    header: null
  }
});
const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack,
  AuthLoading: AuthLoadingScreen
}, {
  initialRouteName: 'AuthLoading',
  defaultNavigationOptions: {
    header: null
  }
});

const Navigation = createAppContainer(AppNavigator);

store.dispatch(actions.asynchronousActions.userLoggedIn());

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}