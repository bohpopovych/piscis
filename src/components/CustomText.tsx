import React, { JSX } from 'react';
import { Text } from 'react-native';

import theme from '../theme';

type TextProps = {
  color?: string;
  position?: 'center' | 'right' | 'left';
  weight?: 'bold' | 'normal';
  type?: 'title' | 'huge' | 'big' | 'regular' | 'small' | 'tiny';
  children: string[] | string | JSX.Element;
  onPress?: () => void;
};

export default function CustomText({
  weight = 'normal',
  position = 'left',
  type = 'regular',
  color = theme.text.color.black,
  children,
  onPress,
}: TextProps) {
  const customStyles = {
    color: color,
    fontWeight: weight,
    fontSize: theme.text.font.size[type],
    textAlign: position,
  };

  return (
    <Text style={[customStyles]} onPress={onPress}>
      {children}
    </Text>
  );
}
