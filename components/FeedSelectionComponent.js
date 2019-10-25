import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class FeedSelectionComponent extends React.Component {
    render() {
        return (
            <View style={[styles.root, this.props.style]}>
                <View style={[styles.containers, {alignItems: 'flex-end', justifyContent: 'flex-start'}]}>
                    <TouchableOpacity style={styles.buttonLeft.container}>
                        <Text style={styles.buttonLeft.text}>
                            NEW
                        </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.buttonLeft.container}>
                        <Text style={styles.buttonLeft.text}>
                            HOT
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.containers, {alignItems: 'flex-end', justifyContent: 'flex-end'}]}>
                    <TouchableOpacity style={styles.buttonRight.leftContainer}>
                        <Text style={styles.buttonRight.text}>
                            ODTU
                        </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.buttonRight.rightContainer}>
                        <Ionicons name="md-person" size={24} color="white" />
                    </TouchableOpacity >
                </View>
            </View>
        );
    }
}

const styles = {
    root: {
        flex: 2,
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 10
    },
    containers: {
        flex: 1,
        flexDirection: 'row'
    },
    buttonLeft: {
        container: {
            // borderWidth: 1,
            // borderColor: 'white'
        },
        text: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            paddingLeft: '10%',
            paddingRight: '5%',
        }
    },
    buttonRight: {
        leftContainer: {
            flex: 8,
            // borderWidth: 1,
            // borderColor: 'white'
        },
        rightContainer: {
            flex: 2,
            // borderWidth: 1,
            // borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: 'white',
            fontSize: 20,
            textAlign: 'right',
            fontWeight: 'bold',
        },
        icon: {

        }
    }
};

export default FeedSelectionComponent;