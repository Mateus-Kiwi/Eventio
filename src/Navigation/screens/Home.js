import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default function HomeScreen({navigation}) {
  return(
    <View style={{ backgroundColor: '#f8ebff', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>Posts estariam aqui</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  text :{ 
    color: '#552583',
    fontSize: 20,
    fontWeight: '',
    
  },
});

