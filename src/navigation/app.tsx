import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from '../theme';

import PostsNavigator from './posts';
import ProfileNavigator from './profile';

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
        component={ProfileNavigator}
        options={getTabScreenIcon(ProfileIcon)}
      />
      <Tab.Screen name="Стрічка" component={PostsNavigator} options={getTabScreenIcon(FeedIcon)} />
      <Tab.Screen
        name="Популярне"
        component={PostsNavigator}
        options={getTabScreenIcon(StarIcon)}
      />
      <Tab.Screen name="Карта" component={PostsNavigator} options={getTabScreenIcon(MarkerIcon)} />
      <Tab.Screen name="Події" component={PostsNavigator} options={getTabScreenIcon(EventIcon)} />
    </Tab.Navigator>
  );
}
