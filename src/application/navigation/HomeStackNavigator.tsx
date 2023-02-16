import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../views/screens/home/HomeScreen';
import {SerieDetailScreen} from '../../views/screens/serieDetail/SerieDetailScreen';
import {EpisodesScreen} from '../../views/screens/episodes/EpisodesScreen';
import {ISerie, ISerieDetails} from '../models/viewModels/Serie.model';

export type HomeStackParams = {
  HomeScreen: undefined;
  SerieDetailScreen: {idSerie: number};
  EpisodesScreen: {serie: ISerieDetails};
};

export const HomeStackNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackParams>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="SerieDetailScreen"
        component={SerieDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EpisodesScreen"
        component={EpisodesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
