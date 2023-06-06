import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

import theme from '../../../theme';

import { CameraIcon } from '../../../assets/icons/appIcons';

export default function PostPhoto({ url }: any) {
  return (
    <TouchableOpacity>
      {url ? (
        <Image style={styles.image} source={url} />
      ) : (
        <View style={styles.emptyImage}>
          <CameraIcon color={theme.button.color.primary} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 96,
    height: 96,
    borderRadius: 12,
  },
  emptyImage: {
    width: 76,
    height: 76,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background.color.gray,
  },
});
