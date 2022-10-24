import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen({navigation}) {
  return(
<View style={styles.container}>
<ScrollView style={styles.scroll}>
  <View style={styles.profileBanner}></View>
  
  <View style={styles.profilePic}></View>

  <View style={styles.profileCard}>
      <Text style={styles.text}>Profile screen  </Text>
  </View>

</ScrollView>
</View>
)
}

export const styles = StyleSheet.create({
  container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f8ebff',
},
title: {
flex: 4,
color: '#552583',
fontSize: 50,
fontWeight: 'bold',
position: 'relative',
top: '15%'
},
text: {

textAlign: 'center',
fontSize: 16
},


scroll: {
width: '100%',
},

profileBanner: {
backgroundColor: '#552583',
width: '100%',
height: 120,
},

profilePic: {
width: 70,
height: 70,
backgroundColor: '#552583',
borderColor: '#FDB927',
borderWidth: 3,
borderRadius: 12,
marginTop: -50,
marginLeft: 20,
},

profileCard: {
backgroundColor: '#'
},


input: {

color: '#552583',    
justifyContent: 'flex-start',
width: '85%',
height: 50,
paddingLeft: 15,
margin: 5,
borderColor: '#db7f67',
backgroundColor: '#f3dbff',
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
backgroundColor: '#552583',
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
backgroundColor: '#552583',
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
