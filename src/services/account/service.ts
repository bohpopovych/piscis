import axios from 'axios';

import accoutApiUrls from './urls';

export async function verifyPhone(phoneNumber: string) {
  try {
    const response = await axios.get(accoutApiUrls.verifyPhone, {
      params: { phoneNumber },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

export async function loginAccount(loginData: any) {
  try {
    const response = await axios.post(accoutApiUrls.loginAccount, loginData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

export async function createAccount(accountData: any) {
  try {
    const response = await axios.post(accoutApiUrls.createAccount, accountData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}
