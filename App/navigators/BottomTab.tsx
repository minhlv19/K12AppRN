import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SCREEN from './RouteKey';
import UserScreen from '../screens/UserScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MyNetWorkScreen from '../screens/MyNetworkScreen';
import {Image, Text} from 'react-native';
import {IMAGES} from '../theme/images';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        component={HomeScreen}
        name={SCREEN.HOME_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#FF0000' : '#000000'}}>
              {'Trang chủ'}
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={IMAGES.icHomeFocused}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={IMAGES.icHomeUnFocused}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />
      <Tab.Screen
        component={UserScreen}
        name={SCREEN.USER_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#FF0000' : '#000000'}}>
              {'Cá nhân'}
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={IMAGES.icHomeFocused}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={IMAGES.icHomeUnFocused}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />
      <Tab.Screen
        component={MessagesScreen}
        name={SCREEN.MESSAGES_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#FF0000' : '#000000'}}>
              {'Tin nhắn'}
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={IMAGES.icHomeFocused}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={IMAGES.icHomeUnFocused}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />
      <Tab.Screen
        component={MyNetWorkScreen}
        name={SCREEN.MY_NETWORK_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#FF0000' : '#000000'}}>
              {'Bạn bè'}
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={IMAGES.icHomeFocused}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={IMAGES.icHomeUnFocused}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
