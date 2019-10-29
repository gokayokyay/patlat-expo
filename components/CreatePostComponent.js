import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import actions from '../actions';

class CreatePostComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            text: ''
        };
    }
    componentDidMount(){
        console.log("CreatePostComponent:", this.props);
    }
    render() {
        return (
            <View style={[styles.root, this.props.style]}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Aklında ne var?"
                    paddingLeft={12}
                    onChangeText={(text) => this.setState({text})}
                    onSubmitEditing={() => {
                        if(this.state.text.length < 10 || this.state.text.length > 300) {
                            Alert.alert(
                                "Mesaj Hatası",
                                "Mesajınızın uzunluğu 10 ila 300 karakter arasında olmalıdır!",
                                [
                                  {text: 'OK'},
                                ]
                              )
                        } else {
                            let post = {
                                message: this.state.text
                            };
                            this.props.dispatch(actions.asynchronousActions.createPost(post));
                        }
                    }}
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

const mapStateToProps = (state) =>({
    state
});

export default connect(mapStateToProps)(CreatePostComponent);