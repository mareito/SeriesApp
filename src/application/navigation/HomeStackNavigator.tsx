import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../views/screens/home/HomeScreen';
import {SerieDetailScreen} from '../../views/screens/serieDetail/SerieDetailScreen';
import {EpisodesScreen} from '../../views/screens/episodes/EpisodesScreen';
import {ISerie, ISerieDetails} from '../models/viewModels/Serie.model';
import {colors} from '../../globalStyles';
import {styles} from '../../views/screens/episodes/EposidesScreenStyles';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderIcon} from '../../views/components/HeaderIcon/HeaderIcon';

export type HomeStackParams = {
  HomeScreen: undefined;
  SerieDetailScreen: {idSerie: number};
  EpisodesScreen: {serie: ISerieDetails};
};

export const HomeStackNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: colors.BLACK},
          headerShown: true,
          title: 'Home',
          headerTitleStyle: {color: colors.WHITE},
          headerTitleAlign: 'center',
          headerRight: props => <HeaderIcon />,
        }}
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
