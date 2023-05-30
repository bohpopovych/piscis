import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

import CustomInput from './CustomInput';

import eyeOn from '../assets/icons/eyeOn';
import eyeOff from '../assets/icons/eyeOff';

// import theme from '../theme';

type TextInputProps = {
  value?: string;
  mask?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
};

export default function CustomPasswordInput({ value, placeholder, onChangeText }: TextInputProps) {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={styles.passwordWrap}>
      <CustomInput
        isSecure={isSecure}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Pressable style={styles.eyeButton} onPress={() => setIsSecure(!isSecure)}>
        {isSecure && <SvgXml xml={eyeOff} />}
        {!isSecure && <SvgXml xml={eyeOn} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  passwordWrap: {
    position: 'relative',
  },
  eyeButton: {
    top: '50%',
    right: 14,
    zIndex: 1,
    marginTop: -12,
    position: 'absolute',
  },
});
