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

export const LeftArrowIcon = ({ color }: TabIconPropsTypes) => (
  <Svg width="24" height="24" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m15 18-6-6 6-6"
    />
  </Svg>
);

export const CameraIcon = ({ color }: TabIconPropsTypes) => (
  <Svg width="24" height="24" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
);
