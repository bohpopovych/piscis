import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/account/LoginScreen';
import AccountScreen from '../screens/account/AccountScreen';
import RegisterNameScreen from '../screens/account/RegisterNameScreen';
import RegisterPhoneScreen from '../screens/account/RegisterPhoneScreen';
import RegisterPhoneConfirmScreen from '../screens/account/RegisterPhoneConfirmScreen';
import RegisterEmailScreen from '../screens/account/RegisterEmailScreen';
import RegisterPasswordScreen from '../screens/account/RegisterPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterName" component={RegisterNameScreen} />
      <Stack.Screen name="RegisterPhone" component={RegisterPhoneScreen} />
      <Stack.Screen name="RegisterPhoneConfirm" component={RegisterPhoneConfirmScreen} />
      <Stack.Screen name="RegisterEmail" component={RegisterEmailScreen} />
      <Stack.Screen name="RegisterPassword" component={RegisterPasswordScreen} />
    </Stack.Navigator>
  );
}
