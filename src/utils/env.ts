import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

const iosHost = 'http://localhost:5000/v1';
const androidHost = 'http://192.168.1.213:5000/v1';

export const BASE_URL = isAndroid ? androidHost : iosHost;
