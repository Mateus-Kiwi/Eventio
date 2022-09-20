import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image,  StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { authentication } from '../../../Firebase/firebase';
import { signInWithEmailAndPassword  } from "firebase/auth";



export default function LoginScreen({navigation}) {
  function navigateToHome() {
    navigation.navigate('Home')
  }
  function navigateToRegister() {
    navigation.navigate('Register')
  }

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
    .then((userCredential)=>{
      setIsSignedIn(true)
      console.log("Logged in")
      const user = userCredential.user
      console.log(user)
      navigation.navigate('Home')

    })
    .catch((err)=>{
      console.log(err)
      Alert.alert(err.message)
    })
  }

  

  return(
    
    <View style={styles.container} >
      
      <Text style={styles.title}>Login</Text>
      
      
      <TextInput style={styles.input} value={email} onChangeText={text=>setEmail(text)} placeholder='Email Address' placeholderTextColor='#a3a3a3' />
      <TextInput style={styles.input} value={password} onChangeText={text=>setPassword(text)} secureTextEntry placeholder='Password'  placeholderTextColor='#a3a3a3'/>
      
      

      <View style={styles.btnCont}>
      {/* onPress={navigateToHome}  */}
        {/* {isSignedIn === true?
        // SignOut
        <TouchableOpacity  onPress={signOutUser} style={styles.usrBtn1}>
          <Text style={styles.btnTxt1}>Logout</Text>
        </TouchableOpacity>
        : */}

        <TouchableOpacity  onPress={signInUser} style={styles.usrBtn1}>
          <Text style={styles.btnTxt1}>Login</Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={styles.usrBtn2}>
        <Image source={require('../../Img/logoBranco.png')}style={styles.googlelogo}/>
         
        </TouchableOpacity>   

        <TouchableOpacity onPress={navigateToRegister} style={styles.usrBtn3}>
          <Text style={styles.btnTxt2}>Don't have an account yet?</Text>
        </TouchableOpacity>

      </View>
    </View>
  )}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FCF7F8',
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
   
 
  