import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import PostComponent from '../components/PostComponent';
import { Ionicons } from '@expo/vector-icons';
import CommentComponent from '../components/CommentComponent';
import Constants from 'expo-constants';

class PostScreen extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.topView.container}>
                    <View style={styles.topView.header.container}>
                        <TouchableOpacity style={styles.topView.header.backView}>
                            <Ionicons name="ios-arrow-back" size={32} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.topView.header.reportView}>
                            <Ionicons name="ios-flag" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.safeView}>

                </View>
                <KeyboardAvoidingView behavior='position' contentContainerStyle={styles.bottomView.container} style={styles.bottomView.container}>
                    <View style={styles.bottomView.list.container}>
                        <FlatList
                            ListHeaderComponent={
                                () => (
                                    <PostComponent />
                                )
                            }
                            data={[{id: '1'}, {id: '2'}, {id: '312'}, {id: '1321'}]}
                            renderItem={({item}) => <CommentComponent />}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.bottomView.input.container}>
                        <View style={{header: '100%', width: '100%', flex: 1, flexDirection: 'row'}}>
                            <TextInput 
                                paddingLeft={12}
                                placeholder={'Send a reply...'}
                                style={styles.bottomView.input.input.container}
                            />
                            <TouchableOpacity style={styles.bottomView.input.button.container}>
                                <Text style={styles.bottomView.input.button.text}>PAT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = {
    root: {
        flex: 1,
        height: '100%',
        width: '100%',
        // backgroundColor: '#eee',
    },
    topView: {
        container: {
            flex: 1,
            width: '100%',
            height: '40%',
            backgroundColor: 'black',
        },
        header: {
            container: {
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: Constants.statusBarHeight + 5,
            },
            backView: {
                flex: 1,
                height: '100%',
                width: '100%',
                paddingLeft: '5%'
            },
            reportView: {
                flex: 1,
                height: '100%',
                width: '100%',
                alignItems: 'flex-end',
                paddingRight: '5%'
            }
        },
    },
    safeView: {
        backgroundColor: 'black',
        position: 'absolute',
        height: '10%',
        width: '100%',
        top: '10%'
    },
    bottomView: {
        container: {
            flex: 9,
            width: '100%',
            height: '100%',
        },
        list: {
            container: {
                flex: 9,
                height: '100%',
                zIndex: 2,
                marginBottom: 60
            }
        },
        input: {
            container: {
                position: 'absolute',
                height: 60,
                width: '100%',
                // backgroundColor: 'navy',
                bottom: 0,
                overflow: 'visible',
                borderWidth: 1,
                borderColor: '#ededed'
            },
            input: {
                container: {
                    flex: 4,
                }
            },
            button: {
                container: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                text: {
                    fontSize: 24,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'rgba(0,0,0,0.5)'
                }
            }
        }
    }
};

export default PostScreen;