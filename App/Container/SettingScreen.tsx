import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const SettingScreen = () => {
const navigation = useNavigation()
    return (
        <View>
            <Text onPress={()=>navigation.navigate('HomeScreen')}>{'SettingScreen'}</Text>
        </View>
    );
}

export default SettingScreen;
