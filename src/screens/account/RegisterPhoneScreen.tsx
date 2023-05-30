import React, { useState, useContext } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { RouteProp, NavigationProp, ParamListBase } from '@react-navigation/native';

import theme from '../../theme';

import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';
import CustomSpacer from '../../components/CustomSpacer';
import CustomPhoneInput from '../../components/CustomPhoneInput';
import CustomBackButton from '../../components/CustomBackButton';

import { AccountContext } from '../../services/account/context';

type RoutePropsTypes = {
  params: {
    firstName: string;
    lastName: string;
  };
};

type PropsTypes = {
  route: RouteProp<RoutePropsTypes>;
  navigation: NavigationProp<ParamListBase>;
};

export default function RegisterPhoneScreen({ route, navigation }: PropsTypes) {
  const phoneMask = '+380 ([00]) [000] [00] [00]';
  const { firstName, lastName } = route.params;
  const [phoneNumber, setPhoneNumber] = useState('');
  const { isLoading, onVerifyPhone } = useContext(AccountContext);

  const handlePhoneNumber = () => {
    // onVerifyPhone(phoneNumber);
    return navigation.navigate('RegisterPhoneConfirm', { firstName, lastName, phoneNumber });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.contentWrap}>
          <CustomBackButton title="Назад" onPress={() => navigation.goBack()} />
          <CustomSpacer position={['top', 'bottom']} size="huge">
            <CustomText type="huge" position="center" weight="bold">
              Введіть номер телефону
            </CustomText>
          </CustomSpacer>
          <CustomPhoneInput mask={phoneMask} value={phoneNumber} onChangeText={setPhoneNumber} />
        </View>
        <CustomSpacer position={['top', 'bottom']} size="small">
          <CustomButton
            // isDisable={isLoading}
            title="Далі"
            onPress={() =>
              navigation.navigate('RegisterPhoneConfirm', { firstName, lastName, phoneNumber })
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
