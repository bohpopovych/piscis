import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { RouteProp, NavigationProp, ParamListBase } from '@react-navigation/native';

import theme from '../../theme';

import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomSpacer from '../../components/CustomSpacer';
import CustomBackButton from '../../components/CustomBackButton';

type RoutePropsTypes = {
  params: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
};

type PropsTypes = {
  route: RouteProp<RoutePropsTypes>;
  navigation: NavigationProp<ParamListBase>;
};

export default function RegisterEmailScreen({ route, navigation }: PropsTypes) {
  const { firstName, lastName, phoneNumber } = route.params;
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.contentWrap}>
          <CustomBackButton title="Назад" onPress={() => navigation.goBack()} />
          <CustomSpacer position={['top', 'bottom']} size="huge">
            <CustomText type="huge" position="center" weight="bold">
              Введіть електрону пошту
            </CustomText>
          </CustomSpacer>
          <CustomInput
            keyboardType="email-address"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <CustomSpacer position={['top', 'bottom']} size="small">
          <CustomButton
            title="Далі"
            onPress={() =>
              navigation.navigate('RegisterPassword', { firstName, lastName, phoneNumber, email })
            }
          />
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
    flex: 1,
    paddingTop: 8,
    paddingBottom: 32,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentWrap: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
