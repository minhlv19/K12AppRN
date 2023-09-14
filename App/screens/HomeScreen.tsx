import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import {IMAGES} from '../theme/images';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.bgImage} style={styles.container}>
        <HeaderComponent title="Màn hình Trang chủ" iconLeft={IMAGES.icBack}  onPress={()=>Navigation.goBack()}/>
        <ScrollView>
          <Text style={styles.txt}>{'Đây là text 1'}</Text>
        </ScrollView>
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
});
export default HomeScreen;
