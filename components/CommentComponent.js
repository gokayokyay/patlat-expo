import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class CommentComponent extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.container}>
                    <View style={styles.left.container}>
                        <View style={{paddingRight: '5%'}}>
                            <View style={{height: 36, width: 36, backgroundColor: '#4169E1', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                                <Ionicons name="ios-boat" size={24} color="white"/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.middle.container}>
                        <View style={styles.middle.comment.container}>
                            <View style={{paddingLeft: '2%', paddingTop: '4%'}}>
                                <Text style={styles.middle.comment.text}>Haha poor you lol :D</Text>
                            </View>
                        </View>
                        <View style={styles.middle.timestamp.container}>
                            <View style={{paddingLeft: '2%'}}>
                                <Text style={styles.middle.timestamp.text}>2 minutes ago</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.right.container}>
                        <TouchableOpacity style={styles.right.voteButtons}>
                            <Ionicons name="ios-arrow-up" size={32} color="black" />
                        </TouchableOpacity>
                        <View style={styles.right.voteCount.container}>
                            <Text style={styles.right.voteCount.text}>12</Text>
                        </View>
                        <TouchableOpacity style={styles.right.voteButtons}>
                                <Ionicons name="ios-arrow-down" size={32} color="black" />    
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    root: {
        flex: 1,
        // backgroundColor: 'violet',
        padding: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 7,
        
        elevation: 4,

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
        flexDirection: 'row',
        paddingTop: '4%',
        paddingBottom: '20%',
    },
    left: {
        container: {
            flex: 1,
            alignItems: 'flex-end',
        }
    },
    middle: {
        container: {
            flex: 4,
            // backgroundColor: 'navy'
        },
        comment: {
            container: {
                flex: 4,
                // backgroundColor: 'crimson'
            },
            text: {

            }
        },
        timestamp: {
            container: {
                flex: 1,
                // backgroundColor: 'gray'
            },
            text: {
                color: 'gray',
                fontSize: 10
            }
        }
    },
    right: {
        container: {
            flex: 1,
            // backgroundColor: 'crimson',
            alignItems: 'flex-start',
        },
        voteButtons: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '15%'
        },
        voteCount: {
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '15%'
            },
            text: {
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center'
            }
        }
    }
}

export default CommentComponent;