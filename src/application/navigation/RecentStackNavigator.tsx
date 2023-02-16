import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecentScreen from '../../views/screens/recent/RecentScreen';

export type RecentStackParams = {
  RecentScreen: undefined;
};

export const RecentStackNavigator = () => {
  const Stack = createNativeStackNavigator<RecentStackParams>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RecentScreen" component={RecentScreen} />
    </Stack.Navigator>
  );
};
