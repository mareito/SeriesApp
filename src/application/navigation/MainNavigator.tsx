import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../views/screens/login/LoginScreen';

export type MainStackParams = {
  LoginScreen: undefined;
};

export const MainNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackParams>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
