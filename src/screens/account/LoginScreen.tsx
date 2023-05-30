import React, { useState, useContext } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import theme from '../../theme';

import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import CustomSpacer from '../../components/CustomSpacer';
import CustomButton from '../../components/CustomButton';
import CustomBackButton from '../../components/CustomBackButton';
import CustomPasswordInput from '../../components/CustomPasswordInput';

import { AccountContext } from '../../services/account/context';

type PropsTypes = {
  navigation: NavigationProp<ParamListBase>;
};

export default function LoginScreen({ navigation }: PropsTypes) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLoginAccount, isLoading } = useContext(AccountContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.contentWrap}>
          <CustomBackButton title="Назад" onPress={() => navigation.goBack()} />
          <CustomSpacer position={['top', 'bottom']} size="huge">
            <CustomText type="title" position="center" weight="bold">
              Увійти
            </CustomText>
          </CustomSpacer>
          <CustomSpacer position={['bottom']} size="regular">
            <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
          </CustomSpacer>
          <CustomSpacer position={['bottom']} size="regular">
            <CustomPasswordInput placeholder="Пароль" value={password} onChangeText={setPassword} />
          </CustomSpacer>
          <CustomText
            color={theme.button.color.primary}
            type="tiny"
            onPress={() => navigation.navigate('Account')}>
            Забули свій пароль?
          </CustomText>
        </View>
        <CustomSpacer position={['top', 'bottom']} size="small">
          <CustomButton
            isDisable={isLoading}
            title="Далі"
            onPress={() => onLoginAccount({ email, password })}
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
