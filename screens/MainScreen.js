import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import CreatePostComponent from '../components/CreatePostComponent';
import FeedSelectionComponent from '../components/FeedSelectionComponent';

class MainScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
            <View style={styles.topView}>
                <FeedSelectionComponent />
                <CreatePostComponent />
            </View>
            <View style={styles.bottomView}></View>
        </View>
      );
    }
}

const styles = {
    topView: {
        flex: 2,
        height: '20%',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        
        elevation: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    bottomView: {
        flex: 8,
        height: '80%',
        width: '100%'
    }
}

export default MainScreen;
  