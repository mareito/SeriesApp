import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {HomeStackParams} from '../../../application/navigation/HomeStackNavigator';

interface Props
  extends NativeStackScreenProps<HomeStackParams, 'EpisodesScreen'> {}

export const EpisodesScreen = ({navigation, route}: Props) => {
  return (
    <View>
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  );
};
