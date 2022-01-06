import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';
export default function Home({ navigation }: any) {
  const [reviews, setReviews] = React.useState([
    {
      title: 'Review 1',
      body: 'This is the first review',
      rating: 5,
      key: '1',
    },
    {
      title: 'Review 2',
      body: 'This is the second review',
      rating: 4,
      key: '2',
    },
    {
      title: 'Review 3',
      body: 'This is the third review',
      rating: 3,
      key: '3',
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
