import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return(
    <View style={styles.container} >
      <Text style={styles.text}>Login screen</Text>
      <TextInput style={styles.input} placeholder='Email' />
      <TextInput style={styles.input} placeholder='Password' />
      
      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.usrBtn1}>
          <Text style={styles.btnTxt1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.usrBtn2}>
          <Text style={styles.btnTxt2}>Register</Text>
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
    text: {
      textAlign: 'center',
      fontSize: 16
    },
    input: {
    width: '80%',
    height: '5%',
    padding: 10,
    },


    btnTxt1: {
      color: '#ffffff',
      textAlign: 'center',
      fontSize: 16,
    },
    btnTxt2: {
      textAlign: 'center',
    },


    usrBtn1: {
      backgroundColor: '#db7f67',
      width: '100%',
      borderRadius: 15,
      padding: 15,
      textAlign: 'center',
      margin: 5,
    },
    usrBtn2: {
      width: '100%',
      borderRadius: 15,
      padding: 15,
      textAlign: 'center',
      margin: 5,
    },


    btnCont: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '85%',
    }
    
  
  })
   
 
  