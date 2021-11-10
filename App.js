/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */
import React, { Component} from "react";
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/routes/MainStackNavigator';

export default class App extends Component {
  render() {
    return(
     <NavigationContainer>
      <MainStackNavigator></MainStackNavigator>
    </NavigationContainer>
    );
  }
}
