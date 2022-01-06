import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
export default function ReviewDetails({ navigation, route }: any) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{route.params.title}</Text>
    </View>
  );
}
