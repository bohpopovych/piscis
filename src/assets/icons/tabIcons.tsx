import React from 'react';
import Svg, { Path } from 'react-native-svg';

export type TabIconPropsTypes = {
  color: string;
};

export const StarIcon = ({ color }: TabIconPropsTypes) => (
  <Svg width="24" height="24" fill="none">
    <Path
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
    />
  </Svg>
);

export const FeedIcon = ({ color }: TabIconPropsTypes) => (
  <Svg width="24" height="24" fill="none">
    <Path
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM3 15h18"
    />
  </Svg>
);

export const EventIcon = ({ color }: TabIconPropsTypes) => (
  <Svg width="24" height="24" fill="none">
    <Path
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 2v4M8 2v4M3 10h18"
    />
  </Svg>
);

export const MarkerIcon = ({ color }: TabIconPropsTypes) => (
  <Svg width="24" height="24" fill="none">
    <Path
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22s-8-4.5-8-11.8a8 8 0 1 1 16 0c0 7.3-8 11.8-8 11.8Z"
    />
    <Path stroke={color} stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </Svg>
);

export const ProfileIcon = ({ color }: TabIconPropsTypes) => (
  <Svg width="24" height="24" fill="none">
    <Path
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <Path stroke={color} stroke-width="2" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
  </Svg>
);
