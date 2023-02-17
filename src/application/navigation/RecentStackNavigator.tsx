import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecentScreen from '../../views/screens/recent/RecentScreen';
import {EpisodesListScreen} from '../../views/screens/episodesList/EpisodesListScreen';

export type RecentStackParams = {
  RecentScreen: undefined;
  EpisodesListScreen: {serieId: number};
};

export const RecentStackNavigator = () => {
  const Stack = createNativeStackNavigator<RecentStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="RecentScreen" component={RecentScreen} />
      <Stack.Screen name="EpisodesListScreen" component={EpisodesListScreen} />
    </Stack.Navigator>
  );
};
