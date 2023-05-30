import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import theme from '../theme';

type TextInputProps = {
  value?: string;
  mask?: string;
  width?: number | string;
  placeholder?: string;
  isSecure?: boolean;
  maxLength?: number;
  keyboardType?: any;
  onChangeText?: (text: string) => void;
};

export default function CustomInput({
  value,
  mask,
  width = '100%',
  isSecure = false,
  placeholder,
  maxLength,
  keyboardType,
  onChangeText,
}: TextInputProps) {
  const [isFocus, setFocus] = useState(false);
  const InputComponent = mask ? TextInputMask : TextInput;
  const focusStyles = isFocus ? styles.inputFocus : styles.inputStandart;
  return (
    <InputComponent
      mask={mask}
      style={[styles.input, focusStyles, { width }]}
      value={value}
      maxLength={maxLength}
      secureTextEntry={isSecure}
      cursorColor={theme.input.color.secondary}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: theme.input.font.size.regular,
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  inputStandart: {
    borderColor: theme.input.color.primary,
    backgroundColor: theme.input.color.primary,
  },
  inputFocus: {
    borderColor: theme.input.color.secondary,
    backgroundColor: theme.input.color.white,
  },
});
