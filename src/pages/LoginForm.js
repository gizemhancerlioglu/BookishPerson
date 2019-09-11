import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground,TouchableOpacity} from 'react-native';

import Input from '../components/Input';
import MyButton from '../components/MyButton';


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text style={StyleSheet.signInText}>Sign In</Text>
                <Input
                    returnKeyType={"next"}
                    autoCapitalize='none'
                    placeholder='Username'
                    onSubmitEditing={() => this.passwordInput.focus()} />
                <Input
                    returnKeyType={"go"}
                    secureTextEntry={true}
                    placeholder='Password'
                    inputRef={input => this.passwordInput = input} />
                <View style={styles.passwordArea}>
                    <TouchableOpacity>
                        <Text style={styles.passwordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <MyButton
                    backgroundColor={"#61210B"}
                    color={"#f1f1f1"}
                    text={"Sign In Now"}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    signInText: {
        marginVertical: 10,
        fontSize: 14,
        color: '#333',
    },
    passwordArea:{
        alignItems:'flex-end',
    },
    passwordText:{
        color: '#61210B',
        fontSize:11
    }
});
