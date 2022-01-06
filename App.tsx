import { MaterialIcons } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import About from './components/About';
import Home from './components/Home';
import ReviewDetails from './components/ReviewDetails';
import HomeHeader from './shared/HomeHeader';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  let [fontsLoaded] = useFonts({
    Nunito_Bold: require('./assets/fonts/Nunito-Bold.ttf'),
    Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  const HomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          headerTitle: (props) => <HomeHeader title="Home" {...props} />,
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View>
          <Image
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          icon={() => <MaterialIcons name="help" size={20} color="black" />}
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        />
      </DrawerContentScrollView>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            drawerLabel: 'Home',
            headerShown: false,
            drawerIcon: () => (
              <MaterialIcons name="home" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            drawerIcon: ({ color }) => (
              <MaterialIcons name="info" size={20} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
