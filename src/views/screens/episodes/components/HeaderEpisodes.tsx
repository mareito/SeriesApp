import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './HeaderEpisodesStyles';

interface Props {
  loading: boolean;
  serieName: string;
  goBack: () => void;
  addFavorites: () => void;
}

export const HeaderEpisodes = ({
  goBack,
  loading,
  serieName,
  addFavorites,
}: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.back} onPress={goBack} disabled={loading}>
        <Icon
          name="chevron-back-outline"
          style={{...styles.textBack, marginRight: 20}}></Icon>
        <Text style={styles.textBack}>{serieName}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={addFavorites}>
        <Icon name="heart-outline" style={styles.textBack}></Icon>
      </TouchableOpacity>
    </View>
  );
};
