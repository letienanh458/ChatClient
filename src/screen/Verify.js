import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, TouchableOpacity } from 'react-native';

const Verify = ({ navigation }) => {
  const [token, setToken] = useState()
  const [otpCode, setOtpCode] = useState()
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.logoWrapper}>          
          <Text style={styles.title}>Verify your email</Text>
        </View>        
        <Text style={styles.label}>OTP</Text>
        <TextInput
          style={styles.textInput}
          placeholder="OTP"
          value={otpCode}
          onChangeText={(text) => setOtpCode(text)}          
        ></TextInput>
        <View style={styles.loginBtn}>
          <Button title="Verify" onPress={() => navigation.navigate('Login')}></Button>
        </View>

        <View style={styles.registerZone}>
          <Text style={styles.mediumText}>Join Us.</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registerBtn}> Login.</Text>
          </TouchableOpacity>
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
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color:'gray',
    fontSize: 16,  
    marginBottom: 2,
    marginLeft: 2,  
  },
});

export default Verify;
