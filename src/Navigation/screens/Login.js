import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image,  StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { authentication } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";



export default function LoginScreen({navigation}) {
  function navigateToHome() {
    navigation.navigate('Home')
  }
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((re)=>{
      console.log(re);
    })
    .catch((re)=>{
      console.log(re);
    })
  }

  return(
    
    <View style={styles.container} >
      
      <Text style={styles.title}>Eventio</Text>
      

      <TextInput style={styles.input} value={email} onChangeText={text=>setEmail(text)} placeholder='Email Address' placeholderTextColor='#a3a3a3' />
      <TextInput style={styles.input} value={password} onChangeText={text=>setPassword(text)} secureTextEntry placeholder='Password'  placeholderTextColor='#a3a3a3'/>
      
      

      <View style={styles.btnCont}>
      {/* onPress={navigateToHome} */}
        <TouchableOpacity  onPress={registerUser} style={styles.usrBtn1}>
          <Text style={styles.btnTxt1}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.usrBtn2}>
        <Image source={require('../../Img/logoBranco.png')}style={styles.googlelogo}/>
         
        </TouchableOpacity>   

        <TouchableOpacity style={styles.usrBtn3}>
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
      backgroundColor: '#fff9f7',
    },
    title: {
      flex: 4,
      color: '#db7f67',
      fontSize: 60,
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
      width: '80%',
      height: '5%',
      margin: 15,
      borderColor: '#db7f67',
   

borderBottomWidth : 1,
    },


    btnTxt1: {
      
      color: '#ffffff',
      textAlign: 'center',
      fontSize: 16,
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
   
 
  