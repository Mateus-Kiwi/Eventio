import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function LoginScreen() {
  return(
    
    <View style={styles.container} >
      
      <Text style={styles.title}>Eventio</Text>
      <TextInput style={styles.input} placeholder='Email' />
      <TextInput style={styles.input} placeholder='Password' />
      
      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.usrBtn1}>
          <Text style={styles.btnTxt1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.usrBtn1}>
          <Text style={styles.btnTxt1}>Login with Google</Text>
        </TouchableOpacity>   
        <TouchableOpacity style={styles.usrBtn2}>
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
      color: '#db7f67',
      fontSize: 60,
      fontWeight: 'bold',
      position: 'absolute',
      top: '15%'
    },
    text: {
      textAlign: 'center',
      fontSize: 16
    },
    input: {
      color: '#db7f67',    
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
      textAlign: 'center',
      color: '#db7f67',
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
   
 
  