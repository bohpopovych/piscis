import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app';
import AccountNavigator from './account';

import { AccountContext } from '../services/account/context';

export default function Navigator() {
  const { isAuthenticated } = useContext(AccountContext);

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
}
