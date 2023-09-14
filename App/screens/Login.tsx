import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import {IMAGES} from '../theme/images';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';
import TexInput from '../components/TextInput';

const LoginScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.bgImage} style={styles.container}>
        {/* <HeaderComponent title="Màn hình đăng nhập" iconLeft={IMAGES.icBack} /> */}
        <View style={styles.contentStyle}> 
          <Text style={styles.txt}>{'Đây là text 1'}</Text>
          <TexInput/>
          <TouchableOpacity
            onPress={() => {
              Navigation.navigate(SCREEN.HOME_SCREEN);
            }}>
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
  contentStyle:{
    flex:1,
    justifyContent:'center'
  }
});
export default LoginScreen;
