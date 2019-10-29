import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import formattedDateDiff from '../utilities/FormattedDateDiff';

class PostComponent extends React.Component {

    renderTextSection() {
        if (this.props.navigation.state.routeName === 'Main') {
            return (
                <TouchableOpacity 
                    onPress={(e) => this.props.navigation.navigate('Post')} 
                    style={styles.top.textView.container}>
                    <Text>{this.props.post.get('message')}</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <View 
                    style={styles.top.textView.container}>
                    {/* <Text>Just burned 2000 calories. That's the last time I leave brownies in the oven while I sleep. :)</Text> */}
                    <Text>{this.props.post.get('message')}</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={[styles.root, this.props.style]}>
                <View style={styles.container}>
                    <View style={styles.top.container}>
                        {this.renderTextSection()}
                        <View style={styles.top.voteView.container}>
                            <TouchableOpacity style={styles.top.voteView.upArrow}>
                                <Ionicons name="ios-arrow-up" size={32} color="black" />
                            </TouchableOpacity>
                            <View style={styles.top.voteView.voteCount.container}>
                                <Text style={styles.top.voteView.voteCount.text}>{this.props.post.get('votecount')}</Text>
                            </View>
                            <TouchableOpacity style={styles.top.voteView.downArrow}>
                                <Ionicons name="ios-arrow-down" size={32} color="black" />    
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom.container}>
                        <View style={styles.bottom.leftView.container}>
                            <Text style={styles.bottom.leftView.text}>{formattedDateDiff.apply(this.props.post)}</Text>
                        </View>
                        <View style={styles.bottom.rightView.container}>
                            <Text style={styles.bottom.rightView.text}>{this.props.post.get('replies').length} replies</Text>
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

export default withNavigation(PostComponent);