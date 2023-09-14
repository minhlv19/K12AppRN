import React from 'react';
import {Image, Text, View, StatusBar} from 'react-native';

const HeaderComponent = ({title, iconLeft}: {title: string; iconLeft?: any}) => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        paddingTop: StatusBar.currentHeight + 10 || 10,
      }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={iconLeft} width={20} height={20} />
      <Text>{title}</Text>
    </View>
  );
};
export default HeaderComponent;
