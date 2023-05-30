import React, { ReactElement } from 'react';
import { View } from 'react-native';

const SIZE = {
  small: 8,
  regular: 16,
  big: 24,
  huge: 32,
};

const POSITION = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getPosition = (position: ReadonlyArray<PositionTypes>, size: SizeTypes) => {
  const result: any = [];

  position.forEach(item => {
    result.push({ [POSITION[item]]: SIZE[size] });
  });

  return result;
};

type AlignTypes = 'left' | 'center' | 'right';
type SizeTypes = 'small' | 'regular' | 'big' | 'huge';
type PositionTypes = 'top' | 'left' | 'right' | 'bottom';

type PropsTypes = {
  size: SizeTypes;
  children: ReactElement;
  position: ReadonlyArray<PositionTypes>;
  align?: AlignTypes;
};

export default function Spacer({ position, size, children, align = 'left' }: PropsTypes) {
  return <View style={[...getPosition(position, size), { textAlign: align }]}>{children}</View>;
}
