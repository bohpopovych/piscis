import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import theme from '../../theme';

import CustomText from '../../components/CustomText';
import CustomSpacer from '../../components/CustomSpacer';
import CustomButton from '../../components/CustomButton';
import CustomBackButton from '../../components/CustomBackButton';

import PostPhoto from './components/PostPhoto';
import CombinedPicker from './components/Lists';

type PropsTypes = {
  navigation: NavigationProp<ParamListBase>;
};

export default function CreatePostScreen({ navigation }: PropsTypes) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CombinedPicker />
      <View style={styles.container}>
        <View style={styles.headerWrap}>
          <CustomBackButton onPress={() => navigation.goBack()} />
          <CustomText weight="bold" type="big">
            Додати пост
          </CustomText>
          <View />
        </View>
        <View style={styles.photosWrap}>
          <PostPhoto />
          <PostPhoto />
          <PostPhoto />
          <PostPhoto />
        </View>
        <CustomSpacer position={['top', 'bottom']} size="small">
          <CustomButton title="Поширити" onPress={() => null} />
        </CustomSpacer>
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
    // flex: 1,
    paddingTop: 8,
    paddingBottom: 32,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photosWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentWrap: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
