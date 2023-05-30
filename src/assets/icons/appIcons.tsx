import React from 'react';
import Svg, { Path } from 'react-native-svg';

export type TabIconPropsTypes = {
  color: string;
};

export const PlusIcon = ({ color }: TabIconPropsTypes) => (
  <Svg width="24" height="24" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 5v14M5 12h14"
    />
  </Svg>
);
