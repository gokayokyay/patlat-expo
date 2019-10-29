import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

// import Parse from 'parse/node';
import Parse from 'parse/react-native';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
      try {
        const user = await Parse.User.currentAsync();
        if (user == null) {
            this.props.navigation.navigate('Auth');
        } else {
            this.props.navigation.navigate('App');
        }
      } catch (err) {
        this.props.navigation.navigate('Auth');
      }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;