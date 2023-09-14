import React from 'react';
import {
  Image,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HeaderComponent = ({
  title,
  iconLeft,
  onPress,
}: {
  title: string;
  iconLeft?: any;
  onPress?: any;
}) => {
  return (
    <View style={styles.containerHeader}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity onPress={onPress}>
        <Image source={iconLeft} style={styles.imgLeft} />
      </TouchableOpacity>
      <Text style={styles.txtHeader}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#4876FF',
    padding: 10,
    paddingTop: StatusBar.currentHeight + 10 || 10,
    flexDirection: 'row',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imgLeft: {
    width: 20,
    height: 20,
  },
  txtHeader: {
    textAlign: 'center',
    flex: 1,
    color: '#fff',
    fontSize:20
  },
});

export default HeaderComponent;
