import React from 'react';
import { SvgXml } from 'react-native-svg';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import theme from '../../theme';
import pole from '../../assets/pole';
import wave from '../../assets/wave';

import CustomSpacer from '../../components/CustomSpacer';
import CustomButton from '../../components/CustomButton';

type PropsTypes = {
  navigation: NavigationProp<ParamListBase>;
};

export default function AccountScreen({ navigation }: PropsTypes) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.image}>
            <SvgXml xml={pole} />
          </View>
          <Text style={styles.label}>Piscis</Text>
          <View style={styles.wave}>
            <SvgXml xml={wave} />
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <CustomSpacer position={['top', 'bottom']} size="small">
            <CustomButton
              type="primary"
              title="Реєстрація"
              onPress={() => navigation.navigate('RegisterName')}
            />
          </CustomSpacer>
          <CustomSpacer position={['top', 'bottom']} size="small">
            <CustomButton
              type="border"
              title="Увійти"
              onPress={() => navigation.navigate('Login')}
            />
          </CustomSpacer>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: `${theme.background.color.primary}`,
  },
  container: {
    flex: 1,
    paddingBottom: 32,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  background: {
    flex: 3,
    position: 'relative',
    marginHorizontal: -24,
    backgroundColor: `${theme.background.color.secondary}`,
  },
  image: {
    zIndex: 1,
    bottom: 30,
    width: 325,
    height: 290,
    position: 'absolute',
  },
  wave: {
    left: 0,
    right: 0,
    top: '100%',
    height: 126,
    width: '100%',
    position: 'absolute',
  },
  label: {
    right: 70,
    bottom: 0,
    fontSize: 64,
    fontWeight: 'bold',
    position: 'absolute',
    color: `${theme.button.color.white}`,
  },
  buttonWrap: {
    flex: 0.9,
    marginTop: 170,
  },
});
