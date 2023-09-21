import React from 'react';
import {
  Image,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TextInputComponent = ({
  iconLeft,
  iconRight,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  onPressImRight,
}: {
  iconLeft?: any;
  iconRight?: any;
  value: string;
  onChangeText: any;
  placeholder: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onPressImRight?: any;
}) => {
  return (
    <View style={styles.containerItem}>
      {iconLeft && <Image source={iconLeft} style={styles.icon} />}
      <TextInput
        style={styles.tpcontainer}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {iconRight && (
        <TouchableOpacity onPress={onPressImRight}>
          <Image source={iconRight} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  containerItem: {
    borderWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  tpcontainer: {
    flex: 1,
  },
});
export default TextInputComponent;
