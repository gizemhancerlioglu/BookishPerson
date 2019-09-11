import React, { Component } from 'react';
import GirisScreen from './src/screens/GirisScreen';
import KayıtScreen from './src/screens/KayıtScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
const AppNavigator = createStackNavigator({
  Giris: GirisScreen,
  Kayıt: KayıtScreen
}, {
    initialRouteName: "Giris"
  });
const AppContainer = createAppContainer(AppNavigator);
