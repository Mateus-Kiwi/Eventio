import * as React from 'react';
import { View, Text } from 'react-native';

export default function SearchScreen({navigation}) {
  return(
    <View style={{ backgroundColor: '#f8ebff', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
            style={{ fontSize: 26, fontWeight: 'thin'}}>Search screen</Text>
    </View>
  )
}