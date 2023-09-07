import React,{useState} from "react";
import {Text, View,SafeAreaView,StyleSheet,TextInput,Button,TouchableOpacity,Alert} from 'react-native'
import Navigation from "./App/Navigation";

const App =()=>{
  const [txtText,setTxtText] = useState('Hello')
  const [txtUserName,setTxtUserName] = useState('')
  // const onPressText = () =>{
  //   setTxtText('Hello K12')
  // }
  return(
      <Navigation/>
  )
}
const styles=StyleSheet.create({

})
export default App;

//bài tập
/**
 * thiết kế 1 form submit
 * userName
 * Password
 * điền đầy đủ thông tin show alert hello + username
 */
