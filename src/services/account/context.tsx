import React, { useState, createContext, ReactElement } from 'react';

import { createAccount, loginAccount, verifyPhone } from './service';

export const AccountContext = createContext({});

type PropsTypes = {
  children: ReactElement;
};

export const AccountContextProvider = ({ children }: PropsTypes) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState({});
  const [error, setError] = useState<string | null>(null);

  function onLoginAccount(loginData: any) {
    setIsLoading(true);
    loginAccount(loginData)
      .then(u => {
        console.log(u);
        setUser(u);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e.toString());
      });
  }

  function onCreateAccount(accountData: any) {
    setIsLoading(true);
    if (accountData.password !== accountData.repeatedPassword) {
      setError('Error: Passwords do not match');
      return;
    }
    createAccount(accountData)
      .then(u => {
        setUser(u);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e.toString());
      });
  }

  function onSetAccount(fields: any) {
    setAccount({ ...account, ...fields });
  }

  function onVerifyPhone() {
    verifyPhone('');
  }

  function onLogoutAccount() {
    setUser(null);
    setError(null);
  }

  return (
    <AccountContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        account,
        isLoading,
        error,
        onSetAccount,
        onVerifyPhone,
        onLoginAccount,
        onCreateAccount,
        onLogoutAccount,
      }}>
      {children}
    </AccountContext.Provider>
  );
};
