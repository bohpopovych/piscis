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

export default function RegisterPhoneConfirmScreen({ route, navigation }: PropsTypes) {
  const { firstName, lastName, phoneNumber } = route.params;
  const [phoneCodeNumber1, setPhoneCodeNumber1] = useState('');
  const [phoneCodeNumber2, setPhoneCodeNumber2] = useState('');
  const [phoneCodeNumber3, setPhoneCodeNumber3] = useState('');
  const [phoneCodeNumber4, setPhoneCodeNumber4] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.contentWrap}>
          <CustomBackButton title="Назад" onPress={() => navigation.goBack()} />
          <CustomSpacer position={['top']} size="huge">
            <CustomText type="huge" position="center" weight="bold">
              Введіть код підтвердження
            </CustomText>
          </CustomSpacer>
          <CustomSpacer position={['top']} size="regular">
            <CustomText type="tiny" position="center" color={theme.text.color.gray}>
              На номер {phoneNumber} було відправлено СМС-повідомлення.
            </CustomText>
          </CustomSpacer>
          <CustomSpacer position={['top']} size="huge">
            <View style={styles.codeWrap}>
              <CustomInput
                width={52}
                maxLength={1}
                keyboardType="numeric"
                value={phoneCodeNumber1}
                onChangeText={setPhoneCodeNumber1}
              />
              <CustomInput
                width={52}
                maxLength={1}
                keyboardType="numeric"
                value={phoneCodeNumber2}
                onChangeText={setPhoneCodeNumber2}
              />
              <CustomInput
                width={52}
                maxLength={1}
                keyboardType="numeric"
                value={phoneCodeNumber3}
                onChangeText={setPhoneCodeNumber3}
              />
              <CustomInput
                width={52}
                maxLength={1}
                keyboardType="numeric"
                value={phoneCodeNumber4}
                onChangeText={setPhoneCodeNumber4}
              />
            </View>
          </CustomSpacer>
          <CustomSpacer position={['top']} size="regular">
            <CustomText type="tiny" position="center" color={theme.text.color.primary}>
              Не отримали код?
            </CustomText>
          </CustomSpacer>
        </View>
        <CustomSpacer position={['top', 'bottom']} size="small">
          <CustomButton
            title="Далі"
            onPress={() =>
              navigation.navigate('RegisterEmail', { firstName, lastName, phoneNumber })
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
  codeWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
