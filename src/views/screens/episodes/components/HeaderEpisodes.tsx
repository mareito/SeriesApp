import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './HeaderEpisodesStyles';
import {ISerieDetails} from '../../../../application/models/viewModels/Serie.model';
import IconFavoritos from '../../../components/IconFavoritos/IconFavoritos';

interface Props {
  loading: boolean;
  serieName: string;
  goBack: () => void;
  serie: ISerieDetails;
}

export const HeaderEpisodes = ({goBack, loading, serieName, serie}: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.back} onPress={goBack} disabled={loading}>
        <Icon
          name="chevron-back-outline"
          style={{...styles.textBack, marginRight: 20}}></Icon>
        <Text style={styles.textBack}>{serieName}</Text>
      </TouchableOpacity>
      <IconFavoritos
        serie={{
          id: serie.id,
          name: serie.name,
          backdropImage: serie.backdropImage,
          overview: serie.overview,
          posterImage: serie.posterImage,
          score: serie.score,
          numberOfSeasons: serie.numberOfSeasons,
        }}
      />
    </View>
  );
};
