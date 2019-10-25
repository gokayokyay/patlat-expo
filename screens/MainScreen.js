import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import CreatePostComponent from '../components/CreatePostComponent';
import FeedSelectionComponent from '../components/FeedSelectionComponent';
import PostComponent from '../components/PostComponent';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

class MainScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
            <View style={styles.topView}>
                <FeedSelectionComponent />
                <CreatePostComponent />
            </View>
            <View style={styles.bottomView}>
                {/* <PostComponent /> */}
                <FlatList
                    data={DATA}
                    renderItem={(item) => {
                        <View style={{height: 300, width: 300}}>
                            <PostComponent />
                        </View>
                    }}
                    contentContainerStyle={{
                        flex: 1,
                        width: 100,
                        height: 100
                    }}
                    style={{flex: 1, height: '100%', width: '100%'}}
                    keyExtractor={item=>item.id}
                />
            </View>
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
        width: '100%',
        paddingTop: 20
    }
}

export default MainScreen;
  