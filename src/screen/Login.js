import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, TouchableOpacity, Image } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.logoWrapper}>

          <Image style={styles.logo} source={require('../asset/app-logo.png')}></Image>
          <Text style={styles.title}>Sign up to Chat App</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        ></TextInput>
        <View style={styles.loginBtn}>
          <Button title="Login" onPress={() => navigation.navigate('MainScreen')}></Button>
        </View>

        <View style={styles.registerZone}>
          <Text style={styles.mediumText}>Don't have any account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={styles.registerBtn}> Create one.</Text></TouchableOpacity>
        </View>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginBottom: 16,
  },
  formWrapper: {
    minWidth: 340,
  },
  loginBtn: {
    marginTop: 10,
  },
  registerBtn: {
    color: '#3d89d4',
    fontSize: 16,
  },
  mediumText: {
    fontSize: 16,
  },
  registerZone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
