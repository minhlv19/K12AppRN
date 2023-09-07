import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const FeedScreen = () => {
const navigation = useNavigation()
    return (
        <View>
            <Text onPress={()=>navigation.navigate('DetailScreen',{txtUserName:'hello'})}>{'FeedScreen'}</Text>
        </View>
    );
}

export default FeedScreen;
