import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Header({
  title,
  navigation,
  style,
}: {
  title: string;
  navigation: any;
  style?: any;
}) {
  const height = style?.height || '10%';

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={30}
        color="white"
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    // marginTop: '2%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    // minHeight: '20%',
    marginBottom: '20%',
    backgroundColor: '#f4511e',
  },
  headerText: {
    fontFamily: 'Nunito_Bold',
    fontSize: 18,
    color: '#fff',
    // flex: 1,
    // textAlign: 'center',
  },
});
