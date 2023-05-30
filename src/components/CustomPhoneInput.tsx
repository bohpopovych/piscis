import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import CustomInput from './CustomInput';

import theme from '../theme';

type TextInputProps = {
  value?: string;
  mask?: string;
  onChangeText?: (text: string) => void;
};

export default function CustomPhoneInput({ value, mask, onChangeText }: TextInputProps) {
  return (
    <View style={styles.phoneWrap}>
      <Text style={styles.maskPrefix}>+380</Text>
      <CustomInput mask={mask} keyboardType="phone-pad" value={value} onChangeText={onChangeText} />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneWrap: {
    position: 'relative',
  },
  maskPrefix: {
    top: 18,
    left: 14,
    zIndex: 1,
    position: 'absolute',
    color: theme.text.color.primary,
    fontSize: theme.text.font.size.regular,
  },
});
