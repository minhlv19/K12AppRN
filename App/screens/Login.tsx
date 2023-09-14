import React from 'react';
import {View, Text} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

const LoginScreen = () => {
  return (
    <View>
      <HeaderComponent
        title="Màn hình đăng nhập"
        iconLeft={{
          uri: 'https://as2.ftcdn.net/v2/jpg/02/02/93/99/1000_F_202939931_iHgLHxeBiSgNHbPvCSCdEEEtl391oRLM.jpg',
        }}
      />
      <Text>{'Hello word'}</Text>
    </View>
  );
};
export default LoginScreen;
