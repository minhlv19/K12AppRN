import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {IMAGES} from '../theme/images';
import TextInputComponent from '../components/TextInputComponent';
import useLogin from '../containers/login';

const LoginScreen = () => {
  const {userName, onChangeUserName, password, onChangePassword, onSubmit} =
    useLogin();

  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.bgImage} style={styles.container}>
        {/* <HeaderComponent title="Màn hình đăng nhập" iconLeft={IMAGES.icBack} /> */}
        <View style={styles.contentStyle}>
          <Text style={styles.txt}>{userName}</Text>
          <TextInputComponent
            iconLeft={IMAGES.icBack}
            placeholder="User Name"
            value={userName}
            onChangeText={(text: string) => onChangeUserName(text)}
          />
          <TextInputComponent
            placeholder="Password"
            value={password}
            onChangeText={(text: string) => onChangePassword(text)}
            secureTextEntry={true}
            iconRight={IMAGES.icBack}
          />
          <TouchableOpacity onPress={onSubmit}>
            <Text style={styles.txt}>{'Submit'}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contentStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default LoginScreen;
