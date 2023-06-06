import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import theme from '../theme';

import { LeftArrowIcon } from '../assets/icons/appIcons';

type ButtonProps = {
  onPress?: () => void;
};

export default function BackButton({ onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <LeftArrowIcon color={theme.button.color.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
