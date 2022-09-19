import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image,  StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { authentication } from '../../../Firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";



export default function LoginScreen({navigation}) {
  function navigateToHome() {
    navigation.navigate('Home')
  }
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((userCredential)=>{
      console.log("account created");
      const user = userCredential.user
      console.log(user)
    })
    .catch((err)=>{
      console.log(err)
      Alert.alert(err.message)
    })
  }

  return(
    
    <View style={styles.container} >
      
      <Text style={styles.title}>Welcome!</Text>
      
      <TextInput style={styles.input} value={username} onChangeText={text=>setUsername(text)} placeholder='Username' placeholderTextColor='#a3a3a3' />
      <TextInput style={styles.input} value={email} onChangeText={text=>setEmail(text)} placeholder='Email Address' placeholderTextColor='#a3a3a3' />
      <TextInput style={styles.input} value={password} onChangeText={text=>setPassword(text)} secureTextEntry placeholder='Password'  placeholderTextColor='#a3a3a3'/>
      
      

      <View style={styles.btnCont}>
      {/* onPress={navigateToHome} */}
        <TouchableOpacity  onPress={registerUser} style={styles.usrBtn1}>
          <Text style={styles.btnTxt1}>Register</Text>
        </TouchableOpacity>

      </View>
    </View>
  )}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fffbfa',
    },
    title: {
      flex: 4,
      color: '#db7f67',
      fontSize: 50,
      fontWeight: 'bold',
      position: 'relative',
      top: '15%'
    },
    text: {
      
      textAlign: 'center',
      fontSize: 16
    },
    input: {
     
      color: '#db7f67',    
      justifyContent: 'flex-start',
      width: '85%',
      height: 50,
      paddingLeft: 15,
      margin: 5,
      borderColor: '#db7f67',
      backgroundColor: '#F9E5EA',
      borderRadius: 15,
   

    },


    btnTxt1: {
      
      color: '#FCF7F8',
      textAlign: 'center',
      fontSize: 20,
    },
    btnTxt2: {
      fontSize: 15,
      textAlign: 'center',
      color: '#a3a3a3',
    },


    usrBtn1: {
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 5,            
      backgroundColor: '#db7f67',
      width: '100%',
      height: 50,
      borderRadius: 15,
      justifyContent: 'center',
      textAlign: 'center',
      margin: 5,
    },
    usrBtn2: {
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.3,
      shadowRadius: 8,      
      backgroundColor: '#db7f67',
      width: '100%',
      height: 50,
      borderRadius: 15,
      justifyContent: 'center',
      textAlign: 'center',
      margin: 5,
    },
    googlelogo:{
      width: 120,
      height: 25,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    usrBtn3: {
     
      
      width: '100%',
      borderRadius: 15,
      padding: 15,
      textAlign: 'center',
      margin: 5,
    },


    btnCont: {
      flex: 3,
      marginTop: 30,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '85%',
      alignItems: 'center'
    }
    
  
  })
   
 
  