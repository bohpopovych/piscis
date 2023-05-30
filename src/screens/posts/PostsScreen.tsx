import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import theme from '../../theme';

export default function PostsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Posts</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: `${theme.background.color.white}`,
  },
  container: {
    flex: 1,
    paddingBottom: 40,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentWrap: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
