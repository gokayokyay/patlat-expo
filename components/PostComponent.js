import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class PostComponent extends React.Component {
    render() {
        return (
            <View style={[styles.root, this.props.style]}>
                <View style={styles.container}>
                    <View style={styles.top.container}>
                        <TouchableOpacity 
                            // onPress={(e) => this.props.navigation.navigate('Post')} 
                            style={styles.top.textView.container}>
                            <Text>Just burned 2000 calories. That's the last time I leave brownies in the oven while I sleep. :)</Text>
                        </TouchableOpacity>
                        <View style={styles.top.voteView.container}>
                            <TouchableOpacity style={styles.top.voteView.upArrow}>
                                <Ionicons name="ios-arrow-up" size={32} color="black" />
                            </TouchableOpacity>
                            <View style={styles.top.voteView.voteCount.container}>
                                <Text style={styles.top.voteView.voteCount.text}>24</Text>
                            </View>
                            <TouchableOpacity style={styles.top.voteView.downArrow}>
                                <Ionicons name="ios-arrow-down" size={32} color="black" />    
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom.container}>
                        <View style={styles.bottom.leftView.container}>
                            <Text style={styles.bottom.leftView.text}>6 minutes ago</Text>
                        </View>
                        <View style={styles.bottom.rightView.container}>
                            <Text style={styles.bottom.rightView.text}>3 replies</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    root: {
        flex: 1,
        padding: '5%',

        maxHeight: 180,
        minHeight: 140
    },
    container: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ededed',
        borderRadius: 8,
        backgroundColor: 'white',
        // padding: '3%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 7,
        
        elevation: 4,
    },
    top: {
        container: {
            flex: 3,
            height: '100%',
            width: '100%',
            // backgroundColor: 'red',
            flexDirection: 'row',
            padding: '3%'
        },
        textView: {
            container: {
                flex: 8,
                height: '100%',
                width: '100%',
            },
            text: {

            }
        },
        voteView: {
            container: {
                flex: 2,
                height: '100%',
                width: '100%',
                marginTop: '-3%',
                marginRight: '-3%'
            },
            upArrow: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            },
            voteCount: {
                container: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                text: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }
            },
            downArrow: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    },
    bottom: {
        container: {
            flex: 1,
            height: '100%',
            width: '100%',
            flexDirection: 'row',
        },
        leftView: {
            container: {
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: '3%'
            },
            text: {
                color: 'gray',
                fontSize: 10
            }
        },
        rightView: {
            container: {
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: '3%'
            },
            text: {
                color: 'black',
                fontSize: 10,
                fontWeight: 'bold'
            }
        }
    }
}

export default PostComponent;