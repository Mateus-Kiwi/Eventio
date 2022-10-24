import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../Assets/Style';


export default function SearchScreen({navigation}) {
  return(
    <View style={styles.container}>
      <Text
            style={{ fontSize: 26, fontWeight: 'thin'}}>Search screen</Text>
    </View>
  )
}