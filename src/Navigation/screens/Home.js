import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default function HomeScreen({navigation}) {
  return(
    <View style={{ backgroundColor: '#fffbfa', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>Eventos da semana</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  text :{ 
    color: '#db7f67',
    fontSize: 20,
    fontWeight: '',
    
  },
});

