import React, { useState, useContext } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { RouteProp, NavigationProp, ParamListBase } from '@react-navigation/native';

import theme from '../../theme';

import CustomText from '../../components/CustomText';
import CustomSpacer from '../../components/CustomSpacer';
import CustomButton from '../../components/CustomButton';
import CustomBackButton from '../../components/CustomBackButton';
import CustomPasswordInput from '../../components/CustomPasswordInput';

import { AccountContext } from '../../services/account/context';

type RoutePropsTypes = {
  params: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
};

type PropsTypes = {
  route: RouteProp<RoutePropsTypes>;
  navigation: NavigationProp<ParamListBase>;
};

export default function RegisterPasswordScreen({ route, navigation }: PropsTypes) {
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const { isLoading, onCreateAccount } = useContext(AccountContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.contentWrap}>
          <CustomBackButton title="Назад" onPress={() => navigation.goBack()} />
          <CustomSpacer position={['top', 'bottom']} size="huge">
            <CustomText type="huge" position="center" weight="bold">
              Придумайте пароль
            </CustomText>
          </CustomSpacer>
          <CustomSpacer position={['bottom']} size="regular">
            <CustomPasswordInput
              placeholder="Ваш пароль"
              value={password}
              onChangeText={setPassword}
            />
          </CustomSpacer>
          <CustomPasswordInput
            placeholder="Повторіть пароль"
            value={repeatedPassword}
            onChangeText={setRepeatedPassword}
          />
        </View>
        <CustomSpacer position={['top', 'bottom']} size="small">
          <CustomButton
            // isDisable={isLoading}
            title="Далі"
            onPress={() => onCreateAccount({ ...route.params, password, repeatedPassword })}
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
