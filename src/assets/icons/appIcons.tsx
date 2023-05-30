import React from 'react';
import Svg, { Path } from 'react-native-svg';

export type TabIconPropsTypes = {
  color: string;
};

export const PlusIcon = ({ color }: TabIconPropsTypes) => (
  <Svg width="16" height="16" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 3.33v9.34M3.33 8h9.34"
    />
  </Svg>
);
