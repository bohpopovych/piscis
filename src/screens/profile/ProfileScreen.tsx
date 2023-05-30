import React from 'react';
import FastImage from 'react-native-fast-image';

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

import { PlusIcon } from '../../assets/icons/appIcons';

import CustomText from '../../components/CustomText';
import CustomSpacer from '../../components/CustomSpacer';
import CustomButton from '../../components/CustomButton';

type PropsTypes = {
  navigation: NavigationProp<ParamListBase>;
};

export default function ProfileScreen({ navigation }: PropsTypes) {
  const postPhotoWidth = Dimensions.get('window').width / 3 - 8;
  console.log('444444444444',Dimensions.get('window').width,Dimensions.get('window').width / 3 )
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topWrap}>
          <CustomText weight="bold" type="big">
            Мій профіль
          </CustomText>
          <CustomButton title="" size="small">
            <PlusIcon color={theme.background.color.white} />
          </CustomButton>
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
      <View style={styles.content}>
        <CustomText position="center">No Posts</CustomText>
        <FlatList
          contentContainerStyle={styles.postWrap}
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
              <View style={styles.postWrap}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('PostDetail', {
                      post: item,
                    })
                  }>
                  <Image
                    width={postPhotoWidth}
                    height={postPhotoWidth}
                    style={styles.postPhoto}
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
      </View>
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
    // paddingHorizontal: 24,
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
  postWrap: {
    margin: 4,
  },
  postPhoto: {
    resizeMode: 'cover',
  },
});
