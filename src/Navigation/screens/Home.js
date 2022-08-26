import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default function HomeScreen({navigation}) {
  return(
    <View style={{ backgroundColor: '#fff9f7', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>Eventos da semana</Text>
      <Button
        title="Press me"
        
        onPress={() => {

        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text :{ 
    backgroundColor: '#ffffff',
    fontSize: 20,
    fontWeight: '',
    
  },
});

