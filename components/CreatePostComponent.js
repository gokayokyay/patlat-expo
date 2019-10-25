import React from 'react';
import { View, Text, TextInput } from 'react-native';

class CreatePostComponent extends React.Component {
    render() {
        return (
            <View style={[styles.root, this.props.style]}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Aklında ne var?"
                    paddingLeft={12}
                />
            </View>
        );
    }
}

const styles = {
    root: {
        // backgroundColor: 'red',
        paddingLeft: '5%',
        paddingRight: '5%',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 7,
        
        elevation: 4,

        flex: 1,
        height: '10%'
    },
    textInput: {
        height: 60,
        borderWidth: 1,
        borderColor: '#ededed',
        borderRadius: 8,
        marginBottom: -20,
        backgroundColor: '#fff',
        paddingVertical: 15,
    },
}

export default CreatePostComponent;