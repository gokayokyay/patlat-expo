import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Hideo } from 'react-native-textinput-effects';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';

class HomeScreen extends React.Component {
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
               />
               <TouchableOpacity style={styles.sendButton} onPress={() => this.props.navigation.navigate('Main')}>
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

export default HomeScreen;
  