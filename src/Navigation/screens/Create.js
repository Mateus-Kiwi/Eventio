import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CreateScreen({navigation}) {
  return(
    <View style={styles.container}>
      <Text
                style={{ fontSize: 26, fontWeight: 'thin'}}>Settings screen</Text>
    </View>
  )
}

import { styles } from '../../Assets/Style';
