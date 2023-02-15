import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../views/screens/login/LoginScreen';
import HomeScreen from '../../views/screens/login/HomeScreen';

export type MainStackParams = {
  LoginScreen: undefined;
  HomeScreen: undefined;
};

export const MainNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackParams>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
