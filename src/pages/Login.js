import React, { Component } from 'react';
import LoginForm from './LoginForm';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.headBackground}
          source={require('./background2.jpg')}></ImageBackground>
        <KeyboardAvoidingView behavior={"position"} >
          <View>
            <Text style={styles.logo}> ℬ℘ </Text>
            <Text style={styles.logoDescription}>uosɹǝꓒ ɥsᴉʞooꓭ</Text>
          </View>
          <ScrollView>
            <View style={styles.loginArea}>
              <Text style={styles.loginAreaTitle}> Bookish Person</Text>
              <Text style={styles.loginAreaDescription}>
                "Okur, ölmeden önce bin ömür yaşar. Okumayan ise, yalnızca bir ömür."</Text>
              <LoginForm />
            </View>
          </ScrollView>
          <View style={styles.signUpArea}>
            <Text style={styles.signUpDescripsion}>Don't have an account?</Text>
            <TouchableOpacity onPress ={() => this.props.navigation.navigate('Kayıt')}>
              <Text style={styles.signUpText}>Sign Up</Text>
              
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 80,
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250, 
    width: '100%',
    backgroundColor: 'brown',
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#61210B'
  },
  logoDescription: {
    textAlign: 'center',
    color: '#61210B'
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,

    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0, 
      height: 2,
    },
    elevation: 5, 
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
  loginAreaDescription: {
    fontSize: 14,
    color: '#7e868f',
    marginVertical: 10,
    textAlign: 'center'
  },
  signUpArea: {
    alignItems: 'center',
  },
  signUpDescripsion: {
    color: '#999'
  },
  signUpText: {
    color: '#61210B'
  }
});
