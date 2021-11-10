import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

const Register = ({navigation}) => {
  const [username, setUsername] = useState ();
  const [lastName, setLastName] = useState ();
  const [firstName, setFirstName] = useState ();
  const [phone, setPhone] = useState ();
  const [myemail, setEmail] = useState ();

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
          onChangeText={text => setUsername (text)}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 170}}>
            <TextInput
              style={styles.textInputLeft}
              placeholder="First name"
              value={firstName}
              onChangeText={text => setFirstName (text)}
            />
          </View>
          <View style={{width: 170}}>
            <TextInput
              style={styles.textInputRight}
              placeholder="Last name"
              value={lastName}
              onChangeText={text => setLastName (text)}
            />
          </View>

        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={myemail}
          onChangeText={text => setEmail (text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone (text)}
        />

        <View style={styles.loginBtn}>
          <Button title="Register"  onPress={() => navigation.navigate("Verify")}/>
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

const styles = StyleSheet.create ({
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
  textInputLeft: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginBottom: 14,
    marginRight: 2,
  },
  textInputRight: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginBottom: 14,
    marginLeft: 2,
  },
  formWrapper: {
    minWidth: 340,
    justifyContent: 'center',    
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

export default Register;
