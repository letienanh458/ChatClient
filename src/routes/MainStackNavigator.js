import * as React from 'react';
import Login from '../screen/Login';
import Register from '../screen/Register';
import Verify from '../screen/Verify';
import ChatScreen from '../screen/ChatScreen';
import EditUserinfo from '../screen/EditUserinfo';
import Tabs from '../components/Tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator ();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="MainScreen" component={Tabs} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="EditUserinfo" component={EditUserinfo} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
