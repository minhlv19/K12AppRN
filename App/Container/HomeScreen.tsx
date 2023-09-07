import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const [txtText,setTxtText] = useState('Hello')
    const [txtUserName,setTxtUserName] = useState('')
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            {/*<Text onPress={onPressText} style={styles.txtStyle}>*/}
            <Text  style={styles.txtStyle}>
                {txtText}
            </Text>
            <TextInput
                placeholder={'userName'}
                value={txtUserName}
                onChangeText={(text)=>setTxtUserName(text)}
                style={styles.ipUserName}

            />
            {/*<Button title={'button'} />*/}
            <TouchableOpacity style={styles.btnButton} onPress={()=>navigation.navigate('DetailScreen',{txtUserName})} >
                <Text style={[styles.txtStyle,{color: '#fff'}]}>{'button'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    txtStyle:{
        color:'#000',
        textAlign:'center',
        fontSize:20
    },
    ipUserName:{
        borderWidth:1,
        margin:20,
        padding:10,
        borderRadius:5
    },
    btnButton:{
        alignSelf:"center",
        backgroundColor:"blue",
        width:'50%',
        padding:10,
        borderRadius:5
    }
})

export default HomeScreen;
