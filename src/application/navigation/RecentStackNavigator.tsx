import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecentScreen from '../../views/screens/recent/RecentScreen';
import {EpisodesListScreen} from '../../views/screens/episodesList/EpisodesListScreen';
import {colors} from '../../globalStyles';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderIcon} from '../../views/components/HeaderIcon/HeaderIcon';

export type RecentStackParams = {
  RecentScreen: undefined;
  EpisodesListScreen: {serieId: number};
};

export const RecentStackNavigator = () => {
  const Stack = createNativeStackNavigator<RecentStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecentScreen"
        component={RecentScreen}
        options={{
          headerStyle: {backgroundColor: colors.BLACK},
          headerShown: true,
          title: 'Recent',
          headerTitleStyle: {color: colors.WHITE},
          headerTitleAlign: 'center',
          headerRight: props => <HeaderIcon />,
        }}
      />
      <Stack.Screen
        name="EpisodesListScreen"
        component={EpisodesListScreen}
        options={{
          headerStyle: {backgroundColor: colors.BLACK},
          headerShown: true,
          title: 'Recent',
          headerTitleStyle: {color: colors.WHITE},
          headerTitleAlign: 'center',
          headerRight: props => <HeaderIcon />,
        }}
      />
    </Stack.Navigator>
  );
};
