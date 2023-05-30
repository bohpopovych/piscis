import React from 'react';

import Navigator from './src/navigation/index';
import { AccountContextProvider } from './src/services/account/context';

export default function App() {
  return (
    <AccountContextProvider>
      <Navigator />
    </AccountContextProvider>
  );
}
