import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useNavigation,useRoute} from "@react-navigation/native";

const DetailScreen = () => {
    const navigation = useNavigation()
    const route= useRoute()
    console.log('route',route)
    return (
        <SafeAreaView>

            <Text onPress={()=>navigation.goBack()} style={{textAlign:'center',justifyContent:'center',alignItems:'center'}}>{route.params.txtUserName}</Text>
            <Text onPress={()=>navigation.navigate('BottomTap')} style={{textAlign:'center',justifyContent:'center',alignItems:'center'}}>{'navigate to bottom tab'}</Text>
        </SafeAreaView>
    );
}

export default DetailScreen;
