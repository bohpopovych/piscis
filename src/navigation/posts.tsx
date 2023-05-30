import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostsScreen from '../screens/posts/PostsScreen';
import CreatePostScreen from '../screens/posts/CreatePostScreen';

const Stack = createNativeStackNavigator();

export default function PostsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Posts" component={PostsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
