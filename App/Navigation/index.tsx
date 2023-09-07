import React from "react";
import {Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from "../Container/HomeScreen";
import DetailScreen from "../Container/DetailScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from "../Container/SettingScreen";
import FeedScreen from "../Container/FeedScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const BottomTap =()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name={'SettingScreen'} component={SettingScreen}
            options={{
                tabBarLabel: 'Cài đặt',
                tabBarIcon:({focused})=>(
                   <Image source={{uri:focused?'https://camo.githubusercontent.com/9a45407f0a2a0c52f76b9458728049eca3ddb60ecec92a43f8cd2af93d253940/68747470733a2f2f7061676570726f2e636f2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323032302f30332f72656163742d6e61746976652d6c6f676f2d333234783337352e706e67'
                   :'https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/reactjs_javascript_library_atom_atomic_react-1024.png'}} width={30} height={30}/>
                )
            }}
            />
            <Tab.Screen name={'FeedScreen'} component={FeedScreen}/>
        </Tab.Navigator>
    )
}

const Navigation = ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name={'HomeScreen'} component={HomeScreen}  />
            <Stack.Screen name={'DetailScreen'} component={DetailScreen}  />
            <Stack.Screen name={'BottomTap'} component={BottomTap}  />
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation
