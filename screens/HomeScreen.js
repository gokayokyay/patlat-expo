import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { Hideo } from 'react-native-textinput-effects';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import { connect } from 'react-redux';
import actions from '../actions';

var Parse;
if (Platform.OS === 'web') {
  Parse = require('parse/node');
} else {
  Parse = require('parse/react-native');
}

class HomeScreen extends React.Component {
  componentWillUpdate(){
    console.log(this.props);
    if (this.props.state.userLogin.loginError == null && this.props.state.userLogin.loginPending == false) {
      this.props.navigation.navigate('Main');
    }
    // console.log(Parse.User.current());
  }
    render() {
      return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
          <View style={styles.pageContainer}>
              <Text style={styles.enterEmail}>Email gir oç</Text>
              <Hideo
                iconClass={FontAwesomeIcon}
                iconName={'envelope'}
                iconColor={'black'}
                iconBackgroundColor={'white'}
                inputStyle={{ color: '#464949' }}
                label={'Email'}
                style={styles.inputStyle}
                onChangeText={(text) => this.setState({email: text})}
               />
              <Hideo
                iconClass={FontAwesomeIcon}
                iconName={'key'}
                iconColor={'black'}
                iconBackgroundColor={'white'}
                inputStyle={{ color: '#464949' }}
                label={'Password'}
                style={styles.inputStyle}
                secureTextEntry
                onChangeText={(text) => this.setState({password: text})}
               />
               <TouchableOpacity style={styles.sendButton} onPress={async () => {
                  let user = new Parse.User();
                  user.set("username", this.state.email);
                  user.set("password", this.state.password);
                  user.set("email", this.state.email);
                  try {
                    await this.props.dispatch(actions.asynchronousActions.userSignup(user));
                    // await this.props.dispatch(actions.asynchronousActions.userLogin(user));
                  } catch (err) {
                    console.log(err);
                  }
                 }
                }>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                        PATLAT
                    </Text>
               </TouchableOpacity>
          </View>
          <View style={styles.pageContainer}>
          </View>
        </SafeAreaView>
      );
    }
}

const styles = {
    pageContainer: {
        flex: 1,
        width: '100%',
        height: '50%',
        alignItems: 'center'
    },
    enterEmail: {
        color: 'white',
        fontSize: 24,
        paddingTop: '10%',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
    },
    inputStyle: {
        paddingLeft: '10%',
        paddingRight: '10%',
        flex: 1,
    },
    sendButton: {
        width: 100,
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        // flex: 1,
    }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(HomeScreen);
  