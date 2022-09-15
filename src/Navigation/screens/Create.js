import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CreateScreen({navigation}) {
  return(
    <View style={{ backgroundColor: '#fffbfa', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
                style={{ fontSize: 26, fontWeight: 'thin'}}>Settings screen</Text>
    </View>
  )
}

