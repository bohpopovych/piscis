import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import theme from '../../theme';

import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import CustomSpacer from '../../components/CustomSpacer';
import CustomButton from '../../components/CustomButton';
import CustomBackButton from '../../components/CustomBackButton';

type PropsTypes = {
  navigation: NavigationProp<ParamListBase>;
};

export default function RegisterNameScreen({ navigation }: PropsTypes) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.contentWrap}>
          <CustomBackButton title="Назад" onPress={() => navigation.goBack()} />
          <CustomSpacer position={['top', 'bottom']} size="huge">
            <CustomText type="title" position="center" weight="bold">
              Реєстрація
            </CustomText>
          </CustomSpacer>
          <CustomSpacer position={['bottom']} size="regular">
            <CustomInput placeholder="Ім'я" value={firstName} onChangeText={setFirstName} />
          </CustomSpacer>
          <CustomInput placeholder="Прізвище" value={lastName} onChangeText={setLastName} />
        </View>
        <CustomSpacer position={['top', 'bottom']} size="small">
          <CustomButton
            title="Далі"
            onPress={() => navigation.navigate('RegisterPhone', { firstName, lastName })}
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
