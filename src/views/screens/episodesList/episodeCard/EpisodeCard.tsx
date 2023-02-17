import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './EpisodeCardStyle';
import {IEpisode} from '../../../../application/models/viewModels/Episode.model';
import {BASE_URL_IMAGES_400} from '../../../../application/constants/enpoints';

interface Props {
  episode: IEpisode;
}

const EpisodeCard = ({episode}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.episodeTitle}>
        {episode.episodeNumber} {episode.name}
      </Text>
      <Image
        style={styles.image}
        source={
          episode.stillpath
            ? {uri: `${BASE_URL_IMAGES_400}${episode.stillpath}`}
            : require('../../../../assets/images/noimage.png')
        }
      />
    </View>
  );
};

export default EpisodeCard;
