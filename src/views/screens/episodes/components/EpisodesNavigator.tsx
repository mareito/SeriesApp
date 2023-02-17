import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {IVewData} from '../EpisodesScreen';
import {styles} from './EpisodesNavigatorStyles';

interface Props {
  loading: boolean;
  data: IVewData;
  prevEpisode: () => void;
  nextEpisode: () => void;
}

const EpisodesNavigator = ({
  prevEpisode,
  loading,
  data,
  nextEpisode,
}: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.back}
        onPress={prevEpisode}
        disabled={loading}>
        <Icon
          name="chevron-back-outline"
          style={{...styles.textNavigation, marginRight: 10}}></Icon>
        <Text style={styles.textNavigation}></Text>
      </TouchableOpacity>
      <Text style={styles.textBack}>
        S{data.season.toString().padStart(2, '0').slice(-2)}- E
        {data.episode.toString().padStart(2, '0').slice(-2)}
      </Text>
      <TouchableOpacity
        style={styles.back}
        onPress={nextEpisode}
        disabled={loading}>
        <Text style={styles.textNavigation}></Text>
        <Icon
          name="chevron-forward-outline"
          style={{...styles.textNavigation, marginLeft: 10}}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default EpisodesNavigator;
