import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import theme from '../theme';

type ButtonProps = {
  title: string;
  isDisable?: boolean;
  leftArrow?: boolean;
  rightArrow?: boolean;
  children?: JSX.Element;
  type?: 'primary' | 'border' | 'label';
  size?: 'small' | 'regular' | 'large';
  onPress?: () => void;
};

export default function CustomButton({
  isDisable = false,
  type = 'primary',
  size = 'large',
  children,
  leftArrow = false,
  rightArrow = false,
  title,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[`${type}Button`], styles[`${size}Button`]]}
      disabled={isDisable}
      onPress={onPress}>
      {leftArrow && (
        <Svg width="24" height="24" fill="none">
          <Path
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m15 18-6-6 6-6"
          />
        </Svg>
      )}
      {children ? (
        children
      ) : (
        <Text style={[styles.text, styles[`${type}Text`], styles[`${size}Text`]]}>{title}</Text>
      )}
      {rightArrow && (
        <Svg width="24" height="24" fill="none">
          <Path
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 18 6-6-6-6"
          />
        </Svg>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    borderColor: `${theme.button.color.primary}`,
    backgroundColor: `${theme.button.color.primary}`,
  },
  borderButton: {
    borderColor: `${theme.button.color.primary}`,
    backgroundColor: 'transparent',
  },
  labelButton: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  smallButton: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  regularButton: {
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  largeButton: {
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  text: {
    lineHeight: 21,
    letterSpacing: 0.25,
    color: `${theme.button.color.primary}`,
  },
  primaryText: {
    color: `${theme.button.color.white}`,
  },
  borderText: {
    color: `${theme.button.color.primary}`,
  },
  labelText: {
    color: `${theme.button.color.primary}`,
  },
  largeText: {
    fontSize: theme.button.font.size.large,
  },
  regularText: {
    fontSize: theme.button.font.size.regular,
  },
  smallText: {
    fontSize: theme.button.font.size.small,
  },
});
