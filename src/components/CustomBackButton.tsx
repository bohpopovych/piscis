import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import theme from '../theme';

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export default function BackButton({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Svg width="24" height="24" fill="none">
        <Path
          stroke={theme.button.color.black}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="m15 18-6-6 6-6"
        />
      </Svg>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: theme.button.color.black,
  },
});
