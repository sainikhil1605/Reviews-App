import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function HomeHeader(props: any) {
  const { title } = props;
  const navigation = useNavigation();

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

    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#f4511e',
  },
  headerText: {
    fontFamily: 'Nunito_Bold',
    fontSize: 18,
    color: '#fff',
    width: '100%',
    // flex: 1,
    marginRight: '5%',
    // textAlign: 'center',
  },
});
