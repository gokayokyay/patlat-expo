import React from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';

class LoadingOverlayComponent extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

const styles = {
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '0.5',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
}

export default LoadingOverlayComponent;