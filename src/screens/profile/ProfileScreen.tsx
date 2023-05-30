import React from 'react';

import {
  Dimensions,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import theme from '../../theme';

import CustomText from '../../components/CustomText';
import CustomSpacer from '../../components/CustomSpacer';
import CustomButton from '../../components/CustomButton';
import CustomRoundButton from '../../components/CustomRoundButton';

type PropsTypes = {
  navigation: NavigationProp<ParamListBase>;
};

export default function ProfileScreen({ navigation }: PropsTypes) {
  const postPhotoWidth = Dimensions.get('window').width / 3;

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        // eslint-disable-next-line react/no-unstable-nested-components
        ListHeaderComponent={() => (
          <View style={styles.container}>
            <View style={styles.topWrap}>
              <CustomText weight="bold" type="huge">
                Мій профіль
              </CustomText>
              <CustomRoundButton onPress={() => navigation.navigate('CreatePost')} />
            </View>
            <View style={styles.photoWrap}>
              <CustomSpacer align="center" position={['top']} size="huge">
                <Image
                  style={styles.profilePhoto}
                  source={{
                    uri: 'http://localhost:5000/uploads/1737acc6d5c574e1606afbdf1a74b1ac.jpg',
                  }}
                />
              </CustomSpacer>
            </View>
            <CustomSpacer align="center" position={['top']} size="regular">
              <CustomButton type="border" size="small" title="Редагувати профіль" />
            </CustomSpacer>
          </View>
        )}
        data={[
          {
            id: 1,
            url: 'http://localhost:5000/uploads/1737acc6d5c574e1606afbdf1a74b1ac.jpg',
          },
          {
            id: 2,
            url: 'http://localhost:5000/uploads/1737acc6d5c574e1606afbdf1a74b1ac.jpg',
          },
          {
            id: 3,
            url: 'http://localhost:5000/uploads/1737acc6d5c574e1606afbdf1a74b1ac.jpg',
          },
          {
            id: 4,
            url: 'http://localhost:5000/uploads/1737acc6d5c574e1606afbdf1a74b1ac.jpg',
          },
          {
            id: 5,
            url: 'http://localhost:5000/uploads/1737acc6d5c574e1606afbdf1a74b1ac.jpg',
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={styles.photoWrap}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('PostDetail', {
                    post: item,
                  })
                }>
                <Image
                  width={postPhotoWidth}
                  height={postPhotoWidth}
                  source={{
                    uri: item.url,
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.background.color.white,
  },
  container: {
    paddingTop: 8,
    paddingBottom: 32,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: 96,
    height: 96,
    borderRadius: 96,
    resizeMode: 'cover',
  },
});
