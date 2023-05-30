import React from 'react';
import { StyleSheet } from 'react-native';

import theme from '../theme';

import { PlusIcon } from '../assets/icons/appIcons';

import CustomButton from './CustomButton';

type PropsTypes = {
  isDisable?: boolean;
  onPress?: () => void;
};

export default function CustoRoundButton({ isDisable = false, onPress }: PropsTypes) {
  return (
    <CustomButton
      style={styles.button}
      title=""
      size="small"
      isDisable={isDisable}
      onPress={onPress}>
      <PlusIcon color={theme.background.color.white} />
    </CustomButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
    borderRadius: 24,
    paddingHorizontal: 0,
  },
});
