import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from '../theme';

import PostsScreen from '../screens/posts/PostsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

import {
  FeedIcon,
  MarkerIcon,
  EventIcon,
  StarIcon,
  ProfileIcon,
  TabIconPropsTypes,
} from '../assets/icons/tabIcons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const getTabScreenIcon = (icon: ({ color }: TabIconPropsTypes) => React.JSX.Element) => {
    const Icon = icon;
    // eslint-disable-next-line react/no-unstable-nested-components
    return { tabBarIcon: ({ color }: TabIconPropsTypes) => <Icon color={color} /> };
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.button.color.primary,
        tabBarInactiveTintColor: theme.button.color.gray,
      }}>
      <Tab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={getTabScreenIcon(ProfileIcon)}
      />
      <Tab.Screen name="Стрічка" component={PostsScreen} options={getTabScreenIcon(FeedIcon)} />
      <Tab.Screen name="Популярне" component={PostsScreen} options={getTabScreenIcon(StarIcon)} />
      <Tab.Screen name="Карта" component={PostsScreen} options={getTabScreenIcon(MarkerIcon)} />
      <Tab.Screen name="Події" component={PostsScreen} options={getTabScreenIcon(EventIcon)} />
    </Tab.Navigator>
  );
}
